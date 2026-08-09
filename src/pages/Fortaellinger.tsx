import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { TESTIMONIALS } from '../content/site'
import type { Testimonial } from '../content/site'
import { brand } from '../lib/brand'
import { img } from '../lib/images'
import './Fortaellinger.css'

/**
 * The testimonial that opens the page as a large pull-quote. Change the index
 * to feature a different voice — the remaining quotes flow into the mosaic.
 */
const FEATURED_INDEX = 2

/**
 * Emphasis pattern for the mosaic, applied in order to the non-featured
 * quotes. `lg` cards span wide and set the quote in display type, `sm` cards
 * are compact — the mix is what keeps the grid from reading as a card wall.
 */
type Emphasis = 'lg' | 'md' | 'sm'
const EMPHASIS: Emphasis[] = ['lg', 'sm', 'sm', 'lg', 'md', 'md']

function QuoteCard({
  item,
  emphasis,
}: {
  item: Testimonial
  emphasis: Emphasis
}) {
  return (
    <figure className={`fort__card fort__card--${emphasis}`}>
      <span className="fort__mark" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="fort__quote">
        <p>{brand(item.quote)}</p>
      </blockquote>
      <figcaption className="fort__by">
        <cite className="fort__author">{item.author}</cite>
        <span className="fort__role">{brand(item.role)}</span>
      </figcaption>
    </figure>
  )
}

export default function Fortaellinger() {
  const featured = TESTIMONIALS[FEATURED_INDEX]
  const rest = TESTIMONIALS.filter((_, i) => i !== FEATURED_INDEX)
  const photo = img('people')
  const sidePhoto = img('story')

  return (
    <>
      <PageHero
        eyebrow="Fortællinger"
        title="Fortællinger"
        intro="Beboere, pårørende og samarbejdspartnere fortæller med egne ord, hvad der sker, når hverdagen bliver tryg nok til, at udviklingen kan begynde."
        image="story"
      />

      {/* ---------- featured pull-quote ---------- */}
      <section className="section fort__feature" aria-labelledby="fort-feature">
        <div className="container fort__feature-grid">
          <Reveal className="fort__feature-text">
            <h2 id="fort-feature" className="visually-hidden">
              Fremhævet fortælling
            </h2>
            <figure className="fort__hero-figure">
              <span className="fort__hero-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="fort__hero-quote">
                <p>{brand(featured.quote)}</p>
              </blockquote>
              <figcaption className="fort__by fort__by--hero">
                <cite className="fort__author">{featured.author}</cite>
                <span className="fort__role">{brand(featured.role)}</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="fort__feature-media">
            <img
              className="fort__arch"
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              width={1600}
              height={2000}
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- the mosaic ---------- */}
      <section
        className="section section--tint fort__voices"
        aria-label="Dette siger beboere, pårørende og samarbejdspartnere"
      >
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Stemmer fra hverdagen"
              title="Dette siger beboere, pårørende og samarbejdspartnere"
              intro="Hver fortælling står for sig selv. Tilsammen tegner de billedet af det, vi arbejder for hver eneste dag."
            />
          </Reveal>

          <div className="fort__mosaic">
            {rest.map((item, i) => (
              <Reveal
                key={`${item.author}-${i}`}
                delay={(i % 3) * 90}
                className={`fort__item fort__item--${EMPHASIS[i % EMPHASIS.length]}`}
              >
                <QuoteCard
                  item={item}
                  emphasis={EMPHASIS[i % EMPHASIS.length]}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- closing note + CTA ---------- */}
      <section className="section fort__closing" aria-labelledby="fort-closing">
        <div className="container fort__closing-grid">
          <Reveal className="fort__closing-media">
            <img
              className="fort__arch fort__arch--sm"
              src={sidePhoto.src}
              alt={sidePhoto.alt}
              loading="lazy"
              width={1600}
              height={1200}
            />
          </Reveal>

          <Reveal delay={100} className="fort__closing-text">
            <p className="eyebrow">Din fortælling</p>
            <h2 id="fort-closing">Alle har ret til en ny fortælling</h2>
            <div className="prose">
              <p>
                Vi deler kun fortællinger, som er givet frivilligt, og altid
                med respekt for den enkeltes ønske om anonymitet. Nogle står
                frem med navn, andre gør ikke — begge dele er lige meget værd.
              </p>
              <p>
                Overvejer du en anbringelse eller et botilbud, eller vil du
                bare høre mere om, hvordan vi arbejder? Så er du altid
                velkommen til at kontakte os.
              </p>
            </div>
            <div className="fort__cta">
              <Button to="/kontakt-os">Kontakt os</Button>
              <Button to="/afdelinger" variant="secondary">
                Se vores afdelinger
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
