/* =============================================================
   PLACEHOLDER IMAGES
   -------------------------------------------------------------
   All photography lives here. These are temporary stock photos —
   swap the URL on the right for the real asset when it arrives
   (e.g. '/images/hero.jpg' after dropping the file in /public).
   Nothing else in the codebase needs to change.
   ============================================================= */

type ImageAsset = {
  src: string
  /** Descriptive alt text — keep meaningful when swapping the photo. */
  alt: string
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

export const IMAGES = {
  /* --- hero / brand --- */
  hero: {
    src: unsplash('1476703993599-0035a21b17a9', 2000),
    alt: 'Solbeskinnet stue med bløde møbler og store vinduer',
  },
  heroSecondary: {
    src: unsplash('1522708323590-d24dbb6b0267'),
    alt: 'Fælles opholdsrum med sofa og planter',
  },

  /* --- about / approach --- */
  about: {
    src: unsplash('1560448204-e02f11c3d0e2'),
    alt: 'Lyst køkkenalrum med spisebord',
  },
  approach: {
    src: unsplash('1521737604893-d14cc237f11d'),
    alt: 'Medarbejdere i samtale omkring et bord',
  },
  community: {
    src: unsplash('1529156069898-49953e39b3ac'),
    alt: 'Gruppe mennesker samlet omkring et bord',
  },
  nature: {
    src: unsplash('1500534314209-a25ddb2bd429'),
    alt: 'Sti gennem grønt landskab',
  },
  care: {
    src: unsplash('1516585427167-9f4af9627e6c'),
    alt: 'Hænder der holder om en kop te',
  },

  /* --- departments (afdelinger) --- */
  deptKnudsbjergvej: {
    src: unsplash('1568605114967-8130f3a36994'),
    alt: 'Hvidt hus med have',
  },
  deptOvergaardsvej: {
    src: unsplash('1570129477492-45c003edd2be'),
    alt: 'Villa med rød facade og indkørsel',
  },
  deptSkanderborgvej180: {
    src: unsplash('1512917774080-9991f1c4c750'),
    alt: 'Moderne hus set fra haven',
  },
  deptSkanderborgvej182: {
    src: unsplash('1449844908441-8829872d2607'),
    alt: 'Rødstenshus omgivet af træer',
  },
  deptGlAarhusvej: {
    src: unsplash('1416331108676-a22ccb276e35'),
    alt: 'Landejendom i grønne omgivelser',
  },

  /* --- people / stories --- */
  people: {
    src: unsplash('1517841905240-472988babdf9'),
    alt: 'Portræt af ung person udendørs',
  },
  board: {
    src: unsplash('1600880292203-757bb62b4baf'),
    alt: 'Møde omkring et bord',
  },
  story: {
    src: unsplash('1499209974431-9dddcece7f88'),
    alt: 'Person der ser ud over et landskab',
  },
  values: {
    src: unsplash('1522202176988-66273c2fd55f'),
    alt: 'Kollegaer i samarbejde',
  },
  contact: {
    src: unsplash('1497366754035-f200968a6e72'),
    alt: 'Lyst kontormiljø',
  },
  supervision: {
    src: unsplash('1450101499163-c8848c66ca85'),
    alt: 'Notesbog og dokumenter på et bord',
  },
} satisfies Record<string, ImageAsset>

export type ImageKey = keyof typeof IMAGES

export const img = (key: ImageKey): ImageAsset => IMAGES[key]
