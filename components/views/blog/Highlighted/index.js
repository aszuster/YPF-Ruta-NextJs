import styles from './index.module.css'

const Highlighted = () => {
  return (
    <section v-if="hero" className={`section ${styles.section__hero}`}>
      <div className={styles.breadcrumbs}>
        <div className={`${styles.third} ${styles.text_center}`}>
          <h6 className={`${styles.azul} ${styles.upper} ${styles.din}`}>
            YPF Ruta Blog
          </h6>
        </div>
        <div className={styles.rest}>
          <h6
            className={`${styles.gris} ${styles.upper} ${styles.din} ${styles.negativo}`}
          >
            TECNOLOGÍA E INNOVACIÓN
          </h6>
        </div>
      </div>
      <div className={styles.contenido}>
        <div className={styles.third}>
          <img
            className={`${styles.block} ${styles.w_100}`}
            src="https://ruta.ypf.com/images/blog/list/images/telemetria-reduce-costos-y-mejora-la-productividad-.jpg"
          />
        </div>
        <div className={styles.rest}>
          <div>
            <h1
              className={`${styles.hero__title} ${styles.text} ${styles.medio}`}
            >
              Telemetría: reduce costos y mejora la productividad
            </h1>
            <p
              className={`${styles.hero__text} ${styles.text} ${styles.oscuro} ${styles.text__body_01b}`}
            >
              La telemetría es un sistema automatizado que permite recopilar
              datos en lugares remotos. Es la encargada de recoger información,
              procesarla y transmitirla hasta el lugar donde se monitorea el
              sistema.
            </p>
          </div>
          <div className={styles.between}>
            <p
              className={`${styles.hero__text} ${styles.text} ${styles.negro} ${styles.upper} text--body-04 ${styles.date}`}
            >
              AGOSTO, 2022
            </p>
            <a
              className={`button button--primary ${styles.no_round} ${styles.extended} ${styles.upper}`}
              href="https://ruta.ypf.com/telemetria-reduce-costos-y-mejora-la-productividad.html"
              rel="noreferrer"
            >
              Leer artículo&nbsp;&nbsp;&nbsp;
              <svg
                width="31"
                height="12"
                viewBox="0 0 31 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.4237 11.7362L30.0194 5.99992L29.0223 4.97769V4.91015H28.9564L24.4237 0.263672L22.948 1.5139L26.2611 4.91015L0.602539 4.91015L0.602539 6.76729L26.5756 6.76729L22.948 10.4859L24.4237 11.7362Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlighted
