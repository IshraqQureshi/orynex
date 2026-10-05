// Custom next/image loader for the static export (the default loader needs a server).
// Maps a requested width to the nearest pre-generated WebP from scripts/optimize-images.mjs.
const widths: Record<string, number[]> = {
  flow: [1000, 1600, 2000],
  'ai-sphere': [600, 1200, 1800],
  'case-library': [800, 1200, 1600],
  'case-market': [800, 1200, 1600],
  'case-learning': [800, 1200, 1600],
  'logo-white': [124, 248, 372],
};

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const name = src.split('/').pop()!.replace(/\.\w+$/, '');
  const set = widths[name];
  if (!set) return src;
  const w = set.find((x) => x >= width) ?? set[set.length - 1];
  return `/images/optimized/${name}-${w}.webp`;
}
