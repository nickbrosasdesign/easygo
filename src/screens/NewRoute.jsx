import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import CheckRow from '../components/CheckRow'
import Nav from '../components/Nav'
import { useAppState } from '../state/AppStateContext'

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
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')
  const [dropPin, setDropPin] = useState(false)

  const suggestions = draft
    ? MOCK_ADDRESSES.filter((a) => a.toLowerCase().includes(draft.toLowerCase()))
    : MOCK_ADDRESSES

  function choose(address) {
    onChange(address)
    setEditing(false)
    setDraft('')
  }

  if (!editing) {
    return (
      <button
        type="button"
        className="eg-select-btn"
        style={{ justifyContent: 'flex-start', gap: 'var(--spacing-medium)' }}
        onClick={() => setEditing(true)}
      >
        {icon}
        <span
          className="eg-select-btn-text"
          style={{ color: value ? 'var(--primitive-base-black)' : 'var(--primitive-grey-300)', textAlign: 'left' }}
        >
          {value || placeholder}
        </span>
      </button>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      <input
        className="eg-input"
        autoFocus
        placeholder={placeholder}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
      />
      <ul className="eg-select-list" role="listbox" aria-label={placeholder}>
        {suggestions.map((a) => (
          <li key={a} className="eg-select-option" role="option" onClick={() => choose(a)}>
            {a}
          </li>
        ))}
        <li
          className="eg-select-option"
          role="option"
          style={{ color: 'var(--primitive-blue-400)', fontWeight: 600 }}
          onClick={() => setDropPin(true)}
        >
          📍 Choose location on map
        </li>
      </ul>
      {dropPin && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 101,
            marginTop: 8,
            borderRadius: 'var(--radius-medium)',
            overflow: 'hidden',
            border: '1px solid var(--primitive-blue-400)',
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
              }}
              aria-hidden="true"
            >
              📍
            </div>
          </div>
          <button
            type="button"
            className="eg-btn eg-btn-primary eg-btn-primary-size"
            style={{ width: '100%', borderRadius: 0 }}
            onClick={() => {
              choose('Dropped pin location')
              setDropPin(false)
            }}
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
            icon={<span aria-hidden="true">📍</span>}
            placeholder="Choose current location"
            value={origin}
            onChange={setOrigin}
          />
          <AddressField
            icon={<span aria-hidden="true">📌</span>}
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
