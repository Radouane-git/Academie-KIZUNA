import asyncio, json
from playwright.async_api import async_playwright
KIDS=["leo","ines","sarah"]
ROUTES=["accueil"]+[f"{k}{s}" for k in KIDS for s in ["","/semaine","/edt","/livres","/parcours"]]+["parents","parents/enfants","parents/retours","parents/actions","parents/bilan","conseils","parametres"]
KEYS=["accueil","jour","semaine","edt","livres","parcours","parents","parents-enfants","parents-retours","parents-actions","bilan","conseils","parametres"]
JS="""()=>{const W=innerWidth,out={};
out.overflow=document.documentElement.scrollWidth>W+1?document.documentElement.scrollWidth:0;
const tb=document.querySelector('.topbar');out.topbar=tb?Math.round(tb.getBoundingClientRect().height):0;
const wide=[];document.querySelectorAll('#root *').forEach(e=>{const r=e.getBoundingClientRect();if(r.width&&r.right>W+1&&getComputedStyle(e).position!=='fixed'){let p=e.parentElement,clip=false;while(p){const o=getComputedStyle(p).overflowX;if(o==='auto'||o==='scroll'||o==='hidden'){clip=true;break;}p=p.parentElement;}if(!clip)wide.push((e.className||e.tagName).toString().slice(0,30)+':'+Math.round(r.right));}});
out.wide=[...new Set(wide)].slice(0,6);
const small=[];document.querySelectorAll('#root button,#root a,#root summary,#root input[type=checkbox],#root select').forEach(e=>{const r=e.getBoundingClientRect();if(!r.width||e.offsetParent===null)return;if(e.closest('p')&&e.tagName==='A')return;if(r.height<44&&r.width<44||r.height<32)small.push((e.className||e.tagName).toString().slice(0,25)+' '+Math.round(r.width)+'x'+Math.round(r.height)+' «'+(e.textContent||'').trim().slice(0,18)+'»');});
out.small=[...new Set(small)].slice(0,12);
const noname=[];document.querySelectorAll('#root button,#root a').forEach(e=>{if(e.offsetParent===null)return;const n=(e.getAttribute('aria-label')||e.textContent||e.title||'').trim();if(!n)noname.push(e.outerHTML.slice(0,60));});
out.noname=noname.slice(0,5);return out;}"""
async def run():
  res={}
  async with async_playwright() as p:
    b=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
    for vp in [(360,740),(390,844),(768,1024),(1366,900)]:
      ctx=await b.new_context(viewport={"width":vp[0],"height":vp[1]})
      await ctx.add_init_script("for (const k of %s) localStorage.setItem('kizuna-tour-'+k,'1');"%json.dumps(KEYS))
      pg=await ctx.new_page(); errs=[]
      pg.on("pageerror",lambda e:errs.append(str(e)))
      pg.on("console",lambda m:errs.append("console:"+m.text) if m.type=="error" and "fonts" not in m.text and "Failed to load" not in m.text else None)
      await pg.goto("http://localhost:8765/?demo#accueil"); await pg.wait_for_timeout(1500)
      for r in ROUTES:
        await pg.evaluate("h=>location.hash=h","#"+r); await pg.wait_for_timeout(500)
        m=await pg.evaluate(JS)
        if m["overflow"] or m["wide"] or m["small"] or m["noname"] or (m["topbar"]>80):
          res[f"{vp[0]} {r}"]=m
      res[f"{vp[0]} erreurs"]=errs; await ctx.close()
    await b.close()
  print(json.dumps(res,ensure_ascii=False,indent=0))
asyncio.run(run())
