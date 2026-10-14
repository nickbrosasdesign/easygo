import { useLocation } from 'react-router-dom'
import MapLibreMap from './MapLibreMap'
import { SEATTLE_CENTER, SEATTLE_BOUNDS, hasMapKey } from '../constants/map'

// The Route/Map screen owns its own full map surface (markers, hazard pins,
// floating dialogs) - on desktop it fills the whole viewport instead of
// splitting into the sidebar + map-pane shell every other screen uses.
const FULL_BLEED_PATHS = ['/route']

function AppShell({ children }) {
  const location = useLocation()

  if (FULL_BLEED_PATHS.includes(location.pathname)) {
    return <div className="eg-app-shell eg-app-shell--full-bleed">{children}</div>
  }

  return (
    <div className="eg-app-shell">
      <div className="eg-app-shell-sidebar">{children}</div>
      <div className="eg-app-shell-map" aria-hidden="true" style={{ position: 'relative', overflow: 'hidden' }}>
        {hasMapKey ? (
          <MapLibreMap center={SEATTLE_CENTER} zoom={12} maxBounds={SEATTLE_BOUNDS} interactive={false} />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${import.meta.env.BASE_URL}map-image-for-prototype.png.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
      </div>
    </div>
  )
}

export default AppShell
