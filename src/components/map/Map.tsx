import React from 'react'

import L from 'leaflet'
import { Popup } from 'react-leaflet'
import { Marker } from 'react-leaflet/Marker'
import { TileLayer } from 'react-leaflet/TileLayer'
import { MapContainer } from 'react-leaflet/MapContainer'

import 'leaflet/dist/leaflet.css'

import { MARKER } from '@/components/icons/Icons.component'

const lat = 9.727795
const long = -13.437069

const MarkerIcon = L.icon({
  iconUrl: MARKER,
  iconSize: [40, 40],
  iconAnchor: [12, 12],
  popupAnchor: [0, 0],
})

const Map: React.FC = () => {
  return (
    <MapContainer
      center={[lat, long]}
      zoom={11}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]} icon={MarkerIcon}>
        <Popup>👋️ Hello World.</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
