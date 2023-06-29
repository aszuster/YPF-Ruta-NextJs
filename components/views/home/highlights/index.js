import styles from 'components/views/home/highlights/index.module.css'
import HighlightsList from 'components/views/home/highlights/HighlightsList'
const Highlights = () => {
  return (
    <>
      <section className={`section ${styles.section__highlights}`}>
        <h2 className={`${styles.highlights__title} text text--h2`}>
          ¿Por qué conviene YPF Ruta?
        </h2>
        <HighlightsList />
      </section>
    </>
  )
}

export default Highlights
