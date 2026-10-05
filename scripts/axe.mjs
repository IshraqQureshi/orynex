import { chromium } from 'playwright-core';
import fs from 'node:fs';
const axe = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce' })).newPage();
  await p.goto('http://localhost:4102/', { waitUntil: 'networkidle' });
  await p.evaluate(axe);
  const r = await p.evaluate(() => axe.run());
  console.log(w, 'violations:', r.violations.length);
  for (const v of r.violations) for (const n of v.nodes) console.log(' ', v.id, n.target.join(' '), n.any[0]?.message?.slice(0, 120));
}
await b.close();
