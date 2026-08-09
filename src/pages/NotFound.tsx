import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { NAV, CONTACT } from '../content/site'
import './NotFound.css'

/** A short list of genuinely useful destinations, pulled from the main nav. */
const USEFUL = NAV.filter((item) => item.to !== '/')

export default function NotFound() {
  return (
    <section className="notfound" aria-labelledby="notfound-title">
      <div className="container notfound__inner">
        <Reveal className="notfound__main">
          <p className="notfound__code" aria-hidden="true">
            404
          </p>

          <h1 id="notfound-title" className="notfound__title">
            Siden blev ikke fundet
          </h1>

          <p className="lead notfound__lead">
            Siden, du leder efter, findes ikke længere — eller også er den
            flyttet. Det kan skyldes et gammelt link, en stavefejl i adressen
            eller en side, vi har omdøbt undervejs.
          </p>

          <div className="notfound__actions">
            <Button to="/" size="lg">
              Tilbage til forsiden
            </Button>
            <Button to="/kontakt-os" variant="secondary" size="lg">
              Kontakt os
            </Button>
          </div>
        </Reveal>

        <Reveal delay={140} className="notfound__aside">
          <nav className="notfound__links" aria-labelledby="notfound-links">
            <h2 id="notfound-links" className="notfound__links-title">
              Måske leder du efter
            </h2>
            <ul>
              {USEFUL.map((item) => (
                <li key={item.to}>
                  <Link className="notfound__link" to={item.to}>
                    <span>{item.label}</span>
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="notfound__help">
            Kan du stadig ikke finde det, du søger? Ring til os på{' '}
            <a className="notfound__phone" href={`tel:${CONTACT.phoneHref}`}>
              {CONTACT.phone}
            </a>{' '}
            — så hjælper vi dig videre.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
