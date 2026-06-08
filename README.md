# Fernani Fabric — Site vitrine (2 axes)

Two-axis site for the Moroccan workwear brand **Fernani Fabric** (Built for Work. Made for Comfort.).

- `/` — Splitter d'entrée (Textile / EPI)
- `/textile` — Axe **Textile Personnalisé** (Apparel, broderie, DTF, sérigraphie, sublimation)
- `/epi` — Axe **EPI Workwear** (gilets HV, casques, gants, normes EN ISO)

## Stack
- Vite + React + TypeScript
- Tailwind 3 (palette : `marine` #0a2540, `sand` #c9a877, `cream` #f6f3ee, `hivis` #ffcc00)
- React Router (BrowserRouter avec `basename` calé sur `BASE_URL`)
- Framer Motion (entrée splash + reveal sections)

## Deploy
Lives under `https://proposal.mehdijabry.dev/Fernani-Fabric-z9k4t/`.
On Render Static Site, set:
- **Publish directory**: `dist/public`
- **Build command**: `npm install && npm run build`
- **Env var** `BASE_PATH` = `/Fernani-Fabric-z9k4t/`
- **Rewrite rule** in Render: `Source /*` → `Destination /index.html` → `Rewrite` (SPA fallback)

Add a rewrite on `proposal-router` so `/Fernani-Fabric-z9k4t/*` → this Static Site.

## Contact (fixed in code)
- 📧 `fabric.fernani@gmail.com`
- 📱 `+212 6 55 88 36 21`
- 💬 WhatsApp `wa.me/212655883621`
