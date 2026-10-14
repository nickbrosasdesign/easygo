import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import MapMarker from './MapMarker'

const MAP_STYLE_URL = `https://api.maptiler.com/maps/streets-v2/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`
const ROUTE_SOURCE_ID = 'eg-route'
const ROUTE_LAYER_ID = 'eg-route-line'
const ROUTE_LINE_COLOR = '#005299' // var(--primitive-blue-400) - MapLibre paint props can't read CSS custom properties

function routeToGeoJSON(route) {
  return {
    type: 'FeatureCollection',
    features:
      route.length > 1
        ? [
            {
              type: 'Feature',
              geometry: { type: 'LineString', coordinates: route.map((p) => [p.lng, p.lat]) },
              properties: {},
            },
          ]
        : [],
  }
}

// Thin MapLibre GL JS wrapper: owns the map instance's lifecycle, renders the
// route as a GeoJSON line layer, and mounts the existing MapMarker component
// into a maplibregl.Marker DOM element per marker (so pin styling/icons stay
// shared with the rest of the app instead of being reimplemented as a layer).
function MapLibreMap({ center, zoom, maxBounds, route = [], markers = [], interactive = true }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const markerInstancesRef = useRef([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP_STYLE_URL,
      center: [center.lng, center.lat],
      zoom,
      maxBounds,
      interactive,
    })
    mapRef.current = map
    map.on('load', () => setLoaded(true))

    return () => {
      map.remove()
      mapRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const resizeObserver = new ResizeObserver(() => mapRef.current?.resize())
    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !loaded) return
    const data = routeToGeoJSON(route)
    const source = map.getSource(ROUTE_SOURCE_ID)
    if (source) {
      source.setData(data)
    } else {
      map.addSource(ROUTE_SOURCE_ID, { type: 'geojson', data })
      map.addLayer({
        id: ROUTE_LAYER_ID,
        type: 'line',
        source: ROUTE_SOURCE_ID,
        paint: { 'line-color': ROUTE_LINE_COLOR, 'line-width': 6, 'line-cap': 'round' },
      })
    }
  }, [loaded, route])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !loaded) return

    markerInstancesRef.current.forEach(({ marker, root }) => {
      marker.remove()
      root.unmount()
    })

    markerInstancesRef.current = markers.map((m) => {
      const el = document.createElement('div')
      const root = createRoot(el)
      root.render(
        <MapMarker type={m.type} label={m.label} onClick={m.onClick} style={{ position: 'static', opacity: m.opacity ?? 1 }} />
      )
      const marker = new maplibregl.Marker({ element: el, anchor: 'center' }).setLngLat([m.lng, m.lat]).addTo(map)
      return { marker, root }
    })

    return () => {
      markerInstancesRef.current.forEach(({ marker, root }) => {
        marker.remove()
        root.unmount()
      })
      markerInstancesRef.current = []
    }
  }, [loaded, markers])

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0 }} />
}

export default MapLibreMap
