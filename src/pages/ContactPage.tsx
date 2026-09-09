import { PageIntro, Seo } from '../components/Elements'
import { contactPeople, site } from '../content/site'
import '../styles/contact.css'

function PhoneIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg> }
function MailIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function PinIcon() { return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6"/></svg> }

export default function ContactPage() {
  return <>
    <Seo title="Kontakt" description="Kontakt Huset Stjernestøv på +45 60 22 33 47 for en uforpligtende dialog. Find os på Låsbyvej 61, Forlev, 8660 Skanderborg." />
    <div className="contact-page-main">
      <PageIntro className="contact-intro" label="Kontakt" title="Skal vi tale om et muligt match?"><p>Kontakt os for en indledende og uforpligtende dialog om barnets eller den unges behov og vores rammer.</p></PageIntro>
      <section className="contact-section" aria-labelledby="contact-people-title"><div className="container"><div className="contact-people-heading"><p className="eyebrow">Kontaktpersoner</p><h2 id="contact-people-title">Tal med os om det næste skridt</h2></div><div className="contact-people-grid">{contactPeople.map(person => <article className="contact-person" key={person.email}><div className="contact-person-media"><img src={`/images/${person.image}`} alt={`Portræt af ${person.name}`} width="560" height="700" /></div><div className="contact-person-body"><p className="contact-person-role">{person.role}</p><h3>{person.name}</h3><p className="contact-person-education">{person.education}</p><div className="contact-person-lines"><a className="contact-line" href={person.phoneHref}><PhoneIcon />{person.phone}</a><a className="contact-line" href={`mailto:${person.email}`}><MailIcon />{person.email}</a></div></div></article>)}</div></div></section>
      <section className="contact-facts" aria-label="Virksomhedsoplysninger"><div className="container contact-facts-inner"><div className="contact-facts-item contact-facts-name"><span className="star" aria-hidden="true">✦</span><span>Huset Stjernestøv ApS</span></div><div className="contact-facts-item"><dt>Adresse</dt><dd>{site.address}</dd></div><div className="contact-facts-item"><dt>CVR</dt><dd>{site.cvr}</dd></div></div></section>
      <section className="contact-map" aria-labelledby="map-title"><div className="contact-map-frame"><iframe title="Kort over Låsbyvej 61, Forlev, 8660 Skanderborg" src={`${site.mapUrl}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div className="contact-map-card"><h2 id="map-title"><PinIcon />Find vej til os</h2><p>{site.address}</p><a className="text-link" href={site.mapUrl} target="_blank" rel="noreferrer">Åbn kort i nyt vindue →</a></div></div></section>
    </div>
  </>
}
