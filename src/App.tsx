import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'

import Home from './pages/Home'
import Kommuner from './pages/Kommuner'
import Paedagogik from './pages/Paedagogik'
import Maalgruppe from './pages/Maalgruppe'
import HvemErVi from './pages/HvemErVi'
import Vaerdier from './pages/Vaerdier'
import Bestyrelsen from './pages/Bestyrelsen'
import Afdelinger from './pages/Afdelinger'
import DepartmentPage from './pages/DepartmentPage'
import Fortaellinger from './pages/Fortaellinger'
import Tilsyn from './pages/Tilsyn'
import KontaktOs from './pages/KontaktOs'
import BarnetsLov from './pages/BarnetsLov'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="kommuner">
          <Route index element={<Kommuner />} />
          <Route path="paedagogik" element={<Paedagogik />} />
          <Route path="maalgruppe" element={<Maalgruppe />} />
        </Route>

        <Route path="hvem-er-vi">
          <Route index element={<HvemErVi />} />
          <Route path="vaerdier" element={<Vaerdier />} />
          <Route path="bestyrelsen" element={<Bestyrelsen />} />
        </Route>

        <Route path="afdelinger">
          <Route index element={<Afdelinger />} />
          <Route path=":slug" element={<DepartmentPage />} />
        </Route>

        <Route path="fortaellinger" element={<Fortaellinger />} />
        <Route path="tilsyn" element={<Tilsyn />} />
        <Route path="kontakt-os" element={<KontaktOs />} />
        <Route path="barnets-lov" element={<BarnetsLov />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
