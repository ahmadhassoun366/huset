import { PageIntro, Seo } from '../components/Elements'
import { contactPeople, site } from '../content/site'

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  )
}

export default function ContactPage() {
  return <>
    <Seo
      title="Kontakt"
      description="Kontakt Huset Stjernestøv på +45 60 22 33 47 for en uforpligtende dialog. Find os på Låsbyvej 61, Forlev, 8660 Skanderborg."
    />

    <PageIntro label="Kontakt" title="Skal vi tale om et muligt match?">
      <p>Kontakt os for en indledende og uforpligtende dialog om barnets eller den unges behov og vores rammer.</p>
    </PageIntro>

    <section className="contact-people" aria-labelledby="contact-people-title">
      <div className="container">
        <div className="contact-people-heading">
          <p className="eyebrow">Kontaktpersoner</p>
          <h2 id="contact-people-title">Tal med os om det næste skridt</h2>
        </div>

        <div className="contact-people-grid">
          {contactPeople.map(person => (
            <article className="contact-person" key={person.email}>
              <div className="contact-person-media">
                <img src={`/images/${person.image}`} alt={`Portræt af ${person.name}`} width="560" height="700" />
              </div>
              <div className="contact-person-body">
                <p className="contact-person-role">{person.role}</p>
                <h3>{person.name}</h3>
                <div className="contact-person-lines">
                  <a className="contact-line" href={person.phoneHref}><PhoneIcon />{person.phone}</a>
                  <a className="contact-line" href={`mailto:${person.email}`}><MailIcon />{person.email}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="contact-facts" aria-label="Virksomhedsoplysninger">
      <div className="container contact-facts-inner">
        <div className="contact-facts-item contact-facts-name">
          <span className="star" aria-hidden="true">✦</span>
          <span>Huset Stjernestøv ApS</span>
        </div>
        <div className="contact-facts-item">
          <dt>Adresse</dt>
          <dd>{site.address}</dd>
        </div>
        <div className="contact-facts-item">
          <dt>CVR</dt>
          <dd>{site.cvr}</dd>
        </div>
      </div>
    </section>

    <section className="contact-map" aria-labelledby="map-title">
      <div className="contact-map-frame">
        <iframe
          title="Kort over Låsbyvej 61, Forlev, 8660 Skanderborg"
          src={`${site.mapUrl}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="contact-map-card">
          <h2 id="map-title"><PinIcon />Find vej til os</h2>
          <p>{site.address}</p>
          <a className="text-link" href={site.mapUrl} target="_blank" rel="noreferrer">Åbn kort i nyt vindue →</a>
        </div>
      </div>
    </section>

    <style>{`
      .contact-people { padding-block: 76px 8px; }
      .contact-people-heading { margin-bottom: 38px; }
      .contact-people-heading h2 { max-width: 560px; margin-top: 6px; }

      .contact-people-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 360px));
        justify-content: center;
        gap: 32px;
      }

      .contact-person {
        background: var(--paper);
        border: 1px solid var(--line);
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(20, 20, 15, .04);
        transition: box-shadow .2s ease, transform .2s ease;
      }
      .contact-person:hover { box-shadow: 0 16px 32px rgba(20, 20, 15, .1); transform: translateY(-3px); }

      .contact-person-media { aspect-ratio: 4 / 5; overflow: hidden; }
      .contact-person-media img { width: 100%; height: 100%; object-fit: cover; object-position: center 18%; display: block; }

      .contact-person-body { padding: 26px 26px 28px; }
      .contact-person-role {
        font-size: .68rem;
        font-weight: 600;
        letter-spacing: .13em;
        text-transform: uppercase;
        color: var(--brick);
        margin: 0 0 8px;
      }
      .contact-person-body h3 { font-size: clamp(1.4rem, 2vw, 1.7rem); line-height: 1.2; margin: 0 0 20px; }

      .contact-person-lines {
        display: flex;
        flex-direction: column;
        gap: 11px;
        padding-top: 18px;
        border-top: 1px solid var(--line);
      }
      .contact-line {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-size: .9rem;
        color: var(--ink);
        text-decoration: none;
      }
      .contact-line svg { color: var(--brick); flex-shrink: 0; }
      .contact-line:hover { color: var(--brick); }

      .contact-facts {
        margin-top: 14px;
        padding-block: 30px;
        background: var(--paper);
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
      }
      .contact-facts-inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 14px 52px;
        text-align: center;
      }
      .contact-facts-item { display: flex; flex-direction: column; align-items: center; gap: 3px; }
      .contact-facts-item dt { font-size: .66rem; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; color: var(--brick); }
      .contact-facts-item dd { font-size: .95rem; margin: 0; }
      .contact-facts-name { flex-direction: row; gap: 8px; font-weight: 700; font-size: 1.02rem; }
      .contact-facts-name .star { color: var(--brick); }

      .contact-map { padding: 70px 0 0; }
      .contact-map-frame { position: relative; width: 100%; height: 500px; overflow: hidden; }
      .contact-map-frame iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
      .contact-map-card {
        position: absolute;
        top: 26px;
        left: 26px;
        max-width: 290px;
        background: var(--bg, #fff);
        border: 1px solid var(--line);
        box-shadow: 0 14px 32px rgba(20, 20, 15, .14);
        padding: 22px 24px;
      }
      .contact-map-card h2 { display: flex; align-items: center; gap: 8px; font-size: 1.1rem; margin: 0 0 8px; }
      .contact-map-card h2 svg { color: var(--brick); }
      .contact-map-card p { font-size: .88rem; margin: 0 0 12px; color: var(--ink); }

      @media (max-width: 700px) {
        .contact-people-grid { grid-template-columns: minmax(0, 360px); }
        .contact-map-frame { height: 360px; }
        .contact-map-card { left: 16px; right: 16px; max-width: none; top: 16px; padding: 18px 20px; }
      }
    `}</style>
  </>
}