import { Link } from 'react-router-dom'
import { approval, challenges, everydayIntro, methods, perspective, rhythms, targetIntro, values } from '../content/site'
import { Arrow, MethodCards, NumberedCards, Seo, Star, TextLink } from '../components/Elements'

export default function LandingPage() {
  return <>
    <Seo title="Alle har ret til en ny fortælling" description="Et trygt og hjemligt børne- og ungehjem i Forlev ved Skanderborg. Fem pladser til børn og unge i alderen 7–17 år med brug for omsorg, støtte og nærvær." />
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow"><Star />Et lille hjem. En ny begyndelse.</p>
        <h1 id="hero-title">Alle har ret til <span className="hero-line">en <em>ny fortælling</em></span></h1>
        <p className="hero-lead">Et trygt og hjemligt børne- og ungehjem for børn og unge, der har brug for ekstra omsorg, støtte og nærvær i deres hverdag.</p>
        <div className="hero-actions"><Link className="button" to="/om-os">Læs om Stjernestøv<Arrow /></Link><Link className="button button-outline" to="/kontakt">Henvendelse om plads<Arrow /></Link></div>
        <ul className="stat-badges" aria-label="Kort om huset"><li>5 pladser</li><li>7–17 år</li><li>Forlev, Skanderborg</li></ul>
      </div>
      <div className="hero-photo"><img src="/images/p3.png" alt="Huset Stjernestøvs hus og omgivelser i Forlev" width="1600" height="1195" fetchPriority="high" /><div className="photo-label"><Star /><span>HUSET STJERNESTØV<small>Forlev · Skanderborg</small></span></div></div>
    </section>
    <section className="section intro-section container" aria-labelledby="about-title">
      <div className="section-heading"><div><p className="eyebrow">01 / Om os</p><h2 id="about-title">Et hjem med plads til ro,<br />relationer og udvikling</h2></div><div className="section-heading-copy"><p>Vi har plads til fem børn og unge. Det giver os mulighed for at være tæt på det enkelte barn og skabe en hverdag med tid til relationer, nærvær og individuel støtte.</p><TextLink to="/om-os">Læs om Stjernestøv</TextLink></div></div>
      <NumberedCards items={values} />
    </section>
    <section className="section sage-section" aria-labelledby="target-title"><div className="container split-section">
      <div><p className="eyebrow">02 / Målgruppe</p><h2 id="target-title">Omsorgssvigt og<br />tilknytningsforstyrrelse</h2><p>{targetIntro}</p><TextLink to="/malgruppe">Læs om vores målgruppe</TextLink></div>
      <div className="target-detail"><p>Som følge af deres erfaringer kan børnene have forskellige udfordringer. Det kan blandt andet vise sig som:</p><ul className="star-list">{challenges.map(item => <li key={item}><Star />{item}</li>)}</ul><p className="perspective">{perspective}</p></div>
    </div></section>
    <section className="section container" aria-labelledby="approach-title"><div className="section-heading"><div><p className="eyebrow">03 / Faglig tilgang</p><h2 id="approach-title">Udvikling begynder<br />i relationen</h2></div><TextLink to="/faglig-tilgang">Læs om vores faglige tilgang</TextLink></div><MethodCards items={methods} /></section>
    <section className="section everyday-section" aria-labelledby="everyday-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">04 / Hverdagen</p><h2 id="everyday-title">En hverdag,<br />der hænger sammen</h2></div><div className="section-heading-copy"><p>{everydayIntro}</p><TextLink to="/hverdagen">Læs om hverdagen hos os</TextLink></div></div><NumberedCards items={rhythms} /></div></section>
    <section className="setting-section" aria-labelledby="setting-title"><div className="setting-photo"><img src="/images/p1.png" alt="Huset Stjernestøv set fra haven med terrasse og grønne træer" width="1600" height="1074" loading="lazy" /></div><div className="setting-copy"><p className="eyebrow"><Star />Huset og omgivelserne</p><h2 id="setting-title">Ro og natur uden<br />for Skanderborg</h2><p>Stjernestøv ligger på landet i Forlev, omgivet af åbne marker, natur og god plads omkring huset. Her er afstand til byens støj og mulighed for en rolig og overskuelig hverdag.</p><TextLink to="/om-os#huset">Se huset og omgivelserne</TextLink></div></section>
    <section className="section container municipality-teaser" aria-labelledby="municipality-title"><p className="eyebrow">05 / For kommuner</p><div className="split-section"><h2 id="municipality-title">Et grundigt match<br />fra begyndelsen</h2><div><p>{approval}</p><p>Ved en henvendelse ser vi grundigt på barnets historie, aktuelle situation og støttebehov.</p><Link className="button" to="/kontakt">Kontakt os om mulig anbringelse<Arrow /></Link><TextLink to="/for-kommuner">Læs mere om visitation</TextLink></div></div></section>
  </>
}
