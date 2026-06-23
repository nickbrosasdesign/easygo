function Toggle({ checked, onChange, disabled = false, label }) {
  return (
    <button
      type="button"
      className={['eg-toggle-v2', checked ? 'eg-toggle-v2--on' : '', disabled ? 'eg-toggle-v2--disabled' : '']
        .filter(Boolean)
        .join(' ')}
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
    >
      <span className="eg-toggle-v2-label eg-toggle-v2-label--off">OFF</span>
      <span className="eg-toggle-v2-knob" />
      <span className="eg-toggle-v2-label eg-toggle-v2-label--on">ON</span>
    </button>
  )
}

export default Toggle
