import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { CardContent } from '../content/site'

export function Star({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`star ${className}`}>✦</span>
}

export function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link className="text-link" to={to}>{children}<Arrow /></Link>
}

export function NumberedCards({ items }: { items: CardContent[] }) {
  return <div className="numbered-grid">{items.map((item, index) => (
    <article className="numbered-card" key={item.title}>
      <span className="card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <h3>{item.title}</h3><p>{item.text}</p>
    </article>
  ))}</div>
}

export function MethodCards({ items }: { items: CardContent[] }) {
  return <div className="method-grid">{items.map(item => (
    <article className="method-card" key={item.title}>
      <Star /><h3>{item.title}</h3><p>{item.text}</p>
    </article>
  ))}</div>
}

export function PageIntro({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return <section className="page-intro"><div className="container">
    <p className="eyebrow"><Star />{label}</p>
    <h1>{title}</h1>{children ? <div className="page-intro-copy">{children}</div> : null}
  </div><Star className="intro-star" /></section>
}

export function Seo({ title, description }: { title: string; description: string }) {
  const fullTitle = `${title} | Huset Stjernestøv`
  return <>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="da_DK" />
    <meta property="og:site_name" content="Huset Stjernestøv" />
    <meta property="og:image" content="/images/house1.jfif" />
    <meta property="og:image:alt" content="Huset Stjernestøvs rødstenshus i Forlev" />
  </>
}
