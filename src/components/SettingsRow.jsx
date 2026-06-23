import Toggle from './Toggle'

function SettingsRow({ title, sub, type = 'toggle', checked, onChange, onClick }) {
  if (type === 'new-page') {
    return (
      <div
        className="eg-setting-toggle-row"
        style={{ cursor: 'pointer' }}
        tabIndex={0}
        role="button"
        aria-label={`Navigate to ${title}`}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick?.()
          }
        }}
      >
        <div className="eg-setting-info">
          <div className="eg-setting-title">{title}</div>
          {sub && <div className="eg-setting-sub">{sub}</div>}
        </div>
        <svg width="20" height="20" fill="none" stroke="#005299" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    )
  }

  return (
    <div className="eg-setting-toggle-row">
      <div className="eg-setting-info">
        <div className="eg-setting-title">{title}</div>
        {sub && <div className="eg-setting-sub">{sub}</div>}
      </div>
      <Toggle checked={checked} onChange={onChange} label={`Toggle ${title}`} />
    </div>
  )
}

export default SettingsRow
