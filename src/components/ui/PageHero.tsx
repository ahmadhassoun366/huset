import { Link } from 'react-router-dom'
import { img } from '../../lib/images'
import type { ImageKey } from '../../lib/images'
import './PageHero.css'

type Crumb = { label: string; to: string }

type Props = {
  eyebrow: string
  title: string
  intro?: string
  image: ImageKey
  /** Ancestors only — the current page is appended automatically. */
  breadcrumbs?: Crumb[]
}

/**
 * The standard masthead for every inner page: breadcrumbs, a large display
 * heading and an arched photo that overlaps the section below it.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  breadcrumbs = [],
}: Props) {
  const photo = img(image)

  return (
    <header className="page-hero">
      <div className="page-hero__bg" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="page-hero__crumbs" aria-label="Brødkrumme">
          <Link to="/">Forside</Link>
          {breadcrumbs.map((c) => (
            <span key={c.to}>
              <span className="page-hero__sep" aria-hidden="true">
                /
              </span>
              <Link to={c.to}>{c.label}</Link>
            </span>
          ))}
          <span>
            <span className="page-hero__sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">{title}</span>
          </span>
        </nav>

        <div className="page-hero__grid">
          <div className="page-hero__text">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            {intro && <p className="lead page-hero__intro">{intro}</p>}
          </div>

          <figure className="page-hero__figure">
            <img src={photo.src} alt={photo.alt} loading="eager" />
          </figure>
        </div>
      </div>
    </header>
  )
}
