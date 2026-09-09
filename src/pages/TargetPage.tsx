import { PageIntro, Seo, Star, TextLink } from '../components/Elements'
import { challenges, perspective, targetIntro } from '../content/site'

export default function TargetPage() {
  return <>
    <Seo title="Målgruppe" description="Huset Stjernestøv er godkendt til børn og unge på 7–17 år, som har været udsat for omsorgssvigt og/eller har udviklet en tilknytningsforstyrrelse." />
    <PageIntro label="Målgruppe" title="Målgruppe" />
    <div className="container page-body">
      <section className="reading-section"><h2>Omsorgssvigt og tilknytningsforstyrrelse</h2><div className="prose">
        <p>{targetIntro}</p><p>Som følge af deres erfaringer kan børnene have forskellige udfordringer. Det kan blandt andet vise sig som:</p>
        <ul className="star-list">{challenges.map(item => <li key={item}><Star />{item}</li>)}</ul><p className="perspective">{perspective}</p>
      </div></section>
      <section className="reading-section"><h2>Beskrivelse af målgruppen (uddybende)</h2><div className="prose">
        <p>Som følge af tilknytningsvanskeligheder og omsorgssvigt kan barnet/den unge udvise en række afledte udfordringer og traumereaktioner. Disse kan komme til udtryk som angst, depression, stressbelastning, indadreagerende og udadreagerende adfærd, opmærksomheds- og koncentrationsvanskeligheder samt udfordringer i forhold til indlæring og skolefærdigheder.</p>
        <p>Fælles for målgruppen er, at deres udfordringer forstås i lyset af deres tilknytningshistorie og oplevelser af omsorgssvigt, og at de har brug for en specialiseret, relationsbaseret og helhedsorienteret indsats, der understøtter trivsel, udvikling, følelsesregulering, læring og deltagelse i positive fællesskaber.</p>
        <p>Denne forståelsesramme betyder, at de ovennævnte psykologiske, sociale, adfærdsmæssige eller indlæringsmæssige vanskeligheder ikke betragtes som selvstændige målgrupper, men som mulige følger eller konsekvenser af tilknytningsforstyrrelser og omsorgssvigt.</p>
        <p>Målgruppebeskrivelsen afspejler sig også i vores valg af metoder og tilgange.</p><TextLink to="/faglig-tilgang">Læs om vores faglige tilgang</TextLink>
      </div></section>
    </div>
  </>
}
