import { img } from '../../lib/images'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import './HomeHero.css'

const FACTS = [
  'Mindre afdelinger',
  'Høj normering',
  'Flere steder i Jylland',
]

export function HomeHero() {
  const main = img('hero')
  const inset = img('heroSecondary')

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <span className="home-hero__wash" aria-hidden="true" />

      <div className="container home-hero__inner">
        <Reveal className="home-hero__text">
          <p className="eyebrow">Børne- &amp; ungehjem samt botilbud</p>

          <h1 id="home-hero-title" className="home-hero__title">
            Alle har ret til <em>en ny fortælling</em> – hos os skaber vi
            den sammen
          </h1>

          <p className="lead home-hero__lead">
            Vi driver børne- og ungehjem samt botilbud med flere afdelinger i
            Jylland. Mindre enheder, høj normering og et erfarent
            medarbejderteam giver tid til relationen, udviklingen og
            hverdagen.
          </p>

          <div className="home-hero__actions">
            <Button to="/hvem-er-vi" size="lg">
              Hvem er vi?
            </Button>
            <Button to="/afdelinger" variant="secondary" size="lg">
              Afdelinger
            </Button>
          </div>

          <ul className="home-hero__facts">
            {FACTS.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="home-hero__media" delay={140}>
          <span className="home-hero__blob" aria-hidden="true" />

          <figure className="home-hero__figure home-hero__figure--main">
            <img
              src={main.src}
              alt={main.alt}
              width={1200}
              height={1500}
              fetchPriority="high"
              decoding="async"
            />
          </figure>

          <figure className="home-hero__figure home-hero__figure--inset">
            <img
              src={inset.src}
              alt={inset.alt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
