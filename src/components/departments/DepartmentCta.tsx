import { CONTACT } from '../../content/site'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import './DepartmentCta.css'

type Props = {
  /** Overrides the default heading. */
  title?: string
  /** Overrides the default lead paragraph. */
  text?: string
}

/**
 * Closing CTA band shared by the afdelinger overview and the detail pages:
 * a route to the contact page plus the visitation døgntelefon.
 */
export function DepartmentCta({
  title = 'Skal vi finde den rette afdeling sammen?',
  text = 'Ring eller skriv til os, hvis I står med en ung eller en borger, der har brug for et nyt sted at bo. Vi vender hurtigt tilbage med en vurdering af, om vi er det rette match – og siger også fra, hvis vi ikke er.',
}: Props) {
  return (
    <section
      className="section section--dark dept-cta"
      aria-labelledby="dept-cta-title"
    >
      <div className="container dept-cta__inner">
        <Reveal className="dept-cta__text">
          <p className="eyebrow">Kontakt</p>
          <h2 id="dept-cta-title">{title}</h2>
          <p className="lead dept-cta__lead">{text}</p>
          <div className="dept-cta__actions">
            <Button to="/kontakt-os" variant="invert" size="lg">
              Kontakt os
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="dept-cta__card">
          <p className="dept-cta__card-label">{CONTACT.onCall.label}</p>
          <a
            className="dept-cta__phone"
            href={`tel:${CONTACT.onCall.phoneHref}`}
          >
            {CONTACT.onCall.phone}
          </a>
          <p className="dept-cta__card-note">
            Døgnet rundt, året rundt. Uden for visitation kan I altid ringe
            til vores hovednummer på{' '}
            <a className="dept-cta__inline-link" href={`tel:${CONTACT.phoneHref}`}>
              {CONTACT.phone}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
