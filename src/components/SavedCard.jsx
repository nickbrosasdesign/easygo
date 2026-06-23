function SavedCard({ variant = 'primary', icon = '★', name, address, onClick }) {
  return (
    <div
      className={['eg-saved-card', variant === 'secondary' ? 'secondary' : '']
        .filter(Boolean)
        .join(' ')}
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
    >
      <div className="eg-saved-card-icon">{icon}</div>
      <div className="eg-saved-card-info">
        <div className="eg-saved-card-name">{name}</div>
        <div className="eg-saved-card-address">{address}</div>
      </div>
      <svg
        width="20"
        height="20"
        fill="none"
        stroke={variant === 'secondary' ? 'white' : '#005299'}
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  )
}

export default SavedCard
