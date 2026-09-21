const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'}).catch(()=>chromium.launch());
  const errs=[];
  for (const [name,vp,scheme] of [['d',{width:1280,height:900},'light'],['m',{width:390,height:844},'dark']]) {
    const p = await b.newPage({viewport:vp, colorScheme:scheme});
    p.on('pageerror',e=>errs.push('PAGEERR '+e.message)); p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
    await p.goto('file://'+process.cwd()+'/test.html'); await p.waitForTimeout(800);
    for (const t of ['manager','showroom','shipping','sales','accounting','marketing','website']) {
      await p.click('[data-act=tab][data-k='+t+']'); await p.waitForTimeout(250);
      await p.screenshot({path:`shot_${name}_${t}.png`, fullPage:true});
    }
    if(name==='d'){ await p.click('[data-act=tab][data-k=showroom]'); await p.click('tr.click'); await p.waitForTimeout(300); await p.screenshot({path:'shot_dialog.png'}); }
    await p.close();
  }
  console.log(errs.join('\n')||'no errors'); await b.close();
})();
