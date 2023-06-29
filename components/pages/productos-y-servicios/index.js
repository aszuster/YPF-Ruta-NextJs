import Image from 'next/image'
import styles from './index.module.css'
import HighlightsList from 'components/views/home/highlights/HighlightsList'
import FormAdherirme from 'components/FormAdherirme/FormAdherirme'
import items from '/components/carousel/analiticas/analiticas.json'
import AnaliticasEmblaCarousel from 'components/carousel/analiticas'
import Tabs from 'components/tabs'
import Complements from 'components/views/ProductsServices/Complements'
import ViewProductsServices from 'components/views/ProductsServices/Products'

export default function ProductsServicesView() {
  return (
    <>
      {/* section hero */}
      <section className={`section ${styles.section__hero}`}>
        <h1 className={`${styles.hero__title} text text--h1`}>
          Productos y Servicios
        </h1>
        <p className={`${styles.hero__text} text text--body-01`}>
          Nuestros productos cumplen con los máximos niveles de calidad en el
          mercado porque ofrecen la mejor performance del motor junto a un
          exigente cuidado al medio ambiente.
        </p>
      </section>

      {/* section complementos */}

      <Complements />
      {/* <div id={styles.complementos}></div>
      <section className={`section ${styles.section__addons}`}>
        <Tabs
          buttons={Buttons}
          tabBody={TabBody}
          title="Complementos para Planes YPF Ruta"
          initialTitle="Sensores"
        />
      </section> */}

      {/* section products & services */}

      <ViewProductsServices />
      {/* <section className={`section ${styles.section__addons}`}>
        <Tabs
          buttons={Buttons}
          tabBody={TabBody}
          title="Productos & Servicios YPF"
          initialTitle="Sensores"
        />
      </section> */}

      {/* section highlights */}
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
