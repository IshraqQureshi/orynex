import { chromium } from 'playwright-core';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'node:fs';

const [ref, mine] = ['http://localhost:4101/reference/index.html', 'http://localhost:4102/'];
const widths = [1440, 1024, 768, 390];
fs.mkdirSync('/tmp/diff', { recursive: true });
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });

async function shot(url, w, file) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); });
  await page.waitForTimeout(800);
  await page.screenshot({ path: file, fullPage: true });
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  await ctx.close();
  return { h, sw };
}

for (const w of widths) {
  const a = await shot(ref, w, `/tmp/diff/ref-${w}.png`);
  const b = await shot(mine, w, `/tmp/diff/mine-${w}.png`);
  const A = PNG.sync.read(fs.readFileSync(`/tmp/diff/ref-${w}.png`));
  const B = PNG.sync.read(fs.readFileSync(`/tmp/diff/mine-${w}.png`));
  const W = Math.min(A.width, B.width), H = Math.min(A.height, B.height);
  const crop = (P) => { const o = new PNG({ width: W, height: H }); PNG.bitblt(P, o, 0, 0, W, H, 0, 0); return o; };
  const a2 = crop(A), b2 = crop(B), d = new PNG({ width: W, height: H });
  const n = pixelmatch(a2.data, b2.data, d.data, W, H, { threshold: 0.1 });
  fs.writeFileSync(`/tmp/diff/d-${w}.png`, PNG.sync.write(d));
  console.log(w, 'ref', a, 'mine', b, 'diffpx', n, ((n / (W * H)) * 100).toFixed(3) + '%');
}
await browser.close();
