import { Link } from 'react-router-dom'
import { DEPARTMENTS } from '../../content/site'
import type { Department } from '../../content/site'
import { img } from '../../lib/images'
import './DepartmentNav.css'

type Props = {
  /** Slug of the afdeling currently being viewed. */
  currentSlug: string
}

type Direction = 'prev' | 'next'

const LABELS: Record<Direction, string> = {
  prev: 'Forrige afdeling',
  next: 'Næste afdeling',
}

function NavCard({
  department,
  direction,
}: {
  department: Department
  direction: Direction
}) {
  const photo = img(department.image)

  return (
    <Link
      className={`dept-nav__card dept-nav__card--${direction}`}
      to={department.to}
      rel={direction}
    >
      <span className="dept-nav__thumb">
        <img src={photo.src} alt="" loading="lazy" />
      </span>
      <span className="dept-nav__body">
        <span className="dept-nav__label">
          <svg
            className="dept-nav__icon"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {LABELS[direction]}
        </span>
        <span className="dept-nav__name">{department.name}</span>
        <span className="dept-nav__approval">{department.approval}</span>
      </span>
    </Link>
  )
}

/**
 * Cycles through DEPARTMENTS so every afdeling has a previous and a next —
 * the last one wraps back round to the first.
 */
export function DepartmentNav({ currentSlug }: Props) {
  const index = DEPARTMENTS.findIndex((d) => d.slug === currentSlug)
  if (index === -1 || DEPARTMENTS.length < 2) return null

  const count = DEPARTMENTS.length
  const prev = DEPARTMENTS[(index - 1 + count) % count]
  const next = DEPARTMENTS[(index + 1) % count]

  return (
    <nav className="dept-nav" aria-label="Flere afdelinger">
      <div className="container dept-nav__inner">
        <NavCard department={prev} direction="prev" />
        <Link className="dept-nav__all" to="/afdelinger">
          Alle afdelinger
        </Link>
        <NavCard department={next} direction="next" />
      </div>
    </nav>
  )
}
