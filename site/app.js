(function () {
"use strict";
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
var S = {fam:null, plans:[], done:{}, extras:[], ideas:[], ideasMissing:false, sync:null, mfa:null, view:null, day:null, msg:{}, bulk:{text:"",items:null}};
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
   S.sync=d.sync;S.ideas=d.ideas||[];start();
  });
 }
 return Promise.all([
  sb.from("settings").select("*"),
  sb.from("plans").select("*").order("week_start"),
  sb.from("checks").select("id"),
  sb.from("extras").select("*").order("due"),
  sb.from("sync_log").select("*").order("ran_at",{ascending:false}).limit(1),
  sb.from("ideas").select("*").order("created_at")
 ]).then(function(r){
  S.ideasMissing=!!r[5].error;S.ideas=r[5].error?[]:(r[5].data||[]);
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
  var ci=curWeekIndex();var sel=weekIdx();
  var lbl=function(i){var ds=S.plans[i].data.days;var mo=ds.filter(function(d){return d.wd===1;})[0]||ds[0];return fmtDate(mo.date,{day:"numeric",month:"short"});};
  [[ci-1,"Semaine dernière"],[ci,"Cette semaine"],[ci+1,"Semaine prochaine"]].forEach(function(w){
   if(w[0]>=0&&w[0]<S.plans.length)h+='<button class="wk" data-week="'+w[0]+'" aria-pressed="'+(w[0]===sel)+'">'+w[1]+' <small>'+lbl(w[0])+'</small></button>';
   else if(w[1]==="Semaine prochaine")h+='<button class="wk" disabled aria-disabled="true">Semaine prochaine <small>bientôt</small></button>';
  });
  var others=S.plans.map(function(p,i){return i;}).filter(function(i){return i<ci-1||i>ci+1;});
  if(others.length)h+='<select class="wk" id="oldweek" aria-label="Autres semaines"><option value="">Autres semaines…</option>'+others.map(function(i){return '<option value="'+i+'"'+(i===sel?" selected":"")+'>Semaine du '+lbl(i)+'</option>';}).join("")+'</select>';
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
 var ids=ideasFor(c.id).filter(function(x){return !x.date||x.date>=addDays(TODAY,-1);});
 h+='</div><div class="card"><h3>Idées pour toi</h3>'+(ids.length?ids.map(function(x){var id="idea|"+x.id;var k=(IDEA_KINDS.filter(function(z){return z[0]===x.kind;})[0]||["","Idée"])[1];
   return '<div class="xl"><span><small style="color:var(--k-loi);font-weight:700;text-transform:uppercase;font-size:.7rem;letter-spacing:.06em">'+esc(k)+(x.date?' · '+esc(fmtDate(x.date))+(x.time?' '+esc(x.time):''):'')+'</small><br><b>'+esc(x.title)+'</b>'+(x.detail?'<br><span style="color:var(--muted)">'+esc(x.detail)+'</span>':'')+(x.link?'<br><a href="'+esc(x.link)+'" rel="noopener" target="_blank">Lien</a>':'')+'</span><input type="checkbox" class="chk" data-id="'+esc(id)+'" aria-label="Fait : '+esc(x.title)+'"'+(S.done[id]?" checked":"")+'></div>';}).join(""):'<p class="none">Pas d’idée pour le moment.</p>');
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
  h+='<div class="cols" style="grid-template-columns:1fr 1fr"><label for="x-due">Date<input id="x-due" type="date" value="'+nd+'" required></label><label for="x-sem">Cette date est<select id="x-sem"><option value="faire">le jour où le faire</option><option value="rendre">le jour où le rendre</option></select></label></div>';
  h+='<label for="x-subj">Matière<input id="x-subj" type="text" placeholder="ex. Français"></label>';
  h+='<label for="x-text">Consigne<textarea id="x-text" required placeholder="ex. Lire 20 pages et faire un résumé de 10 lignes"></textarea></label>';
  h+='<label for="x-kind">Type<select id="x-kind"><option value="dev">Devoir à faire</option><option value="app">Leçon à apprendre</option><option value="lec">Lecture</option><option value="rev">Évaluation</option></select></label>';
  h+='<button class="btn" type="submit">Ajouter</button>'+msgHtml("addhw")+'</form>';
  // liste des ajouts
  var up=S.extras.filter(function(e){return e.due>=TODAY;});
  h+='<div class="card"><h3>Devoirs ajoutés à la main</h3>'+(up.length?'<p>La date affichée est le jour de <b>rendu</b> : le devoir est placé avant, en général la veille.</p><button class="btn sec" type="button" id="shift-extras">Mes dates étaient des jours « à faire » : tout décaler d’un jour</button>'+msgHtml("shift"):'')+(up.length?up.map(function(e){var c=child(e.child);return '<div class="xl"><span><b>'+esc(c?c.name:"Tous")+'</b> · à rendre le '+esc(fmtDate(e.due))+'<br>'+esc((e.subject?e.subject+" : ":"")+e.text)+'</span><button class="btn sec" data-del="'+esc(e.id)+'">Supprimer</button></div>';}).join(""):'<p class="none">Aucun pour le moment.</p>')+'</div>';
  // saisie rapide
  h+='<form class="card f" id="bulk" style="grid-column:1/-1"><h3>Saisie rapide de devoirs</h3><p>Collez ou tapez les devoirs comme vous les recevez (M. Viste, mosquée…). Une ligne avec le prénom (ou « tous »), puis une ligne par date et un devoir par ligne. Le planificateur les répartit à la prochaine synchronisation.</p>';
  h+='<label for="bulk-text">Devoirs<textarea id="bulk-text" spellcheck="true" style="min-height:200px" placeholder="Aliya&#10;lundi 30/11 :&#10;  * lire 20 pages et faire un résumé de 10 lignes&#10;  * apprendre le vocabulaire&#10;dimanche 06/12 :&#10;  * Allemand : Bled page 12&#10;&#10;Imrane, Nahila&#10;samedi 05/12 : arabe, lecture + vocabulaire">'+esc(S.bulk.text)+'</textarea></label>';
  h+='<div class="cols" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))"><label for="bulk-child">Enfant si aucun prénom n’est écrit<select id="bulk-child"><option value="">—</option>'+children().map(function(c){return '<option value="'+esc(c.id)+'">'+esc(c.name)+'</option>';}).join("")+'<option value="tous">Tous</option></select></label><label for="bulk-subj">Matière par défaut<input id="bulk-subj" type="text" placeholder="ex. M. Viste"></label><label for="bulk-sem">Les dates indiquent<select id="bulk-sem"><option value="faire"'+(S.bulk.sem!=="rendre"?" selected":"")+'>le jour où le faire</option><option value="rendre"'+(S.bulk.sem==="rendre"?" selected":"")+'>le jour où le rendre</option></select></label></div>';
  h+='<button class="btn sec" type="submit">Voir l’aperçu</button>';
  if(S.bulk.items){
   if(!S.bulk.items.length)h+='<p class="msg err">Aucun devoir reconnu : vérifiez qu’il y a un prénom et des dates (ex. « lundi 30/11 »).</p>';
   else{
    h+='<div class="ovwrap"><table class="ov" style="min-width:640px"><thead><tr><th>Garder</th><th>Enfant</th><th>'+(S.bulk.sem==="faire"?"À faire le":"À rendre le")+'</th><th style="text-align:left">Devoir</th><th>Type</th></tr></thead><tbody>';
    S.bulk.items.forEach(function(it,i){var c=child(it.child);h+='<tr><td><input type="checkbox" class="bulk-keep" data-i="'+i+'" checked aria-label="Garder"></td><td>'+esc(c?c.name:"Tous")+'</td><td>'+esc(fmtDate(it.doDay||it.due))+'</td><td style="text-align:left">'+esc((it.subject?it.subject+" : ":"")+it.text)+'</td><td><select class="bulk-kind" data-i="'+i+'">'+[["dev","Devoir"],["app","À apprendre"],["lec","Lecture"],["rev","Évaluation"]].map(function(k){return '<option value="'+k[0]+'"'+(k[0]===it.kind?" selected":"")+'>'+k[1]+'</option>';}).join("")+'</select></td></tr>';});
    h+='</tbody></table></div><button class="btn" type="button" id="bulk-save">Enregistrer '+S.bulk.items.length+' devoir'+(S.bulk.items.length>1?"s":"")+'</button>';
   }
  }
  h+=msgHtml("bulk")+'</form>';
  // idées loisirs
  h+='<form class="card f" id="idea"><h3>Ajouter une idée de loisir ou de sortie</h3><p>Un livre à lire pour le plaisir, une sortie, un défi construction, une partie d’échecs… Elle s’affiche dans l’onglet de l’enfant, et dans sa journée si vous mettez une date.</p>';
  h+='<label for="i-child">Pour<select id="i-child">'+children().map(function(c){return '<option value="'+esc(c.id)+'">'+esc(c.name)+'</option>';}).join("")+'<option value="tous">Tous</option></select></label>';
  h+='<label for="i-kind">Type<select id="i-kind">'+IDEA_KINDS.map(function(k){return '<option value="'+k[0]+'">'+k[1]+'</option>';}).join("")+'</select></label>';
  h+='<label for="i-title">Idée<input id="i-title" type="text" required placeholder="ex. Lire « Le Petit Prince »"></label>';
  h+='<label for="i-detail">Détail (facultatif)<input id="i-detail" type="text" placeholder="ex. avec Imrane, 2 parties"></label>';
  h+='<label for="i-link">Lien (facultatif)<input id="i-link" type="url" placeholder="https://…"></label>';
  h+='<div class="cols" style="grid-template-columns:1fr 1fr"><label for="i-date">Date (facultatif)<input id="i-date" type="date"></label><label for="i-time">Heure (facultatif)<input id="i-time" type="time"></label></div>';
  h+='<button class="btn" type="submit">Ajouter l’idée</button>'+msgHtml("idea")+(S.ideasMissing?'<p class="msg err">La table des idées n’existe pas encore dans Supabase : exécutez le bloc SQL fourni.</p>':'')+'</form>';
  h+='<div class="card"><h3>Idées proposées</h3>'+(S.ideas.length?S.ideas.map(function(x){var c=child(x.child);return '<div class="xl"><span><b>'+esc(c?c.name:"Tous")+'</b> · '+esc(x.title)+(x.date?' · '+esc(fmtDate(x.date)):'')+(S.done["idea|"+x.id]?' · fait':'')+'</span><button class="btn sec" data-delidea="'+esc(x.id)+'">Supprimer</button></div>';}).join(""):'<p class="none">Aucune idée pour le moment.</p>')+'</div>';
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
 var sel=document.getElementById("oldweek");
 if(sel)sel.addEventListener("change",function(){if(sel.value!=="")pickWeek(+sel.value);});
}
function val(id){return (document.getElementById(id).value||"").trim();}
function pickWeek(idx){var p=S.plans[idx];if(!p)return;var has=p.data.days.some(function(d){return d.date===TODAY;});setDay(has?TODAY:(p.data.days[1]||p.data.days[0]).date);}

root.addEventListener("click",function(e){
 var t=e.target.closest("[data-view],[data-day],[data-id],[data-go],[data-week],[data-del],[data-act],[data-delidea]");if(!t)return;
 if(t.hasAttribute("data-delidea")){var di=t.getAttribute("data-delidea");var aft=function(){S.ideas=S.ideas.filter(function(x){return String(x.id)!==di;});render();};
  if(DEMO)aft();else sb.from("ideas").delete().eq("id",di).then(function(r){if(!r.error)aft();});return;}
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
