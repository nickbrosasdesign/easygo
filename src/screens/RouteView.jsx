import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faMapPin,
  faXmark,
  faStar,
  faTriangleExclamation,
  faEye,
  faPlay,
} from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'
import MapMarker from '../components/MapMarker'
import MapFooter from '../components/MapFooter'
import CheckRow from '../components/CheckRow'
import { useAppState } from '../state/AppStateContext'
import { useIsDesktop } from '../hooks/useIsDesktop'

// On desktop this screen goes full-bleed (see AppShell) - instead of the
// mobile floating dialogs, a persistent panel this wide sits flush along
// the left edge, matching the sidebar width used everywhere else.
const DESKTOP_PANEL_WIDTH = 408

const TURN_STEPS = [
  { command: 'CONTINUE', direction: 'STRAIGHT', street: 'on Aloha St.', rotation: 0 },
  { command: 'TURN', direction: 'LEFT', street: 'on Mercer St.', rotation: -90 },
  { command: 'SLIGHT', direction: 'RIGHT', street: 'on 2nd Ave W.', rotation: 45 },
  { command: 'TURN', direction: 'RIGHT', street: 'Thomas St.', rotation: 90 },
  { command: 'SLIGHT', direction: 'LEFT', street: 'Western Ave.', rotation: -45 },
]

const START_POS = { top: '32%', left: '20%' }
const END_POS = { top: '74%', left: '55%' }
const MY_LOCATION_POS = { top: '46%', left: '26%' }

function TurnArrow({ rotation, size = 32, color = 'white' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

function RouteDialog({ route, onBack, onShowDetails, onStart, onEnd }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 64,
        left: 8,
        right: 8,
        background: 'var(--primitive-blue-400)',
        borderRadius: 'var(--radius-large)',
        boxShadow: '0px 0px 2px rgba(0,0,0,0.5)',
        padding: 'var(--spacing-medium) var(--spacing-large)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-medium)',
      }}
    >
      <button
        type="button"
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-small)',
          fontFamily: 'var(--font-lexend)',
          fontWeight: 700,
          fontSize: 20,
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Choose New Route
      </button>

      {!route && null}

      {route && !route.started && (
        <>
          <div style={{ height: 1, background: 'white' }} />
          <div style={{ color: 'white', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', gap: 8, paddingLeft: 32 }}>
              <FontAwesomeIcon icon={faLocationDot} /> {route.origin}
            </div>
            <div style={{ display: 'flex', gap: 8, paddingLeft: 32 }}>
              <FontAwesomeIcon icon={faMapPin} /> {route.destination}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              type="button"
              className="eg-btn eg-btn-primary eg-btn-primary-size"
              style={{ flex: 1 }}
              onClick={onShowDetails}
            >
              Route Details
            </button>
            <button
              type="button"
              className="eg-btn eg-btn-secondary eg-btn-primary-size"
              style={{ flex: 1 }}
              onClick={onStart}
            >
              Start Route
            </button>
          </div>
        </>
      )}

      {route && route.started && (
        <>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
            <TurnArrow rotation={0} size={64} />
            <div style={{ color: 'white', fontFamily: 'var(--font-lexend)', fontWeight: 900 }}>
              <p style={{ fontSize: 32, margin: 0, lineHeight: '40px' }}>CONTINUE</p>
              <p style={{ fontSize: 32, margin: 0, lineHeight: '40px' }}>STRAIGHT</p>
            </div>
          </div>
          <button
            type="button"
            className="eg-btn eg-btn-primary eg-btn-primary-size"
            style={{ width: '100%', background: 'var(--primitive-red-300)', borderColor: 'white' }}
            onClick={onEnd}
          >
            End Route
          </button>
        </>
      )}
    </div>
  )
}

function RouteDetailsOverlay({ onBack, onStart }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 64,
        left: 8,
        right: 8,
        bottom: 96,
        background: 'var(--primitive-blue-400)',
        borderRadius: 'var(--radius-large)',
        boxShadow: '0px 0px 2px rgba(0,0,0,0.5)',
        padding: 'var(--spacing-medium) var(--spacing-large)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-medium)',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <button
        type="button"
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-small)',
          fontFamily: 'var(--font-lexend)',
          fontWeight: 700,
          fontSize: 20,
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Choose New Route
      </button>
      <div style={{ height: 1, background: 'white' }} />
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {TURN_STEPS.map((step, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <TurnArrow rotation={step.rotation} />
              <div style={{ fontWeight: 900, fontSize: 16 }}>
                <p style={{ margin: 0 }}>{step.command}</p>
                <p style={{ margin: 0 }}>{step.direction}</p>
              </div>
            </div>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 20 }}>
              {i + 1}. {step.street}
            </p>
          </div>
        ))}
      </div>
      <button type="button" className="eg-btn eg-btn-secondary eg-btn-primary-size" style={{ width: '100%' }} onClick={onStart}>
        Start Route
      </button>
    </div>
  )
}

function RouteActionButton({ icon, label, onClick }) {
  return (
    <button type="button" className="eg-route-action" onClick={onClick}>
      <span className="eg-route-action-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="eg-route-action-label">{label}</span>
    </button>
  )
}

function DesktopTurnStep({ step, index, active }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-medium)',
        alignItems: 'flex-start',
        padding: 'var(--spacing-small)',
        borderRadius: 'var(--radius-medium)',
        background: active ? 'var(--primitive-blue-100)' : 'transparent',
        borderLeft: `4px solid ${active ? 'var(--primitive-blue-400)' : 'transparent'}`,
      }}
    >
      <TurnArrow rotation={step.rotation} color="var(--primitive-blue-400)" size={28} />
      <div>
        <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: 'var(--primitive-blue-400)' }}>
          {index + 1}. {step.command} {step.direction}
        </p>
        <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: 'var(--primitive-base-black)' }}>{step.street}</p>
      </div>
    </div>
  )
}

// Desktop replaces the mobile floating dialogs with a single persistent
// panel that merges the route summary, turn-by-turn preview, and action
// row into one flow: Start Route first reveals the turns (not started
// yet), a second press actually starts the route.
function DesktopRoutePanel({ route, showDetails, onBack, onReveal, onStart, onEnd, onSave, onToggleOverlays, onMarkHazard }) {
  const started = Boolean(route?.started)
  const showTurns = showDetails || started

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: DESKTOP_PANEL_WIDTH,
        background: 'var(--primitive-blue-100)',
        boxShadow: '2px 0 8px rgba(0,0,0,.15)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10,
      }}
    >
      <div
        style={{
          flexShrink: 0,
          padding: 'var(--spacing-medium) var(--spacing-large) 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-medium)',
        }}
      >
        <Header variant="main" />
        <button
          type="button"
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--primitive-blue-400)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-small)',
            fontFamily: 'var(--font-lexend)',
            fontWeight: 700,
            fontSize: 18,
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <svg width="16" height="16" fill="none" stroke="var(--primitive-blue-400)" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Choose New Route
        </button>
        <hr className="eg-divider-h" style={{ margin: 0 }} />
      </div>

      {route && (
        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            padding: '0 var(--spacing-large) var(--spacing-large)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-medium)',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: 'var(--font-lexend)',
              fontWeight: 700,
              fontSize: 28,
              color: 'var(--primitive-base-black)',
            }}
          >
            Current Route
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--primitive-base-black)' }}>
              <FontAwesomeIcon icon={faLocationDot} style={{ color: 'var(--primitive-blue-400)' }} /> {route.origin}
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--primitive-base-black)' }}>
              <FontAwesomeIcon icon={faMapPin} style={{ color: 'var(--primitive-blue-400)' }} /> {route.destination}
            </div>
          </div>

          {showTurns && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {TURN_STEPS.map((step, i) => (
                <DesktopTurnStep key={i} step={step} index={i} active={started && i === 0} />
              ))}
            </div>
          )}

          {started ? (
            <button type="button" className="eg-btn eg-btn-primary eg-btn-primary-size" style={{ width: '100%' }} onClick={onEnd}>
              End Route
            </button>
          ) : (
            <button
              type="button"
              className="eg-btn eg-btn-primary eg-btn-primary-size"
              style={{ width: '100%' }}
              onClick={showDetails ? onStart : onReveal}
            >
              <FontAwesomeIcon icon={faPlay} /> Start Route
            </button>
          )}

          {(!showDetails || started) && (
            <>
              <hr className="eg-divider-h" style={{ margin: 0 }} />
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <RouteActionButton icon={faStar} label="Save Route" onClick={onSave} />
                <RouteActionButton icon={faEye} label="View Overlays" onClick={onToggleOverlays} />
                <RouteActionButton icon={faTriangleExclamation} label="Mark Hazard" onClick={onMarkHazard} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

function OverlayLayersPanel({ isDesktop, layers, onToggle, onClose }) {
  const ROWS = [
    ['steepness', 'Steepness'],
    ['trafficSignal', 'Traffic Signal'],
    ['accessibleCrosswalk', 'Accessible Crosswalk'],
    ['wheelchair', 'Wheelchair'],
    ['construction', 'Construction'],
  ]
  return (
    <div
      style={{
        position: 'absolute',
        bottom: isDesktop ? 16 : 96,
        left: isDesktop ? DESKTOP_PANEL_WIDTH + 16 : 16,
        zIndex: 20,
        background: 'white',
        border: '1px solid var(--primitive-blue-400)',
        borderRadius: 'var(--radius-medium)',
        padding: 'var(--spacing-medium)',
        boxShadow: '0 4px 12px rgba(0,0,0,.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <strong>Map Layers</strong>
        <button
          type="button"
          aria-label="Close layers panel"
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16 }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      {ROWS.map(([key, label]) => (
        <CheckRow key={key} label={label} checked={layers[key]} onChange={() => onToggle(key)} />
      ))}
    </div>
  )
}

function MarkHazardModal({ isDesktop, onCancel, onSubmit }) {
  const [type, setType] = useState(null)
  const [description, setDescription] = useState('')
  const ready = type && description.trim().length > 0

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(17,17,17,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
      }}
    >
      <div
        style={{
          background: 'white',
          border: '1px solid var(--primitive-blue-400)',
          borderRadius: 'var(--radius-large)',
          padding: 'var(--spacing-medium)',
          width: isDesktop ? '40%' : 320,
          minWidth: isDesktop ? 320 : undefined,
          maxWidth: isDesktop ? 480 : undefined,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-medium)',
        }}
      >
        <h2 style={{ margin: 0, textAlign: 'center', fontSize: 20 }}>Mark hazard on route</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>Type of hazard (Required)</p>
          <label style={{ display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
            <input type="radio" name="hazard-type" checked={type === 'cannot'} onChange={() => setType('cannot')} />
            <MapMarker type="hazard-stop" style={{ position: 'static' }} />I cannot get past hazard
          </label>
          <label style={{ display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
            <input type="radio" name="hazard-type" checked={type === 'can'} onChange={() => setType('can')} />
            <MapMarker type="hazard-warn" style={{ position: 'static' }} />I can continue past
          </label>

          <p style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>Describe your hazard (Required)</p>
          <textarea
            className="eg-textarea"
            placeholder="Placeholder text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: 11 }}>
          <button type="button" className="eg-btn eg-btn-secondary eg-btn-primary-size" style={{ flex: 1 }} onClick={onCancel}>
            Cancel
          </button>
          <button
            type="button"
            className={`eg-btn ${ready ? 'eg-btn-primary' : 'eg-btn-disabled'} eg-btn-primary-size`}
            style={{ flex: 1 }}
            disabled={!ready}
            onClick={() => onSubmit({ type: type === 'cannot' ? 'hazard-stop' : 'hazard-warn', description })}
          >
            Mark Hazard
          </button>
        </div>
      </div>
    </div>
  )
}

function ViewHazardDialog({ isDesktop, hazard, onClose, onResolve }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(17,17,17,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
      }}
    >
      <div
        style={{
          background: 'white',
          border: '1px solid var(--primitive-blue-400)',
          borderRadius: 'var(--radius-large)',
          padding: 'var(--spacing-medium)',
          width: isDesktop ? '40%' : 320,
          minWidth: isDesktop ? 320 : undefined,
          maxWidth: isDesktop ? 480 : undefined,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-medium)',
        }}
      >
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
          <MapMarker type={hazard.type} style={{ position: 'static' }} />
          <h2 style={{ margin: 0, fontSize: 20 }}>
            {hazard.type === 'hazard-stop' ? 'Inaccessible hazard' : 'Hazard warning'}
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: 14 }}>{hazard.description}</p>
        <div style={{ display: 'flex', gap: 8 }}>
          {!hazard.resolved && (
            <button type="button" className="eg-btn eg-btn-secondary eg-btn-small-size" onClick={() => onResolve(hazard.id)}>
              Mark resolved
            </button>
          )}
          <button type="button" className="eg-btn eg-btn-primary eg-btn-small-size" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

function SaveRouteModal({ isDesktop, route, onCancel, onSave }) {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')

  if (step === 2) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(17,17,17,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
        }}
      >
        <div
          style={{
            background: 'white',
            border: '1px solid var(--primitive-blue-400)',
            borderRadius: 'var(--radius-large)',
            padding: 'var(--spacing-medium)',
            width: isDesktop ? '90%' : 320,
            maxWidth: isDesktop ? 408 : 320,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-medium)',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>
            <FontAwesomeIcon icon={faStar} /> Route saved!
          </h2>
          <p style={{ margin: 0 }}>“{name || route.destination}” was added to My Saved Routes.</p>
          <button type="button" className="eg-btn eg-btn-primary eg-btn-primary-size" onClick={onCancel}>
            Done
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(17,17,17,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
      }}
    >
      <div
        style={{
          background: 'white',
          border: '1px solid var(--primitive-blue-400)',
          borderRadius: 'var(--radius-large)',
          padding: 'var(--spacing-medium)',
          width: isDesktop ? '90%' : 320,
          maxWidth: isDesktop ? 408 : 320,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-medium)',
        }}
      >
        <h2 style={{ margin: 0, textAlign: 'center', fontSize: 20 }}>Save this route</h2>
        <div className="eg-input-wrap">
          <label className="eg-input-label" htmlFor="route-name">
            Name (optional)
          </label>
          <input
            className="eg-input"
            id="route-name"
            placeholder={route.destination}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', gap: 11 }}>
          <button type="button" className="eg-btn eg-btn-secondary eg-btn-primary-size" style={{ flex: 1 }} onClick={onCancel}>
            Cancel
          </button>
          <button
            type="button"
            className="eg-btn eg-btn-primary eg-btn-primary-size"
            style={{ flex: 1 }}
            onClick={() => {
              onSave(name)
              setStep(2)
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

function RouteView() {
  const navigate = useNavigate()
  const isDesktop = useIsDesktop()
  const { state, actions } = useAppState()
  const { currentRoute: route, hazards } = state

  const [showDetails, setShowDetails] = useState(false)
  const [showOverlayPanel, setShowOverlayPanel] = useState(false)
  const [showMarkHazard, setShowMarkHazard] = useState(false)
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [viewingHazardId, setViewingHazardId] = useState(null)
  const [layers, setLayers] = useState({
    steepness: false,
    trafficSignal: false,
    accessibleCrosswalk: false,
    wheelchair: false,
    construction: false,
  })

  const viewingHazard = hazards.find((h) => h.id === viewingHazardId)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: isDesktop ? 'none' : 430,
        margin: '0 auto',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${import.meta.env.BASE_URL}map-image-for-prototype.png.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {route && (
        <>
          <MapMarker type="route-end" style={{ top: START_POS.top, left: START_POS.left }} label="Route start" />
          <MapMarker type="route-end" style={{ top: END_POS.top, left: END_POS.left }} label="Route end" />
          <MapMarker type="location" style={{ top: MY_LOCATION_POS.top, left: MY_LOCATION_POS.left }} label="My location" />
        </>
      )}

      {hazards.map((h) => (
        <MapMarker
          key={h.id}
          type={h.type}
          style={{ top: `${h.y}%`, left: `${h.x}%`, opacity: h.resolved ? 0.4 : 1 }}
          label={h.description}
          onClick={() => setViewingHazardId(h.id)}
        />
      ))}

      {isDesktop ? (
        <DesktopRoutePanel
          route={route}
          showDetails={showDetails}
          onBack={() => {
            setShowDetails(false)
            navigate('/new-route')
          }}
          onReveal={() => setShowDetails(true)}
          onStart={() => actions.setCurrentRoute({ ...route, started: true })}
          onEnd={() => {
            actions.setCurrentRoute({ ...route, started: false })
            setShowDetails(false)
          }}
          onSave={() => setShowSaveModal(true)}
          onToggleOverlays={() => setShowOverlayPanel((v) => !v)}
          onMarkHazard={() => setShowMarkHazard(true)}
        />
      ) : showDetails && route ? (
        <RouteDetailsOverlay
          onBack={() => setShowDetails(false)}
          onStart={() => {
            actions.setCurrentRoute({ ...route, started: true })
            setShowDetails(false)
          }}
        />
      ) : (
        <RouteDialog
          route={route}
          onBack={() => navigate('/new-route')}
          onShowDetails={() => setShowDetails(true)}
          onStart={() => actions.setCurrentRoute({ ...route, started: true })}
          onEnd={() => actions.setCurrentRoute({ ...route, started: false })}
        />
      )}

      {showOverlayPanel && (
        <OverlayLayersPanel
          isDesktop={isDesktop}
          layers={layers}
          onToggle={(key) => setLayers((l) => ({ ...l, [key]: !l[key] }))}
          onClose={() => setShowOverlayPanel(false)}
        />
      )}

      {!isDesktop && route && !showDetails && (
        <button
          type="button"
          aria-label="Save this route"
          onClick={() => setShowSaveModal(true)}
          style={{
            position: 'absolute',
            bottom: 120,
            right: 16,
            width: 48,
            height: 48,
            borderRadius: 'var(--radius-large)',
            background: 'var(--primitive-green-300)',
            border: '1px solid white',
            color: 'white',
            fontSize: 20,
            cursor: 'pointer',
            boxShadow: '0 0 2px rgba(0,0,0,.5)',
          }}
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
      )}

      {!isDesktop && !showDetails && (
        <MapFooter>
          {route && (
            <button
              type="button"
              className="eg-btn eg-btn-primary-size"
              style={{ flex: 1, background: 'var(--primitive-yellow-300)', borderColor: 'white', color: '#3b3a3a' }}
              onClick={() => setShowMarkHazard(true)}
            >
              <FontAwesomeIcon icon={faTriangleExclamation} /> Mark Hazard
            </button>
          )}
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault()
              setShowOverlayPanel((v) => !v)
            }}
            className="eg-btn eg-btn-primary eg-btn-primary-size"
            style={{ flex: 1, textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faEye} /> View Overlays
          </Link>
        </MapFooter>
      )}

      {showMarkHazard && (
        <MarkHazardModal
          isDesktop={isDesktop}
          onCancel={() => setShowMarkHazard(false)}
          onSubmit={({ type, description }) => {
            actions.addHazard({ type, description, x: 40 + Math.random() * 20, y: 40 + Math.random() * 20 })
            setShowMarkHazard(false)
          }}
        />
      )}

      {viewingHazard && (
        <ViewHazardDialog
          isDesktop={isDesktop}
          hazard={viewingHazard}
          onClose={() => setViewingHazardId(null)}
          onResolve={(id) => {
            actions.resolveHazard(id)
            setViewingHazardId(null)
          }}
        />
      )}

      {showSaveModal && route && (
        <SaveRouteModal
          isDesktop={isDesktop}
          route={route}
          onCancel={() => setShowSaveModal(false)}
          onSave={(name) => {
            actions.addSavedRoute({
              type: name ? 'named' : 'address',
              icon: name ? 'star' : 'pin',
              name: name || route.destination,
              address: name ? route.destination : 'Saved route',
            })
          }}
        />
      )}
    </div>
  )
}

export default RouteView
