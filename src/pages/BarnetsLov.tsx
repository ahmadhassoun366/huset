import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { CtaBand } from '../components/about/CtaBand'
import { CONTACT, TESTIMONIALS } from '../content/site'
import { brand } from '../lib/brand'
import { img } from '../lib/images'
import './BarnetsLov.css'

const TOC = [
  { id: 'hvad-er-et-boerne-og-ungehjem', label: 'Hvad er et børne- og ungehjem?' },
  { id: 'hvornaar-paragraf-43', label: 'Hvornår kommer § 43 i spil?' },
  { id: 'hvad-tilbyder-vi', label: 'Hvad tilbyder vi' },
  { id: 'maalgruppe', label: 'Hvem bor hos os' },
  { id: 'vores-vaerdier', label: 'Relation, respekt og udvikling' },
  { id: 'derfor-vaelger-kommuner-os', label: 'Derfor vælger kommuner os' },
  { id: 'faq', label: 'FAQ' },
]

const OFFERINGS = [
  'Trygge, pædagogisk funderede rammer',
  'Relationelt arbejde med fokus på udvikling',
  'Tæt opfølgning og dokumentation',
  'Faste kontaktpersoner',
  'Involvering af pårørende og netværk',
  'Individuelt tilrettelagte forløb',
]

const TARGET_GROUP = [
  'Omsorgssvigt eller traumatiske oplevelser',
  'Psykiske vanskeligheder',
  'Sociale udfordringer',
  'Adfærdsmæssige problemstillinger',
]

const REASONS = [
  {
    title: 'Stabile og kompetente voksne',
    body: 'Lav udskiftning i personalegruppen og faste kontaktpersoner betyder, at barnet møder de samme voksne dag efter dag.',
  },
  {
    title: 'Individuelt tilrettelagte forløb',
    body: 'Indsatsen tager afsæt i den enkelte unges behov, mål og tempo – ikke i et fast program.',
  },
  {
    title: 'Høj faglighed og dokumentation',
    body: 'Løbende faglig refleksion, supervision og en dokumentation, der gør udviklingen synlig for myndigheden.',
  },
]

const FAQ = [
  {
    q: 'Hvad er forskellen på et opholdssted og en døgninstitution?',
    a: 'Et opholdssted som vores er mindre og mere familieorienteret, med relationen som omdrejningspunkt. Døgninstitutioner er typisk større og offentligt drevne. Begge dele kan være det rigtige – det afhænger af barnets behov.',
  },
  {
    q: 'Hvornår bruger kommunen § 43 i Barnets Lov?',
    a: 'Kommunen anvender bestemmelsen, når et barn eller en ung har behov, der ikke kan løses i hjemmet – fx på grund af omsorgssvigt, psykisk sårbarhed, misbrug i familien eller sociale problemer.',
  },
  {
    q: 'Hvordan foregår en anbringelse uden samtykke?',
    a: 'Kommunen kan iværksætte en anbringelse uden forældrenes samtykke efter en grundig faglig vurdering og en juridisk proces, hvor barnets tarv er afgørende. Barnet og forældrene har partsrettigheder undervejs.',
  },
  {
    q: 'Er Barnets Lov § 43 det samme som den gamle Servicelov § 66?',
    a: 'I praksis ja. Barnets Lov, som trådte i kraft i 2024, samler og forenkler flere bestemmelser fra Serviceloven – herunder godkendelsesgrundlaget for børne- og ungehjem.',
  },
]

export default function BarnetsLov() {
  const photo = img('nature')
  const testimonial = TESTIMONIALS[2]

  return (
    <>
      <PageHero
        eyebrow="Barnets Lov § 43"
        title="Børne- og ungehjem som opholdssted"
        intro="Læs, hvordan vi arbejder under Barnets Lov § 43, stk. 1, nr. 6 og stk. 3 – bestemmelsen, der har afløst den tidligere Servicelov § 66."
        image="supervision"
      />

      <div className="section lov">
        <div className="container lov__layout">
          {/* ---------- sticky table of contents ---------- */}
          <aside className="lov__toc-wrap">
            <nav className="lov__toc" aria-labelledby="lov-toc-title">
              <h2 id="lov-toc-title" className="lov__toc-title">
                På denne side
              </h2>
              <ol>
                {TOC.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>
                      <span className="lov__toc-num" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* ---------- long-form article ---------- */}
          <article className="lov__article">
            <Reveal>
              <section
                id="hvad-er-et-boerne-og-ungehjem"
                aria-labelledby="lov-hvad-title"
                className="lov__section"
              >
                <h2 id="lov-hvad-title">Hvad er et børne- og ungehjem?</h2>
                <p>
                  Et børne- og ungehjem er et opholdssted for børn og unge, som
                  ikke kan bo hjemme. Her får de støtte, stabilitet og voksne
                  relationer, der skaber fundament for trivsel og udvikling.
                </p>
                <p>
                  Sammenlignet med de større, offentligt drevne døgninstitutioner
                  er opholdssteder som vores mindre, mere familieorienterede og
                  relationelt funderede. Hverdagen ligner et hjem – med de
                  rutiner, måltider og voksne, der går igen fra dag til dag.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section
                id="hvornaar-paragraf-43"
                aria-labelledby="lov-hvornaar-title"
                className="lov__section"
              >
                <h2 id="lov-hvornaar-title">
                  Barnets Lov § 43: hvornår kommer den i spil?
                </h2>

                <div className="lov__statute">
                  <p className="lov__statute-mark" aria-hidden="true">
                    §
                  </p>
                  <div>
                    <p className="lov__statute-ref">
                      Barnets Lov § 43, stk. 1, nr. 6 og stk. 3
                    </p>
                    <p className="lov__statute-body">
                      Godkendelsesgrundlaget for børne- og ungehjem. Bestemmelsen
                      trådte i kraft i 2024 og har afløst den tidligere
                      Servicelov § 66.
                    </p>
                  </div>
                </div>

                <p>
                  Bestemmelsen dækker børn og unge, der har behov for hjælp
                  grundet fx omsorgssvigt, psykisk sårbarhed, misbrug i familien
                  eller sociale problemer.
                </p>
                <p>
                  Kommunen vurderer hver enkelt sag individuelt. Vurderingen skal
                  sikre, at barnet eller den unge anbringes det rette sted – med
                  den rette faglighed, de rette fysiske rammer og den rette
                  normering omkring sig.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section
                id="hvad-tilbyder-vi"
                aria-labelledby="lov-tilbud-title"
                className="lov__section"
              >
                <h2 id="lov-tilbud-title">
                  Hvad tilbyder vi som opholdssted for børn og unge?
                </h2>
                <p>
                  Vi tilbyder et hjem, hvor der er styr på rammerne, og hvor der
                  er voksne nok til at være der, når det gælder.
                </p>
                <ul className="lov__list">
                  {OFFERINGS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section
                id="maalgruppe"
                aria-labelledby="lov-maalgruppe-title"
                className="lov__section"
              >
                <h2 id="lov-maalgruppe-title">
                  Hvilke børn og unge bor hos os?
                </h2>
                <p>
                  Vi modtager børn og unge, der er anbragt uden for hjemmet, og
                  som har brug for en hverdag med struktur, nærvær og
                  forudsigelighed. Det kan fx være børn og unge med:
                </p>
                <ul className="lov__list">
                  {TARGET_GROUP.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  Vi vurderer altid det enkelte match konkret – både af hensyn
                  til barnet selv og til den børnegruppe, der allerede bor på
                  afdelingen.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section
                id="vores-vaerdier"
                aria-labelledby="lov-vaerdier-title"
                className="lov__section"
              >
                <h2 id="lov-vaerdier-title">
                  Vores værdier – relation, respekt og udvikling
                </h2>

                <figure className="lov__figure">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    width={1600}
                    height={1000}
                  />
                </figure>

                <h3>At se bag om adfærden</h3>
                <p>
                  Vi arbejder ud fra en anerkendende og udviklingsstøttende
                  tilgang. Adfærd er kommunikation, og vores opgave er at forstå,
                  hvad der ligger under – frem for kun at forholde os til det, vi
                  ser på overfladen.
                </p>

                <h3>Pædagogisk tilgang og trygge rammer</h3>
                <p>
                  Relationen er i centrum. Omkring den bygger vi tydelige rammer,
                  faste rutiner og en hverdag, der kan bære, også når noget går i
                  stykker. Vi arbejder målrettet mod udvikling – både socialt og
                  følelsesmæssigt.
                </p>

                <h3>Et stærkt samarbejde med kommunen og familien</h3>
                <p>
                  Stabil kontakt mellem opholdssted, kommune og familie er en
                  forudsætning for, at en anbringelse lykkes. Vi involverer
                  pårørende og netværk, hvor det er muligt, og holder
                  sagsbehandleren tæt på udviklingen gennem løbende opfølgning og
                  dokumentation.
                </p>

                <blockquote className="lov__quote">
                  <p>{brand(testimonial.quote)}</p>
                  <footer>
                    <span className="lov__quote-author">
                      {testimonial.author}
                    </span>
                    <span className="lov__quote-role">
                      {brand(testimonial.role)}
                    </span>
                  </footer>
                </blockquote>
              </section>
            </Reveal>

            <Reveal>
              <section
                id="derfor-vaelger-kommuner-os"
                aria-labelledby="lov-kommuner-title"
                className="lov__section"
              >
                <h2 id="lov-kommuner-title">
                  Derfor vælger kommuner os som opholdssted
                </h2>
                <ol className="lov__reasons">
                  {REASONS.map((r, i) => (
                    <li key={r.title}>
                      <span className="lov__reason-num" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3>{r.title}</h3>
                      <p>{r.body}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section
                id="faq"
                aria-labelledby="lov-faq-title"
                className="lov__section"
              >
                <h2 id="lov-faq-title">
                  FAQ om børne- og ungehjem og Barnets Lov § 43
                </h2>
                <div className="lov__faq">
                  {FAQ.map((item) => (
                    <details key={item.q}>
                      <summary>
                        <span>{item.q}</span>
                      </summary>
                      <p>{item.a}</p>
                    </details>
                  ))}
                </div>

                <div className="lov__still">
                  <h3>Har du stadig spørgsmål?</h3>
                  <p>
                    Ring til os på{' '}
                    <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>{' '}
                    eller skriv til{' '}
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Er
                    du myndighedsperson med en akut henvendelse, kan du bruge
                    vores døgntelefon på{' '}
                    <a href={`tel:${CONTACT.onCall.phoneHref}`}>
                      {CONTACT.onCall.phone}
                    </a>
                    .
                  </p>
                </div>
              </section>
            </Reveal>
          </article>
        </div>
      </div>

      <CtaBand
        eyebrow="Sammen skaber vi trygge rammer"
        title="Skal vi tale om en anbringelse?"
        text="Er du sagsbehandler eller pårørende, og vil du høre mere om vores rammer, værdier og ledige pladser, så tag fat i os."
        primary={{ label: 'Kontakt os', to: '/kontakt-os' }}
        secondary={{
          label: 'Døgntelefon til visitation',
          href: `tel:${CONTACT.onCall.phoneHref}`,
        }}
      />
    </>
  )
}
