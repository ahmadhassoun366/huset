import { Link } from 'react-router-dom'
import {
  BRAND,
  CONTACT,
  FOOTER_INFO_LINKS,
  NAV,
  OPENING_HOURS,
} from '../../content/site'
import { Logo } from './Logo'
import './Footer.css'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
  </svg>
)

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo invert />
          <p className="footer__tagline">{BRAND.tagline}.</p>
          <a
            className="footer__social"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            <span>Følg os på LinkedIn</span>
          </a>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Kontakt os</h3>
          <ul className="footer__list">
            <li className="footer__org">{BRAND.legalName}</li>
            <li>
              <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>{CONTACT.address}</li>
            <li>CVR: {CONTACT.cvr}</li>
          </ul>

          <div className="footer__oncall">
            <p className="footer__oncall-label">*{CONTACT.onCall.label}</p>
            <a href={`tel:${CONTACT.onCall.phoneHref}`}>
              {CONTACT.onCall.phone}
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Information</h3>
          <ul className="footer__list">
            {FOOTER_INFO_LINKS.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <svg
                      className="footer__ext"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 8 8 4M8 4H4.8M8 4v3.2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </a>
                ) : (
                  <Link to={link.href}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Åbningstider</h3>
          <ul className="footer__hours">
            {OPENING_HOURS.map((row) => (
              <li key={row.days}>
                <span>{row.days}</span>
                <span className="footer__hours-value">{row.hours}</span>
              </li>
            ))}
          </ul>

          <h3 className="footer__heading footer__heading--spaced">Genveje</h3>
          <ul className="footer__list footer__list--compact">
            {NAV.filter((item) => item.to !== '/').map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {BRAND.domain} — Alle rettigheder forbeholdes.
        </p>
        <p className="footer__cvr">CVR {CONTACT.cvr}</p>
      </div>
    </footer>
  )
}
