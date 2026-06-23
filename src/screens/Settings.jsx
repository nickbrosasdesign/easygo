import Header from '../components/Header'
import { useAppState } from '../state/AppStateContext'

function Settings() {
  const { state, actions } = useAppState()
  const { settings } = state

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
      <h1 className="eg-screen-title">Settings</h1>

      <h2 style={{ textAlign: 'center' }}>My Account</h2>
      {settings.accountConnected ? (
        <>
          <h3 style={{ textAlign: 'center', fontWeight: 400 }}>{settings.accountEmail}</h3>
          <button
            type="button"
            className="eg-btn eg-btn-small-size"
            style={{
              alignSelf: 'center',
              background: 'white',
              border: '1px solid var(--primitive-red-300)',
              color: 'var(--primitive-red-300)',
            }}
            onClick={actions.disconnectAccount}
          >
            Delete Account
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="eg-btn eg-btn-primary eg-btn-primary-size"
            style={{ alignSelf: 'flex-start' }}
            onClick={() => actions.connectAccount('nbrosas@gmail.com')}
          >
            👤 Create Account
          </button>
          <p style={{ textAlign: 'center', fontSize: 14 }}>Create account to link saved routes across devices</p>
        </>
      )}

      <h2 style={{ textAlign: 'center' }}>Profile</h2>
      <h3 style={{ textAlign: 'center', fontWeight: 400 }}>Name</h3>
      <input
        className="eg-input"
        placeholder="Enter name"
        value={settings.profileName}
        onChange={(e) => actions.updateProfile('profileName', e.target.value)}
      />

      <h3 style={{ textAlign: 'center', fontWeight: 400 }}>Home Address</h3>
      <input
        className="eg-input"
        placeholder="Enter home address"
        value={settings.profileAddress}
        onChange={(e) => actions.updateProfile('profileAddress', e.target.value)}
      />
    </div>
  )
}

export default Settings
