import styles from 'components/views/home/highlights/index.module.css'
import Image from 'next/image'

const HighlightsList = () => {
  return (
    <>
      <div className={styles.highlights__card_list}>
        <article className={styles.highlights__card}>
          <figure className={styles.highlights_card__icon}>
            <Image
              title="Ahorro en combustible"
              alt="Ahorro en combustible"
              width={90}
              height={90}
              fill={'cover'}
              src="/images/home/highlights/tank.svg"
            />
          </figure>
          <h2 className={`${styles.highlights_card__title} text text--h5`}>
            Ahorrá hasta el 20% del consumo de combustible22
          </h2>
          <p className={`${styles.highlights_card__text} text text--body-01`}>
            Un manejo eficiente disminuye drásticamente el consumo de
            combustible.
          </p>
        </article>
        <article className={styles.highlights__card}>
          <figure className={styles.highlights_card__icon}>
            <Image
              title="Reducción de accidentes"
              alt="Reducción de accidentes"
              width={90}
              height={90}
              fill={'cover'}
              src="/images/home/highlights/truck.svg"
            />
          </figure>
          <h2 className={`${styles.highlights_card__title} text text--h5`}>
            Reducí los accidentes hasta en un 20%
          </h2>
          <p className={`${styles.highlights_card__text} text text--body-01`}>
            Ayuda a tus conductores a mejorar sus hábitos de conducción. La
            telemática previene accidentes.
          </p>
        </article>
        <article className={styles.highlights__card}>
          <figure className={styles.highlights_card__icon}>
            <Image
              title="Optimización de flota"
              alt="Optimización de flota"
              width={90}
              height={90}
              fill={'cover'}
              src="/images/home/highlights/map.svg"
            />
          </figure>
          <h2 className={`${styles.highlights_card__title} text text--h5`}>
            Optimizá hasta en un 10% el uso de tu flota
          </h2>
          <p className={`${styles.highlights_card__text} text text--body-01`}>
            Planificá tus rutas y mejora tu operación logística.
          </p>
        </article>

        <article className={styles.highlights__card}>
          <figure className={styles.highlights_card__icon}>
            <Image
              title="Ahorro ralenti"
              alt="Ahorro ralenti"
              width={90}
              height={90}
              fill={'cover'}
              src="/images/home/highlights/drop.svg"
            />
          </figure>
          <h2 className={`${styles.highlights_card__title} text text--h5`}>
            Ahorrá hasta 3 litros por hora
          </h2>
          <p className={`${styles.highlights_card__text} text text--body-01`}>
            Mantener el motor encendido sin movimiento incrementa el consumo de
            combustible. Controlá los tiempos de ralentí en tu flota.
          </p>
        </article>
        <article className={styles.highlights__card}>
          <figure className={styles.highlights_card__icon}>
            <Image
              title="Ahorro en mantenimiento"
              alt="Ahorro en mantenimiento"
              width={90}
              height={90}
              fill={'cover'}
              src="/images/home/highlights/tool.svg"
            />
          </figure>
          <h2 className={`${styles.highlights_card__title} text text--h5`}>
            Gastá hasta 20% menos en mantenimiento
          </h2>
          <p className={`${styles.highlights_card__text} text text--body-01`}>
            El mantenimiento predictivo reduce los gastos de reparaciones y
            evita altos impactos económicos en la operación de la flota.
          </p>
        </article>
      </div>
    </>
  )
}

export default HighlightsList
