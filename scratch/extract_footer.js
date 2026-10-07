// Extract exact Footer code from _app
async function extractFooter() {
  const res = await fetch('https://www.myvestige.com/_next/static/chunks/pages/_app-c9e1ea3709511512.js');
  const txt = await res.text();
  const idx = txt.indexOf('app-store.jpg');
  console.log('--- Footer around app-store.jpg ---');
  console.log(txt.slice(idx - 1000, idx + 2000));
}

extractFooter().catch(console.error);
