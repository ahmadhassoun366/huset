# Website

React 19 + TypeScript + Vite. Danish-language marketing site for a børne- og ungehjem / botilbud organisation.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
npm run lint
```

---

## The three things that change later

Everything the client still needs to decide is isolated to one file each. You do
not need to touch components to change any of them.

### 1. Company name → `src/content/site.ts`

The name is a placeholder (`Navnet`). It appears in the header, footer, page
titles, body copy and testimonial quotes — all of it reads from `BRAND`:

```ts
export const BRAND = {
  name: 'Navnet',                          // ← the display name
  legalName: 'Administrationen Navnet ApS', // ← legal entity in the footer
  domain: 'navnet.dk',                      // ← shown in the copyright line
  tagline: 'Alle har ret til en ny fortælling – hos os skaber vi den sammen',
}
```

Change those four strings and the whole site updates. Contact details live in
the same file under `CONTACT` (phone, email, address, CVR, døgntelefon,
LinkedIn) and are also placeholders where the real ones aren't known.

Copy that mentions the company by name uses a `{brand}` placeholder and is
rendered through the `brand()` helper in `src/lib/brand.ts` — that's why
testimonial quotes re-brand themselves automatically. If you add copy that
names the company, write `{brand}` and render it with `brand(...)`.

### 2. Colours → `src/styles/tokens.css`

Every colour on the site derives from eight values at the top of that file:

```css
--brand-ink        /* darkest — headlines, footer background */
--brand-deep       /* deep brand colour — dark sections       */
--brand-mid        /* mid tone — buttons, links               */
--brand-soft       /* muted — borders, accents                */
--brand-tint       /* pale wash — section backgrounds         */
--brand-cream      /* page background                         */
--brand-accent     /* warm accent — eyebrows, highlights      */
--brand-accent-soft
```

Edit those and the site re-themes. No component hard-codes a colour. The same
file also holds the type scale, spacing scale, radii, shadows and motion
timings if the design needs tuning.

### 3. Photography → `src/lib/images.ts`

All images are temporary stock photos, referenced by key:

```ts
hero: { src: '…unsplash…', alt: 'Solbeskinnet stue med …' }
```

To swap in real photography, drop files into `public/images/` and change the
`src` to `/images/your-file.jpg`. Keep the `alt` text meaningful and in Danish —
it's what screen readers announce.

---

## Fonts

**Fraunces** (serif) for display/headings, **Plus Jakarta Sans** for body text,
loaded from Google Fonts in `index.html` and exposed as `--font-display` /
`--font-body`. To change typeface, swap the `<link>` and those two variables.

---

## Structure

```
src/
  content/site.ts       BRAND, CONTACT, NAV, DEPARTMENTS, TESTIMONIALS — single source of truth
  content/departments.ts  per-department detail copy
  lib/images.ts         all image URLs + alt text
  lib/brand.ts          {brand} placeholder interpolation
  styles/tokens.css     design tokens — colours live here
  styles/base.css       reset + shared layout/typography classes
  components/layout/    Header, Footer, Logo, Layout (shell + routing chrome)
  components/ui/        Button, Reveal, SectionHeading, PageHero
  components/…/         page-specific section components
  pages/                one file per route
  App.tsx               route table
```

Routes mirror the original site's navigation: `/`, `/kommuner` (+ `/paedagogik`,
`/maalgruppe`), `/hvem-er-vi` (+ `/vaerdier`, `/bestyrelsen`), `/afdelinger`
(+ `/:slug` for each of the five departments), `/fortaellinger`, `/tilsyn`,
`/kontakt-os`, `/barnets-lov`.

## Known placeholders

- Company name, domain and email — see `BRAND` above.
- All photography — stock, see `src/lib/images.ts`.
- Logo — a wordmark built from `BRAND.name` in `src/components/layout/Logo.tsx`.
  Swap the inner markup for an `<img>` when the real logo exists.
- The contact form has no backend; the submit handler is marked with a `TODO`.
- Board members and inspection-report links are labelled placeholders.

## Deployment note

This is a client-side router. Any host must rewrite all paths to `/index.html`,
or deep links like `/afdelinger/overgaardsvej` will 404 on refresh.
"# huset" 
