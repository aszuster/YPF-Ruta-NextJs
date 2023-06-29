import Image from 'next/image'
import styles from './index.module.css'

const Features = () => {
  return (
    <section className={`section ${styles.section__main_features}`}>
      <h2 className={`${styles.main_features__title} text text--h1`}>
        Principales características
      </h2>
      <ul className={`${styles.main_features__list} ${styles.feature_list}`}>
        <li className={styles.feature_list__item}>
          <Image
            src="/images/icons/dark/icon--gas.svg"
            alt="Productos"
            title="Productos"
            className={styles.feature__icon}
            width={90}
            height={90}
          />
          <h3 className={`${styles.feature__title} text text--h5`}>
            Comprá todo lo que necesitás
          </h3>
          <p className={`${styles.feature__description} text text--body-01`}>
            Máxima calidad de productos y el mejor servicio con la red de
            estaciones más grande del país.
          </p>
        </li>
        <li className={styles.feature_list__item}>
          <Image
            src="/images/icons/dark/icon--truck.svg"
            alt="Gestión de flota"
            title="Gestión de flota"
            className={styles.feature__icon}
            width={90}
            height={90}
          />
          <h3 className={`${styles.feature__title} text text--h5`}>
            Gestioná tu flota online:
          </h3>
          <p className={`${styles.feature__description} text text--body-01`}>
            Seguí en tiempo real la ubicación y recorridos de tus vehículos.
            Además compartí los viajes con tus clientes.
          </p>
        </li>
        <li className={styles.feature_list__item}>
          <Image
            src="/images/icons/dark/icon--bars.svg"
            alt="Control de operaciones"
            title="Control de operaciones"
            className={styles.feature__icon}
            width={90}
            height={90}
          />
          <h3 className={`${styles.feature__title} text text--h5`}>
            Controlá tus operaciones:
          </h3>
          <p className={`${styles.feature__description} text text--body-01`}>
            Cumplimiento de visitas, horarios de entrega, reglas, eventos y
            alertas en una sola plataforma.
          </p>
        </li>
        <li className={styles.feature_list__item}>
          <Image
            src="/images/icons/dark/icon--map.svg"
            alt="Optimización de rutas"
            title="Optimización de rutas"
            className={styles.feature__icon}
            width={90}
            height={90}
          />
          <h3 className={`${styles.feature__title} text text--h5`}>
            Optimizá las rutas de tus vehículos:
          </h3>
          <p className={`${styles.feature__description} text text--body-01`}>
            Planificá recorridos, verificá el tráfico, configurá zonas, paradas
            y estima tiempos de entrega.
          </p>
        </li>
        <li className={styles.feature_list__item}>
          <Image
            src="/images/icons/dark/icon--eye.svg"
            alt="Alertas de funcionamiento"
            title="Alertas de funcionamiento"
            className={styles.feature__icon}
            width={90}
            height={90}
          />
          <h3 className={`${styles.feature__title} text text--h5`}>
            Conocé el estado de tu flota:
          </h3>
          <p className={`${styles.feature__description} text text--body-01`}>
            Obtené alertas de funcionamiento de los vehículos, mantenimiento,
            vencimientos de documentación, control de la cadena de frío,
            apertura de puertas y estado de la carga.
          </p>
        </li>
        <li className={styles.feature_list__item}>
          <Image
            src="/images/icons/dark/icon--tool.svg"
            alt="Prevención de accidentes"
            title="Prevención de accidentes"
            className={styles.feature__icon}
            width={90}
            height={90}
          />
          <h3 className={`${styles.feature__title} text text--h5`}>
            Prevení accidentes:
          </h3>
          <p className={`${styles.feature__description} text text--body-01`}>
            Generá buenos hábitos para lograr una conducción segura, económica y
            amigable con los vehículos.
          </p>
        </li>
        <li className={styles.feature_list__item}>
          <Image
            src="/images/icons/dark/icon--price-tag.svg"
            alt="Control de costos"
            title="Control de costos"
            className={styles.feature__icon}
            width={90}
            height={90}
          />
          <h3 className={`${styles.feature__title} text text--h5`}>
            Controlá tus costos:
          </h3>
          <p className={`${styles.feature__description} text text--body-01`}>
            Reglas de compra, facturación unificada y detalle de consumos.
          </p>
        </li>
        <li className={styles.feature_list__item}>
          <Image
            src="/images/icons/dark/icon--board.svg"
            alt="Servicios en Ruta"
            title="Servicios en Ruta"
            className={styles.feature__icon}
            width={90}
            height={90}
          />
          <h3 className={`${styles.feature__title} text text--h5`}>
            Servicios en ruta
          </h3>
          <p className={`${styles.feature__description} text text--body-01`}>
            Tus conductores cuentan con servicios sin cargo de asistencia vial,
            médica, de hogar y ante robos, para que tengan un viaje más seguro y
            tranquilo.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Features
