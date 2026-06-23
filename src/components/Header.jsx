import { useNavigate } from 'react-router-dom'

function Header({ variant = 'main', title, onBack, children }) {
  const navigate = useNavigate()

  if (variant === 'secondary') {
    return (
      <div className="eg-header-secondary" style={{ background: 'none', padding: '8px 0', width: '100%' }}>
        <a
          href="#"
          className="eg-header-back"
          aria-label="Go back"
          style={{ color: 'var(--primitive-blue-400)' }}
          onClick={(e) => {
            e.preventDefault()
            onBack ? onBack() : navigate(-1)
          }}
        >
          <svg width="16" height="16" fill="var(--primitive-blue-400)" viewBox="0 0 16 16">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
          Back
        </a>
        {title && <span className="eg-header-back-title" style={{ color: 'var(--primitive-blue-400)' }}>{title}</span>}
        <img src="/alt-logo.png" alt="EasyGo" className="eg-header-secondary-logo" />
      </div>
    )
  }

  return (
    <div className="eg-header-main">
      <img src="/logo-800-vector.png" alt="EasyGo logo" className="eg-header-main-logo" />
      {children}
    </div>
  )
}

export default Header
