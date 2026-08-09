import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { CtaBand } from '../components/about/CtaBand'
import { DEPARTMENTS } from '../content/site'
import { img } from '../lib/images'
import type { ImageKey } from '../lib/images'
import './HvemErVi.css'

type Principle = { title: string; body: string }

const PRINCIPLES: Principle[] = [
  {
    title: 'Relationen først',
    body: 'Forandring sker i trygge, vedholdende relationer. Faste kontaktpersoner og nærvær i hverdagen er derfor omdrejningspunktet for hele vores arbejde.',
  },
  {
    title: 'Høj normering',
    body: 'Vi prioriterer tid til den enkelte. En høj normering giver rum til både omsorg, struktur og de gode øjeblikke, hvor tilliden bliver bygget.',
  },
  {
    title: 'Mentaliseringsbaseret tilgang',
    body: 'Vi ser bag om adfærden og møder borgeren med nysgerrighed frem for konklusioner – for at forstå, hvad der ligger under.',
  },
  {
    title: 'Tæt samarbejde med myndighed',
    body: 'Løbende dokumentation, tydelig opfølgning og en fast kontakt til sagsbehandleren gør samarbejdet forudsigeligt og gennemskueligt.',
  },
]

type PathCard = {
  eyebrow: string
  title: string
  body: string
  to: string
  image: ImageKey
}

const PATHS: PathCard[] = [
  {
    eyebrow: 'Fundamentet',
    title: 'Værdier',
    body: 'Ordentlighed, tillid, nysgerrighed og omsorg – og hvad de betyder i hverdagen hos os.',
    to: '/hvem-er-vi/vaerdier',
    image: 'values',
  },
  {
    eyebrow: 'Organisering',
    title: 'Bestyrelsen',
    body: 'Fem medlemmer med erfaring fra socialområdet, der sikrer kvalitet og udvikling af tilbuddet.',
    to: '/hvem-er-vi/bestyrelsen',
    image: 'board',
  },
  {
    eyebrow: 'Rammerne',
    title: 'Afdelinger',
    body: 'Hjemlige rammer fordelt på vores afdelinger – med hvert sit godkendelsesgrundlag og målgruppe.',
    to: '/afdelinger',
    image: 'heroSecondary',
  },
]

const FACTS = [
  { value: String(DEPARTMENTS.length), label: 'afdelinger i Midtjylland' },
  { value: '365', label: 'dage om året med voksne omkring borgeren' },
  { value: '§ 43 · § 107 · § 108', label: 'godkendelsesgrundlag' },
]

export default function HvemErVi() {
  const baggrund = img('community')

  return (
    <>
      <PageHero
        eyebrow="Hvem er vi"
        title="Hvem er vi"
        intro="Vores vision er at tilbyde et fagligt velfunderet og troværdigt tilbud – til gavn for både borgerne og deres hjemkommuner."
        image="about"
      />

      {/* ---------- Om os: story-led opening ---------- */}
      <section className="section hvem__intro" aria-labelledby="hvem-om-title">
        <div className="container hvem__intro-grid">
          <Reveal className="hvem__aside">
            <p className="eyebrow">Om os</p>
            <h2 id="hvem-om-title" className="hvem__aside-title">
              Et socialpædagogisk tilbud med mennesket i centrum
            </h2>
          </Reveal>

          <Reveal className="hvem__intro-body" delay={90}>
            <p className="hvem__opening">
              Vi er et socialpædagogisk tilbud, der driver både børne- og
              ungehjem efter <strong>Barnets Lov § 43</strong> samt botilbud til
              unge og voksne efter <strong>Servicelovens § 107 &amp; 108</strong>.
            </p>
            <div className="prose hvem__prose">
              <p>
                Vores vision er at tilbyde et fagligt velfunderet og troværdigt
                tilbud – til gavn for både borgerne og deres hjemkommuner.
              </p>
              <p>
                Vores overordnede målsætning er at skabe trivsel, udvikling og
                livsduelighed hos den enkelte borger, med det mål at vedkommende
                på sigt kan leve et så selvstændigt og meningsfuldt liv som
                muligt.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Baggrund: offset image / text pair ---------- */}
      <section
        className="section section--paper hvem__baggrund"
        aria-labelledby="hvem-baggrund-title"
      >
        <div className="container hvem__offset">
          <Reveal className="hvem__offset-figure">
            <figure className="hvem__figure">
              <img
                src={baggrund.src}
                alt={baggrund.alt}
                loading="lazy"
                width={1600}
                height={1200}
              />
            </figure>
          </Reveal>

          <Reveal className="hvem__offset-text" delay={100}>
            <p className="eyebrow">Baggrund</p>
            <h2 id="hvem-baggrund-title">Stiftelsen og menneskene bag</h2>
            <div className="prose hvem__prose">
              <p>
                Vi blev stiftet af mennesker med et stort hjerte for det
                socialpædagogiske område – og netop dette hjerterum er
                fundamentet for hele vores virke. Vores idégrundlag bygger på
                ønsket om at yde den bedst mulige socialpædagogiske indsats for
                udsatte børn, unge og voksne – med mennesket i centrum.
              </p>
              <p>
                Målet har fra begyndelsen været klart: at skabe et trygt og
                udviklingsorienteret tilbud, hvor borgeren bliver mødt med
                rummelighed, omsorg og respekt. Vores afdelinger afspejler dette
                gennem hjemlige rammer og en kultur præget af nærvær og
                individuel opmærksomhed.
              </p>
              <p>
                Vi er bygget op omkring tydelige værdier, en fælles vision og
                klare målsætninger for det socialpædagogiske arbejde. Vi tror på
                relationens kraft, på høj faglighed og på autenticitet i mødet
                med borgeren. Med dette som udgangspunkt skaber vi mulighed for
                at opbygge en ny fortælling – sammen med den enkelte borger –
                hvor udvikling, håb og livsduelighed er i fokus.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Sådan arbejder vi ---------- */}
      <section
        className="section section--dark hvem__work"
        aria-labelledby="hvem-work-title"
      >
        <div className="container">
          <Reveal className="hvem__work-head">
            <p className="eyebrow">Sådan arbejder vi</p>
            <h2 id="hvem-work-title">
              Fire ting, der går igen i alt, hvad vi gør
            </h2>
          </Reveal>

          <ul className="hvem__principles">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 90}>
                  <article className="hvem__principle">
                    <span className="hvem__principle-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="hvem__facts" delay={120}>
            <dl>
              {FACTS.map((f) => (
                <div className="hvem__fact" key={f.label}>
                  {/* visually reversed with column-reverse so the number reads first */}
                  <dt className="hvem__fact-label">{f.label}</dt>
                  <dd className="hvem__fact-value">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- Læs videre ---------- */}
      <section className="section hvem__paths" aria-labelledby="hvem-paths-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Læs videre</p>
            <h2 id="hvem-paths-title">Kom tættere på os</h2>
          </Reveal>

          <ul className="hvem__path-list">
            {PATHS.map((card, i) => {
              const photo = img(card.image)
              return (
                <li key={card.to}>
                  <Reveal delay={i * 110}>
                    <article className="hvem__path">
                      <div className="hvem__path-media">
                        <img
                          src={photo.src}
                          alt=""
                          loading="lazy"
                          width={1600}
                          height={1200}
                        />
                      </div>
                      <p className="hvem__path-eyebrow">{card.eyebrow}</p>
                      <h3>
                        <Link to={card.to} className="hvem__path-link">
                          {card.title}
                        </Link>
                      </h3>
                      <p className="hvem__path-body">{card.body}</p>
                      <span className="hvem__path-cue" aria-hidden="true">
                        Læs mere
                      </span>
                    </article>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Skal vi tale sammen?"
        title="Har du en konkret sag, vi skal se på?"
        text="Ring eller skriv til os – så finder vi ud af, om vi er det rette match for borgeren."
        primary={{ label: 'Kontakt os', to: '/kontakt-os' }}
        secondary={{ label: 'Se vores afdelinger', to: '/afdelinger' }}
      />
    </>
  )
}
