import Header from '../components/Header'
import ExpandableCard from '../components/ExpandableCard'

const ITEMS = [
  {
    title: 'How this app was built and the resources used',
    body: 'EasyGo was designed from primary user interviews and secondary research on accessible navigation, focusing on low cognitive load, real-time hazard reporting, and Lexend typography for readability.',
  },
  {
    title: 'Steep Streets Seattle',
    body: "Visualizes Seattle's street grades to help identify steep routes that may be difficult to navigate for wheelchair users.",
    link: 'https://joeyklee.github.io/seattle-steepest-streets/',
  },
  {
    title: 'wheelmap.org',
    body: 'A community-maintained map of wheelchair-accessible places built on OpenStreetMap.',
    link: 'https://wheelmap.org/',
  },
  {
    title: 'accessmap.app',
    body: 'A Seattle-focused route planner with sidewalk grade, curb ramp, and construction data for wheelchair users.',
    link: 'https://www.accessmap.app/',
  },
  {
    title: 'OpenStreetMaps',
    body: 'The open, community-edited map data that powers many accessibility-focused mapping tools, including EasyGo.',
    link: 'https://www.openstreetmap.org/',
  },
  {
    title: 'Seattle Accessible Route Planner',
    body: 'A City of Seattle GIS tool with sidewalk, wheelchair, and public transit layers for route planning.',
    link: 'https://experience.arcgis.com/',
  },
  {
    title: 'accessibility.cloud',
    body: 'An open dataset of accessibility information for places, contributed to and used by accessibility apps worldwide.',
    link: 'https://www.accessibility.cloud/',
  },
]

function A11yInfo() {
  return (
    <div
      style={{
        maxWidth: 430,
        margin: '0 auto',
        minHeight: '100vh',
        background: 'var(--primitive-blue-100)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-medium)',
        padding: '48px var(--spacing-large) var(--spacing-large)',
      }}
    >
      <Header variant="secondary" />
      <h1 className="eg-screen-title">Accessibility Info</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-large)' }}>
        {ITEMS.map((item) => (
          <ExpandableCard key={item.title} title={item.title}>
            <p>{item.body}</p>
            {item.link && (
              <a href={item.link} className="eg-card-link" target="_blank" rel="noreferrer">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                {item.link}
              </a>
            )}
          </ExpandableCard>
        ))}
      </div>
    </div>
  )
}

export default A11yInfo
