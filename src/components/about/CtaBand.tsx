import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import './CtaBand.css'

type Action = {
  label: string
  /** Internal route. Use `href` for external / tel: links. */
  to?: string
  href?: string
}

type Props = {
  eyebrow?: string
  title: string
  text?: string
  primary: Action
  secondary?: Action
  /** `dark` sits on the ink background, `tint` on the pale wash. */
  tone?: 'dark' | 'tint'
}

/**
 * The closing call-to-action band shared by the "Hvem er vi" page family.
 * Each page passes its own contextual copy and links.
 */
export function CtaBand({
  eyebrow,
  title,
  text,
  primary,
  secondary,
  tone = 'dark',
}: Props) {
  const isDark = tone === 'dark'
  const base = isDark ? 'section section--dark' : 'section section--tint'

  return (
    <section
      className={`${base} cta-band cta-band--${tone}`}
      aria-labelledby="cta-band-title"
    >
      <div className="cta-band__glow" aria-hidden="true" />
      <div className="container cta-band__inner">
        <Reveal className="cta-band__text">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id="cta-band-title">{title}</h2>
          {text && <p className="lead cta-band__lead">{text}</p>}
        </Reveal>

        <Reveal className="cta-band__actions" delay={120}>
          <Button
            to={primary.to}
            href={primary.href}
            size="lg"
            variant={isDark ? 'invert' : 'primary'}
          >
            {primary.label}
          </Button>
          {secondary && (
            <Button
              to={secondary.to}
              href={secondary.href}
              size="lg"
              variant="secondary"
            >
              {secondary.label}
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  )
}
