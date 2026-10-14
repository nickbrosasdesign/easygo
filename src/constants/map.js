// Shared across every screen that renders a MapLibreMap backdrop (Home,
// AppShell's desktop map pane, RouteView) so they all center/bound to the
// same Seattle view instead of drifting out of sync.
export const SEATTLE_CENTER = { lat: 47.6232, lng: -122.3548 }
export const SEATTLE_BOUNDS = [
  [-122.46, 47.49],
  [-122.22, 47.73],
]

export const hasMapKey = Boolean(import.meta.env.VITE_MAPTILER_KEY)
