import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation, site } from '../content/site'
import { Arrow, Star } from './Elements'

export function Logo() {
  return <Link className="logo" to="/" aria-label="Huset Stjernestøv – til forsiden"><Star /><span>HUSET<br /><strong>STJERNESTØV</strong></span></Link>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
    }
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', outside)
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside) }
  }, [open])
  return <header className="site-header" ref={header} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
  }}>
    <div className="header-inner">
      <Logo />
      <button ref={toggle} className="menu-toggle" aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{open ? 'Luk' : 'Menu'}</span><span className={`menu-lines ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
      </button>
      <nav id="main-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Hovednavigation">
        {navigation.map(item => <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
        <Link className="button button-small nav-cta" to="/kontakt" onClick={() => setOpen(false)}>Henvendelse om plads<Arrow /></Link>
      </nav>
    </div>
  </header>
}

export function RouteFocus() {
  const { pathname } = useLocation()
  const previous = useRef(pathname)
  useEffect(() => {
    if (previous.current === pathname) return
    previous.current = pathname
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname])
  return null
}

export function ContactBand() {
  return <section className="contact-band" aria-labelledby="contact-band-title"><div className="container contact-band-inner">
    <div><p className="eyebrow"><Star />Lad os tage en samtale</p><h2 id="contact-band-title">Skal vi tale om<br />et muligt match?</h2></div>
    <div className="contact-band-details"><a className="phone-display" href={site.phoneHref}>{site.phone}</a><p>{site.address}</p><a className="button button-cream" href={site.phoneHref}>Ring til os<Arrow /></a></div>
  </div></section>
}

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><Logo /><p className="footer-approval">Godkendt børne- og ungehjem<br />efter Barnets lov § 43</p></div>
      <nav aria-label="Navigation i sidefod" className="footer-nav">{navigation.map(item => <Link key={item.path} to={item.path}>{item.label}</Link>)}</nav>
      <address><span>Huset Stjernestøv ApS</span><span>Låsbyvej 61, Forlev</span><span>8660 Skanderborg</span><a href={site.phoneHref}>{site.phone}</a>{site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : null}</address>
    </div><div className="footer-bottom"><span>© 2026 Huset Stjernestøv ApS</span><span>CVR: {site.cvr}</span><span>Alle har ret til en ny fortælling<Star /></span></div>
  </div></footer>
}
