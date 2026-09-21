# يبني test.html: الصفحة + قاعدة بيانات وهمية في الذاكرة + بيانات تجريبية، لتجربتها محليًا بلا نشر
seed=open('seed_all.json').read()
page=open('../page.html').read()
html=('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
      '<style>:root{color-scheme:light}body{margin:0;font-size:14px}</style></head><body>'
      '<script>window.__SEED__='+seed+';</script><script>'+open('stub.js').read()+'</script>'+page+'</body></html>')
open('test.html','w').write(html)
print('test.html ready')
