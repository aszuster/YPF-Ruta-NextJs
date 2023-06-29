import styles from 'components/views/home/planes/index.module.css'
import PlanesEmblaCarousel from 'components/carousel/Planes'

const Planes = () => {
  return (
    <>
      <section className={`section ${styles.section__plans}`}>
        <span className={styles.plans__background}></span>
        <h2 className={`${styles.plans__title} text--h1`}>Nuestros Planes</h2>
        <p className={`${styles.plans__text} text text--body-01`}>
          Conocé nuestras soluciones adaptadas para cada tipo de flota.
        </p>

        <PlanesEmblaCarousel />
      </section>
    </>
  )
}

export default Planes
