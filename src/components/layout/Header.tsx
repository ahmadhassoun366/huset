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
