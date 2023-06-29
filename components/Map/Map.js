import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import styles from 'components/Map/index.module.css'

export default function Map({ center, zoom, children, events }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAmtciwILxeaNUVQFzaBaj3MBNaolVz7gc',
  })
  const position = {
    lat: -38.041043,
    lng: -57.559592,
  }
  const position2 = {
    lat: -38.021849,
    lng: -57.553437,
  }
  const position3 = {
    lat: -38.02735,
    lng: -57.540467,
  }

  return (
    <div className={styles.map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={position}
          zoom={10}
        >
          <Marker icon={'/images/marker-ruta.svg'} position={position} />
          <Marker icon={'/images/marker-ruta.svg'} position={position2} />
          <Marker icon={'/images/marker-ruta.svg'} position={position3} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}
