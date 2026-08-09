import { Link } from 'react-router-dom'
import { CONTACT, DEPARTMENTS } from '../content/site'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { img } from '../lib/images'
import type { ImageKey } from '../lib/images'
import './Kommuner.css'

/* ---------------------------------------------------------------
   Page data — kept local to the page so nothing leaks into shared
   content files owned by other parts of the site.
   --------------------------------------------------------------- */

type Gateway = {
  to: string
  label: string
  blurb: string
  image: ImageKey
}

const GATEWAYS: Gateway[] = [
  {
    to: '/kommuner/paedagogik',
    label: 'Pædagogik',
    blurb:
      'Mentaliseringsbaseret tilgang, Low Arousal 2 og relationspædagogik – metoderne bag indsatsen.',
    image: 'care',
  },
  {
    to: '/kommuner/maalgruppe',
    label: 'Målgruppe',
    blurb:
      'Hvem vi modtager – børn og unge fra 11 til 17 år samt voksne – og hvordan visitationen forløber.',
    image: 'people',
  },
]

type Step = {
  n: string
  title: string
  body: string
}

const VISITATION_STEPS: Step[] = [
  {
    n: '01',
    title: 'Henvendelse til visitationsteamet',
    body: 'I ringer eller skriver til vores døgntelefon, der er forbeholdt myndighed. Vi svarer hele døgnet – også når en sag haster.',
  },
  {
    n: '02',
    title: 'Sagsakter og matchningsvurdering',
    body: 'Vi gennemgår sagsakterne og udarbejder en grundig matchningsvurdering med blik for både borgerens ressourcer og udfordringer – og for hvilke tidligere indsatser der har haft en positiv effekt.',
  },
  {
    n: '03',
    title: 'Konkret tilbud og takst',
    body: 'I modtager et skriftligt tilbud med en beskrivelse af, hvordan vi vil arbejde med borgeren i indskrivningsperioden, samt en begrundelse for den vurderede opholdstakst.',
  },
  {
    n: '04',
    title: 'Indskrivning og indsatsplan',
    body: 'Ved indskrivning udarbejder vi sammen med borgeren en individuel pædagogisk indsatsplan med mål og delmål, der tager udgangspunkt i borgerens plan eller handleplan.',
  },
  {
    n: '05',
    title: 'Status og løbende opfølgning',
    body: 'To gange årligt udarbejder vi en statusudtalelse forud for de planlagte statusmøder, så udviklingen er synlig og målbar for jer som kommune.',
  },
]

type Basis = {
  paragraph: string
  label: string
  body: string
}

const LEGAL_BASIS: Basis[] = [
  {
    paragraph: 'Barnets lov § 43',
    label: 'stk. 1, nr. 6 og stk. 3',
    body: 'Børne- og ungehjem for børn og unge, der har behov for døgnophold uden for hjemmet – herunder unge anbragt efter afgørelse fra Ungdomskriminalitetsnævnet.',
  },
  {
    paragraph: 'Servicelovens § 107',
    label: 'Midlertidigt botilbud',
    body: 'Midlertidigt ophold for voksne med betydeligt nedsat funktionsevne eller særlige sociale problemer, der har behov for omfattende støtte i en periode.',
  },
  {
    paragraph: 'Servicelovens § 108',
    label: 'Længerevarende botilbud',
    body: 'Længerevarende ophold for voksne med betydelig og varigt nedsat fysisk eller psykisk funktionsevne, der har behov for omfattende hjælp i hverdagen.',
  },
]

type Pillar = {
  title: string
  body: string
}

const COOPERATION: Pillar[] = [
  {
    title: 'Løbende evaluering',
    body: 'Der gennemføres regelmæssige evalueringer for at kvalitetssikre indsatsen på den enkelte borger. Det er også her, vi har mulighed for at identificere områder til forbedring.',
  },
  {
    title: 'Samarbejde med kommunen',
    body: 'Vi deler relevant dokumentation med kommunen og andre samarbejdspartnere, med samtykke fra borgeren, for at sikre en koordineret og ensartet indsats, som er til fordel for borgeren.',
  },
]

export default function Kommuner() {
  const collab = img('board')

  return (
    <>
      <PageHero
        eyebrow="For kommuner og myndighed"
        title="Kommuner"
        intro="En pålidelig samarbejdspartner med faglighed og hjerte – for jer som myndighed og for de borgere, I visiterer."
        image="approach"
      />

      {/* ---------- 1. Din stærke partner ---------- */}
      <section
        className="section kommuner__partner"
        aria-labelledby="kommuner-partner-title"
      >
        <div className="container kommuner__partner-grid">
          <Reveal className="kommuner__partner-text">
            <p className="eyebrow">Din stærke partner</p>
            <h2 id="kommuner-partner-title">
              En pålidelig samarbejdspartner med faglighed og hjerte
            </h2>
            <div className="prose kommuner__prose">
              <p>
                Når det handler om at sikre borgere et tilbud med høj kvalitet
                og faglighed, er vi en pålidelig og engageret samarbejdspartner.
                Vi ved, at et velfungerende samarbejde skal være gnidningsfrit,
                omkostningseffektivt og meningsfuldt – uden at gå på kompromis
                med den pædagogiske kvalitet, der skaber varige og positive
                forandringer i borgernes liv.
              </p>
              <p>
                Vores passion for og engagement i arbejdet med udsatte borgere
                og deres familier er dybt forankret i hele vores organisation.
                Det er noget, mange af vores nuværende samarbejdspartnere
                oplever og anerkender i det daglige samarbejde.
              </p>
              <p>
                Hos os ser vi os ikke blot som en leverandør af ydelser, men som
                en aktiv og nærværende støtte i kommunens arbejde for at skabe
                en tryg og bæredygtig fremtid for de borgere, der har brug for
                særlig støtte. Med solid erfaring, høj faglighed og et dedikeret
                team er vi klar til at stå ved jeres side – og i fællesskab
                skabe de bedst mulige løsninger for både jer som kommune og for
                borgerne.
              </p>
            </div>
          </Reveal>

          <ul className="kommuner__gateways">
            {GATEWAYS.map((g, i) => {
              const photo = img(g.image)
              return (
                <li key={g.to}>
                  <Reveal delay={120 + i * 120}>
                    <Link className="kommuner__gateway" to={g.to}>
                      <span className="kommuner__gateway-figure">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                      <span className="kommuner__gateway-body">
                        <span className="kommuner__gateway-label">
                          {g.label}
                        </span>
                        <span className="kommuner__gateway-blurb">
                          {g.blurb}
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ---------- 2. Sådan foregår visitationen ---------- */}
      <section
        className="section section--tint kommuner__process"
        aria-labelledby="kommuner-process-title"
      >
        <div className="container">
          <Reveal className="kommuner__process-head">
            <p className="eyebrow">Visitation</p>
            <h2 id="kommuner-process-title">Sådan foregår visitationen</h2>
            <p className="lead kommuner__process-intro">
              Alle visitationer foregår i tæt dialog med den anbringende
              kommune. Valget af pladstype og pris beror altid på en individuel
              faglig vurdering – fra første opkald til den løbende opfølgning.
            </p>
          </Reveal>

          <ol className="kommuner__steps">
            {VISITATION_STEPS.map((s, i) => (
              <li className="kommuner__step" key={s.n}>
                <Reveal delay={i * 90}>
                  <div className="kommuner__step-inner">
                    <span className="kommuner__step-n" aria-hidden="true">
                      {s.n}
                    </span>
                    <h3 className="kommuner__step-title">{s.title}</h3>
                    <p className="kommuner__step-body">{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 3. Døgntelefon ---------- */}
      <section
        className="section kommuner__oncall-section"
        aria-labelledby="kommuner-oncall-title"
      >
        <div className="container">
          <Reveal>
            <div className="kommuner__oncall">
              <div className="kommuner__oncall-text">
                <p className="eyebrow">Forbeholdt myndighed</p>
                <h2 id="kommuner-oncall-title">
                  Døgntelefon til visitationsteamet
                </h2>
                <p className="kommuner__oncall-note">{CONTACT.onCall.label}</p>
              </div>
              <div className="kommuner__oncall-action">
                <a
                  className="kommuner__oncall-number"
                  href={`tel:${CONTACT.onCall.phoneHref}`}
                >
                  {CONTACT.onCall.phone}
                </a>
                <Button to="/kontakt-os" variant="invert">
                  Se alle kontaktoplysninger
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 4. Godkendelsesgrundlag ---------- */}
      <section
        className="section section--paper kommuner__legal"
        aria-labelledby="kommuner-legal-title"
      >
        <div className="container">
          <Reveal className="kommuner__legal-head">
            <p className="eyebrow">Lovgrundlag</p>
            <h2 id="kommuner-legal-title">Godkendelses­grundlag</h2>
            <p className="lead kommuner__legal-intro">
              Vi tilbyder anbringelser i henhold til Barnets lov § 43, stk. 1,
              nr. 6 og stk. 3 samt servicelovens §§ 107 og 108. Herunder finder
              I paragrafferne kort forklaret og en oversigt over den enkelte
              afdelings godkendelse.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <dl className="kommuner__basis">
              {LEGAL_BASIS.map((b) => (
                <div className="kommuner__basis-item" key={b.paragraph}>
                  <dt>
                    <span className="kommuner__basis-par">{b.paragraph}</span>
                    <span className="kommuner__basis-label">{b.label}</span>
                  </dt>
                  <dd>{b.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={160}>
            <div className="kommuner__table-wrap">
              <table className="kommuner__table">
                <caption>
                  Afdelingernes godkendelsesgrundlag – oversigt til brug ved
                  visitation.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Afdeling</th>
                    <th scope="col">Godkendt som</th>
                  </tr>
                </thead>
                <tbody>
                  {DEPARTMENTS.map((d) => (
                    <tr key={d.slug}>
                      <th scope="row">
                        <Link to={d.to}>{d.name}</Link>
                      </th>
                      <td>{d.approval}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 5. Samarbejde & dokumentation ---------- */}
      <section
        className="section kommuner__collab"
        aria-labelledby="kommuner-collab-title"
      >
        <div className="container kommuner__collab-grid">
          <Reveal className="kommuner__collab-media">
            <figure className="kommuner__collab-figure">
              <img
                src={collab.src}
                alt={collab.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>

          <Reveal delay={120} className="kommuner__collab-text">
            <p className="eyebrow">Samarbejde &amp; dokumentation</p>
            <h2 id="kommuner-collab-title">
              Et tværfagligt samarbejde omkring borgeren
            </h2>
            <div className="prose kommuner__prose">
              <p>
                I samarbejde med kommunen arbejder vi målrettet på at sikre, at
                alle borgere hos os indtager en så aktiv position som mulig i
                alle dele af deres hverdag. Dette for at udvikle størst mulig
                følelse af autonomi og mestring under deres ophold hos os. Vi
                har en naturlig forventning til, at hver enkelt borger er
                involveret i enten uddannelse, arbejde, praktik eller anden form
                for produktiv beskæftigelse.
              </p>
              <p>
                Alle borgere får udarbejdet en individuel pædagogisk
                indsatsplan, som indeholder mål og delmål, som evalueres
                løbende. Planen udarbejdes i forbindelse med indskrivning, hvor
                vi sammen med borgeren tager udgangspunkt i borgerens
                plan/handleplan, og hvor vi sammen kommer frem til, hvad planen
                skal indeholde.
              </p>
              <p>
                Planen evalueres løbende i samarbejde med den enkelte borger.
                Vores resultatdokumentation bidrager til at sikre fremskridt og
                resultater for hver enkelt borger. Vi ønsker en transparent
                proces, hvor dokumentationen tjener som et værdifuldt værktøj
                til at evaluere effektiviteten af vores indsatser og tilgange,
                samt at gøre borgerens udvikling og fremskridt synlige og
                målbare for jer som kommune. Dette gøres ved, at der to gange
                årligt udarbejdes en statusudtalelse, som fremsendes op til de
                planlagte statusmøder.
              </p>
            </div>

            <ul className="kommuner__pillars">
              {COOPERATION.map((c) => (
                <li className="kommuner__pillar" key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- 6. CTA ---------- */}
      <section
        className="section section--dark kommuner__cta"
        aria-labelledby="kommuner-cta-title"
      >
        <div className="container container--narrow kommuner__cta-inner">
          <Reveal>
            <p className="eyebrow">Skal vi tage en snak?</p>
            <h2 id="kommuner-cta-title">
              Vi står klar ved jeres side – hele døgnet
            </h2>
            <p className="lead kommuner__cta-lead">
              Ring til visitationsteamet, eller skriv til os, hvis I ønsker en
              matchningsvurdering på en konkret borger.
            </p>
            <div className="kommuner__cta-actions">
              <Button href={`tel:${CONTACT.onCall.phoneHref}`} variant="invert" size="lg">
                Ring {CONTACT.onCall.phone}
              </Button>
              <Button to="/kontakt-os" variant="secondary" size="lg">
                Kontakt os
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
