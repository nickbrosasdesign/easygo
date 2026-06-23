import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'easygo-state-v1'

const defaultState = {
  savedRoutes: [
    { id: 's1', type: 'named', icon: '★', name: 'Home', address: '1234 Pine St, Seattle WA 98101' },
    { id: 's2', type: 'named', icon: '★', name: 'Work', address: '500 5th Ave, Seattle WA 98104' },
    { id: 's3', type: 'address', icon: '📍', name: '1112 Pike St, Seattle WA 98122', address: 'Saved route' },
    { id: 's4', type: 'named', icon: '★', name: "Mom's House", address: '88 NW 60th St, Seattle WA 98107' },
    { id: 's5', type: 'address', icon: '📍', name: '901 5th Ave, Seattle WA 98164', address: 'Saved route' },
    { id: 's6', type: 'named', icon: '★', name: 'Gym', address: '2200 6th Ave, Seattle WA 98121' },
    { id: 's7', type: 'address', icon: '📍', name: '4300 University Way NE, Seattle WA 98105', address: 'Saved route' },
  ],
  settings: {
    accountConnected: false,
    accountEmail: '',
    profileName: '',
    profileAddress: '',
    preferences: {
      accessibleCrosswalks: true,
      avoidConstruction: true,
      preferLowGrade: false,
    },
  },
  hazards: [
    { id: 'h1', x: 38, y: 44, type: 'hazard-stop', description: 'Sidewalk closed for construction', resolved: false },
    { id: 'h2', x: 62, y: 58, type: 'hazard-warn', description: 'Raised crack from tree root damage', resolved: false },
  ],
  currentRoute: null,
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    return { ...defaultState, ...JSON.parse(raw) }
  } catch {
    return defaultState
  }
}

const AppStateContextValue = createContext(null)

export function AppStateProvider({ children }) {
  const [state, setState] = useState(loadState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const actions = {
    setCurrentRoute(route) {
      setState((s) => ({ ...s, currentRoute: route }))
    },
    clearCurrentRoute() {
      setState((s) => ({ ...s, currentRoute: null }))
    },
    addSavedRoute(route) {
      setState((s) => ({
        ...s,
        savedRoutes: [{ id: `s${Date.now()}`, ...route }, ...s.savedRoutes],
      }))
    },
    removeSavedRoute(id) {
      setState((s) => ({ ...s, savedRoutes: s.savedRoutes.filter((r) => r.id !== id) }))
    },
    updateProfile(key, value) {
      setState((s) => ({ ...s, settings: { ...s.settings, [key]: value } }))
    },
    updatePreference(key, value) {
      setState((s) => ({
        ...s,
        settings: { ...s.settings, preferences: { ...s.settings.preferences, [key]: value } },
      }))
    },
    connectAccount(email) {
      setState((s) => ({ ...s, settings: { ...s.settings, accountConnected: true, accountEmail: email } }))
    },
    disconnectAccount() {
      setState((s) => ({ ...s, settings: { ...s.settings, accountConnected: false, accountEmail: '' } }))
    },
    addHazard(hazard) {
      setState((s) => ({
        ...s,
        hazards: [...s.hazards, { id: `h${Date.now()}`, resolved: false, ...hazard }],
      }))
    },
    resolveHazard(id) {
      setState((s) => ({
        ...s,
        hazards: s.hazards.map((h) => (h.id === id ? { ...h, resolved: true } : h)),
      }))
    },
  }

  return <AppStateContextValue.Provider value={{ state, actions }}>{children}</AppStateContextValue.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppState() {
  const ctx = useContext(AppStateContextValue)
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider')
  return ctx
}
