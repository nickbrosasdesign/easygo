import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppStateProvider } from './state/AppStateContext'
import AppShell from './components/AppShell'
import { useIsDesktop } from './hooks/useIsDesktop'
import Home from './screens/Home'
import NewRoute from './screens/NewRoute'
import RouteView from './screens/RouteView'
import SavedRoutes from './screens/SavedRoutes'
import Settings from './screens/Settings'
import Agency from './screens/Agency'
import A11yInfo from './screens/A11yInfo'

// On desktop, the route inputs sit permanently in the sidebar and replace
// the mobile Home screen's nav-hub + "View Map" treatment.
function HomeOrNewRoute() {
  const isDesktop = useIsDesktop()
  return isDesktop ? <NewRoute /> : <Home />
}

function App() {
  return (
    <AppStateProvider>
      <BrowserRouter basename={`${import.meta.env.BASE_URL}main.html`}>
        <AppShell>
          <Routes>
            <Route path="/" element={<HomeOrNewRoute />} />
            <Route path="/new-route" element={<NewRoute />} />
            <Route path="/route" element={<RouteView />} />
            <Route path="/saved-routes" element={<SavedRoutes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/agency" element={<Agency />} />
            <Route path="/a11y-info" element={<A11yInfo />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </AppStateProvider>
  )
}

export default App
