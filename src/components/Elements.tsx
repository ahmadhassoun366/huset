import { useEffect, type ReactNode } from 'react'
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

export function PageIntro({ label, title, children, className = '' }: { label: string; title: string; children?: ReactNode; className?: string }) {
  return <section className={`page-intro ${className}`}><div className="container">
    <p className="eyebrow"><Star />{label}</p>
    <h1>{title}</h1>{children ? <div className="page-intro-copy">{children}</div> : null}
  </div><Star className="intro-star" /></section>
}

export function Seo({ title, description }: { title: string; description: string }) {
  const fullTitle = `${title} | Huset Stjernestøv`
  useEffect(() => {
    document.title = fullTitle
    const values: Record<string, string> = {
      description,
      'og:title': fullTitle,
      'og:description': description,
      'og:type': 'website',
      'og:locale': 'da_DK',
      'og:site_name': 'Huset Stjernestøv',
      'og:image': '/images/p1.png',
      'og:image:alt': 'Huset Stjernestøvs rødstenshus i Forlev',
    }
    for (const [name, content] of Object.entries(values)) {
      const selector = name.startsWith('og:') ? `meta[property="${name}"]` : `meta[name="${name}"]`
      const meta = document.head.querySelector<HTMLMetaElement>(selector) ?? document.head.appendChild(document.createElement('meta'))
      meta.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
      meta.content = content
    }
  }, [description, fullTitle])
  if (typeof window !== 'undefined') return null
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
