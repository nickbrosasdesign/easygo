import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMapPin } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'
import CheckRow from '../components/CheckRow'
import Nav from '../components/Nav'
import { useAppState } from '../state/AppStateContext'
import { useIsDesktop } from '../hooks/useIsDesktop'

const MOCK_ADDRESSES = [
  '1234 Pine St, Seattle WA 98101',
  '500 5th Ave, Seattle WA 98104',
  '1112 Pike St, Seattle WA 98122',
  '901 5th Ave, Seattle WA 98164',
  '2200 6th Ave, Seattle WA 98121',
  '4300 University Way NE, Seattle WA 98105',
  '400 Broad St, Seattle WA 98109',
]

function AddressField({ icon, placeholder, value, onChange }) {
  const [open, setOpen] = useState(false)
  const [dropPin, setDropPin] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    function onOutsideClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
        setDropPin(false)
      }
    }
    document.addEventListener('click', onOutsideClick)
    return () => document.removeEventListener('click', onOutsideClick)
  }, [])

  const suggestions = value
    ? MOCK_ADDRESSES.filter((a) => a.toLowerCase().includes(value.toLowerCase()))
    : MOCK_ADDRESSES

  function choose(address) {
    onChange(address)
    setOpen(false)
    setDropPin(false)
  }

  return (
    <div className="eg-address-field" ref={wrapRef}>
      <div className="eg-address-input-wrap">
        <span className="eg-address-input-icon" aria-hidden="true">
          {icon}
        </span>
        <input
          type="text"
          className="eg-address-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setOpen(true)}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label={placeholder}
        />
      </div>

      {open && !dropPin && (
        <div className="eg-address-dropdown" role="listbox" aria-label={placeholder}>
          <div className="eg-address-dropdown-options">
            {suggestions.length > 0 ? (
              suggestions.map((a) => (
                <div key={a} className="eg-address-dropdown-option" role="option" onClick={() => choose(a)}>
                  {a}
                </div>
              ))
            ) : (
              <div className="eg-address-dropdown-empty">No matches found</div>
            )}
          </div>
          <button type="button" className="eg-address-dropdown-cta" onClick={() => setDropPin(true)}>
            <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" /> Choose location on map
          </button>
        </div>
      )}

      {dropPin && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + var(--spacing-xs))',
            left: 0,
            right: 0,
            zIndex: 50,
            borderRadius: 'var(--radius-medium)',
            overflow: 'hidden',
            border: '3px solid var(--primitive-blue-400)',
          }}
        >
          <div
            style={{
              position: 'relative',
              height: 160,
              backgroundImage: `url(${import.meta.env.BASE_URL}map-image-for-prototype.png.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -100%)',
                fontSize: 32,
                color: 'var(--primitive-blue-400)',
              }}
              aria-hidden="true"
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
          </div>
          <button
            type="button"
            className="eg-btn eg-btn-primary eg-btn-primary-size"
            style={{ width: '100%', borderRadius: 0 }}
            onClick={() => choose('Dropped pin location')}
          >
            Confirm location
          </button>
        </div>
      )}
    </div>
  )
}

function NewRoute() {
  const navigate = useNavigate()
  const isDesktop = useIsDesktop()
  const { actions } = useAppState()
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [accessibleCrosswalks, setAccessibleCrosswalks] = useState(true)
  const [avoidNoSignal, setAvoidNoSignal] = useState(true)

  const ready = Boolean(origin && destination)

  function findRoute() {
    if (!ready) return
    actions.setCurrentRoute({
      origin,
      destination,
      accessibleCrosswalks,
      avoidNoSignal,
      started: false,
      saved: false,
    })
    navigate('/route')
  }

  return (
    <div
      style={{
        maxWidth: isDesktop ? 'none' : 375,
        margin: '0 auto',
        background: 'var(--primitive-blue-100)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-large)',
        padding: '0 var(--spacing-large) var(--spacing-large)',
      }}
    >
      <Header variant="main" />
      <h1 className="eg-screen-title">New Route</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-medium)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-small)' }}>
          <AddressField
            icon={<FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />}
            placeholder="Choose current location"
            value={origin}
            onChange={setOrigin}
          />
          <AddressField
            icon={<FontAwesomeIcon icon={faMapPin} aria-hidden="true" />}
            placeholder="Choose destination"
            value={destination}
            onChange={setDestination}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-small)', maxWidth: 290 }}>
          <p style={{ font: 'inherit', fontWeight: 700, fontSize: 14, color: 'var(--primitive-blue-400)', margin: 0 }}>
            Route Options
          </p>
          <CheckRow
            label="Always use accessible crosswalks"
            checked={accessibleCrosswalks}
            onChange={(e) => setAccessibleCrosswalks(e.target.checked)}
          />
          <CheckRow
            label="Avoid crosswalks with no traffic signals"
            checked={avoidNoSignal}
            onChange={(e) => setAvoidNoSignal(e.target.checked)}
          />
        </div>

        <button
          type="button"
          className={`eg-btn ${ready ? 'eg-btn-primary' : 'eg-btn-disabled'} eg-btn-primary-size`}
          style={{ width: '100%' }}
          disabled={!ready}
          onClick={findRoute}
        >
          Find accessible route
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>

        <div style={{ height: 4, borderRadius: 4, background: 'var(--primitive-blue-400)' }} />
      </div>

      <Nav excludeNewRoute />
    </div>
  )
}

export default NewRoute
