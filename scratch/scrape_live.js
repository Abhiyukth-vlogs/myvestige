// Scratch script to dump exact text and find API endpoints
async function dumpChunks() {
  const successRes = await fetch('https://www.myvestige.com/_next/static/chunks/pages/components/Successstory-fee7baab4483c065.js');
  const successText = await successRes.text();
  console.log('--- Successstory chunk ---');
  console.log(successText);

  const storiesPageRes = await fetch('https://www.myvestige.com/_next/static/chunks/pages/success-stories-aa85b11d1d25809d.js');
  const storiesPageText = await storiesPageRes.text();
  console.log('--- Stories page snippet ---');
  console.log(storiesPageText.slice(0, 3000));
}

dumpChunks().catch(console.error);
