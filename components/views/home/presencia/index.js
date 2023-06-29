import styles from 'components/views/home/presencia/index.module.css'
import Map from 'components/Map/Map'
import Mapa from '../map'

const Presencia = () => {
  return (
    <>
      <section className={`section ${styles.section__presence}`}>
        <div className={`${styles.presence__map_container}`}>
          <div className={`${styles.presence__map}`}>
            <Map></Map>
          </div>
        </div>
        <div className={styles.presence__texts}>
          <h2 className={`${styles.presence__title} text text--h2`}>
            Presencia en todo el país
          </h2>
          <p className={`${styles.presence__text} text text--body-01`}>
            Contamos con estaciones de servicio en toda la Argentina para
            respaldarte estés donde estés.
          </p>
          {/* <a className="presence__link text text--body-01 link" target="_blank" href="https://www.ypf.com/productosyservicios/Paginas/EESS-YPF-Ruta.aspx">
            Buscar estaciones
            <svg className="link__arrow" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="link__arrow">
              <path d="M19.75 11.726h-15M13.7 5.7l6.05 6.024-6.05 6.025" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a> */}
        </div>
      </section>
    </>
  )
}

export default Presencia
