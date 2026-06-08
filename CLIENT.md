# Fernani Fabric — Dossier Client

## 👤 Client

**Alaa Fernani**
Marque marocaine de **Workwear & Professional Apparel** — premium, minimaliste, corporate.

**Signature** : *Built for Work. Made for Comfort.*

---

## 🔑 Liens & accès

| Ressource | URL |
|---|---|
| **Site prod** | https://proposal.mehdijabry.dev/Fernani-Fabric-z9k4t/ |
| **Inner site Render** | https://proposal-fernani-fabric-z9k4t.onrender.com/ |
| **GitHub** | https://github.com/mehdijabry/proposal-fernani-fabric-z9k4t |
| **Render service** | `srv-d8j187nlk1mc738n7fvg` (proposal-fernani-fabric-z9k4t) |
| **Dossier local** | `/Users/Mehdi/Desktop/fernani-fabric/` |

### Contact client
- 📧 `fabric.fernani@gmail.com`
- 📱 `+212 6 55 88 36 21`
- 💬 WhatsApp : `wa.me/212655883621`

---

## 🏗️ Architecture

```
/                   → Splitter d'entrée (logo F + intro 1.6s + 2 cards)
/textile            → AXE 01 — Apparel Personnalisé (hoodies, polos, broderie/DTF/sérigraphie/sublimation)
/epi                → AXE 02 — EPI Workwear (gilets HV, casques, normes EN ISO, BTP/Industrie/Énergie…)
```

### Stack
- Vite + React TS
- Tailwind 3 — palette : `marine` #0a2540, `sand` #c9a877 (zellige), `cream` #f6f3ee, `hivis` #ffcc00
- React Router (basename calé sur BASE_URL)
- Framer Motion (entrée splash + reveal sections)
- Fonts : Playfair Display (display italic) + Inter (body) + JetBrains Mono (accents)

### Différenciation des 2 axes
| Élément | Textile | EPI |
|---|---|---|
| Accent | **sand** | **hivis** (jaune sécurité) |
| Hero photo | Apparel lifestyle | Combinaison chantier |
| Promise icons | Durabilité / Style / Personnalisation / Premium | Durabilité / Sécurité / Confort / Normes EN ISO |
| Section noire | Techniques marquage (broderie, DTF, sérigraphie, sublimation) | Secteurs servis (BTP, Industrie, Énergie…) |
| About CTA | Sand button | Hivis button |

---

## 🛠️ Comment modifier le site

### Texte / sections
- **Splitter** : `src/pages/Splitter.tsx`
- **Page Textile** : `src/pages/Textile.tsx` (constantes `TECHNIQUES`, `TARGETS` en haut)
- **Page EPI** : `src/pages/Epi.tsx` (constantes `NORMS`, `SECTORS` en haut)
- **Footer / Contact** : `src/components/Footer.tsx` · `src/components/ContactSection.tsx`
- **Logo SVG** : `src/components/Logo.tsx` (mark = path inline, modifiable)

### Photos
- Hero photo : prop `photo` dans `<HeroSection>` (utilise Unsplash IDs avec `?auto=format&fit=crop&w=1600&q=85`)
- Card photos : tableau `cards` passé à `<CollectionGrid>`
- Splitter photos : `PHOTOS.textile` / `PHOTOS.epi` dans `Splitter.tsx`

### Couleurs / typo
- `tailwind.config.js` → palette `marine`, `sand`, `cream`, `hivis`
- `src/index.css` → composants `.btn-primary`, `.eyebrow`, `.tab-link`, `.bg-zellige`

### Slug d'URL
Actuellement `/Fernani-Fabric-z9k4t/`. Pour changer :
1. `vite.config.ts` → `basePath`
2. Render env var `BASE_PATH`
3. Rewrite rule sur `proposal-router` → `/Fernani-Fabric-NEW-SLUG/* → onrender.com/*`

### Domaine custom
Aujourd'hui sous `proposal.mehdijabry.dev/Fernani-Fabric-z9k4t/`.
Quand Alaa achète son domaine (ex `fernanifabric.ma`) :
1. Dans Render Static Site → Settings → Custom domains → add `fernanifabric.ma`
2. Pointer le DNS A/CNAME chez son registrar vers Render
3. Mettre à jour `index.html` meta (`og:url`, `canonical`)
4. `vite.config.ts` → `basePath = '/'` (plus de prefix)
5. Render → enlever `BASE_PATH`
6. Supprimer la rewrite rule sur `proposal-router` (plus nécessaire)

---

## 🚀 Workflow modif → prod

```bash
cd /Users/Mehdi/Desktop/fernani-fabric

# 1. Modifs locales
npm run dev          # preview sur localhost:5173/Fernani-Fabric-z9k4t/

# 2. Build local pour vérifier
npm run build        # → dist/public/

# 3. Push (auto-deploy sur Render)
git add -A
git commit -m "feat: description"
git push origin main

# 4. Vérifier prod
curl https://proposal.mehdijabry.dev/Fernani-Fabric-z9k4t/
```

Render auto-deploy à chaque push sur `main`. Build dure ~2 min. Cache CDN edge = 5 min max.

---

## 📝 Décisions de design préservées (à respecter)

✅ **Premium / minimaliste / corporate** — jamais cheap, jamais agressif promo.
✅ **Zellige discret** — pattern SVG 6-12% opacity, jamais envahissant.
✅ **Jaune sécurité hivis** — exclusivement réservé à l'axe EPI (HV).
✅ **Builders of Morocco** — concept communautaire au footer + section about.
✅ **Bleu Marine** = couleur principale partout. **Beige Marocain** = accent textile.
✅ **Photos modèles** > flat-lay > placeholders.

---

## 📦 Commits clés

| Commit | Description |
|---|---|
| `5c3bef4` | Photos hero + cards swap (workwear-thematic Unsplash) |
| `4ee13b4` | Photo-first editorial refactor (match screenshots client) |
| `3535546` | Revert outDir to dist/public (rely on proposal-router strip) |
| `eeaef51` | Nested dist under base path (build asset paths fix) |
| `7106311` | Init 2 axes + splitter + design system |

---

## 🔮 TODO futures (si demandé)

- [ ] Branding custom domain quand Alaa l'achète
- [ ] Catalogue produit complet (lazy load par axe)
- [ ] Page individuelle par produit (slug `/textile/hoodie-corporate`)
- [ ] Backend devis via Cloudflare Worker forms-hub (réutiliser le pattern Ntaco)
- [ ] Galerie réalisations / before-after
- [ ] Blog actu (workwear trends, nouveaux EPI)
- [ ] Multi-langue FR/EN/AR
