# GymOS Landing

Public marketing site for GymOS, at `gymos.com`. Next.js 16 (App Router),
TypeScript, Tailwind v4.

Built to match `design_handoff_gymos/designs/GymOS Landing.dc.html`. Where that
design and the planning docs disagree, the docs win for tiers, roles, fields and
routes, and the design wins for visual treatment — the rule set in the handoff
README.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # all 7 routes prerender as static content
npm run lint
```

## Routes

| Route | Design page |
|---|---|
| `/` | Home — hero, proof strip, role-switching dashboard, M‑Pesa, closing CTA |
| `/features` | Features, 4 groups |
| `/pricing` | Tier cards + the full comparison matrix |
| `/how-it-works` | 6 numbered steps |
| `/why-kenya` | Long-form copy + 3 principle cards |
| `/faq` | Accordion |
| `/start` | 6-field signup form → "Check your email" confirmation |

## Design tokens

`src/app/globals.css` holds the Forest + Volt palette, type scale, radii and
shadows, ported from `design_handoff_gymos/tokens/` to Tailwind v4's CSS-first
config. The same palette is meant to be identical across all four frontends.

Themes switch on `<html data-theme>`; the choice persists to `localStorage`
under `gymos-theme` and is applied by an inline script before first paint, so a
stored dark theme never flashes light. See `src/lib/theme.ts`.

Breakpoints follow the handoff: `sm` is the 0–599 default (no prefix), `md`
600, `lg` 1024, `xl` 1440, plus `dash` 960 and `wide` 1040 for the two extra
thresholds the landing design switches on.

## Content

Copy lives in `src/lib/content.ts`, transcribed from the design, which the
handoff marks as final. "M‑Pesa" uses U+2011 NON-BREAKING HYPHEN throughout.

Tiers live in `src/lib/pricing.ts` and come from `docs/07-pricing-tiers.md`, not
from the design's placeholder Starter/Growth/Pro set.

## Known gaps

- `src/components/mocks/` stands in for the live `dc-import` embeds of the
  Member PWA and Club Dashboard. Those repos are not built yet, so the phone and
  browser frames render token-accurate reconstructions from the handoff's screen
  specs. Replace them with real screenshots once the apps exist — the frames
  themselves are already to spec.
- `/start` has no backend. Submitting shows the design's confirmation state.

Deploy target per `docs/10-repo-structure.md`: GitHub → AWS Amplify.
