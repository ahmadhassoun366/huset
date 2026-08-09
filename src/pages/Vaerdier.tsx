import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { CtaBand } from '../components/about/CtaBand'
import { BRAND } from '../content/site'
import { img } from '../lib/images'
import './Vaerdier.css'

type Value = {
  id: string
  name: string
  /** Short definition shown next to the numeral. */
  summary: string
  body: string[]
  practice: string[]
}

const VALUES: Value[] = [
  {
    id: 'ordentlighed',
    name: 'Ordentlighed',
    summary: 'At det, man gør, lever op til de moralske krav.',
    body: [
      'Ordentlighed handler om at opføre sig korrekt, anstændigt og pålideligt – og om at have blik for detaljerne. For os er det ikke en formalitet, men den måde vi behandler hinanden og de mennesker, vi er sat i verden for at hjælpe.',
      'Ordentlighed er respekt for det enkelte menneske og ansvar for det, vi sætter i gang. Den viser sig tydeligst, når ingen kigger på: i tonen på et personalemøde, i en journalnotits skrevet til tiden, i en aftale der bliver holdt.',
    ],
    practice: [
      'Vi holder det, vi lover – også når det er besværligt',
      'Vi taler om mennesker, som var de til stede i rummet',
      'Vi dokumenterer omhyggeligt og rettidigt',
    ],
  },
  {
    id: 'tillid',
    name: 'Tillid',
    summary: 'Forudsætningen for godt samarbejde og lange relationer.',
    body: [
      'Tillid er, at vi stoler på og tror det bedste om hinanden. Tillid skaber relationer – og relationer er det, forandring bygger på, uanset om det er mellem borger og pædagog, mellem kolleger eller mellem os og en kommune.',
      'Tillid løfter samtidig kvaliteten i arbejdet og er med til at fastholde dygtige medarbejdere. Hvor tilliden er høj, bruges energien på borgeren frem for på kontrol.',
    ],
    practice: [
      'Vi giver ansvar og følger op – frem for at kontrollere',
      'Vi er ærlige om det, der er svært',
      'Vi skaber forudsigelighed for borgere, pårørende og myndighed',
    ],
  },
  {
    id: 'nysgerrighed',
    name: 'Nysgerrighed',
    summary: 'Den elementære trang til at kende det ukendte.',
    body: [
      'Nysgerrigheden er afgørende for at forstå den bagvedliggende adfærd. Bag en reaktion ligger der altid en grund, og vores opgave er at blive ved med at spørge, indtil vi forstår den – frem for at nøjes med at beskrive det, vi ser.',
      'Nysgerrigheden driver også vores faglige udvikling og vores arbejde med inklusion. Den holder os åbne over for ny viden, over for supervision og over for den mulighed, at vi tog fejl.',
    ],
    practice: [
      'Vi spørger ind, før vi konkluderer',
      'Vi ser adfærd som kommunikation',
      'Vi bringer ny viden og supervision ind i hverdagen',
    ],
  },
  {
    id: 'omsorg',
    name: 'Omsorg',
    summary: 'At vise interesse for borgerens situation – og handle på den.',
    body: [
      'Omsorg er at være nærværende, empatisk og opmærksom, og at gøre det bedste for den enkelte. Det er både de store beslutninger og de små ting: at nogen husker, hvordan man drikker sin te, og at nogen spørger, hvordan dagen gik.',
      'Omsorgen gælder også hinanden. Vi arbejder i et fag, der fylder, og vi tager ansvar for både borgere og kolleger – fordi man kun kan give det nærvær videre, man selv bliver mødt med.',
    ],
    practice: [
      'Vi er til stede i hverdagens små øjeblikke',
      'Vi passer på hinanden i et fag, der fylder',
      'Vi møder mennesker i øjenhøjde',
    ],
  },
]

export default function Vaerdier() {
  const closing = img('care')

  return (
    <>
      <PageHero
        eyebrow="Hvem er vi"
        title="Værdier"
        intro="Vores værdier er ikke blot retningslinjer, men hele fundamentet i vores vision om at tilbyde et fagligt og troværdigt tilbud – til gavn for vores borgere og deres kommuner."
        image="values"
        breadcrumbs={[{ label: 'Hvem er vi', to: '/hvem-er-vi' }]}
      />

      {/* ---------- Intro + index ---------- */}
      <section
        className="section vaerdier__intro"
        aria-labelledby="vaerdier-intro-title"
      >
        <div className="container vaerdier__intro-grid">
          <Reveal>
            <p className="eyebrow">Grundstenene</p>
            <h2 id="vaerdier-intro-title">
              Fire værdier, der bærer det hele
            </h2>
            <p className="lead vaerdier__intro-lead">
              Vi bygger vores arbejde på ordentlighed, tillid, nysgerrighed og
              omsorg. De er ikke ord på en væg – de er de kriterier, vi træffer
              beslutninger efter, ansætter efter og evaluerer os selv på.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <nav className="vaerdier__index" aria-label="Vores værdier">
              <ol>
                {VALUES.map((v, i) => (
                  <li key={v.id}>
                    <a href={`#${v.id}`} className="vaerdier__index-link">
                      <span className="vaerdier__index-num" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="vaerdier__index-name">{v.name}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        </div>
      </section>

      {/* ---------- The four values ---------- */}
      <div className="vaerdier__list">
        {VALUES.map((value, i) => (
          <section
            key={value.id}
            id={value.id}
            className={`vaerdier__item ${
              i % 2 === 1 ? 'vaerdier__item--flip' : ''
            }`}
            aria-labelledby={`${value.id}-title`}
          >
            <div className="container vaerdier__item-grid">
              <Reveal className="vaerdier__marker">
                <p className="vaerdier__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 id={`${value.id}-title`} className="vaerdier__name">
                  {value.name}
                </h2>
                <p className="vaerdier__summary">{value.summary}</p>
              </Reveal>

              <Reveal className="vaerdier__content" delay={110}>
                <div className="prose vaerdier__body">
                  {value.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>

                <div className="vaerdier__practice">
                  <h3 className="vaerdier__practice-title">
                    Sådan ser det ud i praksis
                  </h3>
                  <ul>
                    {value.practice.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* ---------- Tagline band ---------- */}
      <section
        className="section vaerdier__tagline"
        aria-labelledby="vaerdier-tagline-title"
      >
        <div className="container vaerdier__tagline-grid">
          <Reveal className="vaerdier__tagline-figure">
            <figure className="vaerdier__figure">
              <img
                src={closing.src}
                alt={closing.alt}
                loading="lazy"
                width={1600}
                height={1200}
              />
            </figure>
          </Reveal>

          <Reveal className="vaerdier__tagline-text" delay={110}>
            <p className="eyebrow">Vores løfte</p>
            <h2 id="vaerdier-tagline-title" className="vaerdier__tagline-quote">
              {BRAND.tagline}
            </h2>
            <p className="lead">
              Værdierne er vejen dertil. De gør det muligt at møde et menneske
              uden at have besluttet på forhånd, hvem det er – og at holde fast,
              også når det tager tid.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Fra ord til praksis"
        title="Vil du se, hvordan værdierne ser ud i hverdagen?"
        text="Læs om vores pædagogiske tilgang, eller mød den bestyrelse, der holder os fast på fagligheden."
        primary={{ label: 'Vores pædagogik', to: '/kommuner/paedagogik' }}
        secondary={{ label: 'Mød bestyrelsen', to: '/hvem-er-vi/bestyrelsen' }}
      />
    </>
  )
}
