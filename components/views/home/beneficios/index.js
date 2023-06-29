import styles from './index.module.css'
import BeneficiosEmblaCarousel from 'components/carousel/beneficios'
import Link from 'next/link'

const Beneficios = () => {
  return (
    <>
      <section className={`section ${styles.section__benefits}`}>
        <h2 className={`${styles.benefits__title} text text--h1`}>
          Beneficios
        </h2>
        <p className={`${styles.benefits__text} text text--body-01`}>
          Sumamos más propuestas pensadas exclusivamente para cada una de tus
          flotas.
        </p>
        <Link href="/beneficios">
          <a
            className={`${styles.benefits__button} button button--primary button--large text text--body-01`}
          >
            Ver todos
          </a>
        </Link>

        <BeneficiosEmblaCarousel isHome={true} />
      </section>
    </>
  )
}

export default Beneficios
