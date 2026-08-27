// Faux route line for the static prototype map: draws a polyline between
// percentage-based points (same coordinate space as MapMarker's top/left
// positions), styled to read as a routed path. Not tied to real geography -
// swap `points` for real routing/geocoding output when that lands.
function RoutePath({ points, color = 'var(--primitive-blue-400)', strokeWidth = 6 }) {
  const pointsAttr = points.map((p) => `${p.x},${p.y}`).join(' ')

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <polyline
        points={pointsAttr}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export default RoutePath
