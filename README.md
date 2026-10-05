# Orynex Technologies — orynex.tech

Next.js 15 (App Router, static export) rebuild of the design in `orynex-handoff/reference/`.

- `npm run dev` — local dev server
- `npm run build` — static export to `out/` (what Vercel serves)
- `content/site.ts` — all copy and data
- `app/globals.css` — tokens + reference stylesheet (class names unchanged) + a few additions at the bottom
- `scripts/diff.mjs` — Playwright visual diff against the reference (serve `orynex-handoff` on :4101 and `out` on :4102 first)

Vercel: Framework Preset "Next.js" (or "Other" with output directory `out`), no env vars needed.
