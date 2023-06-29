import Image from 'next/image'
import styles from './index.module.css'

const Hero = () => {
  return (
    <>
      <section className={`3 section ${styles.section__hero}`}>
        <div className={styles.hero__texts}>
          <h1 className={`${styles.hero__title} text text--h1`}>
            Conectate con una nueva plataforma de soluciones para tu flota
          </h1>
          <p className={`${styles.hero__text} text text--body-01`}>
            Evolucionamos para darte soluciones inteligentes que te permiten
            gestionar todo tipo de flotas de una forma más simple, eficiente y
            confiable.
          </p>
          <a className="button button--large button--primary" href="#contact">
            Quiero adherirme
          </a>
        </div>
        <div className={styles.hero__image_wrapper}>
          <div
            itemProp="subjectOf"
            itemScope
            itemType="https://schema.org/VideoObject"
          >
            <video
              src="/assets/videos/video.mp4"
              className={styles.hero_images__video}
              controls="on"
            ></video>
          </div>
          <div className={styles.hero__social_network_list}>
            <a
              className={styles.social_network_list__item}
              href="https://www.youtube.com/ypfoficial"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                title="Youtube YPF Oficial"
                alt="Youtube YPF Oficial"
                src="/images/home/hero/youtube.svg"
                width={18}
                height={14}
              />
            </a>
            <a
              className={styles.social_network_list__item}
              href="http://www.linkedin.com/company/321888?trk=tyah&amp;trkInfo=tas%3AYPF%2Cidx%3A1-1-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                title="LinkedIn YPF Oficial"
                alt="LinkedIn YPF Oficial"
                src="/images/home/hero/linkedin.svg"
                width={18}
                height={18}
              />
            </a>
            <a
              className={styles.social_network_list__item}
              href="https://www.facebook.com/YPFoficial"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                title="Facebook YPF Oficial"
                alt="Facebook YPF Oficial"
                src="/images/home/hero/facebook.svg"
                width={11}
                height={20}
              />
            </a>
            <a
              className={styles.social_network_list__item}
              href="https://twitter.com/YPFoficial"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                title="Twitter YPF Oficial"
                alt="Twitter YPF Oficial"
                src="/images/home/hero/twitter.svg"
                width={17}
                height={14}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
