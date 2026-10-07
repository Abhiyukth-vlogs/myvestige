// Inspect _app-c9e1ea3709511512.js and other layout chunks for Footer details
async function inspectApp() {
  const chunks = [
    'static/chunks/pages/_app-c9e1ea3709511512.js',
    'static/chunks/3643-cdba48a0cf4796b6.js',
    'static/chunks/250-7a2c44fa7053ff62.js',
    'static/chunks/8254-0b444f711d8cdeb1.js',
    'static/chunks/3130-fff35c64f6f5a6c3.js',
    'static/chunks/6066-c5e34777c38094d7.js',
    'static/chunks/7338-9f0546ebbc29203d.js',
    'static/chunks/9323-8ff4dde52e018645.js',
    'static/chunks/3861-7ce57c2fb7fa51b7.js',
    'static/chunks/8003-a04a63a471a1b204.js'
  ];

  for (const c of chunks) {
    try {
      const res = await fetch('https://www.myvestige.com/_next/' + c);
      const txt = await res.text();
      const hasFooter = txt.toLowerCase().includes('footer');
      const hasPayment = txt.toLowerCase().includes('payment');
      const hasApp = txt.toLowerCase().includes('app-store') || txt.toLowerCase().includes('google-play') || txt.toLowerCase().includes('play.google');

      console.log(`Chunk ${c}: footer=${hasFooter}, payment=${hasPayment}, app=${hasApp}`);

      const imgRegex = /["']([^"']*\.(?:png|jpg|jpeg|svg|webp))["']/gi;
      let m;
      const imgs = new Set();
      while ((m = imgRegex.exec(txt)) !== null) {
        if (/app|play|store|pay|visa|master|card|upi|footer|logo|iso|cert|icon/i.test(m[1])) {
          imgs.add(m[1]);
        }
      }
      if (imgs.size > 0) {
        console.log(`  Images found in ${c}:`, Array.from(imgs));
      }
    } catch (e) {
      console.error(c, e.message);
    }
  }
}

inspectApp().catch(console.error);
