import Image from 'next/image'
import styles from './index.module.css'
import HighlightsList from 'components/views/home/highlights/HighlightsList'
import FormAdherirme from 'components/FormAdherirme/FormAdherirme'
import items from '/components/carousel/analiticas/analiticas.json'
import AnaliticasEmblaCarousel from 'components/carousel/analiticas'

export default function Analiticasview() {
  return (
    <>
      <section className={`section ${styles.section__analytics}`}>
        <div className={styles.analytics__texts}>
          <h1 className={`${styles.analytics__title} text text--h1`}>
            Sumamos analítica de avanzada
          </h1>
          <p className={`${styles.analytics__text} text text--body-01`}>
            Te brindamos indicadores clave de tu operación y reportes para tomar
            las mejores decisiones.
          </p>
        </div>

        <picture
          className={`${styles.analytics__image} ${styles.analytics__image__01}`}
        >
          <source
            srcSet="/images/analytics/analytics/img--dashboard.webp"
            type="image/webp"
          />
          <img
            src="/images/analytics/analytics/img--dashboard.png"
            loading="lazy"
            alt="Analítica de avanzada"
            title="Analítica de avanzada"
          />
        </picture>
        <picture
          className={`${styles.analytics__image} ${styles.analytics__image__02}`}
        >
          <source
            srcSet="/images/analytics/analytics/img--containers.webp"
            type="image/webp"
          />
          <img
            src="/images/analytics/analytics/img--containers.png"
            loading="lazy"
            alt="Analítica de avanzada para tu flota"
            title="Analítica de avanzada para tu flota"
          />
        </picture>
        <picture
          className={`${styles.analytics__image} ${styles.analytics__image__03}`}
        >
          <img
            src="/images/analytics/analytics/shape--reverse-c.svg"
            loading="lazy"
            alt="Analítica de avanzada para tu flota"
            title="Analítica de avanzada para tu flota"
          />
        </picture>

        <figure
          className={`${styles.analytics__image} ${styles.analytics__image__04}`}
        >
          <Image
            src="/images/analytics/analytics/shape--corner.svg"
            alt=""
            width={165}
            height={92}
          />
        </figure>
      </section>

      <section className={`section ${styles.section__advanced_features}`}>
        <h2 className={`${styles.advanced_features__title} text text--h2`}>
          Con <strong>YPF Ruta</strong> tenés analítica avanzada
        </h2>
        <div className={`${styles.showMobile}`}>
          <AnaliticasEmblaCarousel />
        </div>
        <div className={`${styles.hideMobile}`}>
          <div className={styles.advanced_features__list}>
            {items.map(({ icon, title, copy, detail, id }, index) => {
              return (
                <div key={index} className={styles.advanced_features_item}>
                  <Image
                    width={32}
                    height={32}
                    className={styles.advanced_features_item__icon}
                    src={icon}
                    alt=""
                  />

                  <h3
                    className={`${styles.advanced_features_item__title} text text--h5`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`${styles.advanced_features_item__description} text text--body-01`}
                  >
                    {copy}
                  </p>
                  <ul className={styles.advanced_features_feature_list}>
                    {detail[0] && (
                      <li
                        className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                      >
                        {detail[0]}
                      </li>
                    )}
                    {detail[1] && (
                      <li
                        className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                      >
                        {detail[1]}
                      </li>
                    )}
                    {detail[2] && (
                      <li
                        className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                      >
                        {detail[2]}
                      </li>
                    )}
                    {detail[3] && (
                      <li
                        className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                      >
                        {detail[3]}
                      </li>
                    )}
                    {detail[4] && (
                      <li
                        className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                      >
                        {detail[4]}
                      </li>
                    )}
                    {detail[5] && (
                      <li
                        className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                      >
                        {detail[5]}
                      </li>
                    )}
                    {detail[6] && (
                      <li
                        className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                      >
                        {detail[6]}
                      </li>
                    )}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.advanced_features__footer}>
          <figure
            className={`${styles.advanced_features_footer__img} ${styles.advanced_features_footer__img__01}`}
          >
            <Image
              src="/images/analytics/advanced-features/shape--r.svg"
              alt="Por que conviene YPF Ruta"
              title="Por que conviene YPF Ruta"
              width={279}
              height={245}
            />
          </figure>
          <figure
            className={`${styles.advanced_features_footer__img} ${styles.advanced_features_footer__img__02}`}
          >
            <Image
              src="/images/analytics/advanced-features/img--roads.png"
              loading="lazy"
              alt="Analítica de avanzada para tu flota"
              title="Analítica de avanzada para tu flota"
              width={792}
              height={299}
              layout={'responsive'}
            />
          </figure>
        </div>
      </section>
      <section className={`section ${styles.section__highlights}`}>
        <div className={styles.highlights__header}>
          <h2 className={`${styles.highlights__title} text text--h1`}>
            ¿Por qué conviene YPF Ruta?
          </h2>
          <figure className={styles.highlights__shape}>
            <Image
              src="/images/analytics/highlights/shape--corner.svg"
              alt="corner"
              width={474}
              height={263}
            />
          </figure>
        </div>
        <HighlightsList />
      </section>
      <FormAdherirme />
    </>
  )
}
