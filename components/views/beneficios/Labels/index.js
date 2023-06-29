import styles from './index.module.css'

const Labels = () => {
  return (
    <section className={`section ${styles.section__thought_for}`}>
      <h2 className={`${styles.thought_for__title} text text--h2`}>
        Pensado para Flotas & Segmentos
      </h2>
      <ul className={`${styles.thought_for__card_group} ${styles.card_group}`}>
        <li className={styles.card_group__item}>Autos</li>
        <li className={styles.card_group__item}>Camiones</li>
        <li className={styles.card_group__item}>Utilitarios</li>
        <li className={styles.card_group__item}>Maquinarias</li>
        <li className={styles.card_group__item}>Colectivos</li>
        <li className={styles.card_group__item}>Motos</li>
        <li className={styles.card_group__item}>Logística y Distribución</li>
        <li className={styles.card_group__item}>Transporte de Cargas</li>
        <li className={styles.card_group__item}>Retail/Servicios</li>
        <li className={styles.card_group__item}>Transporte de Pasajeros</li>
        <li className={styles.card_group__item}>Oil & Gas</li>
        <li className={styles.card_group__item}>Organismos Públicos</li>
        <li className={styles.card_group__item}>Minería</li>
      </ul>
    </section>
  )
}

export default Labels
