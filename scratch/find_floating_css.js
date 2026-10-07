import fs from 'fs';

async function checkMoreCSS() {
  const res = await fetch('https://www.myvestige.com/');
  const html = await res.text();
  const cssMatches = [...html.matchAll(/href="(\/_next\/static\/css\/[^"]+)"/g)].map(m => m[1]);
  for (const c of cssMatches) {
    const cRes = await fetch('https://www.myvestige.com' + c);
    const txt = await cRes.text();
    for (const kw of ['visitweb', 'btn-scroll', 'scroll-to-top', 'scroll', 'victor', 'ask-victor', 'chat']) {
      let idx = 0;
      while ((idx = txt.toLowerCase().indexOf(kw, idx)) !== -1) {
        console.log(`--- Match "${kw}" in ${c} ---`);
        console.log(txt.slice(Math.max(0, idx - 40), Math.min(txt.length, idx + 200)));
        idx += kw.length + 50;
      }
    }
  }
}

checkMoreCSS().catch(console.error);
