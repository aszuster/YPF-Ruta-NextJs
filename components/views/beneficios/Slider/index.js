import BeneficiosEmblaCarousel from 'components/carousel/beneficios'
import styles from './index.module.css'
const SliderBeneficios = () => {
  return (
    <section className={`section  ${styles.section__benefits}`}>
      <h2 className={`${styles.benefits__title} text text--h1`}>
        Beneficios y soluciones
      </h2>
      <p className={`${styles.benefits__text} text text--body-01`}>
        Brindamos tecnología avanzada y el monitoreo que necesitas para la
        administración y trazabilidad de tu flota en tiempo real.
      </p>
      <BeneficiosEmblaCarousel />
    </section>
  )
}

export default SliderBeneficios
