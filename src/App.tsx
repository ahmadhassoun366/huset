import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ContactBand, Footer, Header, RouteFocus } from './components/SiteLayout'
import { PageIntro, Seo, TextLink } from './components/Elements'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import TargetPage from './pages/TargetPage'
import ApproachPage from './pages/ApproachPage'
import EverydayPage from './pages/EverydayPage'
import MunicipalityPage from './pages/MunicipalityPage'
import ContactPage from './pages/ContactPage'

function NotFoundPage() {
  return <><Seo title="Siden blev ikke fundet" description="Siden findes ikke. Find tilbage til Huset Stjernestøvs forside." /><PageIntro label="404" title="Siden blev ikke fundet"><TextLink to="/">Tilbage til forsiden</TextLink></PageIntro></>
}

export default function App() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
  }, [pathname, hash])
  return <>
    <a className="skip-link" href="#main-content">Spring til indhold</a>
    <Header key={pathname} /><RouteFocus />
    <main id="main-content" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/om-os" element={<AboutPage />} />
        <Route path="/malgruppe" element={<TargetPage />} />
        <Route path="/faglig-tilgang" element={<ApproachPage />} />
        <Route path="/hverdagen" element={<EverydayPage />} />
        <Route path="/for-kommuner" element={<MunicipalityPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {pathname !== '/kontakt' ? <ContactBand /> : null}
    </main><Footer />
  </>
}
