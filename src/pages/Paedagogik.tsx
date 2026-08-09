import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { img } from '../lib/images'
import './Paedagogik.css'

/* ---------------------------------------------------------------
   Page data
   --------------------------------------------------------------- */

const CRUMBS = [{ label: 'Kommuner', to: '/kommuner' }]

type Method = { id: string; n: string; label: string }

const METHODS: Method[] = [
  { id: 'mentalisering', n: '01', label: 'Mentalisering' },
  { id: 'sindet-paa-sinde', n: '02', label: 'Sindet på sinde' },
  { id: 'low-arousal-2', n: '03', label: 'Low Arousal 2' },
  { id: 'relationspaedagogik', n: '04', label: 'Relationspædagogisk tilgang' },
]

type Growth = { term: string; body: string }

const GROWTH: Growth[] = [
  {
    term: 'Evnen til at mentalisere',
    body: 'altså at forstå egne og andres handlinger ud fra bagvedliggende følelser, tanker og intentioner.',
  },
  {
    term: 'Evnen til følelsesregulering',
    body: 'så borgeren gradvist opnår større ro, overblik og mestring i svære situationer.',
  },
  {
    term: 'Selvudvikling',
    body: 'herunder identitetsdannelse og personlig udvikling, hvor borgeren bliver mere bevidst om sig selv og sine muligheder.',
  },
  {
    term: 'Evnen til at indgå i sunde relationer',
    body: 'gennem støtte til at styrke eksisterende relationer, genopbygge brudte kontakter og skabe nye, meningsfulde forbindelser.',
  },
]

type Perspective = { id: string; title: string; paragraphs: string[] }

const PERSPECTIVES: Perspective[] = [
  {
    id: 'indefra',
    title: 'Borgerens indefra-perspektiv',
    paragraphs: [
      'Først og fremmest er LA2 et samtale- og refleksionsredskab, som har fokus på at forstå borgerens indefra-perspektiv.',
      'I LA2 er udgangspunktet borgerens indefra-perspektiv, dvs. hvordan borgeren oplever egen trivsel, ressourcer, netværk, mestringsstrategier og belastninger.',
      'Der er fokus på, hvordan borgeren oplever sin hverdag, og hvordan vi som fagprofessionelle kan støtte borgeren i at mestre hverdagslivets udfordringer. Dette skal støtte borgeren i fremtidigt at træffe flere kvalificerede beslutninger i eget liv.',
    ],
  },
  {
    id: 'tilstraebte',
    title: 'Borgerens tilstræbte indefra-perspektiv',
    paragraphs: [
      'Hvis borgeren ikke kan eller vil deltage med sin egen viden om sig selv, så kan vi som fagpersoner forsøge at sætte os i borgerens sted.',
      'Vi forsøger at sætte os i borgerens sted med udgangspunkt i observationer og fælles refleksioner og derved tilstræbe et indefra-perspektiv. Det er en bevidst tilstræbelse på at forstå, hvordan borgeren oplever at være sig i netop denne situation og under netop disse vilkår.',
      'Det er vigtigt, at vi taler med flere parter om borgerens syn på sig selv og sin hverdag, fx ved at tale med pårørende og andre personer, som borgeren har tillid til, og som har kendskab til borgeren.',
    ],
  },
  {
    id: 'udefra',
    title: 'De fagprofessionelles udefra-perspektiv',
    paragraphs: [
      'LA2 er også et udrednings- og refleksionsredskab, som tilvejebringer en samlet beskrivelse af de fagprofessionelles udefra-perspektiv på de voldsomme episoder.',
      'LA2 hjælper de fagprofessionelle med at beskrive, hvordan de bedst muligt kan støtte borgeren i at forebygge, håndtere og mestre de voldsomme episoder og fremme hverdagstrivsel.',
    ],
  },
]

export default function Paedagogik() {
  const mentalisering = img('values')
  const relationer = img('community')
  const arousal = img('nature')

  return (
    <>
      <PageHero
        eyebrow="Fagligt fundament"
        title="Pædagogik"
        intro="En mentaliseringsbaseret tilgang, forebyggelsesværktøjet Low Arousal 2 og relationspædagogik – de metoder, den socialpædagogiske indsats hviler på."
        image="care"
        breadcrumbs={CRUMBS}
      />

      {/* ---------- Metodeindeks ---------- */}
      <section
        className="section paed__index-section"
        aria-labelledby="paed-index-title"
      >
        <div className="container">
          <h2 id="paed-index-title" className="visually-hidden">
            Oversigt over vores pædagogiske metoder
          </h2>
          <Reveal>
            <nav className="paed__index" aria-label="Pædagogiske metoder">
              <ol className="paed__index-list">
                {METHODS.map((m) => (
                  <li key={m.id}>
                    <a className="paed__index-link" href={`#${m.id}`}>
                      <span className="paed__index-n" aria-hidden="true">
                        {m.n}
                      </span>
                      <span className="paed__index-label">{m.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        </div>
      </section>

      {/* ---------- 01 Mentalisering ---------- */}
      <section
        id="mentalisering"
        className="section paed__method"
        aria-labelledby="paed-mentalisering-title"
      >
        <div className="container paed__split">
          <Reveal className="paed__split-text">
            <p className="eyebrow">01 — Mentalisering</p>
            <h2 id="paed-mentalisering-title">
              At forstå egen og andres adfærd ud fra mentale tilstande
            </h2>
            <div className="prose paed__prose">
              <p>
                Hos os arbejder vi ud fra en mentaliseringsbaseret tilgang med
                særligt fokus på kognition – både hos borgeren, hos personalet
                og hos de øvrige aktører i samspillet. Mentalisering handler om
                evnen til at forstå egen og andres adfærd ud fra bagvedliggende
                mentale tilstande, såsom følelser, intentioner, tanker og
                forudsætninger.
              </p>
              <p>
                Mentalisering foregår i enhver form for interaktion, men evnen
                til at mentalisere kan være svækket – eller midlertidigt
                fraværende – hos særligt sårbare individer. Derfor er det
                afgørende, at vi som fagpersoner møder borgeren med et
                mentaliserende fokus, der skaber plads til forståelse,
                regulering og udvikling i relationen.
              </p>
              <p>
                Ved at styrke personalets refleksion og bevidsthed om egne og
                andres mentale tilstande skaber vi et trygt og
                udviklingsstøttende miljø, hvor borgeren kan genvinde og udvikle
                sin mentaliseringsevne over tid.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="paed__split-media">
            <figure className="paed__figure paed__figure--arch">
              <img
                src={mentalisering.src}
                alt={mentalisering.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- Pull quote ---------- */}
      <section className="paed__quote-section" aria-label="Citat om mentalisering">
        <div className="container container--narrow">
          <Reveal>
            <figure className="paed__quote">
              <blockquote>
                <p>
                  Når vi mentaliserer – og bliver mødt med en mentaliserende
                  tilgang – bliver vi i stand til at lære og udvikle os gennem
                  relationer.
                </p>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- 02 Sindet på sinde ---------- */}
      <section
        id="sindet-paa-sinde"
        className="section section--tint paed__method"
        aria-labelledby="paed-sinde-title"
      >
        <div className="container paed__split paed__split--reverse">
          <Reveal className="paed__split-text">
            <p className="eyebrow">02 — Sindet på sinde</p>
            <h2 id="paed-sinde-title">At se bagved adfærden</h2>
            <div className="prose paed__prose">
              <p>
                Mentalisering gør det muligt for os at være åbne og nysgerrige
                over for andres sindstilstande. Det betyder, at vi er
                påvirkelige over for andres perspektiver og dermed åbne for at
                lade os vejlede, korrigere og udvikle nye måder at tænke, føle
                og handle på.
              </p>
              <p>
                Derfor har vi et stærkt fokus på at mentalisere i samspillet med
                borgerne. Det betyder, at vi som professionelle stræber efter at
                se bag borgerens umiddelbare adfærd og i stedet er nysgerrige på
                de følelser, tanker, behov og intentioner, der ligger bag.
              </p>
              <p>
                Selv når borgerens adfærd fremstår uhensigtsmæssig, forsøger vi
                at forstå, hvad der gør netop denne adfærd meningsfuld og
                forståelig – ud fra de mentale tilstande, borgeren befinder sig
                i. Det er gennem denne forståelse, vi skaber mulighed for reel
                forandring og udvikling.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="paed__split-media">
            <figure className="paed__figure paed__figure--arch">
              <img
                src={relationer.src}
                alt={relationer.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>
        </div>

        <div className="container paed__growth-wrap">
          <Reveal>
            <h3 className="paed__growth-title">
              Udvikling gennem mentaliserende samspil
            </h3>
            <p className="lead paed__growth-intro">
              Når vi som professionelle møder borgerne med en mentaliserende
              indstilling, understøtter vi en række centrale udviklingsområder
              hos den enkelte. Denne tilgang bidrager til at styrke:
            </p>
          </Reveal>

          <ul className="paed__growth">
            {GROWTH.map((g, i) => (
              <li className="paed__growth-item" key={g.term}>
                <Reveal delay={i * 90}>
                  <span className="paed__growth-term">{g.term}</span>
                  <span className="paed__growth-body">{g.body}</span>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="prose paed__prose paed__growth-outro">
              <p>
                Som en naturlig følge heraf ses ofte en mere hensigtsmæssig
                adfærd, præget af øget selvkontrol og impulshæmning.
              </p>
              <p>
                Vi arbejder samtidig for at normalisere borgernes hverdag mest
                muligt – bl.a. gennem samarbejde med lokalområdet og ved at
                skabe adgang til relevante fritids- og beskæftigelsestilbud.
                Dermed støtter vi borgerne i at tage aktiv del i samfundet og
                skabe en meningsfuld tilværelse.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 03 Low Arousal 2 ---------- */}
      <section
        id="low-arousal-2"
        className="section paed__method"
        aria-labelledby="paed-la2-title"
      >
        <div className="container paed__split">
          <Reveal className="paed__split-text">
            <p className="eyebrow">03 — Low Arousal 2</p>
            <h2 id="paed-la2-title">
              Forebyggelse af vold gennem ro og nærvær
            </h2>
            <div className="prose paed__prose">
              <p>
                Hos os arbejder vi også med forebyggelsesværktøjet Low Arousal
                2. Low Arousal 2 – også kaldet LA2 – er udarbejdet af Sopra for
                Socialstyrelsen i et satspuljeprojekt omkring forebyggelse af
                vold og fremme af trivsel på botilbud. LA2 intensiverer og
                strukturerer fremmelse af trivsel og forebyggelse af vold og
                trusler inden for det sociale område med udgangspunkt i den
                nyeste forsknings- og praksisbaserede viden.
              </p>
              <p>
                Udgangspunktet i at arbejde gennem Low Arousal 2 handler om, at
                borgeren skal "genvinde magten" over sit eget liv. Det er
                vigtigt, at personalet i sin tilgang til borgeren er
                opmærksomme og har kendskab til borgeren. Det er vigtigt, at
                personalet har tid til borgeren, er nærværende og
                tilstedeværende samt har en rolig og tryghedsskabende tilgang og
                adfærd over for borgeren.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="paed__split-media">
            <figure className="paed__figure paed__figure--soft">
              <img
                src={arousal.src}
                alt={arousal.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>
        </div>

        <div className="container paed__accordion-wrap">
          <Reveal>
            <h3 className="paed__accordion-title">
              Tre perspektiver i LA2
            </h3>
          </Reveal>

          <div className="paed__accordion">
            {PERSPECTIVES.map((p, i) => (
              <Reveal delay={i * 90} key={p.id}>
                <details className="paed__panel" name="paed-la2">
                  <summary className="paed__panel-summary">
                    <span className="paed__panel-label">{p.title}</span>
                    <span className="paed__panel-icon" aria-hidden="true" />
                  </summary>
                  <div className="paed__panel-body prose">
                    {p.paragraphs.map((text) => (
                      <p key={text.slice(0, 32)}>{text}</p>
                    ))}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 04 Relationspædagogisk tilgang ---------- */}
      <section
        id="relationspaedagogik"
        className="section section--paper paed__method"
        aria-labelledby="paed-relation-title"
      >
        <div className="container paed__relation">
          <Reveal>
            <p className="eyebrow">04 — Relationspædagogisk tilgang</p>
            <h2 id="paed-relation-title">
              Det er gennem relationerne med andre mennesker, at vi udvikler os
            </h2>
          </Reveal>

          <div className="paed__relation-grid">
            <Reveal delay={100}>
              <h3 className="paed__relation-sub">
                Relationer og samspil som grundlag for udvikling
              </h3>
              <div className="prose paed__prose">
                <p>
                  Velfungerende samspil og relationer mellem borger og personale
                  er afgørende for borgerens trivsel, læring, udvikling og
                  dannelse. Hos os forstår vi relationer og samspil som alle de
                  situationer, hvor borgeren og det pædagogiske personale er i
                  kontakt – hvad enten det sker gennem kommunikation, fælles
                  aktiviteter eller i dagligdags interaktioner.
                </p>
                <p>
                  Vores tilgang bygger på, at personalet skal fremstå som
                  troværdige rollemodeller med stærke relationskompetencer. Vi
                  arbejder målrettet på at skabe trygge og tillidsfulde
                  relationer, der giver borgeren mulighed for at spejle sig i en
                  tydelig og nærværende voksen. Den socialpædagogiske indsats
                  tilrettelægges med udgangspunkt i borgerens individuelle
                  behov, ressourcer og udviklingspotentiale.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="prose paed__prose paed__relation-second">
                <p>
                  Vi ser det som en væsentlig opgave ikke blot at skabe gode
                  relationer internt i tilbuddet, men også at støtte borgeren i
                  at etablere og vedligeholde prosociale relationer uden for
                  vores rammer – eksempelvis til familie, i fritidslivet, skolen
                  eller andre netværk.
                </p>
                <p>
                  Vores mål er, at borgeren oplever meningsfuldhed i hverdagen
                  og føler sig mødt som et unikt menneske med værdi og
                  udviklingsmuligheder. Derfor lægger vi stor vægt på relationen
                  som et aktivt og centralt redskab i det pædagogiske arbejde.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="section section--dark paed__cta"
        aria-labelledby="paed-cta-title"
      >
        <div className="container paed__cta-inner">
          <Reveal>
            <p className="eyebrow">Næste skridt</p>
            <h2 id="paed-cta-title">
              Vil I vide, hvem metoderne er skruet sammen til?
            </h2>
            <p className="lead paed__cta-lead">
              Læs målgruppebeskrivelsen for børn, unge og voksne – eller ring
              til visitationsteamet om en konkret borger.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="paed__cta-actions">
              <Button to="/kommuner/maalgruppe" variant="invert" size="lg">
                Se målgruppen
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
