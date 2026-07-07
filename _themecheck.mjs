import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const p = await b.newPage();
await p.goto('http://localhost:3118/', { waitUntil: 'domcontentloaded', timeout: 60000 });
const btn = p.locator('button[aria-label*="theme"]').first();
await btn.waitFor({ state: 'visible', timeout: 15000 });
const read = async () => await p.evaluate(() => ({
  dataTheme: document.documentElement.getAttribute('data-theme'),
  colorScheme: document.documentElement.style.colorScheme,
  bodyBg: getComputedStyle(document.body).backgroundColor,
  bgVar: getComputedStyle(document.documentElement).getPropertyValue('--background').trim(),
}));
console.log('INITIAL   :', JSON.stringify(await read()));
await btn.click();
await p.waitForTimeout(500);
console.log('AFTER CLICK:', JSON.stringify(await read()));
await btn.click();
await p.waitForTimeout(500);
console.log('AFTER 2ND  :', JSON.stringify(await read()));
await b.close();
