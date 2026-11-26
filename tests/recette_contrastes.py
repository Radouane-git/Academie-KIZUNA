import asyncio, json
from playwright.async_api import async_playwright
KIDS=["leo","ines","sarah"]
ROUTES=["accueil"]+[f"{k}{s}" for k in KIDS for s in ["","/semaine","/edt","/livres","/tampons"]]+["parents","parents/enfants","parents/retours","parents/actions","parents/bilan","conseils","parametres"]
KEYS=["accueil","jour","semaine","edt","livres","tampons","parents","parents-enfants","parents-retours","parents-actions","bilan","conseils","parametres"]
JS="""()=>{function rgb(s){const m=s.match(/[\\d.]+/g);return m?m.map(Number):[0,0,0,0];}
function lum(c){const a=c.slice(0,3).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*a[0]+.7152*a[1]+.0722*a[2];}
function bg(e){let comps=[];while(e){const s=getComputedStyle(e);const c=rgb(s.backgroundColor);if(c.length<4)c.push(1);if(c[3]>0){comps.push(c);if(c[3]>=1)break;}e=e.parentElement;}
 let base=[255,255,255];for(let i=comps.length-1;i>=0;i--){const c=comps[i],a=c[3];base=base.map((v,j)=>v*(1-a)+c[j]*a);}return base;}
const bad=[];const seen=new Set();
document.querySelectorAll('#root *').forEach(e=>{if(e.offsetParent===null&&getComputedStyle(e).position!=='fixed')return;
 const t=[...e.childNodes].filter(n=>n.nodeType===3&&n.textContent.trim()).map(n=>n.textContent.trim()).join(' ');if(!t)return;
 const s=getComputedStyle(e);if(s.visibility==='hidden'||+s.opacity===0)return;
 const fg=rgb(s.color);const b=bg(e);const fa=fg[3]===undefined?1:fg[3];const f=fg.slice(0,3).map((v,j)=>v*fa+b[j]*(1-fa));
 const L1=lum(f),L2=lum(b);const r=(Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05);
 const size=parseFloat(s.fontSize),w=+s.fontWeight;const big=size>=24||(size>=18.66&&w>=700);
 if(r<(big?3:4.5)){const k=(e.className||e.tagName).toString().slice(0,28)+' «'+t.slice(0,22)+'» '+r.toFixed(2);if(!seen.has(k)){seen.add(k);bad.push(k);}}});
return bad.slice(0,15);}"""
async def run():
  res={}
  async with async_playwright() as p:
    b=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
    for vp in [(390,844),(1366,900)]:
      ctx=await b.new_context(viewport={"width":vp[0],"height":vp[1]})
      await ctx.add_init_script("for (const k of %s) localStorage.setItem('kizuna-tour-'+k,'1');"%json.dumps(KEYS))
      pg=await ctx.new_page()
      await pg.goto("http://localhost:8765/?demo#accueil"); await pg.wait_for_timeout(1500)
      for r in ROUTES:
        await pg.evaluate("h=>location.hash=h","#"+r); await pg.wait_for_timeout(400)
        bad=await pg.evaluate(JS)
        if bad: res[f"{vp[0]} {r}"]=bad
      await ctx.close()
    await b.close()
  print(json.dumps(res,ensure_ascii=False,indent=0))
asyncio.run(run())
