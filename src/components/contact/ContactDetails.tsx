import { BRAND, CONTACT, OPENING_HOURS } from '../../content/site'
import './ContactDetails.css'

const PhoneIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M5.4 2.5 6.7 5.3 5.3 6.7c.7 1.5 2.5 3.3 4 4l1.4-1.4 2.8 1.3v2.1c0 .6-.5 1-1.1 1C7.2 13.4 2.6 8.8 2.3 3.6c0-.6.4-1.1 1-1.1h2.1Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect
      x="2"
      y="3.5"
      width="12"
      height="9"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="m2.6 4.5 5.4 4 5.4-4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 10 8 14 8 14Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
  </svg>
)

const DocIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M9 2H4.5A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5V6L9 2Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M9 2v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect
      x="2"
      y="2"
      width="12"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M5 6.8v4.4M5 4.9v.1M8 11.2V6.8m0 1.4c0-.8.6-1.4 1.5-1.4s1.5.6 1.5 1.6v2.8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
)

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CONTACT.address,
)}`

/**
 * The right-hand rail of the contact page: administration details, the
 * døgntelefon callout, opening hours and a map placeholder.
 */
export function ContactDetails() {
  return (
    <div className="kontakt-details">
      {/* ---------- døgntelefon — the prominent callout ---------- */}
      <aside
        className="kontakt-details__oncall"
        aria-labelledby="kontakt-oncall"
      >
        <p className="kontakt-details__oncall-tag">Døgnbemandet</p>
        <h3 id="kontakt-oncall" className="kontakt-details__oncall-title">
          Visitation
        </h3>
        <p className="kontakt-details__oncall-label">{CONTACT.onCall.label}</p>
        <a
          className="kontakt-details__oncall-phone"
          href={`tel:${CONTACT.onCall.phoneHref}`}
        >
          <PhoneIcon />
          <span>{CONTACT.onCall.phone}</span>
        </a>
        <p className="kontakt-details__oncall-note">
          Linjen er forbeholdt myndigheder. Er du pårørende eller borger, så
          brug administrationens nummer herunder.
        </p>
      </aside>

      {/* ---------- administration ---------- */}
      <section
        className="kontakt-details__card"
        aria-labelledby="kontakt-admin"
      >
        <h3 id="kontakt-admin" className="kontakt-details__card-title">
          Administrationen
        </h3>
        <p className="kontakt-details__legal">{BRAND.legalName}</p>

        <ul className="kontakt-details__list">
          <li className="kontakt-details__row">
            <span className="kontakt-details__icon">
              <PhoneIcon />
            </span>
            <div className="kontakt-details__body">
              <span className="kontakt-details__key">Telefon</span>
              <a
                className="kontakt-details__value kontakt-details__link"
                href={`tel:${CONTACT.phoneHref}`}
              >
                {CONTACT.phone}
              </a>
            </div>
          </li>

          <li className="kontakt-details__row">
            <span className="kontakt-details__icon">
              <MailIcon />
            </span>
            <div className="kontakt-details__body">
              <span className="kontakt-details__key">E-mail</span>
              <a
                className="kontakt-details__value kontakt-details__link"
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>
            </div>
          </li>

          <li className="kontakt-details__row">
            <span className="kontakt-details__icon">
              <PinIcon />
            </span>
            <div className="kontakt-details__body">
              <span className="kontakt-details__key">Adresse</span>
              <address className="kontakt-details__value kontakt-details__address">
                {CONTACT.address}
              </address>
            </div>
          </li>

          <li className="kontakt-details__row">
            <span className="kontakt-details__icon">
              <DocIcon />
            </span>
            <div className="kontakt-details__body">
              <span className="kontakt-details__key">CVR</span>
              <span className="kontakt-details__value">{CONTACT.cvr}</span>
            </div>
          </li>

          <li className="kontakt-details__row">
            <span className="kontakt-details__icon">
              <LinkedInIcon />
            </span>
            <div className="kontakt-details__body">
              <span className="kontakt-details__key">LinkedIn</span>
              <a
                className="kontakt-details__value kontakt-details__link"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Følg os på LinkedIn
                <span className="visually-hidden"> (åbner i nyt vindue)</span>
              </a>
            </div>
          </li>
        </ul>
      </section>

      {/* ---------- opening hours ---------- */}
      <section
        className="kontakt-details__card"
        aria-labelledby="kontakt-hours"
      >
        <h3 id="kontakt-hours" className="kontakt-details__card-title">
          Åbningstider
        </h3>
        <dl className="kontakt-details__hours">
          {OPENING_HOURS.map((row) => (
            <div className="kontakt-details__hours-row" key={row.days}>
              <dt>{row.days}</dt>
              <dd>{row.hours}</dd>
            </div>
          ))}
        </dl>
        <p className="kontakt-details__hours-note">
          Uden for åbningstiden kan du altid skrive til os — vi svarer
          førstkommende hverdag.
        </p>
      </section>

      {/* ---------- map placeholder ---------- */}
      <section className="kontakt-details__map" aria-labelledby="kontakt-map">
        <div className="kontakt-details__map-art" aria-hidden="true">
          <svg viewBox="0 0 320 180" fill="none" preserveAspectRatio="none">
            <path d="M0 132h320M0 62h320M78 0v180M232 0v180" strokeWidth="1" />
            <path d="M-20 24 140 180M180 -20l160 156" strokeWidth="1" />
            <circle cx="160" cy="96" r="7" className="kontakt-details__map-dot" />
          </svg>
        </div>
        <div className="kontakt-details__map-body">
          <h3 id="kontakt-map" className="kontakt-details__card-title">
            Find vej
          </h3>
          <address className="kontakt-details__address">
            {CONTACT.address}
          </address>
          <a
            className="kontakt-details__map-link"
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            Åbn i kort
            <span className="visually-hidden"> (åbner i nyt vindue)</span>
          </a>
        </div>
      </section>
    </div>
  )
}
