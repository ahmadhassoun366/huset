import { img } from '../../lib/images'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import './HomeAbout.css'

const PARAGRAPHS = [
  'Stjernestøv er et socialpædagogisk tilbud beliggende i Låsby, Skanderborg – centralt i hjertet af Jylland. Vi driver et børne- og ungehjem i overensstemmelse med Barnets lov § 43.',
  'Vi arbejder med specialiserede socialpædagogiske indsatser for børn og unge med komplekse støttebehov. Vores faglige grundlag omfatter blandt andet støtte til børn og unge med tilknytnings- og adfærdsmæssige problematikker, opmærksomhedsvanskeligheder, udadreagerende adfærd samt andre udviklings- og personlighedsmæssige udfordringer.',
  'I Stjernestøv lægger vi vægt på at skabe trygge, stabile og forudsigelige rammer, hvor barnet eller den unge mødes med nærvær, omsorg og høj socialpædagogisk faglighed. Indsatsen tilrettelægges med udgangspunkt i den enkeltes ressourcer, behov og udviklingsmuligheder.',
  'Vi arbejder målrettet med det enkelte barns trivsel og udvikling og lægger vægt på et tæt og pålideligt samarbejde med kommuner og øvrige aktører omkring barnet.',
  'Målet er at styrke barnets personlige og sociale udvikling og skabe et solidt fundament for fremtiden.',
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
              Børne- og ungehjem i Låsby, Skanderborg – centralt i Jylland
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
