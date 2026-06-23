import { useEffect, useRef, useState } from 'react'

function Select({ label, options, value, onChange, placeholder = 'Select an option', disabled = false }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    function onOutsideClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onOutsideClick)
    return () => document.removeEventListener('click', onOutsideClick)
  }, [])

  const selected = options.find((o) => o.value === value)

  if (disabled) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {label && <span className="eg-input-label">{label}</span>}
        <button className="eg-select-btn eg-select-btn--disabled" disabled aria-disabled="true">
          <span className="eg-select-btn-text">{placeholder}</span>
          <svg width="16" height="16" fill="var(--primitive-grey-300)" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }} ref={wrapRef}>
      {label && <span className="eg-input-label">{label}</span>}
      <div className="eg-select-wrap" style={{ position: 'relative' }}>
        <button
          type="button"
          className="eg-select-btn"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="eg-select-btn-text">{selected ? selected.label : placeholder}</span>
          <svg width="16" height="16" fill="var(--primitive-blue-400)" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </button>
        {open && (
          <ul className="eg-select-list" role="listbox" aria-label={label || placeholder}>
            {options.map((o) => (
              <li
                key={o.value}
                className="eg-select-option"
                role="option"
                aria-selected={o.value === value}
                onClick={() => {
                  onChange?.(o.value)
                  setOpen(false)
                }}
              >
                {o.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Select
