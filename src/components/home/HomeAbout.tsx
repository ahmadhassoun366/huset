import { img } from '../../lib/images'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import './HomeAbout.css'

const PARAGRAPHS = [
  'Hos os har vi sammensat et veluddannet, erfarent og passioneret medarbejderteam, der leverer kvalificeret socialpædagogisk indsats til udsatte og sårbare børn, unge og voksne.',
  'Vi er specialister i at håndtere komplekse problemstillinger og tilbyder støtte til børn, unge og voksne med forskellige udfordringer – herunder adfærds- og tilknytningsforstyrrelser, opmærksomhedsforstyrrelser, udadreagerende adfærd samt autismespektrumforstyrrelser. Derudover arbejder vi kriminalpræventivt i tæt samarbejde med borgere, der udviser kriminalitetstruet adfærd, og som kræver særlig faglig ekspertise.',
  'Vi tror på, at differentierede og skræddersyede tilbud – med et bredt udvalg af muligheder – skaber de bedste betingelser for en sund og positiv udvikling hos den enkelte. Det enkelte individ er i centrum, og vi tager altid udgangspunkt i, hvor personen er her og nu, samt hvilke drømme og mål der findes for fremtiden.',
  'Vi tilbyder mindre børne- og ungeafdelinger samt skærmede botilbud med høj normering. Hos os er der tid og plads til det enkelte barn og unge menneske – til relationen, til udviklingen og til hverdagen i et trygt fællesskab. Vores fokus er at skabe stabile rammer, hvor børn og unge oplever forudsigelighed, omsorg og støtte fra fagligt kompetente medarbejdere. De mindre enheder gør det muligt at arbejde tættere og mere individuelt, så vi kan tilpasse indsatsen præcist efter den enkelts behov, ressourcer og trivsel.',
]

export function HomeAbout() {
  const primary = img('about')
  const secondary = img('care')

  return (
    <section
      className="section section--paper home-about"
      aria-labelledby="home-about-title"
    >
      <div className="container home-about__inner">
        <Reveal className="home-about__media">
          <figure className="home-about__photo home-about__photo--a">
            <img
              src={primary.src}
              alt={primary.alt}
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <figure className="home-about__photo home-about__photo--b">
            <img
              src={secondary.src}
              alt={secondary.alt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <p className="home-about__note" aria-hidden="true">
            <span>Tid til den enkelte</span>
            Mindre enheder · høj normering
          </p>
        </Reveal>

        <div className="home-about__body">
          <Reveal>
            <p className="eyebrow">Om os</p>
            <h2 id="home-about-title" className="home-about__title">
              Vi består af børne- og ungehjem samt botilbud med flere
              afdelinger i Jylland
            </h2>
          </Reveal>

          <div className="home-about__prose prose">
            {PARAGRAPHS.map((text, i) => (
              <Reveal key={i} delay={80 + i * 60}>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="home-about__cta" delay={120}>
            <Button to="/hvem-er-vi" size="lg">
              Hvem er vi?
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
