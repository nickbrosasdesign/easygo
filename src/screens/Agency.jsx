import Header from '../components/Header'
import ExpandableCard from '../components/ExpandableCard'

const AGENCIES = [
  {
    title: 'American Disability Act',
    blurb: 'The ADA lorem ipsum. Two sentence blurb that tells how this resource can be used.',
    phone: '206-555-4646',
    link: 'http://www.ada.gov',
  },
  {
    title: 'Department of Health and Social Services',
    blurb: 'The DOH lorem ipsum. Two sentence blurb that tells how this resource can be used.',
    phone: '206-555-1111',
    link: 'http://www.dohsss.wa.gov',
  },
  {
    title: 'Seattle.gov Accessible Route Planner Info',
    blurb: 'The Seattle.gov Accessible Route Planner lorem ipsum. Two sentence blurb that tells how this resource can be used.',
    phone: '206-555-1111',
    link: 'http://www.seattle.gov',
  },
  {
    title: 'Seattle.gov ADA Request',
    blurb: 'The Seattle ADA Request lorem ipsum. Two sentence blurb that tells how this resource can be used.',
    phone: '206-555-1111',
    link: 'http://www.seattle.gov',
  },
  {
    title: 'Google maps accessibility info',
    blurb: 'Google maps accessibility lorem ipsum. Two sentence blurb that tells how this resource can be used.',
    phone: '206-555-1111',
    link: 'http://www.google.com',
  },
]

function Agency() {
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
      <h1 className="eg-screen-title">Agency Resources</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-medium)' }}>
        {AGENCIES.map((agency) => (
          <ExpandableCard key={agency.title} title={agency.title}>
            <p>{agency.blurb}</p>
            <div className="eg-card-heading">{agency.phone}</div>
            <a href={agency.link} className="eg-card-link" target="_blank" rel="noreferrer">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              {agency.link}
            </a>
            <div className="eg-card-heading" style={{ fontSize: 16, lineHeight: 1.6 }}>
              Local Office
              <br />
              4509 Main St.
              <br />
              Seattle WA 98111
            </div>
          </ExpandableCard>
        ))}
      </div>
    </div>
  )
}

export default Agency
