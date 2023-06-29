import Link from 'next/link'
import Image from 'next/image'
import styles from './index.module.css'
import FormAdherirme from 'components/FormAdherirme/FormAdherirme'
import PlanesEmblaCarousel from 'components/carousel/pages/planes'

export default function Planesview() {
  return (
    <>
      <section className={`section ${styles.section__plans}`}>
        <h1 className={`${styles.plans__title} text text--h1`}>
          Planes para cada tipo de flota
        </h1>
        <p className={`${styles.plans__text} text text--body-01`}>
          Tenemos una solución integral para gestionar y optimizar tu flota.
        </p>
        <PlanesEmblaCarousel />
      </section>

      <section className={`section ${styles.section__ruta_contado}`}>
        <h2 className={`${styles.plans__title} text text--h2`}>
          Si tenés un vehículo de carga o pasajeros también podes obtener
          beneficios con YPF Ruta Contado.
        </h2>
        <div className={styles.ruta_contado__content_wrapper}>
          <div className={styles.ruta_contado__cards}>
            <div>
              <figure>
                <Image
                  src="/images/plans/tarjetas.png"
                  alt="Tarjetas"
                  title="Tarjetas"
                  width={419}
                  height={370}
                />
              </figure>
            </div>
          </div>
          <div className={styles.ruta_contado__texts}>
            <div className={styles.ruta_contado__texts_wrapper}>
              <h3 className={styles.title__highlighted}>
                ¿Qué es YPF Ruta Contado?
              </h3>
              <h4>
                Es la tarjeta de beneficios exclusiva para el transporte de
                carga y pasajeros.
              </h4>
              <ul>
                <li>
                  - Precio diferencial respecto al surtidor para cargas
                  superiores a 100 lts.
                </li>
                <li>- Obtenela con una rápida adhesión sin requisitos.</li>
                <li>
                  - Pago con los medios habilitados en la estación de servicio.
                </li>
                <li>
                  - Amplia cobertura en la red de estaciones YPF en todo el
                  país.
                </li>
              </ul>
              <a
                href="https://www.ypf.com/formularioyer/Paginas/formulario_new.aspx?template=Adhesion"
                target="_blank"
                rel="noreferrer"
                className={`button button--large button--primary ${styles.button_margin}`}
              >
                Quiero adherirme
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.section__benefits}`}>
        <div className={`${styles.benefits__callout}`}>
          <span
            className={`${styles.benefits_callout__indicators} text text--body-01`}
          ></span>
          {/* <a className="benefits-callout__link text text--body-01 link" href="beneficios.html">
            
            <svg className="link__arrow" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.75 11.7257h-15M13.7002 5.70131l6.05 6.02399-6.05 6.025" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a> */}
        </div>
        <div className={styles.benefits__texts}>
          <h2 className={`${styles.benefits__title} text text--h1`}>
            Beneficios
          </h2>
          <p className={`${styles.benefits__text} text text--body-01`}>
            Sumamos más propuestas pensadas exclusivamente para cada una de tus
            flotas.
          </p>
          <Link href={`/beneficios`}>
            <a
              className={`${styles.benefits__button} button button--large button--primary`}
            >
              Quiero saber más
            </a>
          </Link>
        </div>
        <figure className={styles.benefits__image}>
          <Image
            src="/images/plans/benefits/img--cargo-ship.png"
            alt="Beneficios"
            title="Beneficios"
            layout="responsive"
            width={787}
            height={477}
          />
        </figure>
      </section>

      <FormAdherirme />
    </>
  )
}
