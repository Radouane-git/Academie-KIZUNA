(function () {
"use strict";
var CFG = window.PLANNING_CONFIG || {};
var DEMO = /[?&]demo\b/.test(location.search) || !CFG.SUPABASE_URL;
var root = document.getElementById("root");
var sb = null;

var KINDS = {dev:["Devoirs","--k-dev",1],app:["Apprendre / réciter","--k-app",1],rev:["Réviser une éval","--k-rev",1],lec:["Lecture","--k-lec",1],rel:["Relire les leçons","--k-rel",0],cor:["Corvée","--k-cor",1],ran:["Rangement","--k-ran",1],org:["Sac & agenda","--k-org",1],rep:["Pause","--k-calm",0],repas:["Repas","--k-calm",0],act:["Activité","--k-calm",0],dodo:["Soirée","--k-calm",0]};
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
var S = {fam:null, plans:[], done:{}, extras:[], sync:null, mfa:null, view:null, day:null, msg:{}};
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
function weekIdx(){var p=planOf(S.day);return p?S.plans.indexOf(p):S.plans.length-1;}
function dayInfo(date){var p=planOf(date);if(!p)return null;return p.data.days.filter(function(d){return d.date===date;})[0];}
function blocksOf(cid,date){var p=planOf(date);var ch=p&&p.data.children[cid];return ((ch&&ch.blocks&&ch.blocks[date])||[]).slice().sort(function(a,b){return mins(a.t)-mins(b.t);});}
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
   S.sync=d.sync;start();
  });
 }
 return Promise.all([
  sb.from("settings").select("*"),
  sb.from("plans").select("*").order("week_start"),
  sb.from("checks").select("id"),
  sb.from("extras").select("*").order("due"),
  sb.from("sync_log").select("*").order("ran_at",{ascending:false}).limit(1)
 ]).then(function(r){
  var err=r.filter(function(x){return x.error;})[0];
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

/* ------------------------------------------------------------ rendu */
function renderError(t){root.innerHTML='<div class="login"><div class="card"><h3>Problème</h3><p>'+esc(t)+'</p></div></div>';}
function renderLogin(err){
 root.innerHTML='<div class="login"><form class="card f" id="login"><h1>Planning de la famille</h1><p class="how">Entrez le mot de passe familial.</p><label for="pw">Mot de passe<input id="pw" type="password" autocomplete="current-password" required></label><button class="btn" type="submit">Ouvrir le planning</button>'+(err?'<p class="msg err">'+esc(err)+'</p>':'')+'</form></div>';
 document.getElementById("login").addEventListener("submit",function(e){
  e.preventDefault();
  sb.auth.signInWithPassword({email:CFG.FAMILY_EMAIL,password:document.getElementById("pw").value}).then(function(r){
   if(!r.error){loadAll();return;}
   var m=String(r.error.message||"");
   if(/invalid login credentials/i.test(m))renderLogin("Mot de passe incorrect (ou e-mail du compte famille différent de celui de config.js).");
   else if(/not confirmed/i.test(m))renderLogin("Le compte famille n’est pas confirmé : dans Supabase > Authentication > Users, recréez-le en cochant « Auto Confirm User ».");
   else renderLogin("Connexion impossible : "+m);
  });
 });
}
function syncLine(){
 var s=S.sync;if(!s)return '<div class="status"><i></i>Pas encore de synchronisation EcoleDirecte</div>';
 var when=s.ran_at?new Date(s.ran_at).toLocaleString("fr-FR",{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}):"";
 var cls=s.status==="ok"?"ok":"bad";
 var txt=s.status==="ok"?"EcoleDirecte à jour ("+when+")":s.status==="mfa"?"EcoleDirecte attend une réponse de sécurité (onglet Vue parents)":"Dernière synchro en échec ("+when+")";
 return '<div class="status '+cls+'"><i></i>'+esc(txt)+(DEMO?' · <b>mode démo</b>':'')+(!DEMO?' · <button class="linkbtn" data-act="logout">Se déconnecter</button>':'')+'</div>';
}
function render(){
 if(!S.fam){root.innerHTML='<div class="wrap">'+renderParents(true)+'</div>';bindForms();return;}
 var v=curView();var c=child(v);
 var plan=planOf(S.day);
 var h='<div class="wrap" style="--child:'+(c?esc(c.color):"var(--ink)")+'">';
 h+='<header class="top"><div><h1>Planning de la semaine</h1><p class="sub">'+esc(plan?plan.data.title:"")+'</p></div>'+syncLine()+'</header>';
 if(S.msg.global)h+='<p class="msg'+(S.msg.global.e?" err":"")+'">'+esc(S.msg.global.t)+'</p>';
 h+='<nav class="tabs" role="tablist">';
 children().forEach(function(ch){var w=weekProg(ch.id,plan);h+='<button class="tab" role="tab" data-view="'+esc(ch.id)+'" aria-selected="'+(v===ch.id)+'" style="--tc:'+esc(ch.color)+'"><span class="dot"></span>'+esc(ch.name)+' <small>'+esc(ch.meta||"")+' · '+pct(w)+' %</small></button>';});
 h+='<button class="tab" role="tab" data-view="parents" aria-selected="'+(v==="parents")+'">Vue parents</button>';
 h+='<button class="tab" role="tab" data-view="conseils" aria-selected="'+(v==="conseils")+'">Conseils</button></nav>';
 if(v!=="conseils"&&S.plans.length){
  h+='<nav class="weeks" aria-label="Semaines">';
  var start=Math.max(0,S.plans.length-6);
  S.plans.slice(start).forEach(function(p,i){var idx=start+i;var on=idx===weekIdx();var cur=p.data.days.some(function(d){return d.date===TODAY;});
   h+='<button class="wk" data-week="'+idx+'" aria-pressed="'+on+'">Semaine du '+fmtDate(p.data.days[0].date,{day:"numeric",month:"short"})+(cur?' <small>en cours</small>':'')+'</button>';});
  if(start>0)h+='<select class="wk" id="oldweek" aria-label="Semaines plus anciennes"><option value="">Plus ancien…</option>'+S.plans.slice(0,start).map(function(p,i){return '<option value="'+i+'">Semaine du '+fmtDate(p.data.days[0].date,{day:"numeric",month:"short"})+'</option>';}).join("")+'</select>';
  h+='</nav>';
 }
 if(c)h+=plan?renderChild(c,plan):'<div class="card"><p>Aucun planning pour cette période.</p></div>';
 else if(v==="parents")h+=renderParents(false);
 else h+=renderTips(plan);
 h+='</div>';
 root.innerHTML=h;bindForms();
}
function renderChild(c,plan){
 var days=plan.data.days;
 var h='<div class="days" role="tablist" aria-label="Jours" style="grid-template-columns:repeat('+days.length+',minmax(0,1fr))">';
 days.forEach(function(d){var p=prog(c.id,d.date);h+='<button class="day'+(d.date===TODAY?" today":"")+'" role="tab" data-day="'+d.date+'" aria-selected="'+(d.date===S.day)+'"><span>'+(d.date===TODAY?"Aujourd’hui":esc(d.short))+'</span><b>'+d.num+'</b><div class="bar"><i style="width:'+pct(p)+'%"></i></div></button>';});
 h+='</div><div class="grid"><section class="card">';
 var di=dayInfo(S.day)||days[0];var p=prog(c.id,S.day);
 var full=p.t&&p.n===p.t;
 h+='<div class="dayhead"><h2>'+esc(di.long)+'</h2><div class="prog'+(full?" full":"")+'"><div class="track"><i style="width:'+pct(p)+'%"></i></div>'+(full?"Tout est fait !":p.n+" / "+p.t+" fait"+(p.n>1?"s":""))+'</div></div>';
 var sc=((plan.data.children[c.id]||{}).school||{})[S.day];
 if(sc)h+='<p class="school">'+esc(sc)+'</p>';
 h+='<ol class="tl">';
 var bl=blocksOf(c.id,S.day);
 if(!bl.length)h+='<li class="none">Rien de prévu ce jour-là.</li>';
 bl.forEach(function(b){
  var kd=KINDS[b.k]||KINDS.rep;var check=kd[2]&&b.id;var isDone=check&&S.done[b.id];
  h+='<li class="it'+(check?" task":"")+(b.k!=="rel"&&!check?" calm":"")+(isDone?" done":"")+'" style="--k:var('+kd[1]+')"><div class="t">'+esc(b.t)+'</div><div class="st"></div><div>';
  h+='<div class="kind">'+kd[0]+'</div><div class="lab">'+esc(b.l)+'</div>';
  if(b.d)h+='<div class="det">'+esc(b.d)+'</div>';
  if(b.k==="rel"&&b.rel)h+=renderRel(b.rel);
  h+='</div>'+(check?'<input type="checkbox" class="chk" data-id="'+esc(b.id)+'" aria-label="Fait : '+esc(b.l)+'"'+(isDone?" checked":"")+'>':'<span></span>')+'</li>';
 });
 h+='</ol></section>'+renderSide(c)+'</div>';
 h+='<div class="legend">'+["dev","app","rev","lec","rel","cor","ran","org"].map(function(k){return '<span style="--k:var('+KINDS[k][1]+')">'+KINDS[k][0]+'</span>';}).join("")+'<span style="--k:var(--k-calm)">Pause, repas, activité</span></div>';
 return h;
}
function renderRel(r){
 function row(lab,arr,code){if(!arr||!arr.length)return "";var s='<div class="row"><em>'+lab+'</em>';arr.forEach(function(sub){var id=r.idp+"|"+code+"|"+sub;s+='<button class="chip" data-id="'+esc(id)+'" aria-pressed="'+(!!S.done[id])+'">'+esc(sub)+'</button>';});return s+'</div>';}
 var h='<div class="rel">'+row("Leçons du jour",r.today,"t")+row("Leçons de demain",r.tomorrow,"d");
 return h+'<div class="det">Touchez une matière quand elle est relue (5 minutes chacune).</div></div>';
}
function renderSide(c){
 var nd=addDays(S.day,1);var due=dueFor(c.id,nd);
 var h='<aside class="side"><div class="card"><h3>Pour demain, '+esc(fmtDate(nd,{weekday:"long",day:"numeric"}))+'</h3>';
 h+=due.length?'<ul>'+due.map(function(x){return "<li>"+esc(x)+"</li>";}).join("")+'</ul>':'<p class="none">Rien de noté pour demain.</p>';
 h+='</div><div class="card"><h3>Évaluations à venir</h3>';
 var ev=evalsFor(c.id);
 if(!ev.length)h+='<p class="none">Aucune évaluation notée.</p>';
 ev.forEach(function(e){var d=dDiff(e[0],S.day);var lab=d<0?"passée":d===0?"aujourd’hui":d===1?"demain":"J-"+d;h+='<div class="ev'+(d<0?" past":"")+'"><span>'+esc(e[1])+'<br><small style="color:var(--muted)">'+esc(fmtDate(e[0]))+'</small></span><b>'+lab+'</b></div>';});
 var w=weekProg(c.id,planOf(S.day));
 h+='</div><div class="card"><h3>Ma semaine</h3><div class="prog"><span>'+w.n+' / '+w.t+' tâches cochées · '+pct(w)+' %</span></div><div class="weekbar"><i style="width:'+pct(w)+'%"></i></div></div></aside>';
 return h;
}
function msgHtml(k){var m=S.msg[k];return m?'<p class="msg'+(m.e?" err":"")+'">'+esc(m.t)+'</p>':"";}
function renderParents(noFam){
 var h="";
 if(noFam){
  h+='<header class="top"><div><h1>Planning de la famille</h1><p class="sub">Première installation</p></div>'+syncLine()+'</header>';
  h+='<div class="card warn"><h3>Il manque les réglages de la famille</h3><p>Importez le fichier d’historique (il contient les réglages, les semaines déjà faites et les coches).</p></div>';
 } else {
  var plan=planOf(S.day);
  if(plan){
   var days=plan.data.days;
   h+='<section class="card"><div class="dayhead"><h2>Avancement</h2></div><div class="ovwrap"><table class="ov"><thead><tr><th></th>';
   days.forEach(function(d){h+='<th>'+esc(d.short)+' '+d.num+'</th>';});
   h+='<th>Semaine</th></tr></thead><tbody>';
   children().forEach(function(c){h+='<tr style="--child:'+esc(c.color)+'"><td class="n"><i></i>'+esc(c.name)+'</td>';
    days.forEach(function(d){var p=prog(c.id,d.date);h+='<td><button class="cell'+(p.t&&p.n===p.t?" full":"")+'" data-go="'+esc(c.id)+'" data-day="'+d.date+'" aria-label="'+esc(c.name)+', '+esc(d.long)+'"><div class="bar"><i style="width:'+pct(p)+'%"></i></div><small>'+p.n+'/'+p.t+'</small></button></td>';});
    h+='<td><b>'+pct(weekProg(c.id,plan))+' %</b></td></tr>';});
   h+='</tbody></table></div></section>';
  }
 }
 h+='<div class="cols">';
 // double authentification
 if(S.sync&&S.sync.status==="mfa"&&S.sync.details){
  var q=S.sync.details;
  h+='<form class="card f warn" id="mfa"><h3>Question de sécurité EcoleDirecte</h3><p>'+esc(q.question)+'</p><label for="mfa-a">Votre réponse<select id="mfa-a">'+(q.choices||[]).map(function(c){return '<option>'+esc(c)+'</option>';}).join("")+'</select></label><button class="btn" type="submit">Enregistrer</button><p class="none">EcoleDirecte change de question à chaque connexion : le plus simple est de répondre directement sur le PC. Double-cliquez sur « Synchro planning » (bureau) : la question s’affiche dans la fenêtre, tapez le numéro de la bonne réponse.</p>'+msgHtml("mfa")+'</form>';
 } else if(S.sync&&S.sync.status==="error"){
  h+='<div class="card warn"><h3>La dernière synchronisation a échoué</h3><p>'+esc(S.sync.message||"")+'</p></div>';
 }
 if(!noFam){
  // ajouter un devoir
  var nd=addDays(TODAY,1);
  h+='<form class="card f" id="addhw"><h3>Ajouter un devoir</h3><p>Pour un devoir absent d’EcoleDirecte (cours de soutien, cours de langue…). Il apparaît tout de suite dans « Pour demain » et sera placé dans le planning à la prochaine synchronisation.</p>';
  h+='<label for="x-child">Enfant<select id="x-child">'+children().map(function(c){return '<option value="'+esc(c.id)+'">'+esc(c.name)+'</option>';}).join("")+'<option value="tous">Tous</option></select></label>';
  h+='<label for="x-due">À rendre le<input id="x-due" type="date" value="'+nd+'" required></label>';
  h+='<label for="x-subj">Matière<input id="x-subj" type="text" placeholder="ex. Français"></label>';
  h+='<label for="x-text">Consigne<textarea id="x-text" required placeholder="ex. Lire 20 pages et faire un résumé de 10 lignes"></textarea></label>';
  h+='<label for="x-kind">Type<select id="x-kind"><option value="dev">Devoir à faire</option><option value="app">Leçon à apprendre</option><option value="lec">Lecture</option><option value="rev">Évaluation</option></select></label>';
  h+='<button class="btn" type="submit">Ajouter</button>'+msgHtml("addhw")+'</form>';
  // liste des ajouts
  var up=S.extras.filter(function(e){return e.due>=TODAY;});
  h+='<div class="card"><h3>Devoirs ajoutés à la main</h3>'+(up.length?up.map(function(e){var c=child(e.child);return '<div class="xl"><span><b>'+esc(c?c.name:"Tous")+'</b> · '+esc(fmtDate(e.due))+'<br>'+esc((e.subject?e.subject+" : ":"")+e.text)+'</span><button class="btn sec" data-del="'+esc(e.id)+'">Supprimer</button></div>';}).join(""):'<p class="none">Aucun pour le moment.</p>')+'</div>';
  // évaluations à venir
  var evh="";
  children().forEach(function(c){evalsFor(c.id).filter(function(e){return e[0]>=TODAY;}).forEach(function(e){evh+='<div class="ev"><span><b>'+esc(c.name)+'</b> · '+esc(e[1])+'</span><b>'+esc(fmtDate(e[0]))+'</b></div>';});});
  h+='<div class="card"><h3>Évaluations à venir</h3>'+(evh||'<p class="none">Aucune évaluation notée.</p>')+'</div>';
 }
 // import / réglages
 h+='<form class="card f" id="import"><h3>Importer un historique</h3><p>Fichier JSON fourni par Claude : réglages, semaines et coches. Les semaines existantes du même lundi sont remplacées.</p><label for="imp-file">Fichier<input id="imp-file" type="file" accept="application/json,.json" required></label><button class="btn" type="submit">Importer</button>'+msgHtml("import")+'</form>';
 if(!noFam&&!DEMO){
  h+='<form class="card f" id="settings"><h3>Réglages (avancé)</h3><p>Enfants, activités, heures de coucher, tâches récurrentes. Format JSON : modifiez avec précaution.</p><label for="set-json">Réglages<textarea id="set-json" spellcheck="false" style="min-height:220px;font-family:ui-monospace,monospace;font-size:.8rem">'+esc(JSON.stringify(S.fam,null,2))+'</textarea></label><button class="btn" type="submit">Enregistrer les réglages</button>'+msgHtml("settings")+'</form>';
 }
 h+='</div>';
 return h;
}
function renderTips(plan){
 var notes=(plan&&plan.data.notes)||[];
 var h='<section class="card"><div class="dayhead"><h2>Comment l’utiliser</h2></div><p class="how">Chaque enfant ouvre son onglet, choisit le jour et coche au fur et à mesure. Les coches apparaissent sur tous les appareils. Les cases grises (pauses, repas, sport) servent de repère. Le planning se met à jour tout seul chaque jour à partir d’EcoleDirecte.</p></section>';
 if(notes.length)h+='<div class="cols">'+notes.map(function(n){return '<div class="card warn"><h3>À vérifier : '+esc(n[0])+'</h3><p>'+esc(n[1])+'</p></div>';}).join("")+'</div>';
 h+='<div class="cols">'+TIPS.map(function(t){return '<div class="card"><h3>'+esc(t[0])+'</h3><p>'+esc(t[1])+'</p></div>';}).join("")+'</div>';
 return h;
}

/* ------------------------------------------------------------ actions */
function bindForms(){
 var f;
 if((f=document.getElementById("addhw")))f.addEventListener("submit",function(e){
  e.preventDefault();
  var row={child:val("x-child"),due:val("x-due"),subject:val("x-subj")||null,text:val("x-text"),kind:val("x-kind")};
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
 var sel=document.getElementById("oldweek");
 if(sel)sel.addEventListener("change",function(){if(sel.value!=="")pickWeek(+sel.value);});
}
function val(id){return (document.getElementById(id).value||"").trim();}
function pickWeek(idx){var p=S.plans[idx];if(!p)return;var has=p.data.days.some(function(d){return d.date===TODAY;});setDay(has?TODAY:(p.data.days[1]||p.data.days[0]).date);}

root.addEventListener("click",function(e){
 var t=e.target.closest("[data-view],[data-day],[data-id],[data-go],[data-week],[data-del],[data-act]");if(!t)return;
 if(t.matches("input.chk")){setDone(t.getAttribute("data-id"),t.checked);return;}
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
