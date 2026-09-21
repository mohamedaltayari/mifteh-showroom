(function(){
  const seed = window.__SEED__;
  const data = {}; const subs = [];
  for (const [col, docs] of Object.entries(seed)) { data[col] = {}; for (const [k,v] of Object.entries(docs)) data[col][k] = JSON.parse(JSON.stringify(v)); }
  const snapDoc = (col,id)=>({id, exists: !!(data[col]&&data[col][id]), data:()=>data[col]&&data[col][id]});
  function notify(){ subs.forEach(s=>s()); }
  function docRef(path){ const [col,id]=path.split('/'); return {
    get: async()=>snapDoc(col,id),
    set: async(v)=>{ (data[col]=data[col]||{})[id]=JSON.parse(JSON.stringify(v)); notify(); },
    update: async(v)=>{ Object.assign(data[col][id], v); notify(); },
    delete: async()=>{ delete data[col][id]; notify(); },
    onSnapshot: (fn)=>{ const f=()=>fn(snapDoc(col,id)); subs.push(f); setTimeout(f,0); return ()=>{}; }
  };}
  function colRef(col){ const snap=()=>({docs:Object.keys(data[col]||{}).map(k=>snapDoc(col,k)),size:0});
    return { onSnapshot:(fn)=>{ const f=()=>fn(snap()); subs.push(f); setTimeout(f,0); return ()=>{}; },
      add: async(v)=>{ const id='x'+Math.random().toString(36).slice(2,7); (data[col]=data[col]||{})[id]=v; notify(); return docRef(col+'/'+id); },
      doc:(id)=>docRef(col+'/'+id) }; }
  window.claude = { use: async(n)=> n==='db' ? { doc: docRef, collection: colRef } : null };
})();
