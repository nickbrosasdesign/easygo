const CONTENT_BY_TYPE = {
  'route-end': '●',
  'hazard-stop': 'STOP',
  'hazard-warn': '⚠',
  location: '',
  traffic: '🚦',
  crosswalk: '♿',
  multiple: '3+',
}

function MapMarker({ type, count, onClick, style, label }) {
  const content = type === 'multiple' && count ? `${count}+` : CONTENT_BY_TYPE[type]

  return (
    <button
      type="button"
      className="eg-marker"
      style={{ position: 'absolute', background: 'none', border: 'none', padding: 0, ...style }}
      onClick={onClick}
      aria-label={label || type}
    >
      <div className={`eg-marker-pin eg-marker-${type}`}>{content}</div>
    </button>
  )
}

export default MapMarker
