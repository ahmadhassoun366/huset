import { img } from '../../lib/images'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import './HomeAbout.css'

const PARAGRAPHS = [
  'Stjernestøv er et socialpædagogisk tilbud med én afdeling i Jylland og varetager driften af et børne- og ungehjem i overensstemmelse med Barnets lov § 43.',
  'Vi arbejder med højt specialiserede indsatser rettet mod børn og unge, der har komplekse behov. Vores faglige grundlag omfatter støtte til målgrupper med udfordringer som fx tilknytnings- og adfærdsproblematikker, opmærksomhedsvanskeligheder, udadreagerende adfærd samt andre udviklings- og personlighedsmæssige problemstillinger.',
  'Vores overordnede ambition er at tilbyde et højt kvalificeret og pålideligt socialpædagogisk tilbud, der skaber værdi for både borgere og de kommuner, vi samarbejder med. I Stjernestøv arbejder vi målrettet for at styrke borgernes trivsel og personlige udvikling, så de gradvist kan opnå øget selvstændighed og mestring i deres hverdag.',
  'For mere information er I velkomne til at besøge vores hjemmeside eller rette henvendelse til vores visitationsteam.',
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
