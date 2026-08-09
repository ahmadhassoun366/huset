import type { ReactNode } from 'react'
import './SectionHeading.css'

type Props = {
  eyebrow?: string
  title: string
  intro?: string
  /** Centres the block and constrains its width. */
  align?: 'start' | 'center'
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'start',
  children,
}: Props) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="lead section-heading__intro">{intro}</p>}
      {children}
    </div>
  )
}
