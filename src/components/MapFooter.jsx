function MapFooter({ collapsed = false, children, minHeight }) {
  if (collapsed) return null

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        minHeight,
        background: 'var(--primitive-blue-400)',
        boxShadow: '0px -4px 8px rgba(0,0,0,0.25)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-medium)',
        padding: 'var(--spacing-small) var(--spacing-large) var(--spacing-large)',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  )
}

export default MapFooter
