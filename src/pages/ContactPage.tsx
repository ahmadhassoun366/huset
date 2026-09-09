import { Arrow, PageIntro, Seo } from '../components/Elements'
import { site } from '../content/site'

export default function ContactPage() {
  return <>
    <Seo title="Kontakt" description="Kontakt Huset Stjernestøv på +45 60 22 33 47 for en uforpligtende dialog. Find os på Låsbyvej 61, Forlev, 8660 Skanderborg." />
    <PageIntro label="Kontakt" title="Skal vi tale om et muligt match?"><p>Kontakt os for en indledende og uforpligtende dialog om barnets eller den unges behov og vores rammer.</p></PageIntro>
    <div className="container page-body contact-layout"><section className="contact-details"><h2>Huset Stjernestøv ApS</h2>
      <dl><div><dt>Telefon</dt><dd><a className="contact-phone" href={site.phoneHref}>{site.phone}</a></dd></div>
        <div><dt>Adresse</dt><dd>{site.address}</dd></div><div><dt>CVR</dt><dd>{site.cvr}</dd></div>
        <div><dt>E-mail</dt><dd>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <span className="placeholder-note">E-mail afventer</span>}</dd></div>
      </dl><a className="button" href={site.phoneHref}>Ring til os<Arrow /></a>
    </section><section className="contact-map" aria-labelledby="map-title"><h2 id="map-title">Find vej til os</h2><iframe title="Kort over Låsbyvej 61, Forlev, 8660 Skanderborg" src={`${site.mapUrl}&output=embed`} width="600" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a className="text-link" href={site.mapUrl} target="_blank" rel="noreferrer">Åbn kort i nyt vindue<Arrow /></a></section></div>
  </>
}
