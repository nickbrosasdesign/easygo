import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import SavedCard from '../components/SavedCard'
import Pagination from '../components/Pagination'
import { useAppState } from '../state/AppStateContext'

const PAGE_SIZE = 3

function SavedRoutes() {
  const navigate = useNavigate()
  const { state, actions } = useAppState()
  const [page, setPage] = useState(1)

  const pageCount = Math.max(1, Math.ceil(state.savedRoutes.length / PAGE_SIZE))
  const pageItems = state.savedRoutes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function openRoute(route) {
    actions.setCurrentRoute({
      origin: 'Current Location',
      destination: route.type === 'named' ? route.address : route.name,
      accessibleCrosswalks: true,
      avoidNoSignal: true,
      started: false,
      saved: true,
    })
    navigate('/route')
  }

  return (
    <div
      style={{
        maxWidth: 430,
        margin: '0 auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-large)',
        padding: '0 var(--spacing-large) var(--spacing-large)',
      }}
    >
      <Header variant="secondary" />
      <h1 className="eg-screen-title">My Saved Routes</h1>

      {state.savedRoutes.length === 0 ? (
        <p>No saved routes yet. Save a route from the map view to see it here.</p>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-small)' }}>
            {pageItems.map((route) => (
              <SavedCard
                key={route.id}
                variant="primary"
                icon={route.icon}
                name={route.name}
                address={route.address}
                onClick={() => openRoute(route)}
              />
            ))}
          </div>
          <Pagination page={page} pageCount={pageCount} onChange={setPage} />
        </>
      )}
    </div>
  )
}

export default SavedRoutes
