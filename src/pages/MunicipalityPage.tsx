import { Link } from 'react-router-dom'
import { Arrow, PageIntro, Seo } from '../components/Elements'
import { approval } from '../content/site'

export default function MunicipalityPage() {
  return <>
    <Seo title="For kommuner og visitation" description="Huset Stjernestøv har fem pladser efter Barnets lov § 43. Læs om visitation, det grundige match og samarbejdet med den anbringende kommune." />
    <PageIntro label="For kommuner" title="For kommuner og visitation" />
    <div className="container page-body"><section className="reading-section"><h2>Et grundigt match fra begyndelsen</h2><div className="prose">
      <p>{approval}</p>
      <p>Ved en henvendelse ser vi grundigt på barnets historie, aktuelle situation og støttebehov. Vi vurderer både, om vi kan tilbyde den rette støtte, og om en indskrivning er forenelig med den børnegruppe, der allerede bor i huset.</p>
      <p>Under anbringelsen prioriterer vi et tæt samarbejde med den anbringende kommune, skole, familie, netværk og relevante fagpersoner.</p>
      <Link className="button" to="/kontakt">Kontakt os om mulig anbringelse<Arrow /></Link>
    </div></section></div>
  </>
}
