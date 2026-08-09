import { img } from '../../lib/images'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import './HomeApproach.css'

const PILLARS = [
  {
    title: 'Hjemlige og trygge rammer',
    body: 'Hos os prioriterer vi hjemlige og trygge rammer på alle vores afdelinger. Vi ved, at samspillet med borgerne er afgørende for trivsel og udvikling – og derfor er det af allerhøjeste prioritet i vores daglige arbejde.',
  },
  {
    title: 'Høj normering',
    body: 'For at skabe de bedst mulige betingelser for nærvær, omsorg og opmærksomhed har vi valgt at arbejde med høj normering. Det betyder, at der er et særligt højt antal borgerrettede timer, som sikrer tid og overskud til den enkelte.',
  },
  {
    title: 'Øjenhøjde og pædagogiske miljøer',
    body: 'Vi møder vores borgere i øjenhøjde og tilrettelægger pædagogiske miljøer med fokus på udvikling, tryghed og mestring. Det er vigtigt for os, at borgeren oplever et meningsfuldt hverdagsliv, hvor der er plads til læring og personlig vækst – og hvor livets udfordringer kan tackles på en mere hensigtsmæssig måde.',
  },
  {
    title: 'Mentaliseringsbaseret tilgang',
    body: 'Vores tilgang er mentaliseringsbaseret. Det betyder, at vi arbejder målrettet med at støtte borgeren i at udvikle og bruge sunde strategier og færdigheder, som fremmer både fysisk og psykisk trivsel. Gennem dette arbejde styrker vi borgerens robusthed, selvværd og selvtillid – og understøtter evnen til at mestre de udfordringer, livet bringer.',
  },
]

export function HomeApproach() {
  const photo = img('community')

  return (
    <section
      className="section section--dark home-approach"
      aria-labelledby="home-approach-title"
    >
      <div className="container home-approach__inner">
        <div className="home-approach__head">
          <Reveal>
            <p className="eyebrow">Vores tilgang</p>
            <h2 id="home-approach-title" className="home-approach__title">
              Vi møder mennesket
            </h2>
            <p className="lead home-approach__lead">
              Hos os har vi mennesket i fokus. Vi har både hjerterum og højt
              til loftet.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="home-approach__figure">
              <img
                src={photo.src}
                alt={photo.alt}
                width={900}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="home-approach__cta">
              <Button to="/kommuner" variant="secondary" size="lg">
                Kommuner
              </Button>
            </div>
          </Reveal>
        </div>

        <ol className="home-approach__list">
          {PILLARS.map((pillar, i) => (
            <li className="home-approach__item" key={pillar.title}>
              <Reveal delay={i * 90}>
                <span className="home-approach__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="home-approach__item-title">{pillar.title}</h3>
                <p className="home-approach__item-body">{pillar.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
