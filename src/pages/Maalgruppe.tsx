import { CONTACT } from '../content/site'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { img } from '../lib/images'
import './Maalgruppe.css'

/* ---------------------------------------------------------------
   Page data
   --------------------------------------------------------------- */

const CRUMBS = [{ label: 'Kommuner', to: '/kommuner' }]

type Track = {
  id: string
  kicker: string
  title: string
  age: string
  law: string
  paragraphs: string[]
  tags: string[]
}

const TRACKS: Track[] = [
  {
    id: 'boern-og-unge',
    kicker: 'Spor 1',
    title: 'Børn og unge i alderen 11 til 17 år',
    age: '11–17 år',
    law: 'Barnets lov § 43, stk. 1, nr. 6 og stk. 3',
    paragraphs: [
      'Vores målgruppe er unge, der befinder sig i en udsat position og er i risiko for at udvikle kriminalitet. De unge har ofte været udsat for omsorgssvigt og har betydelige følelsesmæssige og sociale udviklingsvanskeligheder.',
      'Mange af de unge har indadreagerende og/eller udadreagerende adfærd og kan være udredt med diagnoser inden for autismespektret eller med opmærksomhedsforstyrrelser (fx ADHD), tilknytningsforstyrrelser eller andre former for udviklingsforstyrrelser.',
      'Målgruppen har i høj grad behov for en struktureret hverdag, præget af tryghed, forudsigelighed og stabile, nærværende og omsorgsfulde voksne.',
      'Vi har særlig ekspertise i arbejdet med unge anbragt under en UKN-afgørelse (Ungdomskriminalitetsnævnet). Mange af de unge, vi modtager, kommer fra sikrede institutioner eller er visiteret til os, fordi de ikke kan rummes i andre åbne børne- og ungehjem, fx pga. deres adfærd.',
    ],
    tags: [
      'Omsorgssvigt',
      'Indadreagerende adfærd',
      'Udadreagerende adfærd',
      'Autismespektret',
      'Opmærksomhedsforstyrrelser (fx ADHD)',
      'Tilknytningsforstyrrelser',
      'Andre udviklingsforstyrrelser',
      'UKN-afgørelse',
      'Kriminalitetstruet',
    ],
  },
  {
    id: 'voksne',
    kicker: 'Spor 2',
    title: 'Voksne',
    age: 'Fra 18 år',
    law: 'Servicelovens §§ 107 og 108',
    paragraphs: [
      'Målgruppen er voksne, som er kriminalitetstruede med udadreagerende adfærd. Borgerne kan have diagnoser inden for autismespektret, personlighedsforstyrrelse, forandret virkelighedsopfattelse, opmærksomhedsforstyrrelse, OCD og kan være udviklingshæmmede i lettere grad (IQ 50–69). Borgerne kan være anbragt på domstype 2, 3, 4 og 5 under deres anbringelse.',
      'Borgerne befinder sig i en udsat position og er i risiko for at udvikle kriminalitet. De har ofte været udsat for omsorgssvigt og har betydelige følelsesmæssige og sociale udviklingsvanskeligheder. Borgerne kan komme fra udsatte miljøer, sikret institution eller andet tilbud, som ikke kunne rumme dem grundet deres udadreagerende adfærd.',
    ],
    tags: [
      'Kriminalitetstruet',
      'Udadreagerende adfærd',
      'Autismespektret',
      'Personlighedsforstyrrelse',
      'Forandret virkelighedsopfattelse',
      'Opmærksomhedsforstyrrelse',
      'OCD',
      'Lettere udviklingshæmning (IQ 50–69)',
      'Domstype 2–5',
    ],
  },
]

type MatrixRow = {
  group: string
  age: string
  law: string
  referral: string
}

const MATRIX: MatrixRow[] = [
  {
    group: 'Børn og unge',
    age: '11–17 år',
    law: 'Barnets lov § 43, stk. 1, nr. 6 og stk. 3',
    referral:
      'Kommunal anbringelse eller afgørelse fra Ungdomskriminalitetsnævnet – ofte i overgang fra sikret institution.',
  },
  {
    group: 'Voksne, midlertidigt ophold',
    age: 'Fra 18 år',
    law: 'Servicelovens § 107',
    referral:
      'Voksne med betydelig nedsat funktionsevne eller særlige sociale problemer, herunder domstype 2–5.',
  },
  {
    group: 'Voksne, længerevarende ophold',
    age: 'Fra 18 år',
    law: 'Servicelovens § 108',
    referral:
      'Voksne med varigt nedsat funktionsevne og behov for omfattende støtte i hverdagen.',
  },
]

const PRICE_FACTORS: string[] = [
  'Udadreagerende adfærd',
  'Rømningstruet',
  'Aktivt forbrug af rusmidler',
  'Samlet støttebehov',
]

export default function Maalgruppe() {
  const portrait = img('story')

  return (
    <>
      <PageHero
        eyebrow="Hvem modtager vi"
        title="Målgruppe"
        intro="To målgruppebeskrivelser – børn og unge fra 11 til 17 år samt voksne – fordi vi tilbyder anbringelser efter både Barnets lov og serviceloven."
        image="people"
        breadcrumbs={CRUMBS}
      />

      {/* ---------- Målgruppebeskrivelse ---------- */}
      <section
        className="section maalgruppe__intro-section"
        aria-labelledby="maalgruppe-intro-title"
      >
        <div className="container maalgruppe__intro">
          <Reveal className="maalgruppe__intro-text">
            <p className="eyebrow">Målgruppebeskrivelse</p>
            <h2 id="maalgruppe-intro-title">
              Vi arbejder med to målgruppe­beskrivelser
            </h2>
            <p className="lead maalgruppe__intro-lead">
              Hos os arbejder vi med to målgruppebeskrivelser, da vi tilbyder
              anbringelser i henhold til Barnets lov § 43, stk. 1, nr. 6 og stk.
              3, samt serviceloven §§ 107 og 108.
            </p>
          </Reveal>

          <Reveal delay={140} className="maalgruppe__intro-media">
            <figure className="maalgruppe__intro-figure">
              <img
                src={portrait.src}
                alt={portrait.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- To spor ---------- */}
      <section
        className="section section--tint maalgruppe__tracks-section"
        aria-labelledby="maalgruppe-tracks-title"
      >
        <div className="container">
          <h2 id="maalgruppe-tracks-title" className="visually-hidden">
            De to målgrupper
          </h2>

          <div className="maalgruppe__tracks">
            {TRACKS.map((t, i) => (
              <article
                className="maalgruppe__track"
                key={t.id}
                aria-labelledby={`track-${t.id}`}
              >
                <Reveal delay={i * 120}>
                  <p className="maalgruppe__track-kicker">{t.kicker}</p>
                  <h3 id={`track-${t.id}`} className="maalgruppe__track-title">
                    {t.title}
                  </h3>

                  <ul className="maalgruppe__meta">
                    <li>
                      <span className="maalgruppe__meta-key">Alder</span>
                      <span className="maalgruppe__meta-val">{t.age}</span>
                    </li>
                    <li>
                      <span className="maalgruppe__meta-key">Lovgrundlag</span>
                      <span className="maalgruppe__meta-val">{t.law}</span>
                    </li>
                  </ul>

                  <div className="prose maalgruppe__track-prose">
                    {t.paragraphs.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </div>

                  <h4 className="maalgruppe__tags-title">
                    Kendetegn og problematikker
                  </h4>
                  <ul className="maalgruppe__tags">
                    {t.tags.map((tag) => (
                      <li className="maalgruppe__tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Matrix ---------- */}
      <section
        className="section section--paper maalgruppe__matrix-section"
        aria-labelledby="maalgruppe-matrix-title"
      >
        <div className="container">
          <Reveal className="maalgruppe__matrix-head">
            <p className="eyebrow">Overblik</p>
            <h2 id="maalgruppe-matrix-title">Alder og lovgrundlag</h2>
            <p className="lead maalgruppe__matrix-intro">
              Et hurtigt overblik til brug ved matchning: hvilken målgruppe der
              hører til hvilket lovgrundlag, og hvor borgerne typisk henvises
              fra.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="maalgruppe__table-wrap">
              <table className="maalgruppe__table">
                <caption>
                  Målgrupper fordelt på alder, lovgrundlag og typisk henvisning.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Målgruppe</th>
                    <th scope="col">Alder</th>
                    <th scope="col">Lovgrundlag</th>
                    <th scope="col">Typisk henvisning</th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map((r) => (
                    <tr key={r.group}>
                      <th scope="row">{r.group}</th>
                      <td>{r.age}</td>
                      <td>{r.law}</td>
                      <td>{r.referral}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Visitation ---------- */}
      <section
        className="section maalgruppe__visitation"
        aria-labelledby="maalgruppe-visitation-title"
      >
        <div className="container maalgruppe__visitation-grid">
          <Reveal className="maalgruppe__visitation-text">
            <p className="eyebrow">Visitation</p>
            <h2 id="maalgruppe-visitation-title">
              Visitation og takstfastsættelse
            </h2>
            <div className="prose maalgruppe__prose">
              <p>
                Alle visitationer hos os foregår i tæt dialog med den
                anbringende kommune. Valget af pladstype og pris baseres altid
                på en individuel faglig vurdering. Denne tager udgangspunkt i
                oplysninger fra kommunen, herunder sagsakter vedrørende den
                konkrete borger, samt eventuelle samtaler med borgeren og dennes
                familie.
              </p>
              <p>
                Ved hver henvendelse udarbejder vi en grundig matchingsvurdering
                og et konkret tilbud. Tilbuddet indeholder blandt andet en
                beskrivelse af, hvordan vi vil arbejde med borgeren i
                indskrivningsperioden, samt en begrundelse for den vurderede
                opholdstakst.
              </p>
              <p>
                I visitationsprocessen har vi fokus på både borgerens ressourcer
                og udfordringer. Vi ser også på, hvilke tidligere indsatser der
                eventuelt har haft en positiv effekt, og anvender denne viden i
                vores faglige vurdering.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="maalgruppe__price">
            <h3 className="maalgruppe__price-title">Prisniveau 1–4</h3>
            <p className="maalgruppe__price-body">
              Ved fastsættelse af prisniveau (1–4) vurderes blandt andet, om
              borgeren er udadreagerende, rømningstruet og/eller har et aktivt
              forbrug af rusmidler. Borgerens samlede støttebehov er altid
              afgørende for det endelige prisniveau.
            </p>
            <ul className="maalgruppe__factors">
              {PRICE_FACTORS.map((f) => (
                <li className="maalgruppe__factor" key={f}>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Visitationsteam / CTA ---------- */}
      <section
        className="section section--dark maalgruppe__cta"
        aria-labelledby="maalgruppe-cta-title"
      >
        <div className="container maalgruppe__cta-inner">
          <Reveal>
            <p className="eyebrow">Visitationsteam</p>
            <h2 id="maalgruppe-cta-title">
              Har I en konkret borger, vi skal matche?
            </h2>
            <p className="lead maalgruppe__cta-lead">
              Ring til vores døgntelefon, så tager vi en faglig snak om
              matchning, pladstype og takst. {CONTACT.onCall.label}.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="maalgruppe__cta-actions">
              <Button
                href={`tel:${CONTACT.onCall.phoneHref}`}
                variant="invert"
                size="lg"
              >
                Ring {CONTACT.onCall.phone}
              </Button>
              <Button to="/afdelinger" variant="secondary" size="lg">
                Se vores afdelinger
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
