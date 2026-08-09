import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'invert'
type Size = 'md' | 'lg'

type Props = {
  children: ReactNode
  /** Internal route. Use `href` instead for external links. */
  to?: string
  href?: string
  variant?: Variant
  size?: Size
  className?: string
}

const ArrowIcon = () => (
  <svg
    className="btn__arrow"
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
)

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}: Props) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim()
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <ArrowIcon />
    </>
  )

  if (href) {
    return (
      <a
        className={cls}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link className={cls} to={to ?? '/'}>
      {inner}
    </Link>
  )
}
