import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs, faStar, faCircleQuestion, faCircleInfo, faGear } from '@fortawesome/free-solid-svg-icons'

const NAV_ITEMS = [
  { to: '/new-route', icon: faLocationCrosshairs, label: 'New Route' },
  { to: '/saved-routes', icon: faStar, label: 'My Saved Routes' },
  { to: '/agency', icon: faCircleQuestion, label: 'Agency Resources' },
  { to: '/a11y-info', icon: faCircleInfo, label: 'Accessibility Info' },
  { to: '/settings', icon: faGear, label: 'Settings' },
]

function Nav({ excludeNewRoute = false }) {
  const items = excludeNewRoute ? NAV_ITEMS.filter((item) => item.to !== '/new-route') : NAV_ITEMS

  return (
    <nav className="eg-nav" aria-label="Main navigation">
      {items.map((item) => (
        <Link key={item.to} className="eg-nav-item" to={item.to}>
          <div className="eg-nav-icon" aria-hidden="true">
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <span className="eg-nav-label">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
