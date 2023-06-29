import styles from 'components/views/home/novedades/index.module.css'
import NovedadesEmblaCarousel from '../../../carousel/novedades'

const Novedades = () => {
  return (
    <>
      <section className={`section ${styles.section__news}`}>
        <div className={styles.news_list}>
          <NovedadesEmblaCarousel />
        </div>
      </section>
    </>
  )
}

export default Novedades
