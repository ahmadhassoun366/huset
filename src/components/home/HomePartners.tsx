import { PARTNERS } from '../../content/site'
import { Reveal } from '../ui/Reveal'
import './HomePartners.css'

const Wordmark = ({ name }: { name: string }) => (
  <span className="home-partners__mark">
    <span className="home-partners__glyph" aria-hidden="true">
      {name.charAt(0)}
    </span>
    {name}
  </span>
)

export function HomePartners() {
  return (
    <section
      className="section section--paper home-partners"
      aria-labelledby="home-partners-title"
    >
      <div className="container">
        <Reveal className="home-partners__head">
          <p className="eyebrow">Vi arbejder tæt sammen med</p>
          <h2 id="home-partners-title">Samarbejdspartnere</h2>
        </Reveal>
      </div>

      <div className="home-partners__rail">
        <div className="home-partners__marquee">
          <ul className="home-partners__group">
            {PARTNERS.map((name) => (
              <li key={name}>
                <Wordmark name={name} />
              </li>
            ))}
          </ul>
          <ul className="home-partners__group" aria-hidden="true">
            {PARTNERS.map((name) => (
              <li key={`dup-${name}`}>
                <Wordmark name={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
