const VAR_BY_TYPE = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  hazard: 'hazard',
  error: 'error',
}

function Tooltip({ type = 'primary', children }) {
  const key = VAR_BY_TYPE[type] ?? 'primary'
  return (
    <div className="eg-tooltip-wrap">
      <div className="eg-tooltip-body" style={{ background: `var(--color-tooltip-bg-${key})` }}>
        <div className="eg-tooltip-content" style={{ color: `var(--color-tooltip-text-${key})` }}>
          {children}
        </div>
      </div>
      <div
        className="eg-tooltip-tip"
        style={{ borderTop: `8px solid var(--color-tooltip-bg-${key})` }}
      />
    </div>
  )
}

export default Tooltip
