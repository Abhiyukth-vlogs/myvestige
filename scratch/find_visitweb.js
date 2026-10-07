import fs from 'fs';

async function findVisitWeb() {
  const res = await fetch('https://www.myvestige.com/');
  const html = await res.text();
  const cssMatches = [...html.matchAll(/href="(\/_next\/static\/css\/[^"]+)"/g)].map(m => m[1]);
  for (const c of cssMatches) {
    const cRes = await fetch('https://www.myvestige.com' + c);
    const txt = await cRes.text();
    const idx = txt.indexOf('visitweb');
    if (idx !== -1) {
      console.log('visitweb in ' + c + ':');
      console.log(txt.slice(idx - 10, idx + 250));
    }
  }
}

findVisitWeb().catch(console.error);
