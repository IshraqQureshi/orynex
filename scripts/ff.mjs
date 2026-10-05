import { firefox } from 'playwright-core';
const b = await firefox.launch();
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
await p.goto('http://localhost:4102/', { waitUntil: 'networkidle' });
await p.waitForTimeout(500);
const state = () => p.evaluate(() => {
  const els = [...document.querySelectorAll('.rv,.rv-l,.rv-s')];
  const supports = CSS.supports('animation-timeline: view()');
  return { supports, jsReveal: document.documentElement.classList.contains('js-reveal'), total: els.length,
    inCount: els.filter(e => e.classList.contains('in')).length,
    hiddenBelow: els.filter(e => getComputedStyle(e).opacity === '0').length };
});
console.log('initial', await state());
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } });
await p.waitForTimeout(1200);
console.log('after scroll', await state());
await b.close();
