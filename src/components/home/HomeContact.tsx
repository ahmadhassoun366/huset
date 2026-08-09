import { CONTACT } from '../../content/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import './HomeContact.css'

export function HomeContact() {
  return (
    <section className="section home-cta" aria-labelledby="home-cta-title">
      <div className="container">
        <Reveal>
          <div className="home-cta__card">
            <span className="home-cta__shape" aria-hidden="true" />

            <div className="home-cta__text">
              <p className="eyebrow">Kontakt os</p>
              <h2 id="home-cta-title" className="home-cta__title">
                Skal vi tage en snak om den rette plads?
              </h2>
              <p className="lead home-cta__lead">
                Står du med en borger, der har brug for et trygt sted at
                være? Ring eller skriv – så finder vi ud af, om vi er det
                rigtige match.
              </p>
            </div>

            <div className="home-cta__details">
              <ul className="home-cta__list">
                <li>
                  <span className="home-cta__label">Telefon</span>
                  <a
                    className="home-cta__value"
                    href={`tel:${CONTACT.phoneHref}`}
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <span className="home-cta__label">E-mail</span>
                  <a
                    className="home-cta__value"
                    href={`mailto:${CONTACT.email}`}
                  >
                    {CONTACT.email}
                  </a>
                </li>
              </ul>

              <Button to="/kontakt-os" variant="invert" size="lg">
                Kontakt os
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
