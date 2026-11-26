import asyncio, json
from playwright.async_api import async_playwright
KEYS=["accueil","jour","semaine","edt","livres","tampons","parents","parents-enfants","parents-retours","parents-actions","bilan","conseils","parametres"]
async def run():
  async with async_playwright() as p:
    b=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
    ctx=await b.new_context(viewport={"width":1366,"height":900})
    await ctx.add_init_script("for (const k of %s) localStorage.setItem('kizuna-tour-'+k,'1');"%json.dumps(KEYS))
    pg=await ctx.new_page()
    for r in ["accueil","leo","leo/livres","parents","parents/actions","conseils","parametres"]:
      await pg.goto("http://localhost:8765/?demo#"+r); await pg.wait_for_timeout(1200)
      bad=[];n=0
      for i in range(60):
        await pg.keyboard.press("Tab"); n+=1
        v=await pg.evaluate("""()=>{const e=document.activeElement;if(!e||e===document.body)return null;const s=getComputedStyle(e);const vis=(s.outlineStyle!=='none'&&parseFloat(s.outlineWidth)>0)||s.boxShadow!=='none';return vis?'':(e.className||e.tagName).toString().slice(0,30)+' «'+(e.textContent||e.value||'').trim().slice(0,20)+'»';}""")
        if v: bad.append(v)
      print(r, sorted(set(bad))[:8])
    await b.close()
asyncio.run(run())
