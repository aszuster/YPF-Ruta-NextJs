import styles from './index.module.css'
import Tabs from 'components/tabs'
import Image from 'next/image'

const Buttons = ['Garantía', 'Leasing', 'Tarjeta de crédito']

const TabBody = [
  {
    content: () => (
      <div className={styles.garantia_card}>
        <div className={`${styles.garantia_card} ${styles.logo}`}>
          <Image
            src="/images/beneficios/logo-garantizar.png"
            alt="logo_garantizar"
            width={200}
            height={100}
            layout="fixed"
          />
        </div>
        <p className={`${styles.garantia_card__title} text text--h5`}>
          Garantizar
        </p>
        <p className={`${styles.garantia_card__content} text text--body-01`}>
          Obtené o ampliá tu crédito para operar con YPF RUTA a través de
          Garantizar SGR y Obtené una bonificación extra en combustible.
        </p>
        <p className={`${styles.garantia_card__content} text text--body-01`}>
          - Bonificación de la tasa y gastos operativos.
          <br />- Aumentar tu bonificación en combustibles.
        </p>
        <a
          className={`${styles.garantia__button} button button--primary button--large text text--body-01`}
          href="./docs/YPF-SA-web-GARANTIZAR-v7.pdf"
          target="_blank"
        >
          Conocé más
        </a>
      </div>
    ),
  },
  {
    content: () => (
      <div className={styles.garantia_card}>
        <div className={`${styles.garantia_card} ${styles.logo}`}>
          <Image
            src="/images/beneficios/the-capita-logo.jpg"
            alt="capita-logo"
            width={200}
            height={100}
            layout="fixed"
          />
        </div>
        <p className={`${styles.garantia_card__title} text text--h5`}>
          The Capita Corporation
        </p>
        <p className={`${styles.garantia_card__content} text text--body-01`}>
          La compañía líder de Leasing en Argentina te acerca la posibilidad de
          renovar tu flota o adquirir un vehículo con el financiamiento más
          competitivo e innovador del mercado.
        </p>
        <a
          className={`${styles.garantia__button} button button--primary button--large text text--body-01`}
          href="https://www.ypf.com/productosyservicios/YPF-Ruta/Documents/thecapita-ypf-ruta.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Conocé más
        </a>
      </div>
    ),
  },
  {
    content: () => (
      <p className={`${styles.services_card__title} text text--h5`}>
        Próximamente
      </p>
    ),
  },
]

const TabsTest = () => {
  return (
    <Tabs
      buttons={Buttons}
      tabBody={TabBody}
      title="Convenios"
      initialTitle="Garantia"
    />
  )
}

export default TabsTest
