import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { DEPARTMENTS, FOOTER_INFO_LINKS, CONTACT } from '../content/site'
import './Tilsyn.css'

/* -------------------------------------------------------------
   TILSYNSRAPPORTER — PLACEHOLDER DATA
   -------------------------------------------------------------
   We do not have the real PDF files yet. Each entry below is a
   clearly-labelled placeholder: when a report arrives, drop the
   PDF into /public/tilsyn/ and set `href` to its path, e.g.
   href: '/tilsyn/knudsbjergvej-2025-socialtilsyn-midt.pdf'
   Rows without an `href` render as "Offentliggøres her".
   Add, remove or rename rows freely — the page follows the data.
   ------------------------------------------------------------- */

type Report = {
  year: string
  /** Type of inspection, e.g. "Endelig tilsynsrapport". */
  type: string
  /** Supervisory body that carried out the inspection. */
  authority: string
  /** Path to the PDF once it exists. `null` = not published yet. */
  href: string | null
}

const REPORTS: Record<string, Report[]> = {
  knudsbjergvej: [
    {
      year: '2025',
      type: 'Endelig tilsynsrapport',
      authority: 'Socialtilsyn Midt',
      href: null,
    },
    {
      year: '2024',
      type: 'Endelig tilsynsrapport',
      authority: 'Socialtilsyn Midt',
      href: null,
    },
    {
      year: '2024',
      type: 'Sundhedsfagligt tilsyn',
      authority: 'Styrelsen for Patientsikkerhed',
      href: null,
    },
  ],
  overgaardsvej: [
    {
      year: '2025',
      type: 'Endelig tilsynsrapport',
      authority: 'Socialtilsyn Midt',
      href: null,
    },
    {
      year: '2024',
      type: 'Endelig tilsynsrapport',
      authority: 'Socialtilsyn Midt',
      href: null,
    },
  ],
  'skanderborgvej-180': [
    {
      year: '2025',
      type: 'Endelig tilsynsrapport',
      authority: 'Socialtilsyn Midt',
      href: null,
    },
    {
      year: '2024',
      type: 'Endelig tilsynsrapport',
      authority: 'Socialtilsyn Midt',
      href: null,
    },
  ],
  'skanderborgvej-182': [
    {
      year: '2025',
      type: 'Endelig tilsynsrapport',
      authority: 'Socialtilsyn Midt',
      href: null,
    },
    {
      year: '2024',
      type: 'Sundhedsfagligt tilsyn',
      authority: 'Styrelsen for Patientsikkerhed',
      href: null,
    },
  ],
  'gl-aarhusvej': [
    {
      year: '2026',
      type: 'Sundhedsfagligt tilsyn',
      authority: 'Styrelsen for Patientsikkerhed',
      href: null,
    },
    {
      year: '2025',
      type: 'Endelig tilsynsrapport',
      authority: 'Socialtilsyn Midt',
      href: null,
    },
    {
      year: '2024',
      type: 'Endelig tilsynsrapport',
      authority: 'Socialtilsyn Midt',
      href: null,
    },
  ],
}

const DownloadIcon = () => (
  <svg className="tilsyn__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M2.5 13h11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ExternalIcon = () => (
  <svg className="tilsyn__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6.5 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-3M9.5 2H14v4.5M13.5 2.5 7 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Tilsyn() {
  return (
    <>
      <PageHero
        eyebrow="Kvalitet og dokumentation"
        title="Tilsyn"
        intro="Vi er underlagt løbende, uvildigt tilsyn. Her finder du tilsynsrapporterne for hver afdeling samt genveje til de myndigheder, der fører tilsyn med os."
        image="supervision"
      />

      {/* ---------- who supervises us ---------- */}
      <section
        className="section tilsyn__intro"
        aria-label="Hvem fører tilsyn med os"
      >
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Åbenhed"
              title="Hvem fører tilsyn med os"
              intro="Tilsyn er ikke noget, vi kommer igennem — det er en fast del af vores kvalitetsarbejde. Vi orienterer selv tilsynet om relevante ændringer, så samarbejdet bygger på gennemsigtighed."
            />
          </Reveal>

          <ul className="tilsyn__authorities">
            <li className="tilsyn__authority-item">
              <Reveal className="tilsyn__authority">
                <h3>Socialtilsyn Midt</h3>
                <p>
                  Socialtilsyn Midt godkender og fører driftsorienteret tilsyn
                  med vores børne- og ungehjem og botilbud. De vurderer blandt
                  andet vores målgruppe og metoder, medarbejdernes kompetencer,
                  de fysiske rammer, økonomien og — vigtigst af alt — borgernes
                  trivsel og rettigheder. Vi betragter dem som en stærk
                  sparringspartner i kvalitetsarbejdet.
                </p>
              </Reveal>
            </li>

            <li className="tilsyn__authority-item">
              <Reveal delay={100} className="tilsyn__authority">
                <h3>Styrelsen for Patientsikkerhed</h3>
                <p>
                  Styrelsen for Patientsikkerhed fører tilsyn med de
                  sundhedsfaglige opgaver, vi løser — herunder medicinhåndtering,
                  dokumentation og de sundhedsfaglige instrukser. Tilsynet
                  kvalitetssikrer, at borgerne får en sikker og forsvarlig
                  behandling i hverdagen.
                </p>
              </Reveal>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- reports per department ---------- */}
      <section
        className="section section--tint tilsyn__reports"
        aria-labelledby="tilsyn-rapporter"
      >
        <div className="container">
          <Reveal>
            <div className="tilsyn__reports-head">
              <div>
                <p className="eyebrow">Dokumentation</p>
                <h2 id="tilsyn-rapporter">Tilsynsrapporter</h2>
              </div>
              <p className="lead tilsyn__reports-note">
                Rapporterne er samlet pr. afdeling og sorteret med den nyeste
                først. Kan du ikke finde den rapport, du leder efter, er du
                velkommen til at kontakte administrationen.
              </p>
            </div>
          </Reveal>

          <div className="tilsyn__depts">
            {DEPARTMENTS.map((dept, i) => {
              const reports = REPORTS[dept.slug] ?? []
              return (
                <Reveal key={dept.slug} delay={(i % 3) * 80}>
                  <article className="tilsyn__dept">
                    <header className="tilsyn__dept-head">
                      <h3 className="tilsyn__dept-name">
                        <Link to={dept.to}>{dept.name}</Link>
                      </h3>
                      <p className="tilsyn__approval">{dept.approval}</p>
                    </header>

                    {reports.length > 0 ? (
                      <ul className="tilsyn__list">
                        {reports.map((r) => (
                          <li
                            className="tilsyn__row"
                            key={`${r.year}-${r.type}-${r.authority}`}
                          >
                            <span className="tilsyn__year">{r.year}</span>
                            <span className="tilsyn__meta">
                              <span className="tilsyn__type">{r.type}</span>
                              <span className="tilsyn__authority-name">
                                {r.authority}
                              </span>
                            </span>
                            {r.href ? (
                              <a
                                className="tilsyn__dl"
                                href={r.href}
                                download
                              >
                                <DownloadIcon />
                                <span>
                                  Hent PDF
                                  <span className="visually-hidden">
                                    {` — ${r.type} ${r.year}, ${dept.name}`}
                                  </span>
                                </span>
                              </a>
                            ) : (
                              <span className="tilsyn__pending">
                                Offentliggøres her
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="tilsyn__empty">
                        Der er endnu ikke offentliggjort rapporter for denne
                        afdeling.
                      </p>
                    )}
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- authorities panel ---------- */}
      <section
        className="section section--dark tilsyn__links"
        aria-labelledby="tilsyn-links"
      >
        <div className="container tilsyn__links-grid">
          <Reveal className="tilsyn__links-text">
            <p className="eyebrow">Genveje</p>
            <h2 id="tilsyn-links">Myndigheder og indberetning</h2>
            <div className="prose">
              <p>
                Her finder du de officielle kilder til vores godkendelser og
                tilsyn — og den kanal, du skal bruge, hvis du vil indberette
                kritisable forhold.
              </p>
              <p>
                Vores whistleblowerordning kan bruges anonymt af både
                medarbejdere, borgere, pårørende og samarbejdspartnere.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="tilsyn__links-list-wrap">
            <ul className="tilsyn__links-list">
              {FOOTER_INFO_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      className="tilsyn__link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{link.label}</span>
                      <ExternalIcon />
                      <span className="visually-hidden">
                        (åbner i nyt vindue)
                      </span>
                    </a>
                  ) : (
                    <Link className="tilsyn__link" to={link.href}>
                      <span>{link.label}</span>
                      <ExternalIcon />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- help finding a report ---------- */}
      <section className="section tilsyn__help" aria-labelledby="tilsyn-help">
        <div className="container container--narrow tilsyn__help-inner">
          <Reveal>
            <h2 id="tilsyn-help">Mangler du en rapport?</h2>
            <p className="lead tilsyn__help-lead">
              Skriv eller ring til administrationen, så sender vi den
              efterspurgte tilsynsrapport til dig.
            </p>
            <div className="tilsyn__help-actions">
              <Button to="/kontakt-os">Kontakt os</Button>
              <a
                className="tilsyn__phone"
                href={`tel:${CONTACT.phoneHref}`}
              >
                {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
