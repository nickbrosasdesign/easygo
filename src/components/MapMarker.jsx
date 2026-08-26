import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faTriangleExclamation, faTrafficLight, faWheelchair } from '@fortawesome/free-solid-svg-icons'

const ICON_BY_TYPE = {
  'route-end': faCircle,
  'hazard-warn': faTriangleExclamation,
  traffic: faTrafficLight,
  crosswalk: faWheelchair,
}

const TEXT_BY_TYPE = {
  'hazard-stop': 'STOP',
  location: '',
}

function MapMarker({ type, count, onClick, style, label }) {
  const icon = ICON_BY_TYPE[type]
  const text = type === 'multiple' && count ? `${count}+` : TEXT_BY_TYPE[type]

  return (
    <button
      type="button"
      className="eg-marker"
      style={{ position: 'absolute', background: 'none', border: 'none', padding: 0, ...style }}
      onClick={onClick}
      aria-label={label || type}
    >
      <div className={`eg-marker-pin eg-marker-${type}`}>
        {icon ? <FontAwesomeIcon icon={icon} /> : text}
      </div>
    </button>
  )
}

export default MapMarker
