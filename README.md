# Woodstone Studio — V2

Premium, dark-only studio website. Next.js 15 (App Router) · TypeScript · TailwindCSS · Framer Motion · Geist.

## Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (statik, Vercel-ready)
```

## Mimari

- `app/layout.tsx` — Geist fontları (next/font), SEO metadata, arka plan katmanları (grid + noise + aurora + spotlight)
- `app/page.tsx` — Server Component; Hero → Selected Work → Studio → Contact
- `components/mockups/` — Contractory, AlphaOS ve AuthorAI'ın **kodla render edilmiş canlı mini-UI'ları** (görsel yok, ürünün kendisi var)
- `components/motion/reveal.tsx` — sitedeki tek motion sözlüğü: fade + rise + un-blur
- `lib/projects.ts` — ileride `/work/[slug]` detay sayfalarına (Hero → Overview → Challenge → Solution → Technology → Gallery → Next) taşınacak veri modeli

## Client Component'ler (sadece 3)

`nav.tsx` (scroll blur), `fx/spotlight.tsx` (mouse spotlight), `motion/reveal.tsx`. Geri kalan her şey Server Component.

## Erişilebilirlik & performans

- `prefers-reduced-motion` her animasyonda saygı görüyor
- Klavye focus halkaları görünür (accent renk)
- Tamamen statik prerender, First Load JS ~142 kB
