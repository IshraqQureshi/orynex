// Generates responsive WebP + AVIF variants of the site images.
// Usage: node scripts/optimize-images.mjs   (outputs to public/images/optimized/)
//
// - hero / cta: 1200, 1920, 2400 wide, served via <picture> (AVIF > WebP > JPEG)
// - everything else: served as WebP through the custom next/image loader (lib/imageLoader.ts)
// Keep the widths below in sync with lib/imageLoader.ts.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'public/images';
const OUT = path.join(SRC, 'optimized');

const jobs = [
  { name: 'hero', ext: 'jpg', widths: [1200, 1920, 2400] },
  { name: 'cta', ext: 'jpg', widths: [1200, 1920, 2400] },
  { name: 'flow', ext: 'jpg', widths: [1000, 1600, 2000] },
  { name: 'ai-sphere', ext: 'jpg', widths: [600, 1200, 1800] },
  { name: 'case-library', ext: 'jpg', widths: [800, 1200, 1600] },
  { name: 'case-market', ext: 'jpg', widths: [800, 1200, 1600] },
  { name: 'case-learning', ext: 'jpg', widths: [800, 1200, 1600] },
  { name: 'logo-white', ext: 'png', widths: [124, 248, 372] },
];

fs.mkdirSync(OUT, { recursive: true });
const kb = (f) => Math.round(fs.statSync(path.join(OUT, f)).size / 1024);

for (const { name, ext, widths } of jobs) {
  const input = path.join(SRC, `${name}.${ext}`);
  const { width } = await sharp(input).metadata();
  for (const w of widths) {
    const img = () => sharp(input).resize({ width: Math.min(w, width), withoutEnlargement: true });
    const webp = `${name}-${w}.webp`;
    const avif = `${name}-${w}.avif`;
    await img().webp({ quality: 80, effort: 5 }).toFile(path.join(OUT, webp));
    await img().avif({ quality: 55, effort: 5 }).toFile(path.join(OUT, avif));
    console.log(`${name}-${w}: webp ${kb(webp)}KB  avif ${kb(avif)}KB`);
  }
}
