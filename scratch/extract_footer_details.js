import fs from 'fs';

async function run() {
  const res = await fetch('https://www.myvestige.com/_next/static/chunks/pages/_app-c9e1ea3709511512.js');
  const txt = await res.text();

  // Find occurrences of fetch or axios in footer section
  const idx = txt.indexOf('fetchData=');
  if (idx !== -1) {
    console.log('--- Around fetchData ---');
    console.log(txt.slice(idx - 100, idx + 1500));
  }

  // Find the exact footer rendering JSX
  const footerIdx = txt.indexOf('Our Corporate Office');
  if (footerIdx !== -1) {
    console.log('--- Footer JSX Rendering ---');
    console.log(txt.slice(footerIdx - 800, footerIdx + 2000));
  }
}

run().catch(console.error);
