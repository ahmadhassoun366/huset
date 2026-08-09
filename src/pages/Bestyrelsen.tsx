import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { CtaBand } from '../components/about/CtaBand'
import { img } from '../lib/images'
import './Bestyrelsen.css'

type Member = {
  /** PLACEHOLDER — the client replaces these with the real board. */
  name: string
  role: string
  credentials: string
}

/*
 * NOTE FOR THE CLIENT: the five entries below are deliberate placeholders.
 * Replace `name` (and adjust `credentials`) with the real board members —
 * the roles and the composition match the governance section above.
 */
const BOARD: Member[] = [
  {
    name: 'Fornavn Efternavn',
    role: 'Bestyrelsesformand',
    credentials: 'Cand.psych., selvstændig psykolog',
  },
  {
    name: 'Fornavn Efternavn',
    role: 'Næstformand',
    credentials: 'Cand.psych., lektor i socialt arbejde',
  },
  {
    name: 'Fornavn Efternavn',
    role: 'Bestyrelsesmedlem',
    credentials: 'Cand.jur., juridisk konsulent',
  },
  {
    name: 'Fornavn Efternavn',
    role: 'Medarbejderrepræsentant',
    credentials: 'Professionsbachelor, socialrådgiver',
  },
  {
    name: 'Fornavn Efternavn',
    role: 'Bestyrelsesmedlem, ejerkredsen',
    credentials: 'Cand.jur., advokat',
  },
]

const COMPOSITION = [
  'Tre eksterne medlemmer med pædagogiske, socialfaglige og juridiske kompetencer',
  'Én medarbejderrepræsentant valgt blandt medarbejderne',
  'Én repræsentant fra ejerkredsen',
]

const DUTIES = [
  'At sikre kvaliteten i den socialpædagogiske indsats og følge op på tilsyn og faglige resultater.',
  'At være sparringspartner for direktionen i strategiske og faglige spørgsmål.',
  'At føre tilsyn med den økonomiske drift og sikre en ansvarlig og bæredygtig forvaltning.',
  'At understøtte udviklingen af arbejdsmiljø, medarbejdertrivsel og faglighed.',
  'At sikre, at vi til enhver tid lever op til lovgivning, godkendelsesgrundlag og etiske retningslinjer.',
]

export default function Bestyrelsen() {
  const portrait = img('people')

  return (
    <>
      <PageHero
        eyebrow="Hvem er vi"
        title="Bestyrelsen"
        intro="Vores bestyrelse består af fem medlemmer med erfaring fra socialområdet. Den mødes minimum seks gange årligt og bidrager til kvalitetssikring og udvikling af tilbuddet."
        image="board"
        breadcrumbs={[{ label: 'Hvem er vi', to: '/hvem-er-vi' }]}
      />

      {/* ---------- Organisering ---------- */}
      <section
        className="section bestyrelse__org"
        aria-labelledby="bestyrelse-org-title"
      >
        <div className="container bestyrelse__org-grid">
          <Reveal>
            <p className="eyebrow">Organisering</p>
            <h2 id="bestyrelse-org-title">
              En aktiv bestyrelse tæt på fagligheden
            </h2>
            <div className="prose bestyrelse__prose">
              <p>
                Vi drives som anpartsselskab med en aktiv og engageret
                bestyrelse bestående af fem medlemmer. Bestyrelsen mødes minimum
                seks gange årligt og fungerer både som kvalitetssikring og som
                sparringspartner for direktionen.
              </p>
              <p>
                Sammensætningen er valgt, så både det pædagogiske, det
                socialfaglige og det juridiske perspektiv er repræsenteret – og
                så medarbejderne har en stemme i de beslutninger, der former
                hverdagen på afdelingerne.
              </p>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="bestyrelse__composition">
              <h3 className="bestyrelse__composition-title">
                Bestyrelsen består af
              </h3>
              <ul>
                {COMPOSITION.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Medlemmer ---------- */}
      <section
        className="section section--paper bestyrelse__people"
        aria-labelledby="bestyrelse-people-title"
      >
        <div className="container">
          <Reveal>
            <p className="eyebrow">Medlemmerne</p>
            <h2 id="bestyrelse-people-title">Menneskene omkring bordet</h2>
          </Reveal>

          <ul className="bestyrelse__grid">
            {BOARD.map((member, i) => (
              <li key={`${member.role}-${i}`}>
                <Reveal delay={i * 80}>
                  <article className="bestyrelse__card">
                    <div className="bestyrelse__portrait">
                      <img
                        src={portrait.src}
                        alt=""
                        loading="lazy"
                        width={1600}
                        height={2000}
                      />
                    </div>
                    <h3 className="bestyrelse__name">{member.name}</h3>
                    <p className="bestyrelse__role">{member.role}</p>
                    <p className="bestyrelse__credentials">
                      {member.credentials}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Formål og opgaver ---------- */}
      <section
        className="section bestyrelse__duties"
        aria-labelledby="bestyrelse-duties-title"
      >
        <div className="container bestyrelse__duties-grid">
          <Reveal className="bestyrelse__duties-head">
            <p className="eyebrow">Formål og opgaver</p>
            <h2 id="bestyrelse-duties-title">
              Hvad bestyrelsen er sat i verden for
            </h2>
            <p className="lead bestyrelse__duties-lead">
              Bestyrelsen mødes minimum seks gange årligt og har det
              overordnede ansvar for, at tilbuddet drives fagligt forsvarligt og
              økonomisk ansvarligt.
            </p>
          </Reveal>

          <Reveal className="bestyrelse__duties-list" delay={110}>
            <ol>
              {DUTIES.map((duty, i) => (
                <li key={duty}>
                  <span className="bestyrelse__duty-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="bestyrelse__duty-text">{duty}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <CtaBand
        tone="tint"
        eyebrow="Spørgsmål til driften?"
        title="Vil du vide mere om, hvordan vi er organiseret?"
        text="Vi svarer gerne på spørgsmål om godkendelsesgrundlag, tilsyn og vores organisering."
        primary={{ label: 'Kontakt os', to: '/kontakt-os' }}
        secondary={{ label: 'Se seneste tilsyn', to: '/tilsyn' }}
      />
    </>
  )
}
