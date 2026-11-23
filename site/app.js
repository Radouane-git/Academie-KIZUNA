(function () {
"use strict";
var PICTOS={"Devoir": "<path d=\"M10 38 l3-9 L31 11 l6 6 L19 35 Z\" fill=\"#FFC93C\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M31 11 l3-3 a3 3 0 0 1 4 0 l2 2 a3 3 0 0 1 0 4 l-3 3 Z\" fill=\"#FF8FB1\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M10 38 l3-9 l6 6 Z\" fill=\"#F6E7C8\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M8 13 l4 2 M13 7 l2 4 M41 31 l-4 1\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/>", "Réviser": "<circle cx=\"22\" cy=\"26\" r=\"16\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"22\" cy=\"26\" r=\"10\" fill=\"#FFFFFF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"22\" cy=\"26\" r=\"4\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M22 26 L40 8\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M36 6 l5 1 1 5 -4 0 Z\" fill=\"#0D3B45\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Lecture": "<path d=\"M5 13 c6-3 13-3 19 1 v24 c-6-4-13-4-19-1 Z\" fill=\"#FFFFFF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M43 13 c-6-3-13-3-19 1 v24 c6-4 13-4 19-1 Z\" fill=\"#9CC9C2\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M10 19 h9 M10 24 h9 M29 19 h9 M29 24 h9\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M38 4 l1.2 2.8 3 .4 -2.2 2 .6 3 -2.6-1.4 -2.6 1.4 .6-3 -2.2-2 3-.4 Z\" fill=\"#FFC93C\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Apprendre": "<path d=\"M24 8 a12 12 0 0 0-7 21.7 c1 1 1.5 2 1.5 3.3 h11 c0-1.3.5-2.3 1.5-3.3 A12 12 0 0 0 24 8 Z\" fill=\"#FFC93C\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M19 38 h10 M20.5 42 h7\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M24 2 v2 M8 10 l2 1.5 M40 10 l-2 1.5 M4 22 h2.5 M44 22 h-2.5\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M21 24 l3-5 v6 l3-5\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/>", "Relire": "<path d=\"M38 20 a15 15 0 0 0-27-5\" stroke=\"#0E5E6F\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M10 28 a15 15 0 0 0 27 5\" stroke=\"#FF6B4A\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M6 9 l5 7 7-3 Z\" fill=\"#0E5E6F\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M42 39 l-5-7 -7 3 Z\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Sac": "<path d=\"M12 18 a12 12 0 0 1 24 0 v20 a4 4 0 0 1-4 4 H16 a4 4 0 0 1-4-4 Z\" fill=\"#0E5E6F\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M18 12 v-3 a6 6 0 0 1 12 0 v3\" fill=\"none\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"17\" y=\"27\" width=\"14\" height=\"10\" rx=\"3\" fill=\"#9CC9C2\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M17 31 h14\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Corvée": "<rect x=\"8\" y=\"20\" width=\"26\" height=\"18\" rx=\"5\" fill=\"#FFD166\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M8 27 h26\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"16\" cy=\"32\" r=\"1.6\" fill=\"#0D3B45\"/><circle cx=\"26\" cy=\"33\" r=\"1.6\" fill=\"#0D3B45\"/><circle cx=\"36\" cy=\"12\" r=\"5\" fill=\"#DDF3FF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"42\" cy=\"22\" r=\"3\" fill=\"#DDF3FF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><circle cx=\"27\" cy=\"9\" r=\"3\" fill=\"#DDF3FF\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/>", "Rangement": "<path d=\"M6 17 l18-8 18 8 v19 l-18 8 -18-8 Z\" fill=\"#E9B872\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M6 17 l18 8 18-8 M24 25 v19\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M15 13 l18 8 v6\" stroke=\"#C62E3A\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/>", "Sport": "<rect x=\"4\" y=\"16\" width=\"7\" height=\"16\" rx=\"2\" fill=\"#16181D\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"37\" y=\"16\" width=\"7\" height=\"16\" rx=\"2\" fill=\"#16181D\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"11\" y=\"19\" width=\"5\" height=\"10\" rx=\"1.5\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><rect x=\"32\" y=\"19\" width=\"5\" height=\"10\" rx=\"1.5\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M16 24 h16\" stroke=\"#0D3B45\" stroke-width=\"3\"/><path d=\"M14 8 l2 4 M24 6 v4 M34 8 l-2 4\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/>", "Loisir": "<path d=\"M14 16 h20 a9 9 0 0 1 9 9 v2 a7 7 0 0 1-12 5 l-3-3 h-8 l-3 3 a7 7 0 0 1-12-5 v-2 a9 9 0 0 1 9-9 Z\" fill=\"#FF8FB1\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M13 22 v8 M9 26 h8\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><circle cx=\"33\" cy=\"23\" r=\"2\" fill=\"#0D3B45\"/><circle cx=\"37\" cy=\"28\" r=\"2\" fill=\"#0D3B45\"/>", "Repas": "<path d=\"M6 24 h36 a18 18 0 0 1-36 0 Z\" fill=\"#FF6B4A\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M12 24 c3-3 6 3 9 0 s6 3 9 0 s6 3 9 0\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M30 4 L22 22 M36 6 L26 22\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/><path d=\"M14 10 c-2 3 2 4 0 7 M20 8 c-2 3 2 4 0 7\" stroke=\"#9CC9C2\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\"/>", "Coucher": "<path d=\"M30 40 A16 16 0 1 1 22 9 a12 12 0 0 0 16 21 A16 16 0 0 1 30 40 Z\" fill=\"#FFD166\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/><path d=\"M34 6 h6 l-6 7 h6 M41 17 h4 l-4 5 h4\" stroke=\"#0D3B45\" stroke-width=\"2.2\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\"/>"};
var CFG = window.PLANNING_CONFIG || {};
var DEMO = /[?&]demo\b/.test(location.search) || !CFG.SUPABASE_URL;
var root = document.getElementById("root");
var sb = null;

var KINDS = {dev:["Devoirs","--k-dev",1],app:["Apprendre / réciter","--k-app",1],rev:["Réviser une éval","--k-rev",1],lec:["Lecture","--k-lec",1],rel:["Relire les leçons","--k-rel",0],cor:["Corvée","--k-cor",1],ran:["Rangement","--k-ran",1],org:["Sac & agenda","--k-org",1],rep:["Pause","--k-calm",0],repas:["Repas","--k-calm",0],act:["Activité","--k-calm",0],dodo:["Soirée","--k-calm",0],loi:["Loisir / sortie","--k-loi",1]};
var IDEA_KINDS=[["lecture","Lecture plaisir"],["sortie","Sortie"],["defi","Défi construction"],["echecs","Échecs"],["sport","Sport / plein air"],["autre","Autre"]];
var TIPS = [
 ["Une pause avant de s’y mettre","20 à 30 minutes de goûter et de repos sans écran en rentrant : le travail qui suit va plus vite."],
 ["25 minutes de travail, 5 minutes de pause","Un minuteur posé sur le bureau aide à tenir le rythme et à éviter de traîner."],
 ["Apprendre le soir, réciter le matin","Le sommeil fixe la mémoire, et la récitation du petit-déjeuner vérifie que c’est su."],
 ["Travailler en binôme","Quand deux enfants ont les mêmes devoirs, ils s’interrogent l’un l’autre : expliquer est la meilleure façon d’apprendre."],
 ["Les évaluations se préparent sur 3 jours","Jour 1 : la fiche. Jour 2 : les exercices. Jour 3 : se faire interroger. Le matin même : 10 minutes de relecture, rien de nouveau."],
 ["Les soirs de sport, zéro devoir après","Tout est fait avant de partir. Au retour : douche, collation, coucher."],
 ["Écrans coupés avant le coucher","Téléphones rechargés hors de la chambre : l’endormissement est plus rapide."],
 ["Le rituel du dimanche","15 minutes pour regarder EcoleDirecte, vérifier le planning de la semaine et préparer les sacs."]
];

/* ------------------------------------------------------------ état */
var S = {fam:null, plans:[], done:{}, extras:[], ideas:[], ideasMissing:false, stamps:[], sensei:[], stampsMissing:false, books:[], booksMissing:false, bookOpen:false, sync:null, mfa:null, view:null, day:null, msg:{}, bulk:{text:"",items:null}};
function lsGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function lsSet(k,v){try{localStorage.setItem(k,v);}catch(e){}}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function iso(d){var z=new Date(d.getTime()-d.getTimezoneOffset()*60000);return z.toISOString().slice(0,10);}
var TODAY = iso(new Date());
function addDays(s,n){var d=new Date(s+"T12:00:00");d.setDate(d.getDate()+n);return iso(d);}
function dDiff(a,b){return Math.round((Date.parse(a+"T12:00:00")-Date.parse(b+"T12:00:00"))/86400000);}
function mins(t){var m=/(\d+)h(\d*)/.exec(t||"");return m?(+m[1])*60+(+(m[2]||0)):0;}
function fmtDate(s,opt){try{return new Date(s+"T12:00:00").toLocaleDateString("fr-FR",opt||{weekday:"short",day:"numeric",month:"short"});}catch(e){return s;}}

/* ------------------------------------------------------------ données */
function children(){return (S.fam&&S.fam.children)||[];}
function child(id){return children().filter(function(c){return c.id===id;})[0];}
function planOf(date){for(var i=0;i<S.plans.length;i++){var p=S.plans[i].data;if(p.days.some(function(d){return d.date===date;}))return S.plans[i];}return null;}
function curWeekIndex(){var p=planOf(TODAY);if(p)return S.plans.indexOf(p);for(var i=0;i<S.plans.length;i++){if(S.plans[i].data.days[0].date>TODAY)return i;}return S.plans.length-1;}
function weekIdx(){var p=planOf(S.day);return p?S.plans.indexOf(p):S.plans.length-1;}
function dayInfo(date){var p=planOf(date);if(!p)return null;return p.data.days.filter(function(d){return d.date===date;})[0];}
function ideasFor(cid){return S.ideas.filter(function(x){return x.child===cid||x.child==="tous";});}
function blocksOf(cid,date){var p=planOf(date);var ch=p&&p.data.children[cid];var bl=((ch&&ch.blocks&&ch.blocks[date])||[]).slice();
 ideasFor(cid).forEach(function(x){if(x.date===date)bl.push({t:x.time||"16h00",k:"loi",l:x.title,d:[x.detail,x.link].filter(Boolean).join(" · "),id:"idea|"+x.id});});
 return bl.sort(function(a,b){return mins(a.t)-mins(b.t);});}
function taskIds(cid,date){
 var ids=[];
 blocksOf(cid,date).forEach(function(b){
  if(b.k==="rel"&&b.rel){(b.rel.today||[]).forEach(function(s){ids.push(b.rel.idp+"|t|"+s);});(b.rel.tomorrow||[]).forEach(function(s){ids.push(b.rel.idp+"|d|"+s);});}
  else if(KINDS[b.k]&&KINDS[b.k][2]&&b.id)ids.push(b.id);
 });
 return ids;
}
function prog(cid,date){var ids=taskIds(cid,date);var n=ids.filter(function(i){return S.done[i];}).length;return {n:n,t:ids.length};}
function weekProg(cid,plan){var n=0,t=0;(plan?plan.data.days:[]).forEach(function(d){var p=prog(cid,d.date);n+=p.n;t+=p.t;});return {n:n,t:t};}
function pct(p){return p.t?Math.round(100*p.n/p.t):0;}
function dueFor(cid,date){
 var out=[];var p=planOf(date)||planOf(addDays(date,-1));
 if(p){var ch=p.data.children[cid]||{};
  ((ch.due||{})[date]||[]).forEach(function(x){out.push(x);});
  ((ch.due_ed||{})[date]||[]).forEach(function(x){if(out.indexOf(x)<0)out.push(x);});}
 S.extras.forEach(function(e){if((e.child===cid||e.child==="tous")&&e.due===date)out.push((e.subject?e.subject+" : ":"")+e.text+" (ajouté)");});
 return out;
}
function evalsFor(cid){
 var seen={},out=[];
 S.plans.forEach(function(p){var ch=p.data.children[cid]||{};(ch.evals||[]).concat(ch.evals_ed||[]).forEach(function(e){var k=e[0]+e[1];if(!seen[k]){seen[k]=1;out.push(e);}});});
 S.extras.forEach(function(e){if((e.child===cid||e.child==="tous")&&e.kind==="rev")out.push([e.due,(e.subject?e.subject+" : ":"")+e.text]);});
 var wk=planOf(S.day);
 return out.filter(function(e){var d=dDiff(e[0],S.day);var inWeek=wk&&wk.data.days.some(function(x){return x.date===e[0];});return inWeek||(d>=0&&d<=12);}).sort(function(a,b){return a[0]<b[0]?-1:1;});
}

/* ------------------------------------------------------------ persistance */
function setDone(id,val){
 if(val)S.done[id]=1;else delete S.done[id];
 render();
 if(DEMO){lsSet("planning-demo-done",JSON.stringify(S.done));return;}
 var q=val?sb.from("checks").upsert({id:id,done:true,updated_at:new Date().toISOString()}):sb.from("checks").delete().eq("id",id);
 q.then(function(r){if(r.error){flash("global","Coche non enregistrée : "+r.error.message,true);}});
}
function flash(k,text,err){S.msg[k]={t:text,e:!!err};render();setTimeout(function(){delete S.msg[k];render();},6000);}

function loadAll(){
 if(DEMO){
  return fetch("demo.json").then(function(r){return r.json();}).then(function(d){
   S.fam=d.settings.famille;S.plans=d.plans.sort(function(a,b){return a.week_start<b.week_start?-1:1;});
   try{S.done=JSON.parse(lsGet("planning-demo-done")||"{}");}catch(e){S.done={};}
   S.sync=d.sync;S.ideas=d.ideas||[];S.stamps=d.stamps||[];S.sensei=d.sensei||[];S.books=d.books||[];start();
  });
 }
 return Promise.all([
  sb.from("settings").select("*"),
  sb.from("plans").select("*").order("week_start"),
  sb.from("checks").select("id"),
  sb.from("extras").select("*").order("due"),
  sb.from("sync_log").select("*").order("ran_at",{ascending:false}).limit(1),
  sb.from("ideas").select("*").order("created_at"),
  sb.from("stamps").select("*").order("created_at"),
  sb.from("sensei_messages").select("*").order("created_at"),
  sb.from("books").select("*").order("finished",{ascending:false})
 ]).then(function(r){
  S.booksMissing=!!r[8].error;S.books=r[8].error?[]:(r[8].data||[]);
  S.ideasMissing=!!r[5].error;S.ideas=r[5].error?[]:(r[5].data||[]);
  S.stampsMissing=!!(r[6].error||r[7].error);S.stamps=r[6].error?[]:(r[6].data||[]);S.sensei=r[7].error?[]:(r[7].data||[]);
  var err=r.slice(0,5).filter(function(x){return x.error;})[0];
  if(err){renderError("Lecture impossible : "+err.error.message);return;}
  var set={};r[0].data.forEach(function(x){set[x.key]=x.value;});
  S.fam=set.famille||null;S.plans=r[1].data||[];
  S.done={};r[2].data.forEach(function(x){S.done[x.id]=1;});
  S.extras=r[3].data||[];S.sync=r[4].data[0]||null;
  start();
 });
}
function subscribe(){
 if(DEMO)return;
 try{
  sb.channel("checks").on("postgres_changes",{event:"*",schema:"public",table:"checks"},function(p){
   if(p.eventType==="DELETE"){delete S.done[p.old.id];}else if(p.new&&p.new.id){S.done[p.new.id]=1;}
   softRender();
  }).subscribe();
 }catch(e){}
 document.addEventListener("visibilitychange",function(){if(!document.hidden)refreshChecks();});
 setInterval(refreshChecks,60000);
}
function refreshChecks(){sb.from("checks").select("id").then(function(r){if(!r.error){S.done={};r.data.forEach(function(x){S.done[x.id]=1;});softRender();}});}
function softRender(){var a=document.activeElement;if(a&&root.contains(a)&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)&&!a.classList.contains("chk"))return;render();}

/* ------------------------------------------------------------ navigation */
function defaultDay(){
 if(planOf(TODAY))return TODAY;
 if(!S.plans.length)return TODAY;
 var last=S.plans[S.plans.length-1].data.days;var first=S.plans[0].data.days;
 return TODAY<first[0].date?first[0].date:last[last.length-1].date;
}
function curView(){var h=(location.hash||"").replace("#","");var ok=children().map(function(c){return c.id;}).concat(["parents","conseils"]);return ok.indexOf(h)>=0?h:(children()[0]?children()[0].id:"parents");}
function start(){
 var saved=null;try{saved=sessionStorage.getItem("planning-day");}catch(e){}
 S.day=(saved&&planOf(saved))?saved:defaultDay();
 render();subscribe();
}
function setDay(d){S.day=d;try{sessionStorage.setItem("planning-day",d);}catch(e){}render();}

/* ------------------------------------------------------------ rendu (Académie Kizuna) */
var THEMES={
 "Lagon":{bg:"#0E5E6F",acc:"#FF6B4A",txt:"#FFFFFF"},
 "Sakura":{bg:"#C2366C",acc:"#FFD166",txt:"#FFFFFF"},
 "Améthyste":{bg:"#5B3FA8",acc:"#FF8FB1",txt:"#FFFFFF"},
 "Graphite":{bg:"#3A4250",acc:"#FF6B4A",txt:"#FFFFFF"},
 "Ombre":{bg:"#16181D",acc:"#E9C46A",txt:"#FFFFFF"},
 "Brasier":{bg:"#C62E3A",acc:"#FFC93C",txt:"#FFFFFF"},
 "Émeraude":{bg:"#1E7A4E",acc:"#F2C94C",txt:"#FFFFFF"},
 "Éclair":{bg:"#F2B705",acc:"#16181D",txt:"#2B2100"}
};
var DEFAULT_THEMES=["Lagon","Sakura","Améthyste","Émeraude","Brasier","Éclair"];
function themeName(c){if(!c)return (S.fam&&S.fam.parents_theme)||"Graphite";var i=children().indexOf(c);return (c.theme&&THEMES[c.theme])?c.theme:DEFAULT_THEMES[i%DEFAULT_THEMES.length];}
function theme(c){return THEMES[themeName(c)];}
var SH="clip-path:polygon(50% 0,100% 14%,100% 58%,50% 100%,0 58%,0 14%)";
function logo(size){size=size||44;return '<span class="logo" style="width:'+size+'px;height:'+size+'px;border-width:'+Math.max(2,Math.round(size/14))+'px"><span style="font-size:'+Math.round(size*.5)+'px">絆</span></span>';}
function stampHtml(size){size=size||52;return '<span class="stamp" style="width:'+size+'px;height:'+size+'px"><span style="font-size:'+Math.round(size*.48)+'px">絆</span></span>';}
var PICTO_OF={dev:"Devoir",rev:"Réviser",lec:"Lecture",app:"Apprendre",rel:"Relire",org:"Sac",cor:"Corvée",ran:"Rangement",repas:"Repas",dodo:"Coucher",loi:"Loisir"};
function pictoName(b){
 if(b.k==="act")return /taekwondo|hand|match|vtt|foot|judo|basket|sport|natation|danse|piscine/i.test(b.l)?"Sport":"Loisir";
 if(b.k==="rep")return /go[uû]ter|collation/i.test(b.l)?"Repas":null;
 return PICTO_OF[b.k]||null;}
function picto(name,size){if(!name||!PICTOS[name])return '<span class="pic none" style="width:'+size+'px"></span>';return '<span class="pic" style="width:'+size+'px;height:'+size+'px"><svg width="'+Math.round(size*.68)+'" height="'+Math.round(size*.68)+'" viewBox="0 0 48 48" aria-hidden="true">'+PICTOS[name]+'</svg></span>';}
function rankOf(b,date){
 if(b.k==="rev")return (/aujourd/i.test(b.d||"")||/relire la fiche/i.test(b.l))?"S":"A";
 if(b.k==="dev")return "B";
 if(b.k==="lec"||b.k==="app"||b.k==="rel")return "C";
 if(b.k==="cor"||b.k==="ran"||b.k==="org")return "D";
 return null;}
function rankHtml(r){return r?'<span class="rank r'+r+'" aria-label="Rang '+r+'">'+r+'</span>':"";}

/* --- progression : niveau, série, badges --- */
function allDoneByKind(cid){
 var out={tot:0,lec:0,rev:0,maison:0};
 S.plans.forEach(function(p){var ch=p.data.children[cid];if(!ch||!ch.blocks)return;
  Object.keys(ch.blocks).forEach(function(d){ch.blocks[d].forEach(function(b){
   if(b.id&&S.done[b.id]&&KINDS[b.k]&&KINDS[b.k][2]){out.tot++;if(b.k==="lec")out.lec++;if(b.k==="rev")out.rev++;if(b.k==="cor"||b.k==="ran")out.maison++;}
   if(b.k==="rel"&&b.rel){(b.rel.today||[]).concat(b.rel.tomorrow||[]).forEach(function(){});}
  });});});
 return out;}
function streak(cid){
 var n=0,d=TODAY,first=true;
 for(var i=0;i<60;i++){
  var p=prog(cid,d);
  if(p.t===0){d=addDays(d,-1);continue;}
  if(pct(p)>=80)n++;else if(!first)break;
  first=false;d=addDays(d,-1);
  if(!planOf(d))break;}
 return n;}
function stampsFor(cid){return S.stamps.filter(function(x){return x.child===cid;}).sort(function(a,b){return a.created_at<b.created_at?1:-1;});}
function card(cid){
 var k=allDoneByKind(cid),st=streak(cid),badges=[];
 if(st>=2)badges.push(st+" jours de suite");
 if(k.lec>=15||booksFor(cid).length>=3)badges.push("Lecteur");
 var pg=pagesOf(booksFor(cid));if(pg>=1000)badges.push(fmtN(Math.floor(pg/1000)*1000)+" pages lues");
 if(k.rev>=10)badges.push("Stratège");
 if(k.maison>=15)badges.push("Pilier de la maison");
 if(stampsFor(cid).length)badges.push("Tamponné");
 return {level:1+Math.floor(k.tot/40),next:40-(k.tot%40),badges:badges,streak:st};}
function booksFor(cid){return S.books.filter(function(x){return x.child===cid;}).sort(function(a,b){return (a.finished||"")<(b.finished||"")?1:-1;});}
function pagesOf(list){return list.reduce(function(n,b){return n+(+b.pages||0);},0);}
function fmtN(n){return n.toLocaleString("fr-FR");}
function bookForm(cid){
 return '<form class="f bookf" id="bookf" data-child="'+esc(cid)+'"><label for="b-title">Titre<input id="b-title" type="text" required placeholder="ex. Le Petit Prince"></label><label for="b-author">Auteur (facultatif)<input id="b-author" type="text"></label><div class="cols two"><label for="b-pages">Pages<input id="b-pages" type="number" min="1" max="5000" inputmode="numeric" placeholder="96"></label><label for="b-date">Fini le<input id="b-date" type="date" value="'+TODAY+'"></label></div><button class="btn" type="submit">Ajouter à ma bibliothèque</button>'+msgHtml("book")+(S.booksMissing?'<p class="msg err">Exécutez le bloc SQL « livres » dans Supabase.</p>':'')+'</form>';}
function senseiFor(cid){var m=S.sensei.filter(function(x){return x.child===cid||x.child==="tous";}).sort(function(a,b){return a.created_at<b.created_at?1:-1;});return m[0]||null;}

/* --- écrans --- */
function renderError(t){root.innerHTML='<div class="login"><div class="card"><h2>Problème</h2><p>'+esc(t)+'</p></div></div>';}
function renderLogin(err){
 root.innerHTML='<div class="login"><form class="card f login-card" id="login">'+logo(84)+'<div class="brand-big"><span>ACADÉMIE</span><b>KIZUNA</b></div><p class="tagline">Devoirs, missions et organisation</p><label for="pw">Mot de passe familial<input id="pw" type="password" autocomplete="current-password" required></label><button class="btn" type="submit">Entrer à l’Académie</button>'+(err?'<p class="msg err">'+esc(err)+'</p>':'')+'</form></div>';
 document.getElementById("login").addEventListener("submit",function(e){
  e.preventDefault();
  sb.auth.signInWithPassword({email:CFG.FAMILY_EMAIL,password:document.getElementById("pw").value}).then(function(r){
   if(!r.error){loadAll();return;}
   var m=String(r.error.message||"");
   if(/invalid login credentials/i.test(m))renderLogin("Mot de passe incorrect.");
   else renderLogin("Connexion impossible : "+m);
  });
 });
}
function syncLine(){
 var s=S.sync;if(!s)return '<span class="status"><i></i>Pas encore de synchronisation</span>';
 var when=s.ran_at?new Date(s.ran_at).toLocaleString("fr-FR",{weekday:"short",hour:"2-digit",minute:"2-digit"}):"";
 var cls=s.status==="ok"?"ok":"bad";
 var txt=s.status==="ok"?"EcoleDirecte à jour · "+when:s.status==="mfa"?"EcoleDirecte attend une réponse":"Synchro en échec · "+when;
 return '<span class="status '+cls+'"><i></i>'+esc(txt)+(DEMO?' · <b>démo</b>':'')+(!DEMO?' · <button class="linkbtn" data-act="logout">Se déconnecter</button>':'')+'</span>';
}
function topbar(v){
 var h='<header class="topbar">'+'<a class="brand" href="#'+esc(children()[0]?children()[0].id:"parents")+'">'+logo(46)+'<span class="wordmark"><span>ACADÉMIE</span><b>KIZUNA</b></span></a>';
 h+='<nav class="tabs" aria-label="Profils">';
 children().forEach(function(ch){var t=theme(ch);var on=v===ch.id;h+='<button class="tab" data-view="'+esc(ch.id)+'" aria-current="'+(on?"page":"false")+'" style="--tc:'+t.bg+';--tt:'+t.txt+'"><span class="dot"></span>'+esc(ch.name)+'</button>';});
 var tp=THEMES[themeName(null)];
 h+='<button class="tab" data-view="parents" aria-current="'+(v==="parents"?"page":"false")+'" style="--tc:'+tp.bg+';--tt:'+tp.txt+'">Vue parents</button>';
 h+='<button class="tab" data-view="conseils" aria-current="'+(v==="conseils"?"page":"false")+'" style="--tc:#0D3B45;--tt:#FFFFFF">Conseils</button></nav>';
 return h+syncLine()+'</header>';
}
function weeksNav(){
 if(!S.plans.length)return "";
 var h='<nav class="weeks" aria-label="Semaines">';
 var ci=curWeekIndex();var sel=weekIdx();
 var lbl=function(i){var ds=S.plans[i].data.days;var mo=ds.filter(function(d){return d.wd===1;})[0]||ds[0];return fmtDate(mo.date,{day:"numeric",month:"short"});};
 [[ci-1,"Semaine dernière"],[ci,"Cette semaine"],[ci+1,"Semaine prochaine"]].forEach(function(w){
  if(w[0]>=0&&w[0]<S.plans.length)h+='<button class="wk" data-week="'+w[0]+'" aria-pressed="'+(w[0]===sel)+'">'+w[1]+' <small>'+lbl(w[0])+'</small></button>';
  else if(w[1]==="Semaine prochaine")h+='<button class="wk" disabled>Semaine prochaine <small>bientôt</small></button>';
 });
 var others=S.plans.map(function(p,i){return i;}).filter(function(i){return i<ci-1||i>ci+1;});
 if(others.length)h+='<select class="wk" id="oldweek" aria-label="Autres semaines"><option value="">Autres semaines…</option>'+others.map(function(i){return '<option value="'+i+'"'+(i===sel?" selected":"")+'>Semaine du '+lbl(i)+'</option>';}).join("")+'</select>';
 return h+'</nav>';
}
function render(){
 if(!S.fam){root.innerHTML='<div class="wrap">'+topbar("parents")+renderParents(true)+'</div>';bindForms();return;}
 var v=curView();var c=child(v);var t=theme(c);
 var plan=planOf(S.day);
 var h='<div class="wrap" style="--child:'+t.bg+';--acc:'+t.acc+';--ctxt:'+t.txt+'">';
 h+=topbar(v);
 if(S.msg.global)h+='<p class="msg'+(S.msg.global.e?" err":"")+'">'+esc(S.msg.global.t)+'</p>';
 if(c)h+=plan?renderChild(c,plan):'<div class="card"><p>Aucun planning pour cette période.</p></div>';
 else if(v==="parents")h+=renderParents(false);
 else h+=renderTips(plan);
 h+='</div>';
 root.innerHTML=h;bindForms();
}
function hero(c,plan){
 var t=theme(c),k=card(c.id),w=weekProg(c.id,plan),st=stampsFor(c.id);
 var h='<section class="hero" style="background-color:'+t.bg+';color:'+t.txt+'">';
 h+='<div class="hero-id"><span class="shield" style="background:'+t.acc+';color:'+t.bg+'">'+k.level+'</span><div><span class="over">Carte d’élève · niveau '+k.level+'</span><h1>'+esc(c.name)+'</h1><div class="badges">'+(k.badges.length?k.badges.map(function(b){return '<span>'+esc(b)+'</span>';}).join(""):'<span>Encore '+k.next+' missions pour le niveau '+(k.level+1)+'</span>')+'</div></div></div>';
 h+='<div class="hero-stats"><div class="wk-prog"><div><span>Ma semaine</span><b>'+pct(w)+' %</b></div><div class="track"><i style="width:'+pct(w)+'%;background:'+t.acc+'"></i></div><small>'+w.n+' missions sur '+w.t+'</small></div>';
 h+='<div class="hero-stamps">'+stampHtml(54)+'<div><b>'+st.length+'</b><small>tampon'+(st.length>1?"s":"")+'</small></div></div></div>';
 return h+'</section>';
}
function renderChild(c,plan){
 var t=theme(c);
 var h=hero(c,plan)+weeksNav();
 var days=plan.data.days;
 h+='<div class="days" role="tablist" aria-label="Jours" style="grid-template-columns:repeat('+days.length+',minmax(0,1fr))">';
 days.forEach(function(d){var p=prog(c.id,d.date);h+='<button class="day'+(d.date===TODAY?" today":"")+'" role="tab" data-day="'+d.date+'" aria-selected="'+(d.date===S.day)+'"><span>'+(d.date===TODAY?"Aujourd’hui":esc(d.short))+'</span><b>'+d.num+'</b><i class="bar"><i style="width:'+pct(p)+'%"></i></i></button>';});
 h+='</div><div class="grid"><main class="card missions">';
 var di=dayInfo(S.day)||days[0];var p=prog(c.id,S.day);var full=p.t&&p.n===p.t;
 var sc=((plan.data.children[c.id]||{}).school||{})[S.day];
 h+='<div class="mhead"><h2>Missions du '+esc(di.long.replace(/^(\S+)/,function(x){return x.toLowerCase();}))+'</h2><span>'+(sc?esc(sc)+' · ':'')+(full?'<b class="ok-txt">Mission accomplie !</b>':p.n+' sur '+p.t)+'</span></div>';
 h+='<div class="track big"><i style="width:'+pct(p)+'%"></i></div>';
 if(full)h+='<div class="boom"><span>MISSION ACCOMPLIE !</span></div>';
 h+='<ol class="tl">';
 var all=blocksOf(c.id,S.day);var bl=all.filter(function(b){return !b.over;});var over=all.filter(function(b){return b.over;});
 if(!bl.length)h+='<li class="none">Rien de prévu ce jour-là.</li>';
 bl.forEach(function(b){
  var kd=KINDS[b.k]||KINDS.rep;var check=kd[2]&&b.id;var isDone=check&&S.done[b.id];var r=rankOf(b,S.day);
  var calm=!check&&b.k!=="rel";
  h+='<li class="m'+(calm?" calm":"")+(isDone?" done":"")+(b.k==="loi"?" loi":"")+'"><span class="t">'+esc(b.t)+'</span>'+picto(pictoName(b),46)+'<div class="mtext"><span class="lab">'+esc(b.l)+'</span>';
  if(b.d&&!calm)h+='<span class="det">'+esc(b.d)+'</span>';
  if(b.k==="rel"&&b.rel)h+=renderRel(b.rel);
  h+='</div>'+rankHtml(r)+(check?'<input type="checkbox" class="chk" data-id="'+esc(b.id)+'" aria-label="Fait : '+esc(b.l)+'"'+(isDone?" checked":"")+'>':'')+'</li>';
 });
 h+='</ol>';
 if(over.length){h+='<div class="overbox"><h3>Pas de place avant le coucher</h3><p>Trop de travail pour ce jour-là : voyez avec un parent pour le faire plus tôt, le matin ou en version courte.</p><ol class="tl">';
  over.forEach(function(b){var kd=KINDS[b.k]||KINDS.dev;var isDone=b.id&&S.done[b.id];h+='<li class="m'+(isDone?" done":"")+'"><span class="t">—</span>'+picto(pictoName(b),46)+'<div class="mtext"><span class="lab">'+esc(b.l)+'</span>'+(b.d?'<span class="det">'+esc(b.d)+'</span>':'')+'</div>'+rankHtml(rankOf(b,S.day))+(b.id?'<input type="checkbox" class="chk" data-id="'+esc(b.id)+'" aria-label="Fait : '+esc(b.l)+'"'+(isDone?" checked":"")+'>':'')+'</li>';});
  h+='</ol></div>';}
 h+='</main>'+renderSide(c)+'</div>';
 h+='<div class="legend">'+rankHtml("S")+'<span>Évaluation du jour</span>'+rankHtml("A")+'<span>Révision</span>'+rankHtml("B")+'<span>Devoir</span>'+rankHtml("C")+'<span>Lecture, leçon</span>'+rankHtml("D")+'<span>Maison, sac</span></div>';
 return h;
}
function renderRel(r){
 function row(lab,arr,code){if(!arr||!arr.length)return "";var s='<div class="row"><em>'+lab+'</em>';arr.forEach(function(sub){var id=r.idp+"|"+code+"|"+sub;s+='<button class="chip" data-id="'+esc(id)+'" aria-pressed="'+(!!S.done[id])+'">'+esc(sub)+'</button>';});return s+'</div>';}
 return '<div class="rel">'+row("Du jour",r.today,"t")+row("De demain",r.tomorrow,"d")+'</div>';
}
function side(title,inner,cls){return '<section class="card side-card'+(cls?" "+cls:"")+'"><h2>'+title+'</h2>'+inner+'</section>';}
function renderSide(c){
 var h='<aside class="side">';
 var m=senseiFor(c.id);
 if(m)h+=side('<span class="sensei-t">Le mot du sensei</span>','<p class="sensei-msg">'+esc(m.text)+'</p><small class="muted">'+esc(fmtDate(m.created_at.slice(0,10),{weekday:"long",day:"numeric",month:"long"}))+'</small>','sensei');
 var nd=addDays(S.day,1);var due=dueFor(c.id,nd);
 h+=side("Pour demain, "+esc(fmtDate(nd,{weekday:"long",day:"numeric"})),due.length?'<ul>'+due.map(function(x){return "<li>"+esc(x)+"</li>";}).join("")+'</ul>':'<p class="none">Rien de noté pour demain.</p>');
 var ev=evalsFor(c.id);
 h+=side("Évaluations à venir",ev.length?ev.map(function(e){var d=dDiff(e[0],S.day);var lab=d<0?"passée":d===0?"aujourd’hui":d===1?"demain":"J-"+d;return '<div class="ev'+(d<0?" past":"")+'">'+rankHtml("S")+'<span>'+esc(e[1])+'<small>'+esc(fmtDate(e[0]))+'</small></span><b>'+lab+'</b></div>';}).join(""):'<p class="none">Aucune évaluation notée.</p>');
 var st=stampsFor(c.id);
 h+=side("Mes tampons de l’Académie",st.length?st.slice(0,4).map(function(x){return '<div class="stamp-row">'+stampHtml(46)+'<span><b>'+esc((x.title||"")+(x.note?" · "+x.note:""))+'</b>'+(x.message?'<small>« '+esc(x.message)+' »</small>':'')+'<small>'+esc(fmtDate(x.date||x.created_at.slice(0,10)))+'</small></span></div>';}).join(""):'<p class="none">Ton premier tampon arrivera après une bonne note préparée avec tes révisions.</p>');
 var bk=booksFor(c.id);
 h+=side("Ma bibliothèque",'<div class="lib-stats">'+picto("Lecture",44)+'<div><b>'+bk.length+'</b><small>livre'+(bk.length>1?"s":"")+' lu'+(bk.length>1?"s":"")+'</small></div><div><b>'+fmtN(pagesOf(bk))+'</b><small>pages</small></div></div>'
  +(bk.length?'<ul class="books">'+bk.slice(0,S.bookAll?999:5).map(function(b){return '<li><span><b>'+esc(b.title)+'</b>'+(b.author?' · '+esc(b.author):'')+'<small>'+(b.pages?fmtN(+b.pages)+' pages · ':'')+(b.finished?esc(fmtDate(b.finished,{day:"numeric",month:"short",year:"numeric"})):'')+'</small></span><button class="linkbtn" data-delbook="'+esc(b.id)+'" aria-label="Retirer '+esc(b.title)+'">Retirer</button></li>';}).join("")+'</ul>'+(bk.length>5&&!S.bookAll?'<button class="linkbtn" data-act="books-all">Voir les '+bk.length+' livres</button>':''):'<p class="none">Note ici chaque livre terminé, même pour le plaisir.</p>')
  +(S.bookOpen?bookForm(c.id):'<button class="btn sec" type="button" data-act="book-open">J’ai fini un livre</button>'));
 var ids=ideasFor(c.id).filter(function(x){return !x.date||x.date>=addDays(TODAY,-1);});
 h+=side("Idées pour toi",ids.length?ids.map(function(x){var id="idea|"+x.id;var k=(IDEA_KINDS.filter(function(z){return z[0]===x.kind;})[0]||["","Idée"])[1];
   return '<div class="xl">'+picto("Loisir",38)+'<span><small class="loi-t">'+esc(k)+(x.date?' · '+esc(fmtDate(x.date))+(x.time?' '+esc(x.time):''):'')+'</small><b>'+esc(x.title)+'</b>'+(x.detail?'<small>'+esc(x.detail)+'</small>':'')+(x.link?'<a href="'+esc(x.link)+'" rel="noopener" target="_blank">Lien</a>':'')+'</span><input type="checkbox" class="chk" data-id="'+esc(id)+'" aria-label="Fait : '+esc(x.title)+'"'+(S.done[id]?" checked":"")+'></div>';}).join(""):'<p class="none">Pas d’idée pour le moment.</p>');
 return h+'</aside>';
}
function msgHtml(k){var m=S.msg[k];return m?'<p class="msg'+(m.e?" err":"")+'">'+esc(m.t)+'</p>':"";}
function kidOptions(withAll){return children().map(function(c){return '<option value="'+esc(c.id)+'">'+esc(c.name)+'</option>';}).join("")+(withAll?'<option value="tous">Tous</option>':'');}
function renderParents(noFam){
 var h="";var tp=THEMES[themeName(null)];
 if(noFam){
  h+='<div class="card warn"><h2>Il manque les réglages de la famille</h2><p>Importez le fichier d’historique (réglages, semaines déjà faites et coches).</p></div>';
 } else {
  var plan=planOf(S.day);
  var tot={n:0,t:0};children().forEach(function(c){var w=weekProg(c.id,plan);tot.n+=w.n;tot.t+=w.t;});
  var evc=0;children().forEach(function(c){evc+=evalsFor(c.id).filter(function(e){return e[0]>=TODAY&&dDiff(e[0],TODAY)<=7;}).length;});
  h+='<section class="hero" style="background-color:'+tp.bg+';color:'+tp.txt+'"><div class="hero-id"><div><span class="over">Bureau du sensei</span><h1>'+esc(plan?plan.data.title.replace(/^Du /,"Semaine du "):"Semaine")+'</h1></div></div><div class="hero-stats parents"><div><b>'+pct(tot)+' %</b><small>de la semaine</small></div><div><b style="color:'+tp.acc+'">'+evc+'</b><small>évaluations à 7 jours</small></div><div><b>'+S.stamps.length+'</b><small>tampons</small></div></div></section>';
  h+=weeksNav();
  if(plan){
   var days=plan.data.days;
   h+='<section class="card"><h2>Avancement</h2><div class="ovwrap"><table class="ov"><thead><tr><th></th>';
   days.forEach(function(d){h+='<th>'+esc(d.short)+' '+d.num+'</th>';});
   h+='<th>Semaine</th></tr></thead><tbody>';
   children().forEach(function(c){var t=theme(c);h+='<tr style="--child:'+t.bg+'"><td class="n"><i></i>'+esc(c.name)+'</td>';
    days.forEach(function(d){var p=prog(c.id,d.date);h+='<td><button class="cell'+(p.t&&p.n===p.t?" full":"")+'" data-go="'+esc(c.id)+'" data-day="'+d.date+'" aria-label="'+esc(c.name)+', '+esc(d.long)+'"><i class="bar"><i style="width:'+pct(p)+'%"></i></i><small>'+p.n+'/'+p.t+'</small></button></td>';});
    h+='<td><b>'+pct(weekProg(c.id,plan))+' %</b></td></tr>';});
   h+='</tbody></table></div></section>';
  }
 }
 h+='<div class="cols">';
 if(S.sync&&S.sync.status==="mfa"&&S.sync.details){
  h+='<div class="card warn"><h2>Question de sécurité EcoleDirecte</h2><p>Double-cliquez sur « Synchro planning » sur le PC : la question s’affiche dans la fenêtre, tapez le numéro de la bonne réponse.</p></div>';
 } else if(S.sync&&S.sync.status==="error"){
  h+='<div class="card warn"><h2>La dernière synchronisation a échoué</h2><p>'+esc(S.sync.message||"")+'</p></div>';
 }
 if(!noFam){
  // tampon
  var evOpts=[];children().forEach(function(c){evalsFor(c.id).forEach(function(e){if(e[0]<=addDays(TODAY,1))evOpts.push([c.id,e[1]+" ("+fmtDate(e[0])+")"]);});});
  h+='<form class="card f stamp-card" id="stampf"><div class="ftitle">'+stampHtml(52)+'<h2>Donner un tampon</h2></div><p>Une bonne note après des révisions ? L’enfant reçoit le tampon de l’Académie sur sa carte d’élève.</p>';
  h+='<label for="s-child">Enfant<select id="s-child">'+kidOptions(false)+'</select></label>';
  h+='<label for="s-title">Évaluation<input id="s-title" type="text" list="s-evals" required placeholder="ex. SVT : la digestion"><datalist id="s-evals">'+evOpts.map(function(o){return '<option value="'+esc(o[1])+'">';}).join("")+'</datalist></label>';
  h+='<div class="cols two"><label for="s-note">Note<input id="s-note" type="text" placeholder="17/20"></label><label for="s-date">Date<input id="s-date" type="date" value="'+TODAY+'"></label></div>';
  h+='<label for="s-msg">Message<input id="s-msg" type="text" placeholder="Tes révisions ont payé !"></label>';
  h+='<button class="btn stamp-btn" type="submit">Tamponner</button>'+msgHtml("stamp")+(S.stampsMissing?'<p class="msg err">Exécutez d’abord le bloc SQL de la version 0.3.0 dans Supabase.</p>':'')+'</form>';
  // mot du sensei
  h+='<form class="card f sensei-card" id="senseif"><h2>Le mot du sensei</h2><p>Un message affiché en haut de la journée de l’enfant (le plus récent).</p>';
  h+='<label for="m-child">Pour<select id="m-child">'+kidOptions(true)+'</select></label>';
  h+='<label for="m-text">Message<textarea id="m-text" required placeholder="Belle série ! Ce soir, objectif rang A en maths."></textarea></label>';
  h+='<button class="btn" type="submit">Publier</button>'+msgHtml("sensei")+'</form>';
  // ajouter un devoir
  var nd=addDays(TODAY,1);
  h+='<form class="card f" id="addhw"><div class="ftitle">'+picto("Devoir",44)+'<h2>Ajouter une mission</h2></div><p>Pour un devoir ponctuel absent d’EcoleDirecte. Placé dans le planning à la prochaine synchronisation.</p>';
  h+='<label for="x-child">Enfant<select id="x-child">'+kidOptions(true)+'</select></label>';
  h+='<div class="cols two"><label for="x-due">Date<input id="x-due" type="date" value="'+nd+'" required></label><label for="x-sem">Cette date est<select id="x-sem"><option value="faire">le jour où le faire</option><option value="rendre">le jour où le rendre</option></select></label></div>';
  h+='<label for="x-subj">Matière<input id="x-subj" type="text" placeholder="ex. Français"></label>';
  h+='<label for="x-text">Consigne<textarea id="x-text" required placeholder="ex. Lire 20 pages et faire un résumé de 10 lignes"></textarea></label>';
  h+='<label for="x-kind">Type<select id="x-kind"><option value="dev">Devoir à faire</option><option value="app">Leçon à apprendre</option><option value="lec">Lecture</option><option value="rev">Évaluation</option></select></label>';
  h+='<button class="btn" type="submit">Ajouter</button>'+msgHtml("addhw")+'</form>';
  // saisie rapide
  h+='<form class="card f wide" id="bulk"><div class="ftitle">'+picto("Apprendre",44)+'<h2>Saisie rapide des missions</h2></div><p>Collez la liste telle que vous la recevez : une ligne avec le prénom (ou « tous »), puis une ligne par date et une mission par ligne.</p>';
  h+='<label for="bulk-text">Missions<textarea id="bulk-text" spellcheck="true" style="min-height:200px" placeholder="Aliya&#10;lundi 30/11 :&#10;  * lire 20 pages et faire un résumé de 10 lignes&#10;  * apprendre le vocabulaire&#10;&#10;Imrane, Nahila&#10;samedi 05/12 : arabe, lecture + vocabulaire">'+esc(S.bulk.text)+'</textarea></label>';
  h+='<div class="cols three"><label for="bulk-child">Enfant si aucun prénom n’est écrit<select id="bulk-child"><option value="">—</option>'+kidOptions(true)+'</select></label><label for="bulk-subj">Matière par défaut<input id="bulk-subj" type="text" placeholder="ex. M. Viste"></label><label for="bulk-sem">Les dates indiquent<select id="bulk-sem"><option value="faire"'+(S.bulk.sem!=="rendre"?" selected":"")+'>le jour où le faire</option><option value="rendre"'+(S.bulk.sem==="rendre"?" selected":"")+'>le jour où le rendre</option></select></label></div>';
  h+='<button class="btn sec" type="submit">Voir l’aperçu</button>';
  if(S.bulk.items){
   if(!S.bulk.items.length)h+='<p class="msg err">Aucune mission reconnue : vérifiez qu’il y a un prénom et des dates (ex. « lundi 30/11 »).</p>';
   else{
    h+='<div class="ovwrap"><table class="ov" style="min-width:640px"><thead><tr><th>Garder</th><th>Enfant</th><th>'+(S.bulk.sem==="faire"?"À faire le":"À rendre le")+'</th><th style="text-align:left">Mission</th><th>Type</th></tr></thead><tbody>';
    S.bulk.items.forEach(function(it,i){var c=child(it.child);h+='<tr><td><input type="checkbox" class="bulk-keep" data-i="'+i+'" checked aria-label="Garder"></td><td>'+esc(c?c.name:"Tous")+'</td><td>'+esc(fmtDate(it.doDay||it.due))+'</td><td style="text-align:left">'+esc((it.subject?it.subject+" : ":"")+it.text)+'</td><td><select class="bulk-kind" data-i="'+i+'" aria-label="Type">'+[["dev","Devoir"],["app","À apprendre"],["lec","Lecture"],["rev","Évaluation"]].map(function(k){return '<option value="'+k[0]+'"'+(k[0]===it.kind?" selected":"")+'>'+k[1]+'</option>';}).join("")+'</select></td></tr>';});
    h+='</tbody></table></div><button class="btn" type="button" id="bulk-save">Enregistrer '+S.bulk.items.length+' mission'+(S.bulk.items.length>1?"s":"")+'</button>';
   }
  }
  h+=msgHtml("bulk")+'</form>';
  h+='<section class="card"><div class="ftitle">'+picto("Lecture",44)+'<h2>Bibliothèque des enfants</h2></div>'+children().map(function(c){var bk=booksFor(c.id);return '<div class="xl"><span><b>'+esc(c.name)+'</b><small>'+bk.length+' livre'+(bk.length>1?"s":"")+' · '+fmtN(pagesOf(bk))+' pages'+(bk[0]?' · dernier : '+esc(bk[0].title):'')+'</small></span><button class="btn sec" data-go="'+esc(c.id)+'" data-day="'+esc(S.day)+'">Voir</button></div>';}).join("")+'</section>';
  // liste des ajouts
  var up=S.extras.filter(function(e){return e.due>=TODAY;});
  h+='<section class="card"><h2>Missions ajoutées à la main</h2>'+(up.length?'<p>Date affichée : jour de <b>rendu</b>.</p><button class="btn sec" type="button" id="shift-extras">Mes dates étaient des jours « à faire » : tout décaler d’un jour</button>'+msgHtml("shift"):'')+(up.length?up.map(function(e){var c=child(e.child);return '<div class="xl"><span><b>'+esc(c?c.name:"Tous")+'</b> · à rendre le '+esc(fmtDate(e.due))+'<small>'+esc((e.subject?e.subject+" : ":"")+e.text)+'</small></span><button class="btn sec" data-del="'+esc(e.id)+'">Supprimer</button></div>';}).join(""):'<p class="none">Aucune pour le moment.</p>')+'</section>';
  // idées
  h+='<form class="card f" id="idea"><div class="ftitle">'+picto("Loisir",44)+'<h2>Idée de loisir ou de sortie</h2></div><p>Lecture plaisir, sortie, défi construction, échecs… Affichée dans l’onglet de l’enfant, et dans sa journée si elle est datée.</p>';
  h+='<label for="i-child">Pour<select id="i-child">'+kidOptions(true)+'</select></label>';
  h+='<label for="i-kind">Type<select id="i-kind">'+IDEA_KINDS.map(function(k){return '<option value="'+k[0]+'">'+k[1]+'</option>';}).join("")+'</select></label>';
  h+='<label for="i-title">Idée<input id="i-title" type="text" required placeholder="ex. Lire « Le Petit Prince »"></label>';
  h+='<label for="i-detail">Détail (facultatif)<input id="i-detail" type="text"></label>';
  h+='<label for="i-link">Lien (facultatif)<input id="i-link" type="url" placeholder="https://…"></label>';
  h+='<div class="cols two"><label for="i-date">Date (facultatif)<input id="i-date" type="date"></label><label for="i-time">Heure (facultatif)<input id="i-time" type="time"></label></div>';
  h+='<button class="btn" type="submit">Ajouter l’idée</button>'+msgHtml("idea")+'</form>';
  h+='<section class="card"><h2>Idées proposées</h2>'+(S.ideas.length?S.ideas.map(function(x){var c=child(x.child);return '<div class="xl"><span><b>'+esc(c?c.name:"Tous")+'</b> · '+esc(x.title)+(x.date?' · '+esc(fmtDate(x.date)):'')+(S.done["idea|"+x.id]?' · fait':'')+'</span><button class="btn sec" data-delidea="'+esc(x.id)+'">Supprimer</button></div>';}).join(""):'<p class="none">Aucune idée pour le moment.</p>')+'</section>';
  // couleurs
  h+='<form class="card f" id="themesf"><h2>Couleurs de héros</h2><p>Chaque profil choisit sa couleur.</p>';
  children().forEach(function(c){h+='<label for="th-'+esc(c.id)+'">'+esc(c.name)+'<select id="th-'+esc(c.id)+'" data-theme-for="'+esc(c.id)+'">'+Object.keys(THEMES).map(function(n){return '<option'+(n===themeName(c)?" selected":"")+'>'+n+'</option>';}).join("")+'</select></label>';});
  h+='<label for="th-parents">Parents<select id="th-parents" data-theme-for="__parents">'+Object.keys(THEMES).map(function(n){return '<option'+(n===themeName(null)?" selected":"")+'>'+n+'</option>';}).join("")+'</select></label>';
  h+='<button class="btn" type="submit">Enregistrer les couleurs</button>'+msgHtml("themes")+'</form>';
 }
 h+='<form class="card f" id="import"><h2>Importer un historique</h2><p>Fichier JSON fourni par Claude : réglages, semaines et coches.</p><label for="imp-file">Fichier<input id="imp-file" type="file" accept="application/json,.json" required></label><button class="btn" type="submit">Importer</button>'+msgHtml("import")+'</form>';
 if(!noFam&&!DEMO){
  h+='<form class="card f wide" id="settings"><h2>Réglages (avancé)</h2><p>Enfants, activités, heures de coucher, tâches récurrentes. Format JSON : modifiez avec précaution.</p><label for="set-json">Réglages<textarea id="set-json" spellcheck="false" style="min-height:220px;font-family:ui-monospace,monospace;font-size:.8rem">'+esc(JSON.stringify(S.fam,null,2))+'</textarea></label><button class="btn" type="submit">Enregistrer les réglages</button>'+msgHtml("settings")+'</form>';
 }
 return h+'</div>';
}
function renderTips(plan){
 var notes=(plan&&plan.data.notes)||[];
 var h='<section class="hero" style="background-color:#0D3B45;color:#FFFFFF"><div class="hero-id"><div><span class="over">Conseils de l’Académie</span><h1>Bien s’organiser</h1></div></div></section>';
 if(notes.length)h+='<div class="cols">'+notes.map(function(n){return '<div class="card warn"><h2>À vérifier : '+esc(n[0])+'</h2><p>'+esc(n[1])+'</p></div>';}).join("")+'</div>';
 h+='<div class="cols">'+TIPS.map(function(t){return '<div class="card"><h2>'+esc(t[0])+'</h2><p>'+esc(t[1])+'</p></div>';}).join("")+'</div>';
 return h;
}

/* ------------------------------------------------------------ saisie rapide */
var JOURS=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
function fold(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();}
function guessKind(t){var f=fold(t);
 if(/\b(evaluation|controle|ds|qcm|interro|interrogation|test|devoir surveille)\b/.test(f))return "rev";
 if(/\b(lire|lecture)\b/.test(f)&&!/exercice|\bex\b/.test(f))return "lec";
 if(/(apprendre|par c(oe|œ)ur|reciter|vocabulaire|lecon|\bcours\b)/.test(f)&&!/exercice|faire|rediger|ecrire/.test(f))return "app";
 return "dev";}
function parseDateIn(line){
 var f=fold(line),m=/(\d{1,2})[\/.\-](\d{1,2})(?:[\/.\-](\d{2,4}))?/.exec(f);
 var today=new Date(TODAY+"T12:00:00");
 if(m){var d=+m[1],mo=+m[2],y=m[3]?(+m[3]<100?2000+(+m[3]):+m[3]):today.getFullYear();
  if(d<1||d>31||mo<1||mo>12)return null;
  var dt=new Date(y,mo-1,d,12);if(!m[3]&&dt<new Date(today.getTime()-60*864e5))dt=new Date(y+1,mo-1,d,12);
  return {date:iso(dt),idx:m.index,end:m.index+m[0].length};}
 for(var i=0;i<7;i++){var r=new RegExp("^\\W*"+JOURS[i]+"\\b");var mm=r.exec(f);
  if(mm){var dd=new Date(today.getTime());do{dd.setDate(dd.getDate()+1);}while(dd.getDay()!==i);return {date:iso(dd),idx:mm.index,end:mm.index+mm[0].length};}}
 return null;}
function parseBulk(text,defChild,defSubj){
 var kids=children(),items=[],cur=defChild?[defChild]:[],due=null,subj=null,subjIndent=-1;
 text.split(/\r?\n/).forEach(function(raw){
  if(!raw.trim())return;
  var indent=raw.match(/^\s*/)[0].replace(/\t/g,"    ").length;
  var line=raw.trim().replace(/^[*\-•·–]+\s*/,"");
  var f=fold(line);
  var dates=(f.match(/\d{1,2}[\/.\-]\d{1,2}/g)||[]).length;
  if(dates>=2)return;
  var dt=parseDateIn(line);
  if(!dt){
   var found=kids.filter(function(c){return new RegExp("\\b"+fold(c.name)+"\\b").test(f);}).map(function(c){return c.id;});
   if(/\btous\b/.test(f)&&line.length<40)found=["tous"];
   if(found.length&&line.length<80&&!/:\s*\S/.test(line)){cur=found;due=null;subj=null;return;}
  }
  if(dt){due=dt.date;subj=null;subjIndent=-1;line=line.slice(0,dt.idx)+line.slice(dt.end);line=line.replace(/^[^:]*:\s*/,"").trim();if(!line)return;}
  if(!due||!cur.length)return;
  if(subj!==null&&indent<=subjIndent){subj=null;subjIndent=-1;}
  if(/:\s*$/.test(line)){subj=line.replace(/:\s*$/,"").trim().replace(/^devoirs?\s+(de|du|d['’])\s*/i,"");subjIndent=indent;return;}
  line.split(/\s;\s/).forEach(function(part){
   part=part.trim().replace(/^[*\-•·–]+\s*/,"");if(!part)return;
   var s2=subj||defSubj||"",m=/^([^:]{2,30}?)\s*:\s+(.+)$/.exec(part);
   if(m&&!/\d/.test(m[1])){s2=m[1].trim();part=m[2].trim();}
   cur.forEach(function(cid){items.push({child:cid,due:due,subject:s2,text:part,kind:guessKind(s2+" "+part)});});
  });
 });
 return items;}

/* ------------------------------------------------------------ actions */
function bindForms(){
 var f;
 if((f=document.getElementById("addhw")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var dd=val("x-due");var row={child:val("x-child"),due:val("x-sem")==="faire"?addDays(dd,1):dd,subject:val("x-subj")||null,text:val("x-text"),kind:val("x-kind")};
  if(DEMO){row.id="demo-"+Date.now();S.extras.push(row);flash("addhw","Ajouté (démo).");return;}
  sb.from("extras").insert(row).select().then(function(r){if(r.error)flash("addhw","Erreur : "+r.error.message,true);else{S.extras.push(r.data[0]);flash("addhw","Devoir ajouté.");}});
 });
 if((f=document.getElementById("mfa")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var chosen=val("mfa-a");
  sb.from("mfa_answers").upsert({question:S.sync.details.question,answer:chosen}).then(function(r){flash("mfa",r.error?"Erreur : "+r.error.message:"Réponse enregistrée : « "+chosen+" ».",!!r.error);});
 });
 if((f=document.getElementById("settings")))f.addEventListener("submit",function(e){
  e.preventDefault();var v;
  try{v=JSON.parse(val("set-json"));}catch(err){flash("settings","JSON invalide : "+err.message,true);return;}
  if(!v.children||!v.children.length){flash("settings","Il faut au moins un enfant dans « children ».",true);return;}
  sb.from("settings").upsert({key:"famille",value:v,updated_at:new Date().toISOString()}).then(function(r){if(r.error)flash("settings","Erreur : "+r.error.message,true);else{S.fam=v;flash("settings","Réglages enregistrés. Ils servent dès la prochaine synchronisation.");}});
 });
 if((f=document.getElementById("import")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var file=document.getElementById("imp-file").files[0];if(!file)return;
  file.text().then(function(txt){
   var d;try{d=JSON.parse(txt);}catch(err){flash("import","Fichier illisible.",true);return;}
   if(DEMO){flash("import","Import indisponible en mode démo.",true);return;}
   var jobs=[];
   if(d.settings)Object.keys(d.settings).forEach(function(k){jobs.push(sb.from("settings").upsert({key:k,value:d.settings[k]}));});
   if(d.plans&&d.plans.length)jobs.push(sb.from("plans").upsert(d.plans));
   var ids=Object.keys(d.checks||{});
   for(var i=0;i<ids.length;i+=400)jobs.push(sb.from("checks").upsert(ids.slice(i,i+400).map(function(id){return {id:id,done:true};})));
   Promise.all(jobs).then(function(rs){var bad=rs.filter(function(r){return r.error;})[0];if(bad)flash("import","Erreur : "+bad.error.message,true);else{flash("import","Import terminé.");loadAll();}});
  });
 });
 if((f=document.getElementById("bulk"))){
  var ta=document.getElementById("bulk-text");ta.addEventListener("input",function(){S.bulk.text=ta.value;});
  f.addEventListener("submit",function(e){e.preventDefault();S.bulk.text=ta.value;S.bulk.sem=val("bulk-sem");S.bulk.items=parseBulk(ta.value,val("bulk-child"),val("bulk-subj"));if(S.bulk.sem==="faire")S.bulk.items.forEach(function(it){it.due=addDays(it.due,1);it.doDay=addDays(it.due,-1);});render();var p=document.getElementById("bulk");if(p)p.scrollIntoView({block:"start"});});
  var sv=document.getElementById("bulk-save");
  if(sv)sv.addEventListener("click",function(){
   var rows=S.bulk.items.map(function(it,i){var k=document.querySelector('.bulk-keep[data-i="'+i+'"]');var t=document.querySelector('.bulk-kind[data-i="'+i+'"]');return k&&k.checked?{child:it.child,due:it.due,subject:it.subject||null,text:it.text,kind:t?t.value:it.kind}:null;}).filter(Boolean);
   if(!rows.length){flash("bulk","Aucun devoir coché.",true);return;}
   var done=function(data){S.extras=S.extras.concat(data);S.bulk={text:"",items:null,sem:S.bulk.sem};flash("bulk",rows.length+" devoir"+(rows.length>1?"s":"")+" enregistré"+(rows.length>1?"s":"")+". Ils seront placés dans le planning à la prochaine synchronisation.");};
   if(DEMO){done(rows.map(function(r,i){r.id="demo-"+Date.now()+i;return r;}));return;}
   sb.from("extras").insert(rows).select().then(function(r){if(r.error)flash("bulk","Erreur : "+r.error.message,true);else done(r.data);});
  });
 }
 var shb=document.getElementById("shift-extras");
 if(shb)shb.addEventListener("click",function(){
  if(!shb.dataset.ok){shb.dataset.ok="1";shb.textContent="Confirmer : décaler "+S.extras.filter(function(e){return e.due>=TODAY;}).length+" devoirs d’un jour";return;}
  var up=S.extras.filter(function(e){return e.due>=TODAY;});
  if(DEMO){up.forEach(function(e){e.due=addDays(e.due,1);});flash("shift","Dates décalées (démo).");return;}
  Promise.all(up.map(function(e){return sb.from("extras").update({due:addDays(e.due,1)}).eq("id",e.id);})).then(function(rs){
   var bad=rs.filter(function(r){return r.error;})[0];
   if(bad)flash("shift","Erreur : "+bad.error.message,true);else{up.forEach(function(e){e.due=addDays(e.due,1);});flash("shift","C’est corrigé : relancez « Synchro planning » sur le PC pour mettre le planning à jour.");}
  });
 });
 if((f=document.getElementById("idea")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var tm=val("i-time");var row={child:val("i-child"),kind:val("i-kind"),title:val("i-title"),detail:val("i-detail")||null,link:val("i-link")||null,date:val("i-date")||null,time:tm?tm.replace(":","h"):null};
  if(DEMO){row.id="demo-"+Date.now();S.ideas.push(row);flash("idea","Idée ajoutée (démo).");return;}
  sb.from("ideas").insert(row).select().then(function(r){if(r.error)flash("idea","Erreur : "+r.error.message,true);else{S.ideas.push(r.data[0]);flash("idea","Idée ajoutée.");}});
 });
 if((f=document.getElementById("bookf")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var pgs=parseInt(val("b-pages"),10);
  var row={child:e.currentTarget.getAttribute("data-child"),title:val("b-title"),author:val("b-author")||null,pages:pgs>0?pgs:null,finished:val("b-date")||TODAY};
  var ok=function(x){S.books.push(x);S.bookOpen=false;flash("global","Bravo ! « "+x.title+" » est dans ta bibliothèque.");};
  if(DEMO){row.id="demo-"+Date.now();ok(row);return;}
  sb.from("books").insert(row).select().then(function(r){if(r.error)flash("book","Erreur : "+r.error.message,true);else ok(r.data[0]);});
 });
 if((f=document.getElementById("stampf")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var row={child:val("s-child"),title:val("s-title"),note:val("s-note")||null,message:val("s-msg")||null,date:val("s-date")||TODAY};
  var ok=function(x){S.stamps.push(x);flash("stamp","Tampon donné à "+(child(x.child)||{}).name+" !");};
  if(DEMO){row.id="demo-"+Date.now();row.created_at=new Date().toISOString();ok(row);return;}
  sb.from("stamps").insert(row).select().then(function(r){if(r.error)flash("stamp","Erreur : "+r.error.message,true);else ok(r.data[0]);});
 });
 if((f=document.getElementById("senseif")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var row={child:val("m-child"),text:val("m-text")};
  var ok=function(x){S.sensei.push(x);flash("sensei","Message publié.");};
  if(DEMO){row.id="demo-"+Date.now();row.created_at=new Date().toISOString();ok(row);return;}
  sb.from("sensei_messages").insert(row).select().then(function(r){if(r.error)flash("sensei","Erreur : "+r.error.message,true);else ok(r.data[0]);});
 });
 if((f=document.getElementById("themesf")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var v=JSON.parse(JSON.stringify(S.fam));
  document.querySelectorAll("[data-theme-for]").forEach(function(sl){var id=sl.getAttribute("data-theme-for");if(id==="__parents")v.parents_theme=sl.value;else v.children.forEach(function(c){if(c.id===id)c.theme=sl.value;});});
  if(DEMO){S.fam=v;flash("themes","Couleurs appliquées (démo).");return;}
  sb.from("settings").upsert({key:"famille",value:v,updated_at:new Date().toISOString()}).then(function(r){if(r.error)flash("themes","Erreur : "+r.error.message,true);else{S.fam=v;flash("themes","Couleurs enregistrées.");}});
 });
 var sel=document.getElementById("oldweek");
 if(sel)sel.addEventListener("change",function(){if(sel.value!=="")pickWeek(+sel.value);});
}
function val(id){return (document.getElementById(id).value||"").trim();}
function pickWeek(idx){var p=S.plans[idx];if(!p)return;var has=p.data.days.some(function(d){return d.date===TODAY;});setDay(has?TODAY:(p.data.days[1]||p.data.days[0]).date);}

root.addEventListener("click",function(e){
 var t=e.target.closest("[data-delbook],[data-view],[data-day],[data-id],[data-go],[data-week],[data-del],[data-act],[data-delidea]");if(!t)return;
 if(t.hasAttribute("data-delidea")){var di=t.getAttribute("data-delidea");var aft=function(){S.ideas=S.ideas.filter(function(x){return String(x.id)!==di;});render();};
  if(DEMO)aft();else sb.from("ideas").delete().eq("id",di).then(function(r){if(!r.error)aft();});return;}
 if(t.matches("input.chk")){setDone(t.getAttribute("data-id"),t.checked);return;}
 if(t.hasAttribute("data-delbook")){var bid=t.getAttribute("data-delbook");if(!t.dataset.ok){t.dataset.ok="1";t.textContent="Confirmer";return;}
  var aftb=function(){S.books=S.books.filter(function(x){return String(x.id)!==bid;});render();};
  if(DEMO)aftb();else sb.from("books").delete().eq("id",bid).then(function(r){if(!r.error)aftb();});return;}
 if(t.getAttribute("data-act")==="book-open"){S.bookOpen=true;render();var bi=document.getElementById("b-title");if(bi)bi.focus();return;}
 if(t.getAttribute("data-act")==="books-all"){S.bookAll=true;render();return;}
 if(t.hasAttribute("data-act")){sb.auth.signOut().then(function(){location.reload();});return;}
 if(t.hasAttribute("data-del")){var id=t.getAttribute("data-del");
  var after=function(){S.extras=S.extras.filter(function(x){return String(x.id)!==id;});render();};
  if(DEMO)after();else sb.from("extras").delete().eq("id",id).then(function(r){if(!r.error)after();});return;}
 if(t.hasAttribute("data-week")){pickWeek(+t.getAttribute("data-week"));return;}
 if(t.hasAttribute("data-go")){S.day=t.getAttribute("data-day");location.hash=t.getAttribute("data-go");return;}
 if(t.hasAttribute("data-view")){location.hash=t.getAttribute("data-view");return;}
 if(t.hasAttribute("data-day")){setDay(t.getAttribute("data-day"));return;}
 if(t.hasAttribute("data-id")){var i=t.getAttribute("data-id");setDone(i,!S.done[i]);}
});
window.addEventListener("hashchange",function(){render();window.scrollTo(0,0);});

/* ------------------------------------------------------------ démarrage */
if(DEMO){loadAll();}
else if(!window.supabase){renderError("La bibliothèque Supabase n’a pas pu se charger. Vérifiez la connexion internet.");}
else{
 sb=window.supabase.createClient(CFG.SUPABASE_URL,CFG.SUPABASE_ANON_KEY,{auth:{persistSession:true,autoRefreshToken:true}});
 sb.auth.getSession().then(function(r){if(r.data&&r.data.session)loadAll();else renderLogin();});
}
})();
