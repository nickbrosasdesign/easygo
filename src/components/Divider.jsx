function Divider({ orientation = 'horizontal', variant = 'primary', style }) {
  const colorVar = `var(--color-divider-${variant})`
  if (orientation === 'vertical') {
    return <div className="eg-divider-v" style={{ background: colorVar, ...style }} />
  }
  return <hr className="eg-divider-h" style={{ background: colorVar, ...style }} />
}

export default Divider
