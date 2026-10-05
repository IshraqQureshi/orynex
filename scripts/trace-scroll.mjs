// Records a Chrome performance trace of a full-page smooth scroll and summarises long tasks, layout and paint.
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const cpu = Number(process.argv[2] || 1);
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:4102/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const cdp = await ctx.newCDPSession(p);
if (cpu > 1) await cdp.send('Emulation.setCPUThrottlingRate', { rate: cpu });

await p.evaluate(() => {
  window.__frames = [];
  let last = performance.now();
  const loop = (t) => { window.__frames.push(t - last); last = t; window.__raf = requestAnimationFrame(loop); };
  window.__raf = requestAnimationFrame(loop);
});
await b.startTracing(p, { path: '/tmp/scroll-trace.json', categories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'blink', 'cc', 'gpu', 'v8'] });
await p.evaluate(async () => {
  const total = document.documentElement.scrollHeight - innerHeight;
  const step = 20; // px per frame (~1200px/s at 60fps)
  await new Promise((res) => {
    let y = 0;
    const tick = () => { y += step; scrollTo(0, y); y < total ? requestAnimationFrame(tick) : res(); };
    requestAnimationFrame(tick);
  });
});
await p.waitForTimeout(500);
await b.stopTracing();
const frames = await p.evaluate(() => { cancelAnimationFrame(window.__raf); return window.__frames.slice(2); });
await b.close();

const ev = JSON.parse(fs.readFileSync('/tmp/scroll-trace.json', 'utf8')).traceEvents;
const sum = (name) => { const xs = ev.filter((e) => e.name === name && e.ph === 'X'); return { n: xs.length, ms: Math.round(xs.reduce((a, e) => a + e.dur, 0) / 1000), max: Math.round(Math.max(0, ...xs.map((e) => e.dur)) / 1000) }; };
const tasks = ev.filter((e) => e.name === 'RunTask' && e.ph === 'X' && e.dur > 50000);
const sorted = [...frames].sort((a, c) => a - c);
console.log(`CPU throttle ${cpu}x`);
console.log('frames', frames.length, 'avg ms', (frames.reduce((a, c) => a + c, 0) / frames.length).toFixed(2), 'p95', sorted[Math.floor(sorted.length * .95)].toFixed(1), 'max', sorted.at(-1).toFixed(1), 'frames >20ms', frames.filter((f) => f > 20).length, '>33ms', frames.filter((f) => f > 33).length);
console.log('long tasks (>50ms):', tasks.length, tasks.map((t) => Math.round(t.dur / 1000) + 'ms'));
for (const n of ['Layout', 'UpdateLayoutTree', 'Paint', 'PrePaint', 'Layerize', 'FunctionCall', 'EvaluateScript', 'EventDispatch'])
  console.log(n.padEnd(18), JSON.stringify(sum(n)));
const commits = ev.filter((e) => e.name === 'Commit' && e.ph === 'X').length;
console.log('Commit (compositor) events', commits);
