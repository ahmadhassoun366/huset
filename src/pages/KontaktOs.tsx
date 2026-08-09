import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { ContactForm } from '../components/contact/ContactForm'
import { ContactDetails } from '../components/contact/ContactDetails'
import { DEPARTMENTS } from '../content/site'
import './KontaktOs.css'

const ArrowIcon = () => (
  <svg className="kontakt__dept-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function KontaktOs() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Kontakt os"
        intro="Skriv til os i formularen, ring til administrationen, eller brug døgntelefonen, hvis du henvender dig som myndighed. Vi svarer altid så hurtigt, vi kan."
        image="contact"
      />

      {/* ---------- the split: form | details ---------- */}
      <section className="section kontakt__split" aria-labelledby="kontakt-skriv">
        <div className="container kontakt__grid">
          <Reveal className="kontakt__form-col">
            <div className="kontakt__form-head">
              <p className="eyebrow">Skriv til os</p>
              <h2 id="kontakt-skriv">Send os en besked</h2>
              <p className="lead kontakt__form-intro">
                Udfyld formularen, så vender vi tilbage inden for
                åbningstiden. Alle felter behandles fortroligt.
              </p>
            </div>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="kontakt__details-col">
            <h2 className="visually-hidden">Kontaktoplysninger</h2>
            <ContactDetails />
          </Reveal>
        </div>
      </section>

      {/* ---------- department contacts ---------- */}
      <section
        className="section section--tint kontakt__depts"
        aria-labelledby="kontakt-afdelinger"
      >
        <div className="container">
          <Reveal>
            <div className="kontakt__depts-head">
              <div>
                <p className="eyebrow">Afdelinger</p>
                <h2 id="kontakt-afdelinger">Kontakt en afdeling direkte</h2>
              </div>
              <p className="lead kontakt__depts-note">
                Handler din henvendelse om en bestemt afdeling, finder du
                kontaktpersoner og praktiske oplysninger på afdelingens egen
                side.
              </p>
            </div>
          </Reveal>

          <ul className="kontakt__dept-list">
            {DEPARTMENTS.map((dept, i) => (
              <li key={dept.slug}>
                <Reveal delay={(i % 3) * 80}>
                  <Link className="kontakt__dept" to={dept.to}>
                    <span className="kontakt__dept-body">
                      <span className="kontakt__dept-name">{dept.name}</span>
                      <span className="kontakt__dept-approval">
                        {dept.approval}
                      </span>
                    </span>
                    <ArrowIcon />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
