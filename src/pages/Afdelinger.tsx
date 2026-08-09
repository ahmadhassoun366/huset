import { Link } from 'react-router-dom'
import { DEPARTMENTS } from '../content/site'
import { getDepartmentDetail } from '../content/departments'
import { img } from '../lib/images'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { DepartmentCta } from '../components/departments/DepartmentCta'
import './Afdelinger.css'

const INTRO =
  'Vi består af børne- & ungehjem samt botilbud med flere afdelinger i Jylland.'

const FACTS = [
  { value: '5', label: 'afdelinger i Midt- og Østjylland' },
  { value: '11 – 22', label: 'år på vores børne- og ungehjem' },
  { value: '18+', label: 'år på vores botilbud for voksne' },
]

export default function Afdelinger() {
  return (
    <>
      <PageHero
        eyebrow="Hvor vi er"
        title="Afdelinger"
        intro={INTRO}
        image="nature"
      />

      <section className="section afdelinger__facts" aria-labelledby="afd-facts">
        <div className="container">
          <h2 id="afd-facts" className="visually-hidden">
            Kort om vores afdelinger
          </h2>
          <ul className="afdelinger__facts-list">
            {FACTS.map((fact, i) => (
              <li key={fact.label}>
                <Reveal delay={i * 90}>
                  <p className="afdelinger__facts-value">{fact.value}</p>
                  <p className="afdelinger__facts-label">{fact.label}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section section--paper afdelinger__overview"
        aria-labelledby="afd-oversigt"
      >
        <div className="container">
          <Reveal className="afdelinger__intro">
            <p className="eyebrow">Oversigt</p>
            <h2 id="afd-oversigt">Fem huse – fem forskellige hverdage</h2>
            <p className="lead afdelinger__intro-lead">
              Hver afdeling er et hjem med sin egen beliggenhed, sin egen
              målgruppe og sin egen rytme. Fælles for dem alle er små enheder,
              høj normering og hjemlige, trygge rammer.
            </p>
          </Reveal>

          <ol className="afdelinger__list">
            {DEPARTMENTS.map((dept, i) => {
              const detail = getDepartmentDetail(dept.slug)
              const photo = img(dept.image)
              const featured = i === 0

              return (
                <li
                  key={dept.slug}
                  className={
                    featured
                      ? 'afdelinger__item afdelinger__item--featured'
                      : 'afdelinger__item'
                  }
                >
                  <Reveal delay={featured ? 0 : 80}>
                    <article className="afdelinger__card">
                      <figure className="afdelinger__figure">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading={featured ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </figure>

                      <div className="afdelinger__body">
                        <p className="afdelinger__index" aria-hidden="true">
                          {String(i + 1).padStart(2, '0')}
                        </p>
                        <h3 className="afdelinger__name">{dept.name}</h3>
                        <p className="afdelinger__approval">
                          {dept.approval}
                        </p>
                        {detail && (
                          <>
                            <p className="afdelinger__tagline">
                              {detail.tagline}
                            </p>
                            <dl className="afdelinger__meta">
                              <div className="afdelinger__meta-row">
                                <dt>Aldersgruppe</dt>
                                <dd>{detail.facts.ageRange}</dd>
                              </div>
                              <div className="afdelinger__meta-row">
                                <dt>Pladser</dt>
                                <dd>{detail.facts.places}</dd>
                              </div>
                              <div className="afdelinger__meta-row">
                                <dt>Beliggenhed</dt>
                                <dd>{detail.facts.location}</dd>
                              </div>
                            </dl>
                          </>
                        )}
                        <Link className="afdelinger__more" to={dept.to}>
                          Læs mere
                          <span className="visually-hidden">
                            {' '}
                            om {dept.name}
                          </span>
                          <svg
                            className="afdelinger__more-icon"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <DepartmentCta />
    </>
  )
}
