# Kidz-Homeworks : synchronisation EcoleDirecte depuis le PC de la maison.
# Lance par la tache planifiee "Kidz-Homeworks synchro" (7h et 18h) ou par le raccourci du bureau.
# Recupere la derniere version du code sur GitHub, dechiffre les identifiants (DPAPI Windows)
# et lance scripts/sync.py. Journal de la derniere execution : %LOCALAPPDATA%\KidzHomeworks\synchro.log
$ErrorActionPreference = "Stop"
$Dir = Join-Path $env:LOCALAPPDATA "KidzHomeworks"
$Log = Join-Path $Dir "synchro.log"
$rc = 1
Start-Transcript -Path $Log -Force | Out-Null
try {
    $cfg = Get-Content (Join-Path $Dir "config.json") -Raw | ConvertFrom-Json
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $zip = Join-Path $Dir "code.zip"
    Invoke-WebRequest "https://github.com/Radouane-git/Kidz-Homeworks/archive/refs/heads/main.zip" -OutFile $zip -UseBasicParsing
    $code = Join-Path $Dir "code"
    if (Test-Path $code) { Remove-Item $code -Recurse -Force }
    Expand-Archive $zip -DestinationPath $code -Force
    $src = (Get-ChildItem $code -Directory | Select-Object -First 1).FullName

    function Unprotect([string]$s) {
        $ss = ConvertTo-SecureString $s
        $b = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($ss)
        try { [Runtime.InteropServices.Marshal]::PtrToStringBSTR($b) } finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($b) }
    }
    $env:ED_USERNAME = $cfg.ED_USERNAME
    $env:ED_PASSWORD = Unprotect $cfg.ED_PASSWORD
    $env:SUPABASE_URL = $cfg.SUPABASE_URL
    $env:SUPABASE_SERVICE_KEY = Unprotect $cfg.SUPABASE_SERVICE_KEY
    $env:PYTHONUTF8 = "1"
    $env:PYTHONIOENCODING = "utf-8"

    # Sorties des programmes renvoyees dans le journal (et sans arreter sur les messages d'avertissement)
    $ErrorActionPreference = "Continue"
    & $cfg.PYTHON -m pip install --quiet --disable-pip-version-check --user -r (Join-Path $src "scripts\requirements.txt") 2>&1 | ForEach-Object { "$_" }
    & $cfg.PYTHON (Join-Path $src "scripts\sync.py") 2>&1 | ForEach-Object { "$_" }
    $rc = $LASTEXITCODE
} catch {
    Write-Output ("ERREUR : " + $_.Exception.Message)
} finally {
    Remove-Item Env:ED_PASSWORD, Env:SUPABASE_SERVICE_KEY -ErrorAction SilentlyContinue
    Stop-Transcript | Out-Null
}
exit $rc
