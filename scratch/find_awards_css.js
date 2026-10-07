import fs from 'fs';

async function getCSS() {
  const res = await fetch('https://www.myvestige.com/');
  const html = await res.text();
  const cssMatches = [...html.matchAll(/href="(\/_next\/static\/css\/[^"]+)"/g)].map(m => m[1]);
  console.log('CSS files:', cssMatches);
  for (const c of cssMatches) {
    const cRes = await fetch('https://www.myvestige.com' + c);
    const txt = await cRes.text();
    if (txt.includes('award') || txt.includes('award-section')) {
      console.log('--- Found award in ' + c + ' ---');
      let idx = 0;
      while ((idx = txt.indexOf('award', idx)) !== -1) {
        console.log(txt.slice(Math.max(0, idx - 50), Math.min(txt.length, idx + 250)));
        idx += 150;
      }
    }
  }
}

getCSS().catch(console.error);
