import FormAdherirme from 'components/FormAdherirme/FormAdherirme'
import FAQAccordionView from 'components/views/preguntas-frecuentes/FAQAccordionView'
import styles from './index.module.css'

export default function PreguntasFrecuentesPage() {
  return <>
    <div className={styles.main_layout}>
      {/* Hero Section */}
      <section className={`section ${styles.section__hero}`}>
        <h1 className={`${styles.hero__title} text text--h1`}>
          Preguntas frecuentes
        </h1>
        <p className={`${styles.hero__content} text text--body-01`}>
          En este espacio, respondemos todas tus preguntas y dudas que tengas
          sobre nuestro servicio.
        </p>
      </section>

      {/* FAQ Section */}
      <FAQAccordionView />

      {/* Benefits section */}
      <section className={`section ${styles.section__benefits}`}>
        <div className={styles.benefits__callout}>
          <span
            className={`${styles.benefits_callout__indicators} text text--body-01`}
          ></span>
          <a
            className={`${styles.benefits_callout__link} text text--body-01 link`}
            href="./beneficios.html"
          >
            {/* <!--svg className="link__arrow" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.75 11.7257h-15M13.7002 5.70131l6.05 6.02399-6.05 6.025" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg--> */}
          </a>
        </div>
        <div className={styles.benefits__texts}>
          <h2 className={`${styles.benefits__title} text text--h1`}>
            Beneficios
          </h2>
          <p className={`${styles.benefits__text} text text--body-01`}>
            Sumamos más propuestas pensadas exclusivamente para cada una de
            tus flotas.
          </p>
          <a
            className={`${styles.benefits__button} button button--large button--primary`}
            href="./beneficios.html"
          >
            Quiero saber más
          </a>
        </div>
        <img
          className={styles.benefits__image}
          src="https://www.ypf.com/productosyservicios/ypf-ruta/paginas/images/plans/benefits/img--cargo-ship.png"
          alt="Beneficios"
          title="Beneficios"
        />
      </section>
      <FormAdherirme />
    </div>
  </>
}