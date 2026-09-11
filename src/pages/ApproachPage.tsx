import { MethodCards, PageIntro, Seo } from '../components/Elements'
import { approachSections } from '../content/approach'
import { methods } from '../content/site'

export default function ApproachPage() {
  return <>
    <Seo title="Faglig tilgang" description="Læs om Huset Stjernestøvs relationspædagogiske og mentaliseringsbaserede tilgang, den jeg-støttende samtale og individuel støtte til barnet." />
    <PageIntro label="Faglig tilgang" title="Faglig tilgang" />
    <div className="container page-body">
      <section className="methods-intro"><h2>Udvikling begynder i relationen</h2><MethodCards items={methods} /></section>
      <nav className="contents-nav" aria-label="På denne side"><span>På denne side</span>{approachSections.map((section, index) => <a href={`#metode-${index + 1}`} key={section.title}>{section.title}</a>)}<a href="#inklusion">Inklusionspædagogik</a></nav>
      {approachSections.map((section, index) => <section className="reading-section" id={`metode-${index + 1}`} key={section.title}><h2>{section.title}</h2><div className="prose">{section.paragraphs.map(text => <p key={text}>{text}</p>)}</div></section>)}
      <section className="reading-section" id="inklusion"><h2>Inklusionspædagogik</h2><div className="prose">
        <p>I Huset Stjernestøv arbejder vi ud fra et inklusionspædagogisk perspektiv, hvor alle børn og unge skal opleve sig som betydningsfulde deltagere i fællesskabet. Vi tager udgangspunkt i det enkelte barns forudsætninger, behov og ressourcer og tilpasser de pædagogiske rammer, så barnet får mulighed for at deltage, udvikle sig og opleve tilhørsforhold.</p>
        <p>Vi har fokus på at identificere og reducere de forhold, der kan skabe barrierer for barnets deltagelse. Det kan eksempelvis være krav, struktur, kommunikationsformer, sociale samspil eller fysiske rammer. Personalet arbejder derfor fleksibelt med at justere hverdagen og skabe overskuelige og tilgængelige fællesskaber, hvor det enkelte barn kan deltage på egne forudsætninger.</p>
        <p>Inklusion forstås således ikke alene som barnets evne til at indgå i fællesskabet, men som et fælles pædagogisk ansvar for at skabe rammer, hvor forskellighed kan rummes, og hvor alle børn og unge får mulighed for at bidrage og opleve sig som en del af fællesskabet.</p>
        <p>Gennem tæt relationsarbejde, tydelig struktur og løbende faglig refleksion understøtter vi barnets sociale deltagelse, medbestemmelse og oplevelse af tilhørsforhold. Vi samarbejder samtidig med barnets netværk og relevante samarbejdspartnere for at skabe sammenhæng og kontinuitet omkring barnets udvikling og deltagelsesmuligheder.</p>
      </div></section>
    </div>
  </>
}
