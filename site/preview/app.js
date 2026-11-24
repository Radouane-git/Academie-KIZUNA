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
var S = {fam:null, plans:[], done:{}, extras:[], ideas:[], ideasMissing:false, stamps:[], sensei:[], stampsMissing:false, books:[], booksMissing:false, cancels:[], cancelsMissing:false, edtOpen:false, focus:null, installEvt:null, standalone:false, diff:{}, rate:null, diffMissing:false, notes:[], notesMissing:false, editNote:null, bookOpen:false, sync:null, mfa:null, view:null, day:null, msg:{}, bulk:{text:"",items:null}};
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
function subs(a){return (a||[]).filter(function(x){return x&&String(x).trim();});}
function taskIds(cid,date){
 var ids=[];
 blocksOf(cid,date).forEach(function(b){
  if(b.k==="rel"&&b.rel){subs(b.rel.today).forEach(function(s){ids.push(b.rel.idp+"|t|"+s);});subs(b.rel.tomorrow).forEach(function(s){ids.push(b.rel.idp+"|d|"+s);});}
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
 if(!val)delete S.diff[id];
 if(val&&!S.focus){var bk=null;var cv0=child(curView());if(cv0)blocksOf(cv0.id,S.day).forEach(function(x){if(x.id===id)bk=x;});if(bk&&RATEABLE[bk.k])S.rate=id;}
 if(val){S.pop=id;try{if(navigator.vibrate)navigator.vibrate(15);}catch(e){}
  var vc=child(curView());if(vc&&!S.focus){var mp=mprog(vc.id,S.day),left=mp.t-mp.n;
   if(mp.t&&left===0)cheer("Mission accomplie ! Tout est fait pour "+(S.day===TODAY?"aujourd’hui":"ce jour-là")+".");
   else if(mp.n&&mp.n%3===0)cheer("Bien joué ! Encore "+left+" mission"+(left>1?"s":"")+".");}}
 render();S.pop=null;
 if(DEMO){lsSet("planning-demo-done",JSON.stringify(S.done));lsSet("planning-demo-diff",JSON.stringify(S.diff));return;}
 var q=val?sb.from("checks").upsert({id:id,done:true,updated_at:new Date().toISOString()}):sb.from("checks").delete().eq("id",id);
 q.then(function(r){if(r.error){flash("global","Coche non enregistrée : "+r.error.message,true);}});
}
function cheer(t){S.msg.global={t:t,e:false,cheer:true};clearTimeout(S.cheerT);S.cheerT=setTimeout(function(){if(S.msg.global&&S.msg.global.cheer){delete S.msg.global;softRender();}},3500);}
function flash(k,text,err){S.msg[k]={t:text,e:!!err};render();setTimeout(function(){delete S.msg[k];render();},6000);}

function loadAll(){
 if(DEMO){
  return fetch("../demo.json").then(function(r){return r.json();}).then(function(d){
   S.fam=d.settings.famille;S.plans=d.plans.sort(function(a,b){return a.week_start<b.week_start?-1:1;});
   try{S.done=JSON.parse(lsGet("planning-demo-done")||"{}");}catch(e){S.done={};}try{S.diff=JSON.parse(lsGet("planning-demo-diff")||"{}");}catch(e){S.diff={};}
   S.sync=d.sync;S.ideas=d.ideas||[];S.stamps=d.stamps||[];S.sensei=d.sensei||[];S.books=d.books||[];S.cancels=d.cancellations||[];S.notes=d.teacher_notes||[];start();
  });
 }
 return Promise.all([
  sb.from("settings").select("*"),
  sb.from("plans").select("*").order("week_start"),
  sb.from("checks").select("id,difficulty").then(function(r){if(r.error){S.diffMissing=true;return sb.from("checks").select("id");}return r;}),
  sb.from("extras").select("*").order("due"),
  sb.from("sync_log").select("*").order("ran_at",{ascending:false}).limit(1),
  sb.from("ideas").select("*").order("created_at"),
  sb.from("stamps").select("*").order("created_at"),
  sb.from("sensei_messages").select("*").order("created_at"),
  sb.from("books").select("*").order("finished",{ascending:false}),
  sb.from("cancellations").select("*").gte("date",addDays(TODAY,-14)),
  sb.from("teacher_notes").select("*").order("date",{ascending:false})
 ]).then(function(r){
  S.notesMissing=!!r[10].error;S.notes=r[10].error?[]:(r[10].data||[]);
  S.cancelsMissing=!!r[9].error;S.cancels=r[9].error?[]:(r[9].data||[]);
  S.booksMissing=!!r[8].error;S.books=r[8].error?[]:(r[8].data||[]);
  S.ideasMissing=!!r[5].error;S.ideas=r[5].error?[]:(r[5].data||[]);
  S.stampsMissing=!!(r[6].error||r[7].error);S.stamps=r[6].error?[]:(r[6].data||[]);S.sensei=r[7].error?[]:(r[7].data||[]);
  var err=r.slice(0,5).filter(function(x){return x.error;})[0];
  if(err){renderError("Lecture impossible : "+err.error.message);return;}
  var set={};r[0].data.forEach(function(x){set[x.key]=x.value;});
  S.fam=set.famille||null;S.plans=r[1].data||[];
  S.done={};S.diff={};r[2].data.forEach(function(x){S.done[x.id]=1;if(x.difficulty)S.diff[x.id]=x.difficulty;});
  S.extras=r[3].data||[];S.sync=r[4].data[0]||null;
  start();
 });
}
function subscribe(){
 if(DEMO)return;
 try{
  sb.channel("checks").on("postgres_changes",{event:"*",schema:"public",table:"checks"},function(p){
   if(p.eventType==="DELETE"){delete S.done[p.old.id];delete S.diff[p.old.id];}else if(p.new&&p.new.id){S.done[p.new.id]=1;if(p.new.difficulty)S.diff[p.new.id]=p.new.difficulty;}
   softRender();
  }).subscribe();
 }catch(e){}
 document.addEventListener("visibilitychange",function(){if(!document.hidden)refreshChecks();});
 setInterval(refreshChecks,60000);
}
function refreshChecks(){
 sb.from("checks").select("id,difficulty").then(function(r){
  if(r.error){S.diffMissing=true;return sb.from("checks").select("id").then(function(r2){if(!r2.error){S.done={};r2.data.forEach(function(x){S.done[x.id]=1;});softRender();}});}
  S.diffMissing=false;S.done={};S.diff={};r.data.forEach(function(x){S.done[x.id]=1;if(x.difficulty)S.diff[x.id]=x.difficulty;});softRender();});}
function softRender(){var a=document.activeElement;if(a&&root.contains(a)&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)&&!a.classList.contains("chk"))return;render();}

/* ------------------------------------------------------------ navigation */
function defaultDay(){
 if(planOf(TODAY))return TODAY;
 if(!S.plans.length)return TODAY;
 var last=S.plans[S.plans.length-1].data.days;var first=S.plans[0].data.days;
 return TODAY<first[0].date?first[0].date:last[last.length-1].date;
}
function curView(){var h=(location.hash||"").replace("#","").split("/")[0];var ok=children().map(function(c){return c.id;}).concat(["parents","conseils","parametres","accueil"]);return ok.indexOf(h)>=0?h:"accueil";}
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
 "Jade":{bg:"#14806D",acc:"#9FF5E1",txt:"#FFFFFF"},
 "Ombre":{bg:"#16181D",acc:"#E9C46A",txt:"#FFFFFF"},
 "Brasier":{bg:"#C62E3A",acc:"#FFC93C",txt:"#FFFFFF"},
 "Émeraude":{bg:"#1E7A4E",acc:"#F2C94C",txt:"#FFFFFF"},
 "Éclair":{bg:"#F2B705",acc:"#16181D",txt:"#2B2100"}
};
var DIFF=[null,["Très facile","#2E9E6B","#fff"],["Facile","#6FA83A","#fff"],["Moyen","#F2B705","#2B2100"],["Difficile","#E8792A","#fff"],["Très difficile","#D63A3A","#fff"]];
var RATEABLE={dev:1,app:1,rev:1,lec:1};
function diffBadge(n,big){var d=DIFF[n];if(!d)return "";return '<span class="dbadge'+(big?" big":"")+'" style="background:'+d[1]+';color:'+d[2]+'" title="Difficulté : '+n+'/5 ('+d[0]+')" aria-label="Difficulté '+n+' sur 5">'+n+'</span>';}
function rateRow(id,label){return '<div class="raterow" role="group" aria-label="Difficulté"><span class="rr-q">'+(label||"C’était comment ?")+'</span><div class="rr-btns">'+[1,2,3,4,5].map(function(n){var d=DIFF[n];return '<button class="rr" data-rate="'+esc(id)+'" data-n="'+n+'" style="--dc:'+d[1]+';--dt:'+d[2]+'" aria-pressed="'+(S.diff[id]===n)+'"><b>'+n+'</b><small>'+d[0]+'</small></button>';}).join("")+'</div><button class="linkbtn rr-skip" data-rate="'+esc(id)+'" data-n="0">Passer</button></div>';}
function setDiff(id,n){
 if(n)S.diff[id]=n;else delete S.diff[id];
 if(DEMO){lsSet("planning-demo-diff",JSON.stringify(S.diff));return;}
 sb.from("checks").upsert({id:id,done:true,difficulty:n||null,updated_at:new Date().toISOString()}).then(function(r){if(r.error){S.diffMissing=true;S.diffMissing=true;render();}});
}
function lumHex(h){h=h.replace("#","");var c=[0,2,4].map(function(i){var v=parseInt(h.substr(i,2),16)/255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);});return .2126*c[0]+.7152*c[1]+.0722*c[2];}
function shieldFg(t){return lumHex(t.acc)<.25?"#FFE58A":"#0D3B45";}
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
 return '<form class="f bookf" id="bookf" data-child="'+esc(cid)+'"><label for="b-title">Titre<input id="b-title" type="text" required placeholder="ex. Le Petit Prince"></label><label for="b-author">Auteur (facultatif)<input id="b-author" type="text"></label><div class="cols two"><label for="b-pages">Pages<input id="b-pages" type="number" min="1" max="5000" inputmode="numeric" placeholder="96"></label><label for="b-date">Fini le<input id="b-date" type="date" value="'+TODAY+'"></label></div><div class="btnrow"><button class="btn" type="submit">Ajouter à ma bibliothèque</button><button class="btn sec" type="button" data-act="book-close">Annuler</button></div>'+msgHtml("book")+(S.booksMissing?'<p class="msg err">Exécutez le bloc SQL « livres » dans Supabase.</p>':'')+'</form>';}
function sameClass(a,b){if(a===b||a==="tous"||b==="tous")return true;var ca=child(a),cb=child(b);return !!((ca&&ca.ed_same_as===b)||(cb&&cb.ed_same_as===a)||(ca&&cb&&ca.ed_same_as&&ca.ed_same_as===cb.ed_same_as));}
function manualCancel(cid,date,l){return S.cancels.filter(function(x){return x.date===date&&x.subject===l.m&&(!x.start||x.start===l.s)&&sameClass(x.child,cid);})[0]||null;}
function lessonsOf(cid,date){var p=planOf(date);var ch=p&&p.data.children[cid];var ls=((ch&&ch.lessons&&ch.lessons[date])||[]).map(function(l){var o={};for(var k in l)o[k]=l[k];var mc=manualCancel(cid,date,l);if(mc){o.mc=mc;if(!o.x||/sur le site/.test(o.x))o.x="Annulé sur le site"+(mc.reason?" : "+mc.reason:"");}else if(o.x&&/sur le site/.test(o.x)){delete o.x;}return o;});return ls;}
function renderEdt(c,date){
 var ls=lessonsOf(c.id,date);if(!ls.length)return "";
 var nx=ls.filter(function(l){return l.x;}).length;
 var h='<details class="edt"'+(S.edtOpen?" open":"")+'><summary>Emploi du temps · '+ls.length+' cours'+(nx?' · <b class="cx">'+nx+' annulé'+(nx>1?"s":"")+'</b>':'')+'</summary><ul>';
 ls.forEach(function(l,i){h+='<li class="'+(l.x?"cancelled":"")+'"><span class="et">'+esc(l.s)+(l.e?' – '+esc(l.e):'')+'</span><span class="em"><b>'+esc(l.m)+'</b>'+(l.r?' · salle '+esc(l.r):'')+(l.x?'<small>'+esc(l.x)+'</small>':'')+'</span>'+(l.mc?'<button class="btn sec mini" data-uncancel="'+esc(l.mc.id)+'">Rétablir</button>':l.x?'':'<button class="btn sec mini" data-cancel="'+i+'" data-date="'+esc(date)+'" data-child="'+esc(c.id)+'" aria-label="Annuler le cours de '+esc(l.m)+' à '+esc(l.s)+'">Prof absent</button>')+'</li>';});
 h+='</ul><p class="det">« Prof absent » retire le cours du planning à la prochaine synchronisation (pour '+(children().filter(function(k){return k.id!==c.id&&sameClass(k.id,c.id);}).map(function(k){return esc(k.name);}).concat([esc(c.name)]).join(" et "))+').'+(S.cancelsMissing?' <b>Exécutez le bloc SQL « annulations » dans Supabase.</b>':'')+'</p></details>';
 return h;}
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
function curSection(){var h=(location.hash||"").replace("#","").split("/");return ["semaine","livres","tampons"].indexOf(h[1])>=0?h[1]:"jour";}
var GEAR='<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm8.2 4.7-.1-1.2 2-1.6-2-3.4-2.4.9a8 8 0 0 0-2-1.2L15.3 4h-4l-.4 2.7a8 8 0 0 0-2 1.2l-2.4-.9-2 3.4 2 1.6a8 8 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-.9a8 8 0 0 0 2 1.2l.4 2.7h4l.4-2.7a8 8 0 0 0 2-1.2l2.4.9 2-3.4-2-1.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>';
var SECTIONS=[["jour","Aujourd’hui","Devoir"],["semaine","Ma semaine","Sac"],["livres","Bibliothèque","Lecture"],["tampons","Tampons","Loisir"]];
var FLAME='<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 4 5 5.5 5 11a5 5 0 0 1-10 0c0-3 2-4.5 2-7 2 1.2 3 2.6 3 4 1-2 .5-5 0-8z" fill="#FF6B4A"/></svg>';
function ring(p,size,stroke,label,col,track,txt){var r=(size-stroke)/2,c=2*Math.PI*r;return '<span class="ring" style="width:'+size+'px;height:'+size+'px"><svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'" aria-hidden="true"><circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" stroke="'+(track||"var(--line)")+'" stroke-width="'+stroke+'" fill="none"/><circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" stroke="'+(col||"var(--child)")+'" stroke-width="'+stroke+'" fill="none" stroke-linecap="round" stroke-dasharray="'+(c*p).toFixed(1)+' '+c.toFixed(1)+'" transform="rotate(-90 '+size/2+' '+size/2+')"/></svg><b style="font-size:'+Math.round(size/4.2)+'px'+(txt?';color:'+txt:'')+'">'+(label||Math.round(p*100)+"%")+'</b></span>';}
function banner(c,kicker,title,sub,right,withCard){
 var t=theme(c),k=card(c.id);
 var h='<section class="hero kid-hero" style="background-color:'+t.bg+';color:'+t.txt+'"><div class="hero-id">'+(withCard?'<span class="shield" style="background:'+t.acc+';color:'+shieldFg(t)+'" aria-label="Niveau '+k.level+'">'+k.level+'</span>':'')+'<div><span class="over">'+kicker+'</span><h1>'+esc(title)+'</h1>'+(sub?'<p class="hsub">'+esc(sub)+'</p>':'');
 if(withCard)h+='<div class="badges">'+(k.badges.length?k.badges.map(function(b){return '<span>'+esc(b)+'</span>';}).join(""):'<span>Encore '+k.next+' missions pour le niveau '+(k.level+1)+'</span>')+'</div>';
 return h+'</div></div>'+(right?'<div class="hero-stats">'+right+'</div>':'')+'</section>';}

function topbar(v){
 var c=child(v),sec=curSection();
 var h='<header class="topbar"><a class="brand" href="#accueil" aria-label="Accueil de l’Académie">'+logo(40)+'<span class="wordmark"><span>ACADÉMIE</span><b>KIZUNA</b></span></a>';
 if(c){h+='<nav class="secnav" aria-label="Sections">'+SECTIONS.map(function(s){return '<a href="#'+esc(c.id)+(s[0]==="jour"?"":"/"+s[0])+'" class="sec" aria-current="'+(sec===s[0]?"page":"false")+'">'+'<span class="secpic">'+picto(s[2],30)+'</span><span>'+s[1]+'</span></a>';}).join("")+'</nav>';}
 h+='<div class="who">';
 var cur=c||null,ct=cur?theme(cur):THEMES[themeName(null)];
 h+='<details class="pmenu"'+(S.pmenu?" open":"")+'><summary aria-label="Changer de profil"><span class="av" style="background:'+ct.bg+';color:'+ct.txt+'">'+esc(cur?cur.name.charAt(0):(v==="parents"?"P":"≡"))+'</span><span class="pm-name">'+esc(cur?cur.name:v==="parents"?"Parents":v==="parametres"?"Paramètres":v==="accueil"?"Profils":"Conseils")+'</span><span class="caret" aria-hidden="true">▾</span></summary><div class="pm-list">';
 children().forEach(function(ch){var t2=theme(ch);h+='<button class="pm-item" data-view="'+esc(ch.id)+'" aria-current="'+(v===ch.id?"page":"false")+'"><span class="av" style="background:'+t2.bg+';color:'+t2.txt+'">'+esc(ch.name.charAt(0))+'</span>'+esc(ch.name)+'</button>';});
 h+='<button class="pm-item" data-view="parents" aria-current="'+(v==="parents"?"page":"false")+'"><span class="av" style="background:#3A4250;color:#fff">P</span>Vue parents</button><button class="pm-item" data-view="parametres" aria-current="'+(v==="parametres"?"page":"false")+'"><span class="av" style="background:#E9EEF0;color:#0D3B45">'+GEAR+'</span>Paramètres</button><button class="pm-item" data-view="conseils"><span class="av" style="background:#0D3B45;color:#fff">?</span>Conseils</button></div></details>';
 if(c){var k=card(c.id);h+='<span class="streak" title="Jours de suite">'+FLAME+'<b>'+k.streak+'</b></span>';}
 h+='<nav class="profiles" aria-label="Profils">';
 children().forEach(function(ch){var t=theme(ch);var on=v===ch.id;h+='<button class="prof" data-view="'+esc(ch.id)+'" aria-current="'+(on?"page":"false")+'" style="--tc:'+t.bg+';--tt:'+t.txt+'"><span class="av">'+esc(ch.name.charAt(0))+'</span><span class="pn">'+esc(ch.name)+'</span></button>';});
 var tp=THEMES[themeName(null)];
 h+='<button class="prof txt" data-view="parents" aria-current="'+(v==="parents"?"page":"false")+'" style="--tc:'+tp.bg+';--tt:'+tp.txt+'">Parents</button>';
 h+='<button class="prof txt" data-view="conseils" aria-current="'+(v==="conseils"?"page":"false")+'" style="--tc:#0D3B45;--tt:#FFFFFF">Conseils</button><button class="prof gear" data-view="parametres" aria-current="'+(v==="parametres"?"page":"false")+'" aria-label="Paramètres" title="Paramètres" style="--tc:#3A4250;--tt:#FFFFFF">'+GEAR+'</button></nav></div>';
 return h+'</header>';
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
var FOLDS=[["notef","Ajouter un retour de professeur","note"],["stampf","Donner un tampon","stamp"],["senseif","Écrire le mot du sensei","sensei"],["addhw","Ajouter une mission","addhw"],["bulk","Saisie rapide de plusieurs missions","bulk"],["idea","Proposer une idée de loisir ou de sortie","idea"]];
function foldForms(){FOLDS.forEach(function(f){var el=document.getElementById(f[0]);if(!el||el.parentNode.tagName==="DETAILS")return;
 var d=document.createElement("details");d.className="fold"+(f[0]==="bulk"||f[0]==="notef"?" wide":"");d.setAttribute("data-fold",f[0]);
 if((S.open||{})[f[0]]||S.msg[f[2]]||(f[0]==="bulk"&&S.bulk.items)||(f[0]==="notef"&&S.editNote))d.open=true;
 var sm=document.createElement("summary");sm.textContent="+ "+f[1];d.appendChild(sm);el.parentNode.insertBefore(d,el);d.appendChild(el);});}
function renderHome(){
 var hr=new Date().getHours();
 var h='<div class="home"><div class="home-head">'+logo(72)+'<h1>'+(hr<18?"Bonjour":"Bonsoir")+' !</h1><p>Qui ouvre l’Académie ?</p></div><div class="home-grid">';
 children().forEach(function(c){var t=theme(c),k=card(c.id),mp=mprog(c.id,TODAY),left=mp.t-mp.n;
  h+='<a class="home-card" href="#'+esc(c.id)+'" style="background-color:'+t.bg+';color:'+t.txt+'"><span class="shield" style="background:'+t.acc+';color:'+shieldFg(t)+'" aria-hidden="true">'+k.level+'</span><span class="hc-txt"><b>'+esc(c.name)+'</b><small>'+(mp.t?(left?left+" mission"+(left>1?"s":"")+" aujourd’hui":"Tout est fait aujourd’hui !"):"Rien de prévu aujourd’hui")+(k.streak>1?" · "+k.streak+" jours de suite":"")+'</small></span>'+(mp.t?ring(mp.n/mp.t,56,6,mp.n+"/"+mp.t,t.acc,"rgba(255,255,255,.25)",t.txt):'')+'</a>';});
 var tp=THEMES[themeName(null)];
 h+='</div><div class="home-more"><a class="home-small" href="#parents" style="--tc:'+tp.bg+'"><span class="av" style="background:'+tp.bg+';color:#fff">P</span>Vue parents</a><a class="home-small" href="#conseils"><span class="av" style="background:#0D3B45;color:#fff">?</span>Conseils</a></div></div>';
 return h;}
function hardOf(cid,plan){var out=[];if(!plan)return out;var ch=plan.data.children[cid];if(!ch||!ch.blocks)return out;Object.keys(ch.blocks).sort().forEach(function(d){ch.blocks[d].forEach(function(b){if(b.id&&S.diff[b.id]>=4&&S.done[b.id])out.push({l:b.l,date:d,n:S.diff[b.id]});});});return out;}
function pendingExtras(cid,date){
 var due=addDays(date,1),labels={};
 blocksOf(cid,date).forEach(function(b){labels[fold(b.l).replace(/[^a-z0-9]+/g," ").trim()]=1;});
 return S.extras.filter(function(e){if(!(e.child===cid||e.child==="tous")||e.due!==due||e.kind==="rev")return false;
  var core=fold(e.text).replace(/[^a-z0-9]+/g," ").trim().slice(0,30);
  return !Object.keys(labels).some(function(l){return l.indexOf(core)>=0;});});}
var NOTE_SRC=[["mail","E-mail"],["reunion","Réunion"],["bulletin","Bulletin"],["oral","À l’oral"],["cahier","Carnet de liaison"],["autre","Autre"]];
var NOTE_TONE=[["positif","Encouragement"],["mixte","Encouragement et points à travailler"],["travail","Point à travailler"]];
function notesFor(cid,sharedOnly){return S.notes.filter(function(n){return (n.child===cid||n.child==="tous")&&(!sharedOnly||n.shared);}).sort(function(a,b){return (a.date||"")<(b.date||"")?1:-1;});}
function weekKey(){var d=new Date(TODAY+"T12:00:00");var wd=(d.getDay()+6)%7;return addDays(TODAY,-wd);}
function goalId(n){return "goal|"+n.id+"|"+weekKey();}
function noteLabel(list,v){var x=list.filter(function(z){return z[0]===v;})[0];return x?x[1]:"";}
function kidNoteHtml(n){
 var h='<article class="tnote tone-'+esc(n.tone||"mixte")+'"><header><b>'+esc(n.subject||"Professeur")+'</b>'+(n.teacher?' · '+esc(n.teacher):'')+'<small>'+esc(fmtDate(n.date||TODAY,{day:"numeric",month:"long"}))+'</small></header>';
 if(n.kid_strengths)h+='<div class="tn-part good"><em>Ce que ton professeur apprécie chez toi</em><p>'+esc(n.kid_strengths)+'</p></div>';
 if(n.kid_expect)h+='<div class="tn-part expect"><em>Ce qu’il attend de toi</em><p>'+esc(n.kid_expect)+'</p></div>';
 if(n.kid_next)h+='<div class="tn-part next"><em>Ce qui peut changer</em><p>'+esc(n.kid_next)+'</p></div>';
 return h+'</article>';}
function goalHtml(n,compact){var gid=goalId(n),ok=!!S.done[gid];
 return '<div class="goal'+(ok?" ok":"")+'"><span class="g-txt"><em>Mon objectif'+(n.subject?' · '+esc(n.subject):'')+'</em><b>'+esc(n.goal)+'</b></span><button class="g-btn" data-id="'+esc(gid)+'" aria-pressed="'+ok+'">'+(ok?"Tenu cette semaine ✓":"Cette semaine, je l’ai tenu")+'</button></div>';}
function activeGoals(cid){return notesFor(cid,true).filter(function(n){return n.goal&&n.goal_active!==false;});}
function noteForm(){
 var n=S.editNote?S.notes.filter(function(x){return String(x.id)===String(S.editNote);})[0]||{}:{};
 var opt=function(list,v){return list.map(function(o){return '<option value="'+o[0]+'"'+(o[0]===v?" selected":"")+'>'+o[1]+'</option>';}).join("");};
 var h='<form class="card f notef" id="notef"><h2>'+(S.editNote?"Modifier le retour":"Nouveau retour de professeur")+'</h2>';
 h+='<div class="cols three"><label for="n-child">Enfant<select id="n-child">'+children().map(function(c){return '<option value="'+esc(c.id)+'"'+(n.child===c.id?" selected":"")+'>'+esc(c.name)+'</option>';}).join("")+'<option value="tous"'+(n.child==="tous"?" selected":"")+'>Tous</option></select></label>';
 h+='<label for="n-date">Date<input id="n-date" type="date" value="'+esc(n.date||TODAY)+'"></label><label for="n-src">Reçu par<select id="n-src">'+opt(NOTE_SRC,n.source||"mail")+'</select></label></div>';
 h+='<div class="cols three"><label for="n-subj">Matière<input id="n-subj" type="text" value="'+esc(n.subject||"")+'" placeholder="ex. EPS"></label><label for="n-teacher">Professeur (facultatif)<input id="n-teacher" type="text" value="'+esc(n.teacher||"")+'" placeholder="ex. M. Dupont"></label><label for="n-tone">Type<select id="n-tone">'+opt(NOTE_TONE,n.tone||"mixte")+'</select></label></div>';
 h+='<label for="n-orig">Message d’origine (privé : seuls les parents le voient)<textarea id="n-orig" placeholder="Collez ici le message du professeur. Évitez les noms d’autres élèves : écrivez « un camarade ».">'+esc(n.original||"")+'</textarea></label>';
 h+='<fieldset class="kidver"><legend>Version pour l’enfant</legend><p class="det">Trois phrases simples et bienveillantes. Laissez vide ce qui ne s’applique pas.</p>';
 h+='<label for="n-good">Ce que le professeur apprécie chez lui/elle<textarea id="n-good" rows="2">'+esc(n.kid_strengths||"")+'</textarea></label>';
 h+='<label for="n-expect">Ce qu’il attend<textarea id="n-expect" rows="2">'+esc(n.kid_expect||"")+'</textarea></label>';
 h+='<label for="n-next">Ce qui peut changer (facultatif)<textarea id="n-next" rows="2">'+esc(n.kid_next||"")+'</textarea></label>';
 h+='<label for="n-goal">Objectif à suivre chaque semaine (facultatif)<input id="n-goal" type="text" value="'+esc(n.goal||"")+'" placeholder="ex. Me mettre au travail dès le goûter fini"></label>';
 h+='<label class="chkline"><input type="checkbox" id="n-shared"'+(n.shared?" checked":"")+'> Montrer la version pour l’enfant (et l’objectif) dans son profil</label>';
 if(S.editNote)h+='<label class="chkline"><input type="checkbox" id="n-goalon"'+(n.goal_active!==false?" checked":"")+'> Objectif toujours en cours</label>';
 h+='</fieldset><div class="btnrow"><button class="btn" type="submit">'+(S.editNote?"Enregistrer les modifications":"Enregistrer le retour")+'</button>'+(S.editNote?'<button class="btn sec" type="button" data-act="note-cancel">Annuler</button>':'')+'</div>'+msgHtml("note")+(S.notesMissing&&!DEMO?'<p class="msg err">Exécutez d’abord le bloc SQL « v0.10.0 » dans Supabase.</p>':'')+'</form>';
 return h;}
function renderNotesParents(){
 var h='<section class="card wide notes-card"><h2>Retours des professeurs</h2><p class="det">Le message d’origine reste privé. L’enfant ne voit que la version pour lui, et seulement si vous cochez « Montrer ».</p>';
 if(!S.notes.length)h+='<p class="none">Aucun retour pour le moment.</p>';
 children().forEach(function(c){var ns=notesFor(c.id).filter(function(n){return n.child===c.id||n.child==="tous";});if(!ns.length)return;
  h+='<div class="nk"><h3>'+esc(c.name)+'</h3>'+ns.map(function(n){var gid=goalId(n);
   return '<div class="nrow"><div class="nr-txt"><b>'+esc(n.subject||"—")+(n.teacher?' · '+esc(n.teacher):'')+'</b><small>'+esc(fmtDate(n.date||TODAY))+' · '+esc(noteLabel(NOTE_SRC,n.source))+' · '+esc(noteLabel(NOTE_TONE,n.tone))+'</small><span class="nr-flag '+(n.shared?"on":"off")+'">'+(n.shared?"Visible par l’enfant":"Privé")+'</span>'+(n.kid_strengths||n.kid_expect?'<p>'+esc([n.kid_strengths,n.kid_expect].filter(Boolean).join(" · "))+'</p>':'<p class="none">Pas encore de version pour l’enfant.</p>')+(n.goal?'<small class="nr-goal">Objectif : '+esc(n.goal)+(n.goal_active===false?" (terminé)":S.done[gid]?" · tenu cette semaine ✓":" · pas encore coché cette semaine")+'</small>':'')+(n.original?'<details class="orig"><summary>Message d’origine</summary><p>'+esc(n.original)+'</p></details>':'')+'</div><div class="nr-btns"><button class="btn sec mini" data-editnote="'+esc(n.id)+'">Modifier</button><button class="btn sec mini" data-delnote="'+esc(n.id)+'">Supprimer</button></div></div>';}).join("")+'</div>';});
 return h+'</section>';}
function footer(){return '<footer class="foot">'+syncLine()+'<a href="#conseils">Conseils</a></footer>';}
function render(){
 if(!S.fam){root.innerHTML='<div class="wrap">'+topbar("parents")+renderParents(true)+footer()+'</div>';bindForms();return;}
 var v=curView();var c=child(v);var t=theme(c);
 var plan=planOf(S.day);
 var h='<div class="wrap'+(c?" kid":"")+'" style="--child:'+t.bg+';--acc:'+t.acc+';--ctxt:'+t.txt+'">';
 h+=topbar(v);
 if(S.msg.global)h+='<p class="msg'+(S.msg.global.e?" err":"")+'" role="status">'+esc(S.msg.global.t)+'</p>';
 if(c){var sec=curSection();
  if(sec==="livres")h+=renderLibrary(c);
  else if(sec==="tampons")h+=renderStamps(c,plan);
  else if(!plan)h+='<div class="card"><p>Aucun planning pour cette période.</p></div>';
  else if(sec==="semaine")h+=renderWeek(c,plan);
  else h+=renderChild(c,plan);}
 else if(v==="parents")h+=renderParents(false);
 else if(v==="parametres")h+=renderSettings(false);
 else if(v==="accueil")h+=renderHome();
 else h+=renderTips(plan);
 h+=footer();
 if(c&&S.focus)h+=renderFocus(c);
 h+='</div>';
 root.innerHTML=h;foldForms();bindForms();
 if(c&&S.focus){var fb=document.querySelector(".focus [data-fdone]")||document.querySelector(".focus [data-fclose]");if(fb)fb.focus();}
}
function hero(c,plan){
 var t=theme(c),k=card(c.id),w=weekProg(c.id,plan),st=stampsFor(c.id);
 var h='<section class="hero" style="background-color:'+t.bg+';color:'+t.txt+'">';
 h+='<div class="hero-id"><span class="shield" style="background:'+t.acc+';color:'+shieldFg(t)+'">'+k.level+'</span><div><span class="over">Carte d’élève · niveau '+k.level+'</span><h1>'+esc(c.name)+'</h1><div class="badges">'+(k.badges.length?k.badges.map(function(b){return '<span>'+esc(b)+'</span>';}).join(""):'<span>Encore '+k.next+' missions pour le niveau '+(k.level+1)+'</span>')+'</div></div></div>';
 h+='<div class="hero-stats"><div class="wk-prog"><div><span>Ma semaine</span><b>'+pct(w)+' %</b></div><div class="track"><i style="width:'+pct(w)+'%;background:'+t.acc+'"></i></div><small>'+w.n+' mission'+(w.n>1?"s":"")+' sur '+w.t+'</small></div>';
 h+='<div class="hero-stamps">'+stampHtml(54)+'<div><b>'+st.length+'</b><small>tampon'+(st.length>1?"s":"")+'</small></div></div></div>';
 return h+'</section>';
}

/* --- missions : ordre, prochaine, état --- */
function isTask(b){var kd=KINDS[b.k];return !!(kd&&kd[2]&&b.id)||(b.k==="rel"&&b.rel&&(subs(b.rel.today).length||subs(b.rel.tomorrow).length));}
function relIds(b){return subs(b.rel.today).map(function(s){return b.rel.idp+"|t|"+s;}).concat(subs(b.rel.tomorrow).map(function(s){return b.rel.idp+"|d|"+s;}));}
function isDoneB(b){if(b.k==="rel"&&b.rel){var ids=relIds(b);return ids.length&&ids.every(function(i){return S.done[i];});}return !!S.done[b.id];}
function keyOf(b){return b.k==="rel"&&b.rel?b.rel.idp:b.id;}
function tasksOf(cid,date){var all=blocksOf(cid,date);return all.filter(function(b){return !b.over&&isTask(b);}).concat(all.filter(function(b){return b.over&&isTask(b);}));}
function mprog(cid,date){var t=tasksOf(cid,date);return {n:t.filter(isDoneB).length,t:t.length};}
function nextTask(cid,date){return tasksOf(cid,date).filter(function(b){return !isDoneB(b);})[0]||null;}
function dayChip(c,d){var p=mprog(c.id,d.date);var st=p.t&&p.n===p.t?"full":p.n?"part":"";return '<button class="dchip'+(d.date===TODAY?" is-today":"")+'" data-day="'+d.date+'" aria-pressed="'+(d.date===S.day)+'" aria-label="'+esc(d.long)+', '+p.n+' sur '+p.t+'"><span>'+esc(d.short.charAt(0))+'</span><b>'+d.num+'</b><i class="'+st+'"></i></button>';}

function renderChild(c,plan){
 var days=plan.data.days;var di=dayInfo(S.day)||days[0];var p=mprog(c.id,S.day);var full=p.t&&p.n===p.t;
 var sc=((plan.data.children[c.id]||{}).school||{})[S.day];
 var hr=new Date().getHours();
 var title=S.day===TODAY?(hr<18?"Bonjour ":"Bonsoir ")+c.name:di.long;
 var tasks=tasksOf(c.id,S.day);var left=tasks.filter(function(b){return !isDoneB(b);});
 var lastT=left.length?left[left.length-1].t:null;
 var sub=!tasks.length?"Rien de prévu ce jour-là.":full?"Tout est fait. Bravo !":(tasks.length-left.length)+" mission"+(tasks.length-left.length>1?"s":"")+" faite"+(tasks.length-left.length>1?"s":"")+", encore "+left.length+"."+(lastT&&!left[left.length-1].over?" Dernière prévue à "+lastT+".":"");
 var h='<div class="today"><section class="main-col">';
 var t0=theme(c),st0=stampsFor(c.id);
 h+=banner(c,esc(S.day===TODAY?di.long:(S.day<TODAY?"Journée passée":di.long))+(sc?' · '+esc(sc):''),title,sub,
  '<div class="hero-ring">'+ring(p.t?p.n/p.t:0,76,8,p.t?p.n+"/"+p.t:"–",t0.acc,"rgba(255,255,255,.25)",t0.txt)+'<small>missions<br>du jour</small></div><div class="hero-stamps">'+stampHtml(54)+'<div><b>'+st0.length+'</b><small>tampon'+(st0.length>1?"s":"")+'</small></div></div>',true);
 h+='<div class="dstrip" role="group" aria-label="Jours de la semaine">'+days.map(function(d){return dayChip(c,d);}).join("")+'</div>';
 var nt=nextTask(c.id,S.day);
 if(nt){h+='<div class="nextcard">'+'<span class="nc-pic">'+picto(pictoName(nt)||"Devoir",64)+'</span><div class="nc-txt"><span class="kicker acc">'+(S.day===TODAY?"Prochaine mission":"Première mission")+(nt.over?"":" · "+esc(nt.t))+'</span><h2>'+esc(nt.l)+'</h2>'+(nt.d?'<p>'+esc(nt.d)+'</p>':'')+'</div><button class="cta" data-focus="'+esc(keyOf(nt))+'">Commencer</button></div>';}
 else if(full)h+='<div class="boom"><span>MISSION ACCOMPLIE !</span></div>';
 var nd0=addDays(S.day,1),due0=dueFor(c.id,nd0),ev0=evalsFor(c.id).filter(function(e){return e[0]>=S.day;})[0],sm0=senseiFor(c.id);
 if(ev0||due0.length||sm0||activeGoals(c.id).length){h+='<div class="m-alerts">';
  if(ev0){var dd0=dDiff(ev0[0],S.day);h+='<div class="m-ev"><b>'+(dd0===0?"Évaluation aujourd’hui":dd0===1?"Évaluation demain":"Évaluation dans "+dd0+" jours")+'</b><span>'+esc(ev0[1])+'</span></div>';}
  if(due0.length)h+='<details class="m-due"><summary>Pour demain : '+due0.length+' chose'+(due0.length>1?"s":"")+' à rendre</summary><ul class="dots">'+due0.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul></details>';
  if(sm0)h+='<div class="m-sensei"><b>Le mot du sensei</b><span>'+esc(sm0.text)+'</span></div>';
  activeGoals(c.id).slice(0,1).forEach(function(n){h+=goalHtml(n,true);});
  h+='</div>';}
 var pend=pendingExtras(c.id,S.day);
 if(pend.length)h+='<section class="card pending"><h2>Ajouté par les parents</h2><p class="det">Ces missions seront placées dans ta journée à la prochaine synchronisation (7h ou 18h).</p><ul class="dots">'+pend.map(function(e){return '<li>'+esc((e.subject?e.subject+" : ":"")+e.text)+'</li>';}).join("")+'</ul></section>';
 h+=renderEdt(c,S.day);
 h+='<section class="card pathcard"><div class="pc-head"><h2>Le chemin du jour</h2><span>'+p.n+' sur '+p.t+'</span></div>'+(S.diffMissing&&!DEMO?'<p class="msg err">Les notes de difficulté ne sont pas encore enregistrées : un parent doit exécuter le bloc SQL « v0.9.0 » dans Supabase.</p>':'')+(lsGet("kizuna-hint-check")?'':'<p class="hint">Touche le <b>rond</b> quand une mission est faite. Touche son <b>nom</b> pour l’ouvrir en grand. <button class="linkbtn" data-act="hint-ok">Compris</button></p>')+'<ol class="path">';
 var all=blocksOf(c.id,S.day);var bl=all.filter(function(b){return !b.over;});var over=all.filter(function(b){return b.over;});
 var nk=nt?keyOf(nt):null;
 bl.forEach(function(b){h+=stepHtml(b,nk);});
 h+='</ol>';
 if(over.length){h+='<div class="overbox"><h3>Pas de place avant le coucher</h3><p>Trop de travail pour ce jour-là : voyez avec un parent pour le faire plus tôt, le matin ou en version courte.</p><ol class="path">';over.forEach(function(b){h+=stepHtml(b,nk);});h+='</ol></div>';}
 h+='</section></section>'+renderSide(c,plan)+'</div>';
 return h;
}
function stepHtml(b,nk){
 var task=isTask(b),done=task&&isDoneB(b),now=task&&keyOf(b)===nk;
 var pn=pictoName(b);
 if(!task)return '<li class="step calm"><span class="node-col"><span class="dot"></span></span><div class="st-txt"><span class="st-t">'+esc(b.t)+'</span><span class="st-l">'+esc(b.l)+'</span></div></li>';
 var node;
 if(b.k==="rel")node='<span class="node rel'+(done?" done":"")+'">'+(done?'':'<span class="np">'+svgPic(pn)+'</span>')+'</span>';
 else node='<span class="node-wrap"><input type="checkbox" class="chk node'+(now?" now":"")+(S.pop===b.id?" pop":"")+'" data-id="'+esc(b.id)+'" aria-label="Fait : '+esc(b.l)+'"'+(done?" checked":"")+'>'+(done?'':'<span class="np" aria-hidden="true">'+svgPic(pn)+'</span>')+(done&&S.diff[b.id]?diffBadge(S.diff[b.id]):'')+'</span>';
 var h='<li class="step'+(done?" done":"")+(now?" now":"")+(b.k==="loi"?" loi":"")+'"><span class="node-col">'+node+'</span><div class="st-txt">';
 h+=(now?'<span class="st-t acc">En cours · '+esc(b.over?"sans horaire":b.t)+'</span>':'<span class="st-t">'+esc(b.over?"Sans horaire":b.t)+'</span>');
 h+='<button class="st-l link" data-focus="'+esc(keyOf(b))+'">'+esc(b.l)+'</button>';
 if(b.d)h+='<span class="st-d">'+esc(b.d)+'</span>';
 if(b.k==="rel"&&b.rel)h+=renderRel(b.rel);
 if(done&&RATEABLE[b.k]){if(S.rate===b.id)h+=rateRow(b.id);else h+='<button class="linkbtn diff-link" data-rateopen="'+esc(b.id)+'">'+(S.diff[b.id]?"Difficulté "+S.diff[b.id]+"/5 · "+DIFF[S.diff[b.id]][0].toLowerCase()+" · modifier":"Noter la difficulté")+'</button>';}
 return h+'</div></li>';
}
function svgPic(name){return name&&PICTOS[name]?'<svg width="30" height="30" viewBox="0 0 48 48">'+PICTOS[name]+'</svg>':'';}
function renderRel(r){
 function row(lab,arr,code,empty){arr=subs(arr);if(!arr.length)return empty?'<div class="row"><em>'+lab+'</em><span class="none">'+empty+'</span></div>':"";var s='<div class="row"><em>'+lab+'</em>';arr.forEach(function(sub){var id=r.idp+"|"+code+"|"+sub;s+='<button class="chip" data-id="'+esc(id)+'" aria-pressed="'+(!!S.done[id])+'">'+esc(sub)+'</button>';});return s+'</div>';}
 return '<div class="rel">'+row("Du jour",r.today,"t")+row("De demain",r.tomorrow,"d","Pas de leçon à relire pour demain : profites-en pour avancer ou lire.")+'</div>';
}
function side(title,inner,cls){return '<section class="card side-card'+(cls?" "+cls:"")+'"><h2>'+title+'</h2>'+inner+'</section>';}
function renderSide(c,plan){
 var h='<aside class="side">';
 var p=mprog(c.id,S.day),w=weekProg(c.id,plan);
 var m=senseiFor(c.id);
 if(m)h+=side('<span class="sensei-t">Le mot du sensei</span>','<p class="sensei-msg">'+esc(m.text)+'</p><small class="muted">'+esc(fmtDate(m.created_at.slice(0,10),{weekday:"long",day:"numeric",month:"long"}))+'</small>','sensei');
 var ag=activeGoals(c.id);
 if(ag.length)h+=side("Mon objectif",ag.slice(0,2).map(function(n){return goalHtml(n,true);}).join(""));
 var nd=addDays(S.day,1);var due=dueFor(c.id,nd);
 h+=side("Pour demain, "+esc(fmtDate(nd,{weekday:"long",day:"numeric"})),due.length?'<ul class="dots">'+due.map(function(x){return "<li>"+esc(x)+"</li>";}).join("")+'</ul>':'<p class="none">Rien de noté pour demain.</p>');
 var ev=evalsFor(c.id).filter(function(e){return e[0]>=S.day;});
 if(ev.length){var e=ev[0],d=dDiff(e[0],S.day);
  h+='<section class="card evalcard"><span class="kicker acc">'+esc(fmtDate(e[0],{weekday:"long",day:"numeric"}))+'</span><h2>'+(d===0?"Évaluation aujourd’hui":d===1?"Évaluation demain":"Évaluation dans "+d+" jours")+'</h2><p>'+esc(e[1])+'</p>'+(ev.length>1?'<a class="more" href="#'+esc(c.id)+'/semaine">'+(ev.length-1)+' autre'+(ev.length>2?"s":"")+' à venir</a>':'')+'</section>';}
 return h+'</aside>';
}
function renderWeek(c,plan){
 var wp=weekProg(c.id,plan);var h='<div class="narrow">'+banner(c,esc(plan.data.title),"Ma semaine","",'<div class="hero-ring">'+ring(wp.t?wp.n/wp.t:0,72,8,pct(wp)+"%",theme(c).acc,"rgba(255,255,255,.25)",theme(c).txt)+'</div>')+weeksNav();
 h+='<section class="card"><ol class="weeklist">';
 plan.data.days.forEach(function(d){var p=mprog(c.id,d.date);var sc=((plan.data.children[c.id]||{}).school||{})[d.date]||"";var ev=evalsFor(c.id).filter(function(e){return e[0]===d.date;});
  h+='<li><button class="wrow'+(d.date===TODAY?" is-today":"")+'" data-day="'+d.date+'" data-sec="jour">'+ring(p.t?p.n/p.t:0,52,6,p.t?p.n+"/"+p.t:"–")+'<span class="wr-txt"><b>'+esc(d.date===TODAY?"Aujourd’hui · "+d.long:d.long)+'</b><small>'+esc(sc)+'</small>'+(ev.length?'<small class="evtxt">Évaluation : '+esc(ev.map(function(e){return e[1];}).join(" ; "))+'</small>':'')+'</span><span class="chev" aria-hidden="true">›</span></button></li>';});
 h+='</ol></section>';
 var ev=evalsFor(c.id);
 h+=side("Évaluations à venir",ev.length?ev.map(function(e){var d=dDiff(e[0],TODAY);var lab=d<0?"passée":d===0?"aujourd’hui":d===1?"demain":"J-"+d;return '<div class="ev'+(d<0?" past":"")+'"><span>'+esc(e[1])+'<small>'+esc(fmtDate(e[0]))+'</small></span><b>'+lab+'</b></div>';}).join(""):'<p class="none">Aucune évaluation notée.</p>');
 var ids=ideasFor(c.id).filter(function(x){return !x.date||x.date>=addDays(TODAY,-1);});
 h+=side("Idées pour toi",ids.length?ids.map(function(x){var id="idea|"+x.id;var k=(IDEA_KINDS.filter(function(z){return z[0]===x.kind;})[0]||["","Idée"])[1];
   return '<div class="xl">'+picto("Loisir",38)+'<span><small class="loi-t">'+esc(k)+(x.date?' · '+esc(fmtDate(x.date))+(x.time?' '+esc(x.time):''):'')+'</small><b>'+esc(x.title)+'</b>'+(x.detail?'<small>'+esc(x.detail)+'</small>':'')+(x.link?'<a href="'+esc(x.link)+'" rel="noopener" target="_blank">Lien</a>':'')+'</span><input type="checkbox" class="chk" data-id="'+esc(id)+'" aria-label="Fait : '+esc(x.title)+'"'+(S.done[id]?" checked":"")+'></div>';}).join(""):'<p class="none">Pas d’idée pour le moment.</p>');
 return h+'</div>';
}
function renderLibrary(c){
 var bk=booksFor(c.id);
 var h='<div class="narrow">'+banner(c,"Bibliothèque de l’Académie","Ma bibliothèque","",'<div class="hero-num"><b>'+bk.length+'</b><small>livre'+(bk.length>1?"s":"")+'</small></div><div class="hero-num"><b>'+fmtN(pagesOf(bk))+'</b><small>pages</small></div>');
 h+='<section class="card side-card">'+(S.bookOpen?bookForm(c.id):'<button class="cta" type="button" data-act="book-open">J’ai fini un livre</button>')+'</section>';
 h+='<section class="card side-card">'+(bk.length?'<ul class="books">'+bk.map(function(b){return '<li>'+picto("Lecture",40)+'<span><b>'+esc(b.title)+'</b>'+(b.author?' · '+esc(b.author):'')+'<small>'+(b.pages?fmtN(+b.pages)+' pages · ':'')+(b.finished?esc(fmtDate(b.finished,{day:"numeric",month:"short",year:"numeric"})):'')+'</small></span><button class="linkbtn" data-delbook="'+esc(b.id)+'" aria-label="Retirer '+esc(b.title)+'">Retirer</button></li>';}).join("")+'</ul>':'<p class="none">Note ici chaque livre terminé, même pour le plaisir.</p>')+'</section>';
 return h+'</div>';
}
function renderStamps(c,plan){
 var st=stampsFor(c.id);
 var h='<div class="narrow">'+hero(c,plan||planOf(TODAY)||S.plans[S.plans.length-1]);
 h+=side("Mes tampons de l’Académie",st.length?st.map(function(x){return '<div class="stamp-row">'+stampHtml(46)+'<span><b>'+esc((x.title||"")+(x.note?" · "+x.note:""))+'</b>'+(x.message?'<small>« '+esc(x.message)+' »</small>':'')+'<small>'+esc(fmtDate(x.date||x.created_at.slice(0,10)))+'</small></span></div>';}).join(""):'<p class="none">Ton premier tampon arrivera après une bonne note préparée avec tes révisions.</p>');
 var kn=notesFor(c.id,true);
 var gl=activeGoals(c.id);
 if(gl.length)h+=side("Mes objectifs",gl.map(function(n){return goalHtml(n);}).join(""));
 h+=side("Ce que pensent mes professeurs",kn.length?kn.map(kidNoteHtml).join(""):'<p class="none">Quand tes professeurs donnent des nouvelles, tes parents peuvent les partager ici.</p>');
 h+=side("Comment monter de niveau",'<ul class="dots"><li>Un niveau toutes les 40 missions cochées.</li><li>« Jours de suite » : au moins 80 % de la journée faite.</li><li>Lecteur : 15 lectures ou 3 livres. Stratège : 10 révisions. Pilier de la maison : 15 tâches.</li><li>Un tampon : une bonne note préparée avec tes révisions.</li></ul>');
 return h+'</div>';
}
function renderFocus(c){
 var tasks=tasksOf(c.id,S.day);var i=-1;tasks.forEach(function(b,j){if(keyOf(b)===S.focus)i=j;});
 if(i<0){S.focus=null;return "";}
 var b=tasks[i],done=isDoneB(b),n=tasks.filter(isDoneB).length;
 var h='<div class="focus-bg" data-fclose="1"></div><div class="focus" role="dialog" aria-modal="true" aria-labelledby="f-title"><header><button class="fx" data-fclose="1" aria-label="Fermer">×</button><span class="fbar"><i style="width:'+Math.round(100*n/tasks.length)+'%"></i></span><b>'+(i+1)+'/'+tasks.length+'</b></header>';
 h+='<div class="fbody">'+picto(pictoName(b)||"Devoir",84)+'<span class="kicker acc">'+(KINDS[b.k]?esc(KINDS[b.k][0]):"Mission")+(b.over?"":" · "+esc(b.t))+'</span><h2 id="f-title">'+esc(b.l)+'</h2>'+(b.d?'<p>'+esc(b.d)+'</p>':'');
 if(b.k==="rel"&&b.rel)h+=renderRel(b.rel)+'<p class="st-d">Touche chaque matière quand elle est relue.</p>';
 if(b.k==="rev")h+='<div class="tipbox">'+stampHtml(34)+'<span>Une bonne note après tes révisions ? Montre-la à un parent : tampon de l’Académie à la clé.</span></div>';
 else if(b.k==="dev")h+='<div class="tipbox">'+stampHtml(34)+'<span>Bloqué ? Note ta question pour la poser au professeur.</span></div>';
 h+='</div><footer>';
 if(b.k==="rel")h+='<button class="cta" data-fnext="1">'+(done?"Suivante":"Continuer")+'</button>';
 else if(done)h+=(RATEABLE[b.k]?rateRow(b.id,S.diff[b.id]?"Difficulté notée : tu peux la changer":"C’était comment ?"):'')+'<button class="cta sec" data-fundo="'+esc(b.id)+'">Pas encore fait</button><button class="cta" data-fnext="1">Suivante</button>';
 else if(RATEABLE[b.k])h+='<div class="raterow fdone" role="group" aria-label="C’est fait : difficulté"><span class="rr-q">C’est fait ! C’était comment ?</span><div class="rr-btns">'+[1,2,3,4,5].map(function(n){var d=DIFF[n];return '<button class="rr" data-fdone="'+esc(b.id)+'" data-n="'+n+'" style="--dc:'+d[1]+';--dt:'+d[2]+'"><b>'+n+'</b><small>'+d[0]+'</small></button>';}).join("")+'</div></div><button class="cta" data-fdone="'+esc(b.id)+'">C’est fait (sans noter)</button>';
 else h+='<button class="cta" data-fdone="'+esc(b.id)+'">C’est fait</button>';
 return h+'<button class="linkbtn" data-fclose="1">Plus tard</button></footer></div>';
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
  h+='<div class="kidcards">'+children().map(function(c){var t=theme(c),mp=mprog(c.id,TODAY),w=weekProg(c.id,plan),ev=evalsFor(c.id).filter(function(e){return e[0]>=TODAY;})[0];
   return '<button class="kidcard" data-go="'+esc(c.id)+'" data-day="'+TODAY+'" style="--child:'+t.bg+'">'+ring(mp.t?mp.n/mp.t:0,58,7,mp.t?mp.n+"/"+mp.t:"–")+'<span class="kc-txt"><b>'+esc(c.name)+'</b><small>Aujourd’hui : '+(mp.t?(mp.t-mp.n?(mp.t-mp.n)+" mission"+(mp.t-mp.n>1?"s":"")+" à faire":"tout est fait"):"rien de prévu")+' · semaine '+pct(w)+' %</small>'+(ev?'<small class="evtxt">'+esc(fmtDate(ev[0]))+' : '+esc(ev[1])+'</small>':'')+(hardOf(c.id,plan).length?'<small class="hardtxt">'+hardOf(c.id,plan).length+' mission'+(hardOf(c.id,plan).length>1?"s":"")+' notée'+(hardOf(c.id,plan).length>1?"s":"")+' difficile'+(hardOf(c.id,plan).length>1?"s":"")+' cette semaine</small>':'')+'</span><span class="chev" aria-hidden="true">›</span></button>';}).join("")+'</div>';
  h+=weeksNav();
  if(plan){
   var days=plan.data.days;
   h+=renderNotesParents();
   var hardAll=children().map(function(c){return [c,hardOf(c.id,plan)];}).filter(function(x){return x[1].length;});
   h+='<section class="card hardcard"><h2>Points difficiles de la semaine</h2>'+(hardAll.length?hardAll.map(function(x){return '<div class="hard-kid"><b>'+esc(x[0].name)+'</b><ul>'+x[1].map(function(m){return '<li>'+diffBadge(m.n)+'<span>'+esc(m.l)+'<small>'+esc(fmtDate(m.date))+' · '+DIFF[m.n][0]+'</small></span></li>';}).join("")+'</ul></div>';}).join(""):'<p class="none">Aucune mission notée 4 ou 5 cette semaine. Les enfants notent la difficulté quand ils cochent un devoir, une leçon, une révision ou une lecture.</p>')+(S.diffMissing&&!DEMO?'<p class="msg err">Exécutez le bloc SQL « v0.9.0 » dans Supabase pour enregistrer les notes.</p>':'')+'</section>';
   h+='<section class="card ovcard"><h2>Avancement de la semaine</h2><div class="ovwrap"><table class="ov"><thead><tr><th></th>';
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
  h+=noteForm();
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
  h+='<label for="bulk-text">Missions<textarea id="bulk-text" spellcheck="true" style="min-height:200px" placeholder="Léa&#10;lundi 30/11 :&#10;  * lire 20 pages et faire un résumé de 10 lignes&#10;  * apprendre le vocabulaire&#10;&#10;Tom, Zoé&#10;samedi 05/12 : arabe, lecture + vocabulaire">'+esc(S.bulk.text)+'</textarea></label>';
  h+='<div class="cols three"><label for="bulk-child">Enfant si aucun prénom n’est écrit<select id="bulk-child"><option value="">—</option>'+kidOptions(true)+'</select></label><label for="bulk-subj">Matière par défaut<input id="bulk-subj" type="text" placeholder="ex. cours du soir"></label><label for="bulk-sem">Les dates indiquent<select id="bulk-sem"><option value="faire"'+(S.bulk.sem!=="rendre"?" selected":"")+'>le jour où le faire</option><option value="rendre"'+(S.bulk.sem==="rendre"?" selected":"")+'>le jour où le rendre</option></select></label></div>';
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
  h+='<section class="card"><div class="ftitle">'+picto("Lecture",44)+'<h2>Bibliothèque des enfants</h2></div>'+children().map(function(c){var bk=booksFor(c.id);var sum='<b>'+esc(c.name)+'</b><small>'+bk.length+' livre'+(bk.length>1?"s":"")+' · '+fmtN(pagesOf(bk))+' pages</small>';
   if(!bk.length)return '<div class="xl"><span>'+sum+'</span></div>';
   return '<details class="libkid"><summary><span>'+sum+'</span><span class="lk-more">Voir les livres</span></summary><ul class="books">'+bk.map(function(b){return '<li><span><b>'+esc(b.title)+'</b>'+(b.author?' · '+esc(b.author):'')+'<small>'+(b.pages?fmtN(+b.pages)+' pages · ':'')+(b.finished?'fini le '+esc(fmtDate(b.finished,{day:"numeric",month:"long"})):'')+'</small></span></li>';}).join("")+'</ul><a class="linkbtn" href="#'+esc(c.id)+'/livres">Ouvrir la bibliothèque de '+esc(c.name)+'</a></details>';}).join("")+'</section>';
  // liste des ajouts
  var up=S.extras.filter(function(e){return e.due>=TODAY;});
  h+='<section class="card"><h2>Missions ajoutées à la main</h2>'+(up.length?'<p>Date affichée : jour de <b>rendu</b>.</p><button class="btn sec wrapbtn" type="button" id="shift-extras">Dates « à faire » ? Tout décaler d’un jour</button>'+msgHtml("shift"):'')+(up.length?'<div class="scrollbox" tabindex="0" role="region" aria-label="Liste des missions ajoutées ('+up.length+')">'+up.map(function(e){var c=child(e.child);return '<div class="xl"><span><span class="xl-h"><b>'+esc(c?c.name:"Tous")+'</b> · à rendre le '+esc(fmtDate(e.due))+'</span><small>'+esc((e.subject?e.subject+" : ":"")+e.text)+'</small></span><button class="btn sec mini" data-del="'+esc(e.id)+'">Supprimer</button></div>';}).join("")+'</div>'+(up.length>5?'<p class="det">'+up.length+' missions : faites défiler la liste.</p>':''):'<p class="none">Aucune pour le moment.</p>')+'</section>';
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
 }
 if(noFam)h+=renderSettings(true);
 else h+='<a class="setlink" href="#parametres">'+GEAR+'<span>Paramètres : couleurs de héros, import d’historique, réglages avancés</span></a>';
 return h+'</div>';
}
function renderSettings(noFam){
 var h='<div class="narrow"><section class="hero" style="background-color:#3A4250;color:#fff"><div class="hero-id"><div><span class="over">Réservé aux parents</span><h1>Paramètres</h1></div></div></section><div class="cols">';
 if(!noFam){
  h+='<form class="card f" id="themesf"><h2>Couleurs de héros</h2><p>Chaque profil choisit sa couleur.</p>';
  children().forEach(function(c){h+='<label for="th-'+esc(c.id)+'">'+esc(c.name)+'<select id="th-'+esc(c.id)+'" data-theme-for="'+esc(c.id)+'">'+Object.keys(THEMES).map(function(n){return '<option'+(n===themeName(c)?" selected":"")+'>'+n+'</option>';}).join("")+'</select></label>';});
  h+='<label for="th-parents">Parents<select id="th-parents" data-theme-for="__parents">'+Object.keys(THEMES).map(function(n){return '<option'+(n===themeName(null)?" selected":"")+'>'+n+'</option>';}).join("")+'</select></label>';
  h+='<button class="btn" type="submit">Enregistrer les couleurs</button>'+msgHtml("themes")+'</form>';
 }
 h+='<section class="card"><h2>Installer sur un téléphone</h2>'+(S.installEvt?'<p>Ce téléphone peut installer l’Académie comme une appli.</p><button class="btn" type="button" data-act="install">Installer l’appli</button>':S.standalone?'<p class="msg">L’Académie est déjà installée sur cet appareil.</p>':'')+'<p><b>iPhone (Safari ou Brave)</b> : bouton Partager, puis « Sur l’écran d’accueil ».</p><p><b>Android (Brave ou Chrome)</b> : menu ⋮, puis « Installer l’application » ou « Ajouter à l’écran d’accueil », puis « Installer ».</p><p><b>Ordinateur (Brave ou Chrome)</b> : icône d’installation à droite de la barre d’adresse.</p><p class="det">Le mot de passe familial est demandé une seule fois par appareil.</p></section>';
 h+='<form class="card f" id="import"><h2>Importer un historique</h2><p>Fichier JSON fourni par Claude : réglages, semaines et coches.</p><label for="imp-file">Fichier<input id="imp-file" type="file" accept="application/json,.json" required></label><button class="btn" type="submit">Importer</button>'+msgHtml("import")+'</form>';
 if(!noFam&&!DEMO){
  h+='<form class="card f wide" id="settings"><h2>Réglages (avancé)</h2><p>Enfants, activités, heures de coucher, tâches récurrentes. Format JSON : modifiez avec précaution.</p><label for="set-json">Réglages<textarea id="set-json" spellcheck="false" style="min-height:220px;font-family:ui-monospace,monospace;font-size:.8rem">'+esc(JSON.stringify(S.fam,null,2))+'</textarea></label><button class="btn" type="submit">Enregistrer les réglages</button>'+msgHtml("settings")+'</form>';
 }
 return h+'</div></div>';
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
 if(/(vocabulaire|sourate|reciter|par c(oe|œ)ur|apprendre)/.test(f)&&!/exercice|rediger|ecrire|resume/.test(f))return "app";
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
  if(/:\s*$/.test(line)){subj=line.replace(/:\s*$/,"").trim().replace(/^devoirs?\s+((de|du|d['’])\s*)?/i,"");subjIndent=indent;return;}
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
 if((f=document.getElementById("notef")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var row={child:val("n-child"),date:val("n-date")||TODAY,source:val("n-src"),subject:val("n-subj")||null,teacher:val("n-teacher")||null,tone:val("n-tone"),original:val("n-orig")||null,
   kid_strengths:val("n-good")||null,kid_expect:val("n-expect")||null,kid_next:val("n-next")||null,goal:val("n-goal")||null,shared:document.getElementById("n-shared").checked,updated_at:new Date().toISOString()};
  var go=document.getElementById("n-goalon");row.goal_active=go?go.checked:true;
  if(!row.original&&!row.kid_strengths&&!row.kid_expect){flash("note","Écrivez au moins le message d’origine ou une phrase pour l’enfant.",true);return;}
  var edit=S.editNote;
  var ok=function(x){if(edit)S.notes=S.notes.map(function(n){return String(n.id)===String(edit)?x:n;});else S.notes.unshift(x);S.editNote=null;S.open=S.open||{};S.open.notef=false;flash("global",edit?"Retour modifié.":"Retour enregistré.");};
  if(DEMO){row.id=edit||("demo-"+Date.now());ok(row);return;}
  var q=edit?sb.from("teacher_notes").update(row).eq("id",edit).select():sb.from("teacher_notes").insert(row).select();
  q.then(function(r){if(r.error)flash("note","Erreur : "+r.error.message,true);else ok(r.data[0]);});
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
 var t=e.target.closest("[data-editnote],[data-delnote],[data-rate],[data-rateopen],[data-focus],[data-fclose],[data-fdone],[data-fundo],[data-fnext],[data-cancel],[data-uncancel],[data-delbook],[data-view],[data-day],[data-id],[data-go],[data-week],[data-del],[data-act],[data-delidea]");if(!t)return;
 if(t.hasAttribute("data-delidea")){var di=t.getAttribute("data-delidea");var aft=function(){S.ideas=S.ideas.filter(function(x){return String(x.id)!==di;});render();};
  if(DEMO)aft();else sb.from("ideas").delete().eq("id",di).then(function(r){if(!r.error)aft();});return;}
 if(t.matches("input.chk")){setDone(t.getAttribute("data-id"),t.checked);return;}
 if(t.hasAttribute("data-delbook")){var bid=t.getAttribute("data-delbook");if(!t.dataset.ok){t.dataset.ok="1";t.textContent="Confirmer";return;}
  var aftb=function(){S.books=S.books.filter(function(x){return String(x.id)!==bid;});render();};
  if(DEMO)aftb();else sb.from("books").delete().eq("id",bid).then(function(r){if(!r.error)aftb();});return;}
 if(t.getAttribute("data-act")==="book-open"){S.bookOpen=true;render();var bi=document.getElementById("b-title");if(bi)bi.focus();return;}
 if(t.hasAttribute("data-editnote")){S.editNote=t.getAttribute("data-editnote");S.open=S.open||{};S.open.notef=true;render();var nf=document.getElementById("notef");if(nf)nf.scrollIntoView({block:"start"});return;}
 if(t.hasAttribute("data-delnote")){var nid=t.getAttribute("data-delnote");if(!t.dataset.ok){t.dataset.ok="1";t.textContent="Confirmer";return;}
  var aftn=function(){S.notes=S.notes.filter(function(n){return String(n.id)!==nid;});if(String(S.editNote)===nid)S.editNote=null;render();};
  if(DEMO)aftn();else sb.from("teacher_notes").delete().eq("id",nid).then(function(r){if(!r.error)aftn();});return;}
 if(t.hasAttribute("data-rate")){var rid=t.getAttribute("data-rate"),rn=+t.getAttribute("data-n");if(rn)setDiff(rid,rn);S.rate=null;render();return;}
 if(t.hasAttribute("data-rateopen")){S.rate=t.getAttribute("data-rateopen");render();return;}
 if(t.hasAttribute("data-focus")){S.focus=t.getAttribute("data-focus");render();return;}
 if(t.hasAttribute("data-fclose")){var fk=S.focus;S.focus=null;render();var back=document.querySelector('[data-focus="'+(fk||"").replace(/"/g,'\\"')+'"]');if(back)back.focus();return;}
 if(t.hasAttribute("data-fundo")){setDone(t.getAttribute("data-fundo"),false);return;}
 if(t.hasAttribute("data-fdone")||t.hasAttribute("data-fnext")){
  var fc=child(curView());if(t.hasAttribute("data-fdone")){S.done[t.getAttribute("data-fdone")]=1;var fn=+t.getAttribute("data-n")||0;if(fn){S.diff[t.getAttribute("data-fdone")]=fn;var fid=t.getAttribute("data-fdone");setTimeout(function(){setDiff(fid,fn);},400);}}
  var nx=fc?nextTask(fc.id,S.day):null;
  if(t.hasAttribute("data-fnext")&&nx&&keyOf(nx)===S.focus){var tl=tasksOf(fc.id,S.day),ix=-1;tl.forEach(function(x,j){if(keyOf(x)===S.focus)ix=j;});nx=tl.slice(ix+1).filter(function(x){return !isDoneB(x);})[0]||null;}
  S.focus=nx?keyOf(nx):null;
  if(t.hasAttribute("data-fdone")){if(!nx)S.msg.global={t:"Mission accomplie ! Tout est fait pour aujourd’hui.",e:false};setDone(t.getAttribute("data-fdone"),true);}else render();
  return;}
 if(t.hasAttribute("data-cancel")){var cc=t.getAttribute("data-child"),cd=t.getAttribute("data-date");var l=lessonsOf(cc,cd)[+t.getAttribute("data-cancel")];if(!l)return;
  var row={child:cc,date:cd,subject:l.m,start:l.s,reason:"prof absent"};
  var okc=function(x){S.cancels.push(x);flash("global",l.m+" du "+fmtDate(cd)+" annulé. Le planning sera recalculé à la prochaine synchronisation (ou double-cliquez sur « Synchro planning » sur le PC).");};
  if(DEMO){row.id="demo-"+Date.now();okc(row);return;}
  sb.from("cancellations").insert(row).select().then(function(r){if(r.error)flash("global","Erreur : "+r.error.message,true);else okc(r.data[0]);});return;}
 if(t.hasAttribute("data-uncancel")){var uid=t.getAttribute("data-uncancel");var aftu=function(){S.cancels=S.cancels.filter(function(x){return String(x.id)!==uid;});render();};
  if(DEMO)aftu();else sb.from("cancellations").delete().eq("id",uid).then(function(r){if(!r.error)aftu();});return;}
 if(t.getAttribute("data-act")==="install"){var ev=S.installEvt;if(ev){ev.prompt();ev.userChoice.then(function(){S.installEvt=null;render();});}return;}
 if(t.getAttribute("data-act")==="note-cancel"){S.editNote=null;S.open=S.open||{};S.open.notef=false;render();return;}
 if(t.getAttribute("data-act")==="hint-ok"){lsSet("kizuna-hint-check","1");render();return;}
 if(t.getAttribute("data-act")==="book-close"){S.bookOpen=false;render();var ob=document.querySelector('[data-act="book-open"]');if(ob)ob.focus();return;}
 if(t.getAttribute("data-act")==="books-all"){S.bookAll=true;render();return;}
 if(t.hasAttribute("data-act")){sb.auth.signOut().then(function(){location.reload();});return;}
 if(t.hasAttribute("data-del")){var id=t.getAttribute("data-del");
  var after=function(){S.extras=S.extras.filter(function(x){return String(x.id)!==id;});render();};
  if(DEMO)after();else sb.from("extras").delete().eq("id",id).then(function(r){if(!r.error)after();});return;}
 if(t.hasAttribute("data-week")){pickWeek(+t.getAttribute("data-week"));return;}
 if(t.hasAttribute("data-go")){S.day=t.getAttribute("data-day");location.hash=t.getAttribute("data-go");return;}
 if(t.hasAttribute("data-view")){S.pmenu=false;var nv=t.getAttribute("data-view");if((location.hash||"").replace("#","")===nv)render();else location.hash=nv;return;}
 if(t.hasAttribute("data-day")){if(t.hasAttribute("data-sec")){var cv=curView();S.day=t.getAttribute("data-day");try{sessionStorage.setItem("planning-day",S.day);}catch(e2){}location.hash=cv;return;}setDay(t.getAttribute("data-day"));return;}
 if(t.hasAttribute("data-id")){var i=t.getAttribute("data-id");setDone(i,!S.done[i]);}
});
root.addEventListener("toggle",function(e){if(e.target.hasAttribute&&e.target.hasAttribute("data-fold")){S.open=S.open||{};S.open[e.target.getAttribute("data-fold")]=e.target.open;}if(e.target.classList&&e.target.classList.contains("pmenu"))S.pmenu=e.target.open;if(e.target.classList&&e.target.classList.contains("edt"))S.edtOpen=e.target.open;},true);
 try{S.standalone=window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;}catch(e){}
window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();S.installEvt=e;if(curView()==="parametres")softRender();});
window.addEventListener("appinstalled",function(){S.installEvt=null;S.standalone=true;flash("global","L’Académie est installée : retrouvez l’icône 絆 sur l’écran d’accueil.");});
root.addEventListener("keydown",function(e){if(e.key==="Escape"&&S.focus){S.focus=null;render();return;}if(e.key==="Escape"&&S.bookOpen&&e.target.closest&&e.target.closest("#bookf")){S.bookOpen=false;render();var ob=document.querySelector('[data-act="book-open"]');if(ob)ob.focus();}});
window.addEventListener("hashchange",function(){S.pmenu=false;var hv=(location.hash||"").replace("#","").split("/")[0];if(hv&&hv!=="parametres"&&hv!=="conseils")lsSet("kizuna-view",hv);S.bookOpen=false;S.focus=null;render();window.scrollTo(0,0);});

/* ------------------------------------------------------------ démarrage */
if(DEMO){loadAll();}
else if(!window.supabase){renderError("La bibliothèque Supabase n’a pas pu se charger. Vérifiez la connexion internet.");}
else{
 sb=window.supabase.createClient(CFG.SUPABASE_URL,CFG.SUPABASE_ANON_KEY,{auth:{persistSession:true,autoRefreshToken:true}});
 sb.auth.getSession().then(function(r){if(r.data&&r.data.session)loadAll();else renderLogin();});
}
})();
