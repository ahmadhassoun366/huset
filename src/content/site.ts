/* =============================================================
   SITE CONTENT — SINGLE SOURCE OF TRUTH
   -------------------------------------------------------------
   >>> THE COMPANY NAME LIVES IN `BRAND` BELOW. <<<
   Change those few strings and the name updates everywhere on
   the site — header, footer, page titles, body copy and all.
   Never hard-code the company name anywhere else; always import
   BRAND from this file.
   ============================================================= */

export const BRAND = {
  /** Display name, e.g. "Samita". PLACEHOLDER — replace when decided. */
  name: 'Navnet',
  /** Full legal entity used in the footer / contact page. */
  legalName: 'Administrationen Navnet ApS',
  /** Domain shown in the footer copyright line. */
  domain: 'navnet.dk',
  /** One-line promise used in the hero and footer. */
  tagline:
    'Alle har ret til en ny fortælling – hos os skaber vi den sammen',
} as const

export const CONTACT = {
  phone: '(+45) 61 40 43 46',
  phoneHref: '+4561404346',
  email: 'info@navnet.dk',
  address: 'Bogøvej 15, 8382 Hinnerup',
  cvr: '44276631',
  onCall: {
    label: 'Døgntelefon til visitationsteam (forbeholdt myndighed)',
    phone: '(+45) 71 74 04 16',
    phoneHref: '+4571740416',
  },
  linkedin:
    'https://www.linkedin.com/company/samitadk/about/?viewAsMember=true',
} as const

export const OPENING_HOURS = [
  { days: 'Man – torsdag', hours: '08:00 – 15:30' },
  { days: 'Fredag', hours: '08:00 – 14:00' },
  { days: 'Lør – søndag', hours: 'Lukket' },
] as const

/* -------------------------------------------------------------
   NAVIGATION — mirrors the original site's header exactly.
   ------------------------------------------------------------- */

export type NavChild = { label: string; to: string }
export type NavItem = { label: string; to: string; children?: NavChild[] }

export const NAV: NavItem[] = [
  { label: 'Forside', to: '/' },
  {
    label: 'Kommuner',
    to: '/kommuner',
    children: [
      { label: 'Pædagogik', to: '/kommuner/paedagogik' },
      { label: 'Målgruppe', to: '/kommuner/maalgruppe' },
    ],
  },
  {
    label: 'Hvem er vi',
    to: '/hvem-er-vi',
    children: [
      { label: 'Værdier', to: '/hvem-er-vi/vaerdier' },
      { label: 'Bestyrelsen', to: '/hvem-er-vi/bestyrelsen' },
    ],
  },
  {
    label: 'Afdelinger',
    to: '/afdelinger',
    children: [
      { label: 'Knudsbjergvej', to: '/afdelinger/knudsbjergvej' },
      { label: 'Overgårdsvej', to: '/afdelinger/overgaardsvej' },
      { label: 'Skanderborgvej 180', to: '/afdelinger/skanderborgvej-180' },
      { label: 'Skanderborgvej 182', to: '/afdelinger/skanderborgvej-182' },
      { label: 'Gl. Århusvej', to: '/afdelinger/gl-aarhusvej' },
    ],
  },
  { label: 'Fortællinger', to: '/fortaellinger' },
  { label: 'Tilsyn', to: '/tilsyn' },
  { label: 'Kontakt os', to: '/kontakt-os' },
]

export const FOOTER_INFO_LINKS = [
  {
    label: 'Tilbudsportalen',
    href: 'https://www.sbst.dk/tvaergaende-omrader/tilbudsportalen',
    external: true,
  },
  {
    label: 'Whistleblowerordning',
    href: 'https://whistleblowersoftware.com/secure/9ed64a7b-3147-4a83-9635-35a542852f7a',
    external: true,
  },
  {
    label: 'Styrelsen for Patientsikkerhed',
    href: 'https://stps.dk/',
    external: true,
  },
  {
    label: 'Tilsyn midt',
    href: 'https://tilsynmidt.silkeborg.dk/',
    external: true,
  },
  { label: 'Barnets lov § 43', href: '/barnets-lov', external: false },
] as const

/* -------------------------------------------------------------
   DEPARTMENTS — shared between the overview and detail pages.
   ------------------------------------------------------------- */

import type { ImageKey } from '../lib/images'

export type Department = {
  slug: string
  name: string
  /** Legal approval basis, verbatim from the original site. */
  approval: string
  to: string
  image: ImageKey
}

export const DEPARTMENTS: Department[] = [
  {
    slug: 'knudsbjergvej',
    name: 'Knudsbjergvej',
    approval: 'Botilbud godkendt jf. servicelovens § 107',
    to: '/afdelinger/knudsbjergvej',
    image: 'deptKnudsbjergvej',
  },
  {
    slug: 'overgaardsvej',
    name: 'Overgårdsvej',
    approval:
      'Børne- og ungehjem og botilbud godkendt jf. Barnets lov § 43, stk. 1, nr. 6 og stk. 3 og servicelovens § 107',
    to: '/afdelinger/overgaardsvej',
    image: 'deptOvergaardsvej',
  },
  {
    slug: 'skanderborgvej-180',
    name: 'Skanderborgvej 180',
    approval:
      'Børne- og ungehjem og botilbud godkendt jf. Barnets lov § 43, stk. 1, nr. 6 og stk. 3',
    to: '/afdelinger/skanderborgvej-180',
    image: 'deptSkanderborgvej180',
  },
  {
    slug: 'skanderborgvej-182',
    name: 'Skanderborgvej 182',
    approval: 'Botilbud godkendt jf. servicelovens § 107 og 108',
    to: '/afdelinger/skanderborgvej-182',
    image: 'deptSkanderborgvej182',
  },
  {
    slug: 'gl-aarhusvej',
    name: 'Gl. Århusvej',
    approval:
      'Børne- og ungehjem og botilbud godkendt jf. Barnets lov § 43, stk. 1, nr. 6 og stk. 3 og servicelovens § 107',
    to: '/afdelinger/gl-aarhusvej',
    image: 'deptGlAarhusvej',
  },
]

/* -------------------------------------------------------------
   TESTIMONIALS — verbatim from the original site.
   ------------------------------------------------------------- */

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '{brand} har skabt både trivsel og udvikling hos de borgere, jeg har anbragt hos dem. Deres pædagogiske indsatser bærer præg af høj faglighed, ordentlighed og en stærk evne til at skabe autentiske relationer til borgerne.',
    author: 'Rusmira',
    role: 'Matchningskonsulent',
  },
  {
    quote:
      'Jeg oplevede personalet som en tryg og støttende enhed, der bidrog væsentligt til min udvikling og hjalp mig med at finde retningen i livet.',
    author: 'Anonym',
    role: 'Tidligere beboer i botilbud',
  },
  {
    quote:
      'Det, {brand} har gjort for mig, er livsændrende. De har hjulpet mig med at finde troen på mig selv, forstå mine følelser og opbygge sunde relationer.',
    author: 'Anonym',
    role: 'Beboer på børne- og ungehjem',
  },
  {
    quote:
      'Min tid på {brand} var en rigtig positiv oplevelse. Jeg mødte mange dejlige pædagoger, som altid var nærværende og klar til at støtte og hjælpe mig, når der var behov.',
    author: 'Anonym',
    role: 'Tidligere beboer',
  },
  {
    quote:
      'Vores søn har været anbragt hos {brand}, og vi har oplevet et meget professionelt og tillidsfuldt samarbejde med personalet. Vi har altid følt os velkomne og inddraget som forældre. Vores søn har gennemgået en stor og positiv udvikling i sin tid hos {brand}, og det er vi meget taknemmelige for.',
    author: 'Forældre',
    role: 'Til beboer på {brand}',
  },
  {
    quote:
      'Mit opholdssted er det bedste af alle – og det er der mange grunde til. Først og fremmest på grund af de fantastiske pædagoger. De er altid klar på at lave noget, både ude og inde, og de er sjove og nærværende. Uanset hvad tid på dagen det er, føles det som om, der altid er nogen der for én.',
    author: 'David',
    role: 'Beboer på {brand}',
  },
  {
    quote:
      'Hos {brand} bliver jeg altid mødt i øjenhøjde og med respekt. Rammerne er tydelige, og uanset hvad der sker, bliver man altid mødt med dialog og forståelse. Jeg føler, at {brand} i det seneste år har været med til at forberede mig på at blive 18 år – både praktisk og personligt.',
    author: 'Elias',
    role: 'Beboer på {brand}',
  },
]

export const PARTNERS = [
  'Nordic Pas',
  'Deltaplan',
  'Aktiv',
  'Falck',
  'FindSocialeTilbud',
  'Schantz Revision',
  'LOL',
] as const
