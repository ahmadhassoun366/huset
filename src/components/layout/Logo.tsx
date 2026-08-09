import { Link } from 'react-router-dom'
import { BRAND } from '../../content/site'
import './Logo.css'

type Props = {
  /** Use on dark backgrounds (the footer). */
  invert?: boolean
}

/**
 * Wordmark placeholder. When the real logo file arrives, swap the inner
 * markup for an <img> — the company name itself comes from BRAND.name.
 */
export function Logo({ invert = false }: Props) {
  return (
    <Link
      to="/"
      className={`logo ${invert ? 'logo--invert' : ''}`.trim()}
      aria-label={`${BRAND.name} — til forsiden`}
    >
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none">
          <path
            d="M16 3.5c6.9 0 12.5 5.6 12.5 12.5v12.5H16C9.1 28.5 3.5 22.9 3.5 16S9.1 3.5 16 3.5Z"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <circle cx="16" cy="16" r="3.6" fill="currentColor" />
        </svg>
      </span>
      <span className="logo__text">
        <span className="logo__name">{BRAND.name}</span>
        <span className="logo__sub">Børne- &amp; ungehjem · botilbud</span>
      </span>
    </Link>
  )
}
