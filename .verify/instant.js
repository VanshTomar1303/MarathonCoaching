const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: '.verify/instant_0ms.png' });
  const info = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1 ? { opacity: getComputedStyle(h1).opacity, color: getComputedStyle(h1).color } : null;
  });
  console.log('Immediately at domcontentloaded:', JSON.stringify(info));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
