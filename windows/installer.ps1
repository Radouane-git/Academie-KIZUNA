# Kidz-Homeworks : installation de la synchronisation EcoleDirecte sur ce PC.
# A lancer UNE fois dans PowerShell :
#   irm https://raw.githubusercontent.com/Radouane-git/Kidz-Homeworks/main/windows/installer.ps1 | iex
$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$Dir = Join-Path $env:LOCALAPPDATA "KidzHomeworks"
New-Item -ItemType Directory -Force -Path $Dir | Out-Null
Write-Host ""
Write-Host "=== Installation de la synchro du planning (Kidz-Homeworks) ===" -ForegroundColor Cyan

# 1. Python ---------------------------------------------------------------
function Find-Python {
    $cands = @()
    foreach ($c in @("py", "python")) {
        $cmd = Get-Command $c -ErrorAction SilentlyContinue
        if ($cmd) { $cands += $cmd.Source }
    }
    $cands += Get-ChildItem "$env:LOCALAPPDATA\Programs\Python\Python3*\python.exe" -ErrorAction SilentlyContinue | ForEach-Object { $_.FullName }
    $cands += Get-ChildItem "C:\Program Files\Python3*\python.exe" -ErrorAction SilentlyContinue | ForEach-Object { $_.FullName }
    foreach ($p in $cands) {
        if ($p -like "*WindowsApps*") { continue }
        try {
            $exe = (& $p -c "import sys; print(sys.executable) if sys.version_info >= (3, 9) else None" 2>$null | Select-Object -First 1)
            if ($exe -and (Test-Path $exe) -and ($exe -notlike "*WindowsApps*")) { return $exe.Trim() }
        } catch { }
    }
    return $null
}
$py = Find-Python
if (-not $py) {
    Write-Host "Python n'est pas installe : installation en cours (quelques minutes)..." -ForegroundColor Yellow
    if (Get-Command winget -ErrorAction SilentlyContinue) {
        winget install -e --id Python.Python.3.12 --scope user --accept-package-agreements --accept-source-agreements --silent | Out-Null
        $py = Find-Python
    }
    if (-not $py) {
        Write-Host "Impossible d'installer Python automatiquement." -ForegroundColor Red
        Write-Host "Installez-le depuis https://www.python.org/downloads/ puis relancez cette commande."
        return
    }
}
Write-Host "Python trouve : $py" -ForegroundColor Green

# 2. Identifiants (chiffres par Windows, lisibles uniquement par cette session) --
Write-Host ""
Write-Host "Les informations suivantes restent sur ce PC, chiffrees par Windows." -ForegroundColor Cyan
$edUser = Read-Host "Identifiant EcoleDirecte (compte parent)"
$edPass = Read-Host "Mot de passe EcoleDirecte" -AsSecureString
$supaUrl = Read-Host "Adresse Supabase [https://ldfvcosaylgpizdqrpdv.supabase.co]"
if (-not $supaUrl) { $supaUrl = "https://ldfvcosaylgpizdqrpdv.supabase.co" }
$supaKey = Read-Host "Cle Secret Supabase (sb_secret_...)" -AsSecureString
$cfg = [ordered]@{
    PYTHON = $py
    ED_USERNAME = $edUser.Trim()
    ED_PASSWORD = ($edPass | ConvertFrom-SecureString)
    SUPABASE_URL = $supaUrl.Trim()
    SUPABASE_SERVICE_KEY = ($supaKey | ConvertFrom-SecureString)
}
$cfg | ConvertTo-Json | Set-Content -Path (Join-Path $Dir "config.json") -Encoding UTF8

# 3. Script de synchro --------------------------------------------------------
$runner = Join-Path $Dir "sync-windows.ps1"
Invoke-WebRequest "https://raw.githubusercontent.com/Radouane-git/Kidz-Homeworks/main/windows/sync-windows.ps1" -OutFile $runner -UseBasicParsing

# 4. Tache planifiee : 7h et 18h, rattrapage au demarrage si le PC etait eteint ---
$arg = "-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$runner`""
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument $arg
$triggers = @((New-ScheduledTaskTrigger -Daily -At "07:00"), (New-ScheduledTaskTrigger -Daily -At "18:00"))
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -RunOnlyIfNetworkAvailable -ExecutionTimeLimit (New-TimeSpan -Minutes 15) -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
$principal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Limited
Register-ScheduledTask -TaskName "Kidz-Homeworks synchro" -Action $action -Trigger $triggers -Settings $settings -Principal $principal -Description "Synchronise EcoleDirecte avec le planning familial" -Force | Out-Null
Write-Host "Tache planifiee creee : tous les jours a 7h et 18h." -ForegroundColor Green

# 5. Raccourci sur le bureau ---------------------------------------------------
$desk = [Environment]::GetFolderPath("Desktop")
$sh = New-Object -ComObject WScript.Shell
$lnk = $sh.CreateShortcut((Join-Path $desk "Synchro planning.lnk"))
$lnk.TargetPath = "powershell.exe"
$lnk.Arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$runner`""
$lnk.WorkingDirectory = $Dir
$lnk.IconLocation = "shell32.dll,238"
$lnk.Save()
Write-Host "Raccourci 'Synchro planning' ajoute sur le bureau." -ForegroundColor Green

# 6. Premiere synchro ----------------------------------------------------------
Write-Host ""
Write-Host "Premiere synchronisation en cours..." -ForegroundColor Cyan
powershell.exe -NoProfile -ExecutionPolicy Bypass -File $runner
Write-Host ""
Get-Content (Join-Path $Dir "synchro.log") | Select-String -Pattern "^\[(ok|mfa|error)\]|ERREUR" | ForEach-Object { Write-Host $_.Line }
Write-Host ""
Write-Host "Termine. Si une question de securite EcoleDirecte est demandee, repondez-y sur le site" -ForegroundColor Cyan
Write-Host "(onglet Vue parents), puis double-cliquez sur 'Synchro planning' sur le bureau." -ForegroundColor Cyan
