import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CONTACT, NAV } from '../../content/site'
import type { NavItem } from '../../content/site'
import { Logo } from './Logo'
import './Header.css'

const ChevronIcon = () => (
  <svg className="nav__chevron" viewBox="0 0 12 12" aria-hidden="true">
    <path
      d="m3 4.5 3 3 3-3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
  </svg>
)

/** True when the route is the item itself or one of its children. */
const isBranchActive = (item: NavItem, pathname: string) =>
  item.to === '/'
    ? pathname === '/'
    : pathname === item.to || pathname.startsWith(`${item.to}/`)

export function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 12,
  )
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openBranch, setOpenBranch] = useState<string | null>(null)
  // Where the drawer starts — the header sits below the topbar until the
  // page is scrolled, so this can't be a fixed value.
  const [drawerTop, setDrawerTop] = useState(0)
  const navRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on navigation.
  useEffect(() => {
    setMobileOpen(false)
    setOpenBranch(null)
  }, [pathname])

  // Lock body scroll while the mobile drawer is open, and anchor the drawer
  // to the bottom edge of the header.
  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = ''
      return
    }
    setDrawerTop(headerRef.current?.getBoundingClientRect().bottom ?? 0)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Escape closes the drawer or an open dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setMobileOpen(false)
      setOpenBranch(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Clicking outside the nav closes an open dropdown.
  useEffect(() => {
    if (!openBranch) return
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenBranch(null)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [openBranch])

  return (
    <>
      {/* Utility strip — phone, email and LinkedIn, as on the original site. */}
      <div className="topbar">
        <div className="container topbar__inner">
          <p className="topbar__promise">
            Høj normering · Små enheder · Mennesket i centrum
          </p>
          <div className="topbar__contact">
            <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            <span className="topbar__divider" aria-hidden="true" />
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a
              className="topbar__social"
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        className={`header ${scrolled ? 'is-scrolled' : ''}`.trim()}
      >
        <div className="container header__inner">
          <Logo />

          <nav
            className="nav"
            ref={navRef}
            aria-label="Hovedmenu"
          >
            <ul className="nav__list">
              {NAV.map((item) => {
                const active = isBranchActive(item, pathname)
                const open = openBranch === item.label

                if (!item.children) {
                  return (
                    <li key={item.to} className="nav__item">
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={`nav__link ${active ? 'is-active' : ''}`.trim()}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  )
                }

                return (
                  <li
                    key={item.to}
                    className={`nav__item nav__item--has-menu ${open ? 'is-open' : ''}`.trim()}
                    onMouseEnter={() => setOpenBranch(item.label)}
                    onMouseLeave={() => setOpenBranch(null)}
                  >
                    <Link
                      to={item.to}
                      className={`nav__link ${active ? 'is-active' : ''}`.trim()}
                      aria-expanded={open}
                      aria-haspopup="true"
                      onFocus={() => setOpenBranch(item.label)}
                    >
                      {item.label}
                      <ChevronIcon />
                    </Link>

                    <div className="nav__menu" role="group">
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink to={child.to} className="nav__sublink">
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Link to="/kontakt-os" className="header__cta">
            Kontakt os
          </Link>

          <button
            type="button"
            className={`burger ${mobileOpen ? 'is-open' : ''}`.trim()}
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Luk menu' : 'Åbn menu'}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* --- mobile drawer --- */}
      <div
        className={`drawer ${mobileOpen ? 'is-open' : ''}`.trim()}
        id="mobile-nav"
        hidden={!mobileOpen}
        style={{ top: drawerTop }}
      >
        <nav className="drawer__inner" aria-label="Mobilmenu">
          <ul className="drawer__list">
            {NAV.map((item) => (
              <li key={item.to} className="drawer__item">
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className="drawer__link"
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="drawer__sublist">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to} className="drawer__sublink">
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="drawer__contact">
            <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </nav>
      </div>

      {mobileOpen && (
        <div
          className="drawer__scrim"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
