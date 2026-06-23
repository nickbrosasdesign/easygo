function Button({
  variant = 'primary',
  size = 'primary',
  icon = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const variantClass = disabled ? 'eg-btn-disabled' : `eg-btn-${variant}`
  const sizeClass = size === 'small' ? 'eg-btn-small-size' : 'eg-btn-primary-size'
  const classes = ['eg-btn', variantClass, sizeClass, icon ? 'eg-btn-icon' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}

export default Button
