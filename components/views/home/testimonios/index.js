import Image from 'next/image'
import styles from 'components/views/home/testimonios/index.module.css'

const Testimonios = () => {
  return (
    <>
      <section className={`section ${styles.section__testimonials}`}>
        <div className={styles.testimonials__texts}>
          <h2 className={`${styles.testimonials__title} text text--h1`}>
            Plataforma
            <br />
            YPF Ruta
          </h2>
          <p className={`${styles.testimonials__text} text text--body-01`}>
            La nueva plataforma de YPF Ruta llegó para <br />
            transformar la gestión de todo tipo de flotas.
          </p>
          <a href="https://youtu.be/4og5Ud1KgRw" target="blank">
            <button
              className={`${styles.testimonials__button}  button button--primary button--light-blue button--large`}
              type="button"
            >
              ¡Mirá el video!
            </button>
          </a>
        </div>
        <figure className={styles.testimonials__image}>
          <Image
            src="/images/home/testimonials/image-01.png"
            title="YPF Ruta - una nueva plataforma de soluciones para tu flota"
            alt="YPF Ruta - una nueva plataforma de soluciones para tu flota"
            width={765}
            layout={'responsive'}
            height={810}
            fill={'cover'}
          />
        </figure>
      </section>
    </>
  )
}

export default Testimonios
