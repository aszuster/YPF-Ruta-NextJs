import Script from 'next/script'
import styles from './index.module.css'

const Mapa = () => {
  return (
    <>
      <div className={styles.presence__map_container}>
        <div id="map" className={styles.presence__map}></div>
      </div>
    </>
  )
}

export default Mapa
