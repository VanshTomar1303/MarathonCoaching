import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:3118/', { waitUntil: 'domcontentloaded', timeout: 60000 });
const btn = p.locator('button[aria-label*="theme"]').first();
await btn.waitFor({ state: 'visible', timeout: 15000 });
await p.waitForTimeout(800);
await p.screenshot({ path: process.argv[2] + '/home-light.png' });
await btn.click();
await p.waitForTimeout(800);
await p.screenshot({ path: process.argv[2] + '/home-dark.png' });
// scroll to courses+why sections in dark to check for stray white
await p.evaluate(() => window.scrollTo(0, 1400));
await p.waitForTimeout(600);
await p.screenshot({ path: process.argv[2] + '/home-dark-scroll.png' });
await b.close();
