import { MethodCards, PageIntro, Seo } from '../components/Elements'
import { approachSections } from '../content/approach'
import { methods } from '../content/site'

export default function ApproachPage() {
  return <>
    <Seo title="Faglig tilgang" description="Læs om Huset Stjernestøvs relationspædagogiske og mentaliseringsbaserede tilgang, den jeg-støttende samtale og individuel støtte til barnet." />
    <PageIntro label="Faglig tilgang" title="Faglig tilgang" />
    <div className="container page-body">
      <section className="methods-intro"><h2>Udvikling begynder i relationen</h2><MethodCards items={methods} /></section>
      <nav className="contents-nav" aria-label="På denne side"><span>På denne side</span>{approachSections.map((section, index) => <a href={`#metode-${index + 1}`} key={section.title}>{section.title}</a>)}<a href="#anerkendelse">Anerkendende tilgang</a></nav>
      {approachSections.map((section, index) => <section className="reading-section" id={`metode-${index + 1}`} key={section.title}><h2>{section.title}</h2><div className="prose">{section.paragraphs.map(text => <p key={text}>{text}</p>)}</div></section>)}
      <section className="reading-section" id="anerkendelse"><h2>Anerkendende tilgang</h2><div className="prose">
        <p>Når du samarbejder med Huset Stjernestøv, møder du en personalegruppe, der arbejder målrettet med en anerkendende pædagogisk tilgang. Vores faglige praksis sikrer et trygt miljø med fokus på det enkelte barns trivsel, udvikling og personlige ressourcer. I hverdagen med de børn og unge, du anbringer hos os, betyder det:</p>
        <p><strong>Fokus på succeser og mestring:</strong> Vi leder altid efter det, der lykkes for barnet. Ved systematisk at bygge videre på barnets/den unges små og store succeser, styrker vi deres modstandsdygtighed og handlekraft over for livets svære udfordringer.</p>
        <p><strong>Nervesystem i ro skaber udvikling:</strong> Vi arbejder bevidst med at skabe en hverdag, der dæmper stress og beroliger et overstimuleret nervesystem. Det er denne dybe tryghed, der skal til, for at barnet/den unge kan genvinde overskud, trives og lære.</p>
        <p><strong>Adfærd som meningsfuld kommunikation:</strong> Vi ser altid bag om barnets/den unges umiddelbare adfærd. Vi møder barnet med nysgerrighed frem for dom, fordi vi ved, at svære reaktioner ofte er en mestringsstrategi i en svær situation.</p>
        <p><strong>Dyb værdsættelse frem for tom ros:</strong> Vores pædagoger praktiserer en dyb, relationel anerkendelse. Vi styrker barnets/den unges fundamentale selvværd ved at møde dem med ægte nærvær og vise dem, at de har en stor værdi præcis, som de er.</p>
        <p>Vores mål er at skabe et trygt og forudsigeligt miljø, hvor barnet kan genfinde troen på egne ressourcer og udvikle sig i et sundt fællesskab.</p>
      </div></section>
    </div>
  </>
}
