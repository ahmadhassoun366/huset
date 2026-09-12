import { Link } from 'react-router-dom'
import { approval, site, values } from '../content/site'
import { Arrow, Seo, Star, TextLink } from '../components/Elements'

export default function LandingPage() {
  return <>
    <Seo title="Opholdssted for børn og unge" description={site.description} />
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow"><Star />Et lille hjem. En ny begyndelse.</p>
        <h1 id="hero-title">Huset Stjernestøv</h1>
        <p className="hero-lead">Alle har ret til en ny fortælling. Et trygt og hjemligt børne- og ungehjem for børn og unge, der har brug for ekstra omsorg, støtte og nærvær i deres hverdag.</p>
        <div className="hero-actions"><Link className="button" to="/om-os">Læs om Stjernestøv<Arrow /></Link><Link className="button button-outline" to="/kontakt">Henvendelse om plads<Arrow /></Link></div>
        <ul className="stat-badges" aria-label="Kort om huset"><li>5 pladser</li><li>7–17 år</li><li>Forlev, Skanderborg</li></ul>
      </div>
      <div className="hero-photo"><img src="/images/p3.png" alt="Huset Stjernestøvs hus og omgivelser i Forlev" width="1600" height="1195" fetchPriority="high" /><div className="photo-label"><Star /><span>HUSET STJERNESTØV<small>Forlev · Skanderborg</small></span></div></div>
    </section>
    <section className="section overview-section container" aria-labelledby="overview-title">
      <div className="section-heading"><div><p className="eyebrow">01 / Om Stjernestøv</p><h2 id="overview-title">Et hjem med plads til ro,<br />relationer og udvikling</h2></div><div className="section-heading-copy"><p>Vi har plads til fem børn og unge. Det giver os mulighed for at være tæt på det enkelte barn og skabe en hverdag med tid til relationer, nærvær og individuel støtte.</p></div></div>
      <div className="overview-values">{values.map((item, index) => <article className="overview-value" key={item.title}><span className="card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      <nav className="overview-links" aria-label="Læs mere om Stjernestøv"><TextLink to="/om-os">Læs om Stjernestøv</TextLink><TextLink to="/malgruppe">Læs om vores målgruppe</TextLink><TextLink to="/faglig-tilgang">Se vores faglige tilgang</TextLink><TextLink to="/hverdagen">Læs om hverdagen hos os</TextLink></nav>
    </section>
    <section className="setting-section" aria-labelledby="setting-title"><div className="setting-photo"><img src="/images/p1.png" alt="Huset Stjernestøv set fra haven med terrasse og grønne træer" width="1600" height="1074" loading="lazy" /></div><div className="setting-copy"><p className="eyebrow"><Star />Huset og omgivelserne</p><h2 id="setting-title">Ro og natur uden<br />for Skanderborg</h2><p>Stjernestøv ligger på landet i Forlev, omgivet af åbne marker, natur og god plads omkring huset. Her er afstand til byens støj og mulighed for en rolig og overskuelig hverdag.</p><TextLink to="/om-os#huset">Se huset og omgivelserne</TextLink></div></section>
    <section className="indoor-section" aria-labelledby="indoor-title"><div className="container indoor-layout"><div className="indoor-heading"><p className="eyebrow"><Star />Indenfor i huset</p><h2 id="indoor-title">Et hjem med plads til fællesskab og ro</h2></div><figure className="indoor-figure"><img src="/images/indoordesign.png" alt="Indretningen i Huset Stjernestøv med stue, spiseplads og fællesarealer" width="1536" height="1024" loading="lazy" /><figcaption>Fællesarealerne i Huset Stjernestøv</figcaption></figure></div></section>
    <section className="section container municipality-teaser" aria-labelledby="municipality-title"><p className="eyebrow">04 / For kommuner</p><div className="split-section"><h2 id="municipality-title">Et grundigt match<br />fra begyndelsen</h2><div><p>{approval}</p><p>Ved en henvendelse ser vi grundigt på barnets historie, aktuelle situation og støttebehov.</p><Link className="button" to="/kontakt">Kontakt os om mulig anbringelse<Arrow /></Link><TextLink to="/for-kommuner">Læs mere om visitation</TextLink></div></div></section>
  </>
}
