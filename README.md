# Huset Stjernestøv

Danish website built with React 19, TypeScript, Vite and React Router.
Official production domain: https://husetstjernestov.dk.

## Development and validation

```sh
npm ci
npm run dev
npm test          # rendered-page SEO and content checks
npm run lint
npm run build    # TypeScript check, Vite build and static prerendering
npm run test:e2e # Chrome: routes, hydration, navigation, images and SEO
npm run preview
```

The browser suite requires Google Chrome and starts Vite preview on port 4173.
Run the build before browser tests. robots.txt and sitemap.xml are build outputs
available through preview and production, not the Vite development server.

## Pages and deployment

Public routes are `/`, `/om-os`, `/malgruppe`, `/faglig-tilgang`, `/hverdagen`,
`/for-kommuner` and `/kontakt`. Navigation is defined in `src/content/site.ts`;
route components are registered in `src/App.tsx`.

`scripts/prerender.mjs` writes complete HTML for each public page, plus `404.html`,
`robots.txt` and `sitemap.xml`, into `dist`. Page files use the form `om-os.html`.
Vercel's `cleanUrls: true` serves these as `/om-os` and redirects `.html` variants;
`trailingSlash: false` removes trailing slashes. Keep the root URL ending in `/`.
Do not add a catch-all rewrite to the homepage: it would replace route-specific
HTML and real 404 responses. Unknown pages are marked `noindex` and excluded from
the sitemap. No backend contact form is present; contact uses phone/email links.

The `www.husetstjernestov.dk` redirect preserves paths and sends visitors to the
canonical HTTPS domain. It takes effect for traffic reaching this Vercel project;
DNS and domain assignments remain managed in Vercel. Preview deployment hosts
remain usable and their page metadata points to the official production domain.

## SEO maintenance

- Company identity, canonical origin, address, telephone and verified profile
  URLs live in `src/content/site.ts`. Existing website facts were reused without
  external verification. The general email retains its existing confirmation note.
- Each page supplies its Danish title and description to `Seo` in
  `src/components/Elements.tsx`. React manages the same metadata for static HTML
  and client navigation, including canonical, Open Graph and Twitter cards.
- Organization and WebSite JSON-LD use existing company details. `sameAs` is
  omitted until verified official profile URLs are added to `site.sameAs`.
- Social cards use the existing `/images/logo.png` with an absolute production
  URL. The header logo and `/favicon.svg` retain stable root-relative references.
- The homepage H1 is the company name; the existing slogan remains in visible copy.
- The sitemap is generated from the public navigation list. Update navigation,
  route registration and tests together when adding a page. No fabricated
  modification dates, search actions, ratings or profile links are published.
- Localhost URLs in browser-test configuration are intentional. No old production
  domain references were found in the application source during the SEO audit.

## External follow-up after deployment

1. Verify the domain property in Google Search Console, submit
   `https://husetstjernestov.dk/sitemap.xml`, and inspect/request indexing of the
   homepage and key pages. Check Google's selected canonical and rendered HTML.
2. Check live HTTP-to-HTTPS, www-to-apex, trailing-slash and `.html` redirects,
   status codes, crawler files and the custom 404. These cannot be proven by
   Vite preview. Keep old domains redirected only if owned and configured;
   do not alter email domains or unrelated external links.
3. Validate the deployed JSON-LD with Schema Markup Validator and Google's Rich
   Results Test. Organization details must stay aligned with visible company facts.
4. Confirm Google Business Profile eligibility and maintain matching company name,
   address, telephone and official website. Add verified profile URLs to `sameAs`.
5. Seek accurate listings and editorial links from relevant partners and directories.
   Avoid purchased link schemes and fabricated listings.

These changes improve technical clarity and discoverability; they cannot guarantee
a particular Google ranking.

References: [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls),
[Organization data](https://developers.google.com/search/docs/appearance/structured-data/organization),
[site names](https://developers.google.com/search/docs/appearance/site-names), and
[Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json).
