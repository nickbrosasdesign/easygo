import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import MapFooter from '../components/MapFooter'

function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${import.meta.env.BASE_URL}map-image-for-prototype.png.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
      </div>

      <div
        style={{
          position: 'relative',
          background: 'var(--primitive-blue-100)',
          borderBottom: '4px solid var(--primitive-blue-400)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-large)',
          padding: '0 var(--spacing-large) var(--spacing-large)',
        }}
      >
        <Header variant="main" />
        <Nav />
      </div>

      <MapFooter>
        <Link
          to="/route"
          className="eg-btn eg-btn-primary eg-btn-primary-size"
          style={{ flex: 1, textDecoration: 'none', gap: 'var(--spacing-medium)' }}
        >
          <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          View Map (No Route)
        </Link>
      </MapFooter>
    </div>
  )
}

export default Home
