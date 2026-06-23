import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppStateProvider } from './state/AppStateContext'
import Home from './screens/Home'
import NewRoute from './screens/NewRoute'
import RouteView from './screens/RouteView'
import SavedRoutes from './screens/SavedRoutes'
import Settings from './screens/Settings'
import Agency from './screens/Agency'
import A11yInfo from './screens/A11yInfo'

function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-route" element={<NewRoute />} />
          <Route path="/route" element={<RouteView />} />
          <Route path="/saved-routes" element={<SavedRoutes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/a11y-info" element={<A11yInfo />} />
        </Routes>
      </BrowserRouter>
    </AppStateProvider>
  )
}

export default App
