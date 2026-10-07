import fs from 'fs';

async function findAwards() {
  const res = await fetch('https://www.myvestige.com/');
  const html = await res.text();

  // Save html if needed
  // Extract all chunk scripts
  const scriptRegex = /src="(\/_next\/static\/chunks\/[^"]+)"/g;
  const chunks = [];
  let m;
  while ((m = scriptRegex.exec(html)) !== null) {
    chunks.push(m[1]);
  }
  console.log('Homepage chunks count:', chunks.length);

  for (const c of chunks) {
    try {
      const cRes = await fetch('https://www.myvestige.com' + c);
      const cTxt = await cRes.text();
      const hasAward = /award|recognition|ET\s*now|Global\s*100|trusted/i.test(cTxt);
      if (hasAward) {
        console.log(`\nFound awards keyword in ${c}:`);
        // Find snippets
        for (const kw of ['Awards & Recognition', 'ET now', 'Global 100', 'trusted direct selling', 'award']) {
          let idx = 0;
          while ((idx = cTxt.toLowerCase().indexOf(kw.toLowerCase(), idx)) !== -1) {
            console.log(`--- Snippet around "${kw}" in ${c} ---`);
            console.log(cTxt.slice(Math.max(0, idx - 150), Math.min(cTxt.length, idx + 300)));
            idx += kw.length + 50;
          }
        }
      }
    } catch (e) {
      console.error(c, e.message);
    }
  }
}

findAwards().catch(console.error);
