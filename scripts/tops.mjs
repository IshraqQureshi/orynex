import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const get = async (url, w) => {
  const p = await (await b.newContext({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' })).newPage();
  await p.goto(url, { waitUntil: 'networkidle' }); await p.waitForTimeout(500);
  return p.evaluate(() => [...document.querySelectorAll('section, footer, .eq, .hero-cta, .marquee')].map((e) => [e.className.split(' ')[0] || e.tagName, Math.round(e.getBoundingClientRect().height)]));
};
for (const w of [1440, 390]) {
  const a = await get('http://localhost:4101/reference/index.html', w), m = await get('http://localhost:4102/', w);
  console.log(w, a.map((x, i) => (x[1] !== m[i][1] ? `${x[0]}: ${x[1]}→${m[i][1]}` : null)).filter(Boolean).join(' | '));
}
await b.close();
