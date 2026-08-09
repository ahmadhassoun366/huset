import { useParams } from 'react-router-dom'
import { DEPARTMENTS } from '../content/site'
import { getDepartmentDetail } from '../content/departments'
import type { DepartmentFacts } from '../content/departments'
import { img } from '../lib/images'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { DepartmentNav } from '../components/departments/DepartmentNav'
import { DepartmentCta } from '../components/departments/DepartmentCta'
import './DepartmentPage.css'

const FACT_ROWS: { key: keyof DepartmentFacts; label: string }[] = [
  { key: 'targetGroup', label: 'Målgruppe' },
  { key: 'ageRange', label: 'Aldersgruppe' },
  { key: 'places', label: 'Pladser' },
  { key: 'location', label: 'Beliggenhed' },
  { key: 'area', label: 'Fysiske rammer' },
]

function DepartmentNotFound() {
  return (
    <section className="dept-missing" aria-labelledby="dept-missing-title">
      <div className="container container--narrow dept-missing__inner">
        <p className="eyebrow">Afdelinger</p>
        <h1 id="dept-missing-title">Afdelingen blev ikke fundet</h1>
        <p className="lead dept-missing__lead">
          Vi kunne ikke finde den afdeling, du leder efter. Adressen er måske
          skrevet forkert, eller siden kan være flyttet. Du finder alle vores
          afdelinger i oversigten.
        </p>
        <div className="dept-missing__action">
          <Button to="/afdelinger" size="lg">
            Se alle afdelinger
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function DepartmentPage() {
  const { slug } = useParams<{ slug: string }>()
  const department = DEPARTMENTS.find((d) => d.slug === slug)
  const detail = getDepartmentDetail(slug)

  if (!department || !detail) return <DepartmentNotFound />

  const settingPhoto = img('nature')
  const everydayPhoto = img('care')

  return (
    <>
      <PageHero
        eyebrow="Afdeling"
        title={department.name}
        intro={detail.intro}
        image={department.image}
        breadcrumbs={[{ label: 'Afdelinger', to: '/afdelinger' }]}
      />

      {/* ---------- fakta ---------- */}
      <section className="section dept-facts" aria-labelledby="dept-facts-title">
        <div className="container">
          <Reveal>
            <div className="dept-facts__panel">
              <div className="dept-facts__head">
                <p className="eyebrow">Kort fortalt</p>
                <h2 id="dept-facts-title">Fakta om afdelingen</h2>
                {detail.contact && (
                  <p className="dept-facts__contact">
                    {detail.contact.label}
                    <a
                      className="dept-facts__phone"
                      href={`tel:${detail.contact.phoneHref}`}
                    >
                      {detail.contact.phone}
                    </a>
                  </p>
                )}
              </div>

              <dl className="dept-facts__list">
                {FACT_ROWS.map((row) => (
                  <div className="dept-facts__row" key={row.key}>
                    <dt>{row.label}</dt>
                    <dd>{detail.facts[row.key]}</dd>
                  </div>
                ))}
                <div className="dept-facts__row dept-facts__row--approval">
                  <dt>Godkendelse</dt>
                  <dd>{department.approval}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- huset og omgivelserne ---------- */}
      <section
        className="section section--tint dept-setting"
        aria-labelledby="dept-setting-title"
      >
        <div className="container dept-setting__grid">
          <Reveal className="dept-setting__media">
            <figure className="dept-setting__figure">
              <img
                src={settingPhoto.src}
                alt={settingPhoto.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Reveal>

          <Reveal delay={100} className="dept-setting__text">
            <p className="eyebrow">Rammerne</p>
            <h2 id="dept-setting-title">Huset og omgivelserne</h2>
            <div className="prose dept-setting__prose">
              {detail.setting.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- målgruppe og tilgang ---------- */}
      <section
        className="section section--paper dept-approach"
        aria-labelledby="dept-approach-title"
      >
        <div className="container container--narrow">
          <Reveal>
            <p className="eyebrow">Målgruppe og tilgang</p>
            <h2 id="dept-approach-title">
              Hvem bor her – og hvordan arbejder vi
            </h2>
          </Reveal>
          <Reveal delay={80} className="prose dept-approach__prose">
            {detail.description.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- hverdagen ---------- */}
      <section className="section dept-everyday" aria-labelledby="dept-everyday-title">
        <div className="container">
          <div className="dept-everyday__grid">
            <Reveal className="dept-everyday__text">
              <p className="eyebrow">Hverdagen</p>
              <h2 id="dept-everyday-title">Hverdagen hos os</h2>
              <div className="prose dept-everyday__prose">
                {detail.everyday.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="dept-everyday__media">
              <figure className="dept-everyday__figure">
                <img
                  src={everydayPhoto.src}
                  alt={everydayPhoto.alt}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </Reveal>
          </div>

          <ul className="dept-everyday__highlights">
            {detail.highlights.map((highlight, i) => (
              <li key={highlight.title}>
                <Reveal delay={i * 80}>
                  <div className="dept-everyday__card">
                    <h3 className="dept-everyday__card-title">
                      {highlight.title}
                    </h3>
                    <p className="dept-everyday__card-text">{highlight.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DepartmentNav currentSlug={department.slug} />

      <DepartmentCta
        title={`Overvejer I en plads på ${department.name}?`}
        text="Kontakt os for en uforpligtende dialog om match, indskrivning og takst. Vi svarer hurtigt – også når det haster."
      />
    </>
  )
}
