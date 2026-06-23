import { Link } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/new-route', icon: '⊕', label: 'New Route' },
  { to: '/saved-routes', icon: '★', label: 'My Saved Routes' },
  { to: '/agency', icon: '?', label: 'Agency Resources' },
  { to: '/a11y-info', icon: 'ℹ', label: 'Accessibility Info' },
  { to: '/settings', icon: '⚙', label: 'Settings' },
]

function Nav({ excludeNewRoute = false }) {
  const items = excludeNewRoute ? NAV_ITEMS.filter((item) => item.to !== '/new-route') : NAV_ITEMS

  return (
    <nav className="eg-nav" aria-label="Main navigation">
      {items.map((item) => (
        <Link key={item.to} className="eg-nav-item" to={item.to}>
          <div className="eg-nav-icon" aria-hidden="true">
            {item.icon}
          </div>
          <span className="eg-nav-label">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
