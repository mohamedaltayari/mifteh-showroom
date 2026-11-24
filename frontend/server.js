/* ============================================================
   طبقة الاتصال بالخادم (Python/FastAPI)
   ------------------------------------------------------------
   • تسجيل الدخول/الخروج الحقيقي عبر /api/auth/*
   • تحميل البيانات المشتركة من /api/state
   • مزامنة تزايدية: كل saveState() يرسل فقط الطلبيات/المخازن/المستندات التي تغيّرت
     مع رقم المراجعة الذي بُنيت عليه (baseRev) لكشف تعديل نفس السجل من جهازين
   • سحب دوري لتغييرات المستخدمين الآخرين من /api/changes
   • تفضيلات الواجهة (الصفحة الحالية، الفلاتر...) تبقى محلية في هذا المتصفح
   يُحمَّل هذا الملف قبل app.js، ودواله تُستدعى بعد اكتمال تحميل app.js.
   ============================================================ */
var Server = (function(){
  var PREFS_KEY = "alamiya-ops-prefs-v2";
  var FIN_UI_KEYS = ["tab","sub","period","expPeriod","expKind"];
  var POLL_MS = 5000;

  var rev = 0;
  var synced = {order:{}, warehouse:{}, doc:{}}; /* id -> {rev, json} آخر نسخة متفق عليها مع الخادم */
  var pendingAudit = [];
  var syncTimer = null, inFlight = false, again = false, forceNext = false;
  var pollTimer = null, pulling = false, pendingRefresh = false;
  var offline = false;
  var usersCache = null;
  var setupMode = false;

  /* ---------- طلبات HTTP ---------- */
  function api(method, url, body){
    var opts = {method:method, credentials:"same-origin", headers:{}};
    if(body !== undefined){
      if(body instanceof FormData){ opts.body = body; }
      else { opts.headers["Content-Type"] = "application/json"; opts.body = JSON.stringify(body); }
    }
    return fetch(url, opts).then(function(res){
      return res.text().then(function(txt){
        var data = null;
        try{ data = txt ? JSON.parse(txt) : null; }catch(e){}
        if(!res.ok){
          var err = new Error((data && data.detail && typeof data.detail==="string") ? data.detail : ("HTTP "+res.status));
          err.status = res.status; err.data = data;
          if(res.status===401 && url.indexOf("/api/auth/")!==0) onSessionLost();
          throw err;
        }
        return data;
      });
    });
  }

  /* ---------- أدوات ---------- */
  function finData(f){
    var out = {};
    Object.keys(f||{}).forEach(function(k){ if(FIN_UI_KEYS.indexOf(k)<0) out[k] = f[k]; });
    return out;
  }
  function settingsData(){ return {yellowThresholdDays: state.yellowThresholdDays}; }
  function listFor(kind){ return kind==="order" ? state.orders : state.warehouses; }
  function setList(kind, arr){ if(kind==="order") state.orders = arr; else state.warehouses = arr; }
  function findIdx(arr, id){ for(var i=0;i<arr.length;i++){ if(arr[i] && arr[i].id===id) return i; } return -1; }
  function localJson(kind, id){
    if(kind==="doc"){
      if(id==="finance") return JSON.stringify(finData(state.finance));
      if(id==="settings") return JSON.stringify(settingsData());
      return null;
    }
    var arr = listFor(kind), i = findIdx(arr, id);
    return i<0 ? null : JSON.stringify(arr[i]);
  }
  function isDirty(kind, id){
    var s = synced[kind][id];
    var lj = localJson(kind, id);
    if(!s) return lj !== null;
    return lj !== s.json;
  }
  function applyDoc(id, data){
    if(id==="finance"){
      var ui = {};
      FIN_UI_KEYS.forEach(function(k){ if(state.finance && state.finance[k]) ui[k] = state.finance[k]; });
      state.finance = Object.assign({}, data || {}, ui);
      finEnsure();
    } else if(id==="settings" && data){
      if(data.yellowThresholdDays !== undefined) state.yellowThresholdDays = data.yellowThresholdDays;
    }
  }

  /* ---------- تفضيلات الواجهة المحلية ---------- */
  function savePrefs(){
    try{
      var f = state.finance || {};
      var finUi = {}; FIN_UI_KEYS.forEach(function(k){ finUi[k] = f[k]; });
      localStorage.setItem(PREFS_KEY, JSON.stringify({
        view: state.view, ordersFilter: state.ordersFilter, finUi: finUi,
        cutoffNotifEnabled: state.cutoffNotifEnabled, notifiedCutoffKeys: state.notifiedCutoffKeys,
        diskSyncConnected: state.diskSyncConnected, diskSyncLastSync: state.diskSyncLastSync
      }));
    }catch(e){}
  }
  function applyPrefs(st){
    try{
      var p = JSON.parse(localStorage.getItem(PREFS_KEY) || "null");
      if(!p) return;
      if(p.view) st.view = p.view;
      if(p.ordersFilter) st.ordersFilter = p.ordersFilter;
      if(p.finUi && st.finance) FIN_UI_KEYS.forEach(function(k){ if(p.finUi[k]) st.finance[k] = p.finUi[k]; });
      ["cutoffNotifEnabled","notifiedCutoffKeys","diskSyncConnected","diskSyncLastSync"].forEach(function(k){ if(p[k]!==undefined) st[k] = p[k]; });
    }catch(e){}
  }

  /* ---------- التحميل الكامل ---------- */
  function snapshotAll(recRevs){
    synced = {order:{}, warehouse:{}, doc:{}};
    ["order","warehouse"].forEach(function(kind){
      listFor(kind).forEach(function(r){
        var rv = recRevs[kind][r.id];
        if(rv!==undefined) synced[kind][r.id] = {rev: rv, json: JSON.stringify(r)};
      });
    });
    ["finance","settings"].forEach(function(id){
      synced.doc[id] = {rev: recRevs.doc[id] || 0, json: localJson("doc", id)};
    });
  }
  function loadAll(){
    return api("GET", "/api/state").then(function(snap){
      rev = snap.rev;
      var recRevs = {order:{}, warehouse:{}, doc:{}};
      state.orders = snap.orders.map(function(r){ recRevs.order[r.id] = r.rev; return r.data; });
      state.warehouses = snap.warehouses.map(function(r){ recRevs.warehouse[r.id] = r.rev; return r.data; });
      state.finance = null;
      Object.keys(snap.docs||{}).forEach(function(id){ recRevs.doc[id] = snap.docs[id].rev; });
      var fin0 = finDefault();
      applyPrefs({finance: fin0});
      state.finance = fin0;
      if(snap.docs.finance) applyDoc("finance", snap.docs.finance.data);
      state.yellowThresholdDays = 3;
      if(snap.docs.settings) applyDoc("settings", snap.docs.settings.data);
      state.auditLog = snap.audit || [];
      state.orderCounter = snap.orderCounter || 0;
      state.defaultProfitPct = null;
      pendingAudit = [];
      migrateState();
      /* إن أشار العرض المحفوظ لطلبية لم تعد موجودة نرجع للقائمة */
      if(state.view && state.view.orderId && findIdx(state.orders, state.view.orderId)<0){
        state.view = {name:"orders", orderId:null, tab:"overview"};
      }
      snapshotAll(recRevs);
      /* migrateState قد يضيف حقولًا ناقصة لبيانات قديمة: نرسلها للخادم مرة واحدة */
      scheduleSync();
    });
  }

  /* ---------- المزامنة (رفع التعديلات) ---------- */
  function collect(){
    var body = {orders:{upsert:[], delete:[]}, warehouses:{upsert:[], delete:[]}, finance:null, settings:null, audit:[], force:false};
    var sent = {order:{}, warehouse:{}, doc:{}};
    var any = false;
    [["order","orders"],["warehouse","warehouses"]].forEach(function(pair){
      var kind = pair[0], key = pair[1], seen = {};
      listFor(kind).forEach(function(r){
        if(!r || !r.id) return;
        seen[r.id] = true;
        var j = JSON.stringify(r), s = synced[kind][r.id];
        if(!s || s.json !== j){
          body[key].upsert.push({id:r.id, baseRev: s ? s.rev : 0, data: JSON.parse(j)});
          sent[kind][r.id] = j; any = true;
        }
      });
      Object.keys(synced[kind]).forEach(function(id){
        if(!seen[id]){
          body[key].delete.push({id:id, baseRev: synced[kind][id].rev, data:{}});
          sent[kind][id] = null; any = true;
        }
      });
    });
    [["finance","finance"],["settings","settings"]].forEach(function(pair){
      var id = pair[0], j = localJson("doc", id), s = synced.doc[id];
      if(!s || s.json !== j){
        body[pair[1]] = {baseRev: s ? s.rev : 0, data: JSON.parse(j)};
        sent.doc[id] = j; any = true;
      }
    });
    if(pendingAudit.length){
      body.audit = pendingAudit.map(function(a){ return {entity:String(a.entity||""), entityId:String(a.entityId||""), action:String(a.action||""), byRole:String(a.byRole||""), at:a.at||"", diff:String(a.diff||"")}; });
      any = true;
    }
    if(forceNext){ body.force = true; }
    return any ? {body:body, sent:sent, audit:pendingAudit.slice()} : null;
  }

  function scheduleSync(){
    if(!isAuthed()) return;
    if(syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(syncNow, 500);
  }

  function syncNow(){
    syncTimer = null;
    if(!isAuthed()) return Promise.resolve();
    if(inFlight){ again = true; return Promise.resolve(); }
    var c = collect();
    if(!c) return Promise.resolve();
    inFlight = true;
    var baseRev = rev;
    return api("POST", "/api/sync", c.body).then(function(res){
      forceNext = false;
      setOffline(false);
      var changed = false;
      /* ما قُبل: يصبح هو النسخة المتفق عليها */
      ["order","warehouse","doc"].forEach(function(kind){
        Object.keys(c.sent[kind]).forEach(function(id){
          var j = c.sent[kind][id];
          if(j===null){ delete synced[kind][id]; }
          else {
            if(kind==="order" && res.renumbered && res.renumbered[id]){
              var d = JSON.parse(j), oldNo = d.orderNumber;
              d.orderNumber = res.renumbered[id];
              j = JSON.stringify(d);
              var i = findIdx(state.orders, id);
              if(i>=0 && state.orders[i].orderNumber===oldNo){ state.orders[i].orderNumber = res.renumbered[id]; changed = true; }
              toast(tpl(t("srv.renumbered"), {from:oldNo, to:res.renumbered[id]}), "info");
            }
            synced[kind][id] = {rev: res.rev, json: j};
          }
        });
      });
      /* ما رُفض (تعارض أو صلاحية): نعيد النسخة الموجودة على الخادم */
      var conflicts = 0, forbidden = 0;
      (res.rejected||[]).forEach(function(r){
        if(r.reason==="conflict") conflicts++; else forbidden++;
        var cur = r.current;
        if(r.kind==="doc"){
          applyDoc(r.id, cur && cur.data ? cur.data : null);
          synced.doc[r.id] = {rev: cur ? cur.rev : 0, json: localJson("doc", r.id)};
        } else {
          var arr = listFor(r.kind), i = findIdx(arr, r.id);
          if(cur && !cur.deleted){
            if(i>=0) arr[i] = cur.data; else arr.push(cur.data);
            synced[r.kind][r.id] = {rev: cur.rev, json: JSON.stringify(cur.data)};
          } else {
            if(i>=0) arr.splice(i,1);
            delete synced[r.kind][r.id];
          }
        }
        changed = true;
      });
      if(conflicts) toast(t("srv.conflict"), "warning");
      if(forbidden) toast(t("srv.forbidden"), "critical");
      if(res.orderCounter > (state.orderCounter||0)) state.orderCounter = res.orderCounter;
      /* سجلات التدقيق المرسلة تُستبدل بنسخة الخادم عند السحب التالي */
      pendingAudit = pendingAudit.filter(function(a){ return c.audit.indexOf(a)<0; });
      state.auditLog = state.auditLog.filter(function(a){ return c.audit.indexOf(a)<0; });
      if(changed) refreshUi();
    }).catch(function(err){
      if(err && err.status===401) return;
      if(err && err.status && err.status<500){
        /* طلب مرفوض بالكامل (مثل بيانات غير صالحة): نعيد التحميل من الخادم حتى لا نعلق */
        toast(t("srv.syncFailed"), "critical");
        return loadAll().then(refreshUi);
      }
      setOffline(true);
      setTimeout(scheduleSync, 5000);
    }).then(function(){
      inFlight = false;
      if(again){ again = false; scheduleSync(); }
      return pull(baseRev);
    });
  }
  function forceNextSync(){ forceNext = true; }

  /* ---------- السحب الدوري لتغييرات الآخرين ---------- */
  function pull(sinceOverride){
    if(!isAuthed() || pulling) return Promise.resolve();
    pulling = true;
    var since = (typeof sinceOverride==="number") ? Math.min(sinceOverride, rev) : rev;
    return api("GET", "/api/changes?since="+since).then(function(ch){
      setOffline(false);
      var changed = false, touched = [];
      [["order","orders"],["warehouse","warehouses"]].forEach(function(pair){
        var kind = pair[0];
        (ch[pair[1]]||[]).forEach(function(r){
          var s = synced[kind][r.id];
          if(s && s.rev >= r.rev) return;            /* لدينا هذه النسخة أو أحدث */
          if(isDirty(kind, r.id)) return;           /* تعديل محلي معلّق: سيُكشف التعارض عند الرفع */
          var arr = listFor(kind), i = findIdx(arr, r.id);
          if(r.deleted){
            if(i>=0){ arr.splice(i,1); changed = true; }
            delete synced[kind][r.id];
            if(kind==="order" && state.view && state.view.orderId===r.id) state.view = {name:"orders", orderId:null, tab:"overview"};
            return;
          }
          var j = JSON.stringify(r.data);
          if(i>=0){ if(JSON.stringify(arr[i])!==j){ arr[i] = r.data; changed = true; } }
          else { arr.unshift(r.data); changed = true; }
          synced[kind][r.id] = {rev: r.rev, json: j};
          touched.push([kind, r.id]);
        });
      });
      Object.keys(ch.docs||{}).forEach(function(id){
        var r = ch.docs[id], s = synced.doc[id];
        if(s && s.rev >= r.rev) return;
        if(isDirty("doc", id)) return;
        var before = localJson("doc", id);
        applyDoc(id, r.data);
        var after = localJson("doc", id);
        synced.doc[id] = {rev: r.rev, json: after};
        if(before!==after) changed = true;
      });
      if(ch.audit && ch.audit.length){
        var known = {};
        state.auditLog.forEach(function(a){ if(a.rev) known[a.rev+"|"+a.at+"|"+a.action+"|"+a.entityId] = true; });
        var fresh = ch.audit.filter(function(a){ return !known[a.rev+"|"+a.at+"|"+a.action+"|"+a.entityId]; });
        if(fresh.length){
          state.auditLog = fresh.concat(state.auditLog);
          if(state.auditLog.length>300) state.auditLog.length = 300;
          changed = true;
        }
      }
      if(ch.orderCounter > (state.orderCounter||0)) state.orderCounter = ch.orderCounter;
      if(ch.rev > rev) rev = ch.rev;
      if(touched.length){
        migrateState();
        /* التطبيع المحلي لا يُعتبر تعديلًا من المستخدم */
        touched.forEach(function(p){ var lj = localJson(p[0], p[1]); if(lj!==null && synced[p[0]][p[1]]) synced[p[0]][p[1]].json = lj; });
      }
      if(changed) refreshUi(); else if(pendingRefresh && !formBusy()) refreshUi();
    }).catch(function(err){
      if(!(err && err.status)) setOffline(true);
    }).then(function(){ pulling = false; });
  }
  function startPolling(){
    stopPolling();
    pollTimer = setInterval(function(){ if(!inFlight && !document.hidden) pull(); }, POLL_MS);
  }
  function stopPolling(){ if(pollTimer){ clearInterval(pollTimer); pollTimer = null; } }
  document.addEventListener("visibilitychange", function(){ if(!document.hidden && isAuthed()) pull(); });

  /* ---------- إعادة الرسم دون مسح ما يكتبه المستخدم ---------- */
  function formBusy(){
    var host = document.getElementById("modalHost");
    if(host && host.children.length) return true;
    if(state.view && state.view.showNewForm) return true;
    var main = document.getElementById("mainArea");
    if(!main) return false;
    var ae = document.activeElement;
    if(ae && main.contains(ae) && /^(INPUT|TEXTAREA)$/.test(ae.tagName) && ae.id!=="ordersSearch" && ae.type!=="file") return true;
    var els = main.querySelectorAll("input,textarea,select");
    for(var i=0;i<els.length;i++){
      var el = els[i];
      if(el.id==="ordersSearch" || el.type==="file") continue;
      if(el.tagName==="SELECT"){
        var def = -1;
        for(var k=0;k<el.options.length;k++){ if(el.options[k].defaultSelected){ def = k; break; } }
        if(def<0) def = 0;
        if(el.options.length && el.selectedIndex!==def) return true;
      } else if(el.type==="checkbox" || el.type==="radio"){
        if(el.checked!==el.defaultChecked) return true;
      } else if(el.value!==el.defaultValue) return true;
    }
    return false;
  }
  function refreshUi(){
    if(!isAuthed()) return;
    if(formBusy()){ pendingRefresh = true; showRefreshHint(true); return; }
    pendingRefresh = false; showRefreshHint(false);
    renderNav(); renderMain();
  }
  function showRefreshHint(on){
    var el = document.getElementById("srvRefreshHint");
    if(!on){ if(el) el.remove(); return; }
    if(el) return;
    el = document.createElement("button");
    el.id = "srvRefreshHint"; el.type = "button"; el.className = "btn primary small no-print";
    el.style.cssText = "position:fixed;bottom:1rem;inset-inline-start:50%;transform:translateX(-50%);z-index:60;box-shadow:0 6px 18px rgba(0,0,0,.18);";
    el.textContent = t("srv.updatesAvailable");
    el.onclick = function(){ pendingRefresh = false; el.remove(); renderNav(); renderMain(); };
    document.body.appendChild(el);
  }

  function setOffline(v){
    if(offline===v) return;
    offline = v;
    var lbl = document.getElementById("autosaveLabel");
    if(lbl) lbl.textContent = v ? t("srv.offline") : t("autosave");
    if(v) toast(t("srv.offline"), "warning");
  }

  /* ---------- الدخول والخروج ---------- */
  function loadLoginOptions(){
    return api("GET", "/api/auth/login-options").then(function(o){
      LOGIN_ACCOUNTS = {};
      (o.accounts||[]).forEach(function(a){ LOGIN_ACCOUNTS[a.username] = {role:a.role}; });
      LOGIN_DEMO_PASSWORD = o.demoPassword || null;
      if(o.maxUploadBytes) ATT_MAX_BYTES = o.maxUploadBytes;
      setupMode = !!o.needsSetup;
      applySetupUi();
      var has = Object.keys(LOGIN_ACCOUNTS).length>0;
      var sel = document.getElementById("loginQuickSelect");
      if(sel && sel.closest){ var f = sel.closest(".login-field"); if(f) f.style.display = has ? "" : "none"; }
      var div = document.getElementById("loginDividerText");
      if(div) div.style.display = has ? "" : "none";
      renderLoginQuickSelect();
    }).catch(function(){});
  }
  function onLoggedIn(user){
    state.currentRole = user.role;
    state.currentUsername = user.username;
    return loadAll().then(function(){
      setAuthed(true);
      renderShell();
      startPolling();
      if(state.cutoffNotifEnabled) checkCutoffNotifications();
    });
  }
  /* أول تشغيل بلا حسابات: شاشة الدخول تتحول إلى «إنشاء حساب المدير» */
  function applySetupUi(){
    var conf = document.getElementById("loginPasswordConfirmField");
    var sel = document.getElementById("loginQuickSelect");
    var qf = sel && sel.closest ? sel.closest(".login-field") : null;
    var div = document.getElementById("loginDividerText");
    if(!setupMode){ if(conf) conf.remove(); return; }
    if(qf) qf.style.display = "none";
    if(div) div.style.display = "none";
    document.getElementById("loginSub").textContent = t("srv.setupSub");
    document.getElementById("loginUsernameLabel").textContent = t("srv.setupEmail");
    document.getElementById("loginPasswordLabel").textContent = t("srv.newPw");
    document.getElementById("loginBtnText").textContent = t("srv.setupBtn");
    document.getElementById("loginDemoNotice").textContent = t("srv.setupNotice");
    var u = document.getElementById("loginUsername");
    u.type = "email"; u.autocomplete = "email";
    document.getElementById("loginPassword").autocomplete = "new-password";
    if(!conf){
      var pwField = document.getElementById("loginPassword").closest(".login-field");
      conf = document.createElement("label");
      conf.className = "login-field"; conf.id = "loginPasswordConfirmField";
      conf.innerHTML = '<span></span><input type="password" id="loginPasswordConfirm" autocomplete="new-password" required>';
      pwField.parentNode.insertBefore(conf, pwField.nextSibling);
    }
    conf.querySelector("span").textContent = t("srv.confirmPw");
  }
  function login(username, password){
    if(setupMode){
      var c = document.getElementById("loginPasswordConfirm");
      var bad = function(k){ var e = new Error(k); e.msgKey = k; return Promise.reject(e); };
      if(password.length < 8) return bad("srv.pwShort");
      if(c && c.value !== password) return bad("srv.pwMismatch");
      return api("POST", "/api/auth/setup", {username:username, password:password}).then(function(res){
        setupMode = false; applySetupUi();
        var u = document.getElementById("loginUsername"); u.type = "text";
        renderLoginTexts();
        return onLoggedIn(res.user);
      }).catch(function(err){
        if(err && err.status===409){ setupMode = false; applySetupUi(); renderLoginTexts(); loadLoginOptions(); err.msgKey = "srv.alreadySetup"; }
        else if(err && err.status===422){ err.msgKey = "srv.setupInvalid"; }
        throw err;
      });
    }
    return api("POST", "/api/auth/login", {username:username, password:password}).then(function(res){
      return onLoggedIn(res.user);
    });
  }
  function resetLocal(){
    stopPolling();
    if(syncTimer){ clearTimeout(syncTimer); syncTimer = null; }
    synced = {order:{}, warehouse:{}, doc:{}};
    pendingAudit = []; rev = 0; usersCache = null;
    var keepView = state && state.view, keepLang = state && state.lang;
    state = defaultState();
    state.warehouses = [];
    if(keepLang) state.lang = keepLang;
    if(keepView) state.view = keepView;
    applyPrefs(state);
    setAuthed(false);
  }
  function logout(){
    var flush = collect() ? syncNow() : Promise.resolve();
    return flush.catch(function(){}).then(function(){
      return api("POST", "/api/auth/logout").catch(function(){});
    }).then(function(){ resetLocal(); loadLoginOptions(); });
  }
  function onSessionLost(){
    if(!isAuthed()) return;
    resetLocal();
    toast(t("srv.sessionExpired"), "warning");
  }
  function boot(){
    loadLoginOptions();
    api("GET", "/api/auth/me").then(function(res){ return onLoggedIn(res.user); }).catch(function(){ setAuthed(false); });
  }
  window.addEventListener("beforeunload", function(e){
    if(isAuthed() && (inFlight || syncTimer || pendingAudit.length || collect())){
      e.preventDefault(); e.returnValue = "";
    }
  });

  /* ---------- رفع المرفقات ---------- */
  function upload(file){
    var fd = new FormData();
    fd.append("file", file, file.name);
    return api("POST", "/api/attachments", fd).catch(function(err){
      var key = (err && /^ui\./.test(err.message)) ? err.message : "ui.attFailed";
      throw new Error(key);
    });
  }

  function queueAudit(entry){ pendingAudit.push(entry); }

  /* ---------- الترجمة الإضافية ---------- */
  var SRV_I18N = {
    ar: {
      setupSub:"أول تشغيل للمنظومة: أنشئ حساب المدير بإيميلك وكلمة مرور تختارها.", setupEmail:"بريدك الإلكتروني (Gmail)", setupBtn:"إنشاء حساب المدير والدخول",
      setupNotice:"هذا الحساب يملك كل الصلاحيات. بعد الدخول أضف حسابات الموظفين من الإعدادات ← المستخدمون والصلاحيات.",
      alreadySetup:"تم إنشاء حساب المدير مسبقًا — سجّل الدخول به.", setupInvalid:"أدخل بريدًا صحيحًا وكلمة مرور من 8 أحرف على الأقل.",
      offline:"تعذّر الاتصال بالخادم — ستُرسل التعديلات تلقائيًا عند عودة الاتصال.",
      conflict:"عدّل مستخدم آخر نفس السجل قبلك — تم تحميل أحدث نسخة، أعد تطبيق تعديلك إن لزم.",
      forbidden:"لا تملك صلاحية حفظ هذا التعديل على الخادم — تم التراجع عنه.",
      syncFailed:"رفض الخادم الحفظ — تمت إعادة تحميل البيانات.",
      renumbered:"تم تغيير رقم الطلبية {from} إلى {to} لأن الرقم استُخدم من مستخدم آخر.",
      updatesAvailable:"توجد تحديثات من مستخدمين آخرين — اضغط للتحديث",
      sessionExpired:"انتهت الجلسة — سجّل الدخول من جديد.",
      tooMany:"محاولات كثيرة فاشلة — انتظر قليلًا ثم أعد المحاولة.",
      accountTitle:"حسابي", changePwTitle:"تغيير كلمة المرور", currentPw:"كلمة المرور الحالية", newPw:"كلمة المرور الجديدة (8 أحرف على الأقل)", confirmPw:"تأكيد كلمة المرور الجديدة",
      changePwBtn:"تغيير كلمة المرور", pwChanged:"تم تغيير كلمة المرور.", pwMismatch:"كلمتا المرور غير متطابقتين.", pwShort:"كلمة المرور يجب أن تكون 8 أحرف على الأقل.", pwWrong:"كلمة المرور الحالية غير صحيحة.",
      usersTitle:"المستخدمون والصلاحيات", usersDesc:"أضف حسابات الموظفين وحدد دور كل منهم. تعطيل الحساب ينهي جلساته فورًا.",
      username:"اسم المستخدم (البريد)", displayName:"الاسم", role:"الدور", password:"كلمة المرور", status:"الحالة", active:"فعّال", inactive:"معطّل",
      addUserBtn:"إضافة مستخدم", userAdded:"تمت إضافة المستخدم.", userUpdated:"تم تحديث المستخدم.", userTaken:"اسم المستخدم مستخدم مسبقًا.",
      disableBtn:"تعطيل", enableBtn:"تفعيل", resetPwBtn:"تعيين كلمة مرور", resetPwPrompt:"كلمة المرور الجديدة لـ {u} (8 أحرف على الأقل):",
      cannotSelf:"لا يمكنك تعطيل حسابك أو تغيير دورك.", loading:"جارٍ التحميل…", failed:"فشلت العملية.",
      serverBackupBtn:"تنزيل نسخة احتياطية كاملة من الخادم"
    },
    en: {
      setupSub:"First run: create the manager account with your email and a password of your choice.", setupEmail:"Your email (Gmail)", setupBtn:"Create manager account & log in",
      setupNotice:"This account has full access. After logging in, add staff accounts from Settings → Users & roles.",
      alreadySetup:"The manager account already exists — log in with it.", setupInvalid:"Enter a valid email and a password of at least 8 characters.",
      offline:"Cannot reach the server — changes will be sent automatically once the connection is back.",
      conflict:"Another user changed the same record first — the latest version was loaded; re-apply your change if needed.",
      forbidden:"You are not allowed to save this change on the server — it was reverted.",
      syncFailed:"The server rejected the save — data was reloaded.",
      renumbered:"Order {from} was renumbered to {to} because that number was taken by another user.",
      updatesAvailable:"Updates from other users are available — click to refresh",
      sessionExpired:"Session expired — please log in again.",
      tooMany:"Too many failed attempts — wait a bit and try again.",
      accountTitle:"My account", changePwTitle:"Change password", currentPw:"Current password", newPw:"New password (at least 8 characters)", confirmPw:"Confirm new password",
      changePwBtn:"Change password", pwChanged:"Password changed.", pwMismatch:"Passwords do not match.", pwShort:"Password must be at least 8 characters.", pwWrong:"Current password is incorrect.",
      usersTitle:"Users & roles", usersDesc:"Add staff accounts and choose each one's role. Disabling an account ends its sessions immediately.",
      username:"Username (email)", displayName:"Name", role:"Role", password:"Password", status:"Status", active:"Active", inactive:"Disabled",
      addUserBtn:"Add user", userAdded:"User added.", userUpdated:"User updated.", userTaken:"Username already exists.",
      disableBtn:"Disable", enableBtn:"Enable", resetPwBtn:"Set password", resetPwPrompt:"New password for {u} (at least 8 characters):",
      cannotSelf:"You cannot disable your own account or change your own role.", loading:"Loading…", failed:"Operation failed.",
      serverBackupBtn:"Download full server backup"
    },
    zh: {
      setupSub:"首次运行：使用您的邮箱和自选密码创建管理员账户。", setupEmail:"您的邮箱 (Gmail)", setupBtn:"创建管理员账户并登录",
      setupNotice:"此账户拥有全部权限。登录后请在 设置 → 用户与角色 中添加员工账户。",
      alreadySetup:"管理员账户已存在 — 请直接登录。", setupInvalid:"请输入有效邮箱和至少 8 个字符的密码。",
      offline:"无法连接服务器 — 连接恢复后将自动发送更改。",
      conflict:"其他用户先修改了同一记录 — 已加载最新版本，如有需要请重新修改。",
      forbidden:"您无权在服务器上保存此更改 — 已撤销。",
      syncFailed:"服务器拒绝保存 — 数据已重新加载。",
      renumbered:"订单 {from} 已改为 {to}，因为该编号已被其他用户使用。",
      updatesAvailable:"其他用户有更新 — 点击刷新",
      sessionExpired:"会话已过期 — 请重新登录。",
      tooMany:"失败次数过多 — 请稍后再试。",
      accountTitle:"我的账户", changePwTitle:"修改密码", currentPw:"当前密码", newPw:"新密码（至少 8 个字符）", confirmPw:"确认新密码",
      changePwBtn:"修改密码", pwChanged:"密码已修改。", pwMismatch:"两次密码不一致。", pwShort:"密码至少 8 个字符。", pwWrong:"当前密码不正确。",
      usersTitle:"用户与角色", usersDesc:"添加员工账户并设置角色。停用账户会立即结束其会话。",
      username:"用户名（邮箱）", displayName:"姓名", role:"角色", password:"密码", status:"状态", active:"启用", inactive:"已停用",
      addUserBtn:"添加用户", userAdded:"已添加用户。", userUpdated:"已更新用户。", userTaken:"用户名已存在。",
      disableBtn:"停用", enableBtn:"启用", resetPwBtn:"设置密码", resetPwPrompt:"{u} 的新密码（至少 8 个字符）：",
      cannotSelf:"不能停用自己的账户或更改自己的角色。", loading:"加载中…", failed:"操作失败。",
      serverBackupBtn:"下载服务器完整备份"
    }
  };
  var ROLE_KEYS = ["manufacturing_staff","commercial_staff","logistics_team","finance_team","senior_management"];

  function installI18n(){
    Object.keys(SRV_I18N).forEach(function(l){ if(I18N[l]) I18N[l].srv = SRV_I18N[l]; });
    var origLoginTexts = window.renderLoginTexts;
    window.renderLoginTexts = function(){ origLoginTexts(); applySetupUi(); };
    /* إضافة بطاقات الحساب وإدارة المستخدمين إلى صفحة الإعدادات */
    var origSettings = window.viewSettings;
    window.viewSettings = function(){
      var html = origSettings();
      html += accountCardHtml();
      if(can("system:manage_settings")){
        html += usersCardHtml();
        setTimeout(function(){ if(!usersCache) loadUsers(); }, 0);
      }
      return html;
    };
  }

  /* ---------- واجهة: حسابي ---------- */
  function accountCardHtml(){
    var h = '<div class="card"><h3>'+esc(t("srv.accountTitle"))+'</h3>';
    h += '<p class="muted" style="font-size:.8rem;">'+bdi(state.currentUsername)+' — '+esc(roleLabel(state.currentRole))+'</p>';
    h += '<h4 style="font-size:.9rem;">'+esc(t("srv.changePwTitle"))+'</h4><div class="grid2">';
    h += '<div class="field"><label for="srv_pw_cur">'+esc(t("srv.currentPw"))+'</label><input id="srv_pw_cur" type="password" autocomplete="current-password"></div>';
    h += '<div class="field"><label for="srv_pw_new">'+esc(t("srv.newPw"))+'</label><input id="srv_pw_new" type="password" autocomplete="new-password"></div>';
    h += '<div class="field"><label for="srv_pw_new2">'+esc(t("srv.confirmPw"))+'</label><input id="srv_pw_new2" type="password" autocomplete="new-password"></div>';
    h += '</div><button type="button" class="btn primary" onclick="Server.ui.changePassword()">'+esc(t("srv.changePwBtn"))+'</button>';
    if(can("system:manage_settings")){
      h += ' <a class="btn" href="/api/backup" download>'+esc(t("srv.serverBackupBtn"))+'</a>';
    }
    h += '</div>';
    return h;
  }
  function changePassword(){
    var cur = document.getElementById("srv_pw_cur").value;
    var n1 = document.getElementById("srv_pw_new").value;
    var n2 = document.getElementById("srv_pw_new2").value;
    if(n1.length<8){ toast(t("srv.pwShort"), "critical"); return; }
    if(n1!==n2){ toast(t("srv.pwMismatch"), "critical"); return; }
    api("POST", "/api/auth/change-password", {currentPassword:cur, newPassword:n1}).then(function(){
      ["srv_pw_cur","srv_pw_new","srv_pw_new2"].forEach(function(id){ document.getElementById(id).value = ""; });
      toast(t("srv.pwChanged"), "success");
    }).catch(function(err){
      toast(t(err && err.message==="wrong_current_password" ? "srv.pwWrong" : "srv.failed"), "critical");
    });
  }

  /* ---------- واجهة: إدارة المستخدمين ---------- */
  function roleOptions(selected){
    return ROLE_KEYS.map(function(r){ return '<option value="'+r+'"'+(r===selected?' selected':'')+'>'+esc(roleLabel(r))+'</option>'; }).join("");
  }
  function usersCardHtml(){
    var h = '<div class="card" id="srvUsersCard"><h3>'+esc(t("srv.usersTitle"))+'</h3><p class="muted" style="font-size:.8rem;">'+esc(t("srv.usersDesc"))+'</p>';
    h += '<div id="srvUsersBox">'+usersTableHtml()+'</div>';
    h += '<h4 style="font-size:.9rem;margin-top:1rem;">'+esc(t("srv.addUserBtn"))+'</h4><div class="grid2">';
    h += '<div class="field"><label for="srv_nu_user">'+esc(t("srv.username"))+'</label><input id="srv_nu_user" type="email" autocomplete="off"></div>';
    h += '<div class="field"><label for="srv_nu_name">'+esc(t("srv.displayName"))+'</label><input id="srv_nu_name" type="text" autocomplete="off"></div>';
    h += '<div class="field"><label for="srv_nu_role">'+esc(t("srv.role"))+'</label><select id="srv_nu_role">'+roleOptions("manufacturing_staff")+'</select></div>';
    h += '<div class="field"><label for="srv_nu_pw">'+esc(t("srv.password"))+'</label><input id="srv_nu_pw" type="password" autocomplete="new-password"></div>';
    h += '</div><button type="button" class="btn primary" onclick="Server.ui.addUser()">'+esc(t("srv.addUserBtn"))+'</button></div>';
    return h;
  }
  function usersTableHtml(){
    if(!usersCache) return '<p class="muted">'+esc(t("srv.loading"))+'</p>';
    var h = '<div class="pay-table-wrap"><table class="pay-table" style="width:100%;"><thead><tr><th>'+esc(t("srv.username"))+'</th><th>'+esc(t("srv.displayName"))+'</th><th>'+esc(t("srv.role"))+'</th><th>'+esc(t("srv.status"))+'</th><th></th></tr></thead><tbody>';
    usersCache.forEach(function(u){
      h += '<tr><td>'+bdi(u.username)+'</td><td>'+esc(u.displayName||"")+'</td>'
        + '<td><select aria-label="'+esc(t("srv.role"))+'" onchange="Server.ui.setRole('+u.id+', this.value)">'+roleOptions(u.role)+'</select></td>'
        + '<td><span class="pill '+(u.active?"success":"neutral")+'">'+esc(t(u.active?"srv.active":"srv.inactive"))+'</span></td>'
        + '<td style="white-space:nowrap;"><button type="button" class="btn small" onclick="Server.ui.setActive('+u.id+','+(!u.active)+')">'+esc(t(u.active?"srv.disableBtn":"srv.enableBtn"))+'</button> '
        + '<button type="button" class="btn small" onclick="Server.ui.resetPw('+u.id+')">'+esc(t("srv.resetPwBtn"))+'</button></td></tr>';
    });
    return h + '</tbody></table></div>';
  }
  function redrawUsers(){ var box = document.getElementById("srvUsersBox"); if(box) box.innerHTML = usersTableHtml(); }
  function loadUsers(){
    return api("GET", "/api/users").then(function(res){ usersCache = res.users; redrawUsers(); }).catch(function(){});
  }
  function patchUser(id, body){
    return api("PATCH", "/api/users/"+id, body).then(function(){
      toast(t("srv.userUpdated"), "success");
      return loadUsers();
    }).catch(function(err){
      toast(t(err && err.message==="cannot_demote_self" ? "srv.cannotSelf" : "srv.failed"), "critical");
      return loadUsers();
    });
  }
  function addUser(){
    var body = {
      username: document.getElementById("srv_nu_user").value.trim(),
      displayName: document.getElementById("srv_nu_name").value.trim(),
      role: document.getElementById("srv_nu_role").value,
      password: document.getElementById("srv_nu_pw").value
    };
    if(body.password.length<8){ toast(t("srv.pwShort"), "critical"); return; }
    api("POST", "/api/users", body).then(function(){
      ["srv_nu_user","srv_nu_name","srv_nu_pw"].forEach(function(id){ document.getElementById(id).value = ""; });
      toast(t("srv.userAdded"), "success");
      loadUsers();
    }).catch(function(err){
      toast(t(err && err.message==="username_taken" ? "srv.userTaken" : "srv.failed"), "critical");
    });
  }
  function resetPw(id){
    var u = (usersCache||[]).filter(function(x){ return x.id===id; })[0];
    var pw = window.prompt(tpl(t("srv.resetPwPrompt"), {u: u ? u.username : ""}));
    if(pw===null) return;
    if(pw.length<8){ toast(t("srv.pwShort"), "critical"); return; }
    patchUser(id, {password: pw});
  }

  return {
    api: api, upload: upload, boot: boot, login: login, logout: logout,
    applyPrefs: applyPrefs, savePrefs: savePrefs, scheduleSync: scheduleSync, syncNow: syncNow,
    forceNextSync: forceNextSync, queueAudit: queueAudit, installI18n: installI18n, pull: pull,
    ui: {
      changePassword: changePassword, addUser: addUser, resetPw: resetPw,
      setRole: function(id, role){ patchUser(id, {role: role}); },
      setActive: function(id, active){ patchUser(id, {active: active}); }
    }
  };
})();
