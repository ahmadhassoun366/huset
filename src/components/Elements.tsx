import { type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { navigation, site, type CardContent } from '../content/site'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}${site.logo}`,
      description: site.description,
      address: { '@type': 'PostalAddress', ...site.postalAddress },
      telephone: site.phone,
      ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: 'da',
      publisher: { '@id': `${site.url}/#organization` },
    },
  ],
}

export function Star({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`star ${className}`}>✦</span>
}

export function Arrow() {
  return <FontAwesomeIcon aria-hidden="true" focusable="false" className="arrow" icon={faArrowUpRightFromSquare} />
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
  const { pathname } = useLocation()
  const path = pathname.replace(/\/+$/, '').toLowerCase() || '/'
  const isPublicPage = navigation.some(item => item.path === path)
  const fullTitle = path === '/' ? `${site.name} | ${title}` : `${title} | ${site.name}`
  const canonical = `${site.url}${path}`
  const image = `${site.url}${site.logo}`
  // React 19 places these tags in <head> during both prerendering and navigation.
  return <>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={isPublicPage ? 'index, follow' : 'noindex, follow'} />
    {isPublicPage ? <link rel="canonical" href={canonical} /> : null}
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    {isPublicPage ? <meta property="og:url" content={canonical} /> : null}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="da_DK" />
    <meta property="og:site_name" content={site.name} />
    <meta property="og:image" content={image} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="2172" />
    <meta property="og:image:height" content="724" />
    <meta property="og:image:alt" content="Huset Stjernestøvs logo" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content="Huset Stjernestøvs logo" />
    {isPublicPage ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /> : null}
  </>
}
