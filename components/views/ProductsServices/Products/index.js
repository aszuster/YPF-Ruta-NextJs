import styles from './index.module.css'
import Tabs from 'components/tabs'
import Image from 'next/image'

const Buttons = ['Combustibles', 'Lubricantes', 'Soluciones y servicios']

const TabBody = [
  {
    content: () => (
      //   <div
      //     className={`${styles.content__item} ${styles.tab} $styles.tab__fuel} styles.{card_list}`}
      //   >
      <>
        <div className={styles.card}>
          <Image
            className={styles.card__image}
            src="/images/prodservices/combustibles/infinia-nafta.png"
            alt="Combustibles - Infinia"
            title="Combustibles - Infinia"
            width={223}
            height={260}
            layout="fixed"
          />
          <p className={`${styles.card__title} text text--h5`}>Infinia Nafta</p>
          <p className={`${styles.card__content} text text--body-01`}>
            Nafta de grado 3 diseñada para lograr el máximo desempeño, un
            excelente poder de limpieza y un óptimo rendimiento.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/infinia/Nafta/la-nueva-nafta-inteligente-de-YPF.html"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.card__image}
            src="/images/prodservices/combustibles/infinia-diesel.png"
            alt="Combustibles - Infinia Diesel"
            title="Combustibles - Infinia Diesel"
            width={223}
            height={260}
            layout="fixed"
          />
          <p className={`${styles.card__title} text text--h5`}>
            Infinia Diesel
          </p>
          <p className={`${styles.card__content} text text--body-01`}>
            El combustible inteligente de última tecnología para motores Euro 5
            y 6.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/infinia/Paginas/Infinia-diesel-el-combustible-de-ultima-tecnologia-de-YPF.html"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/diesel-500.png"
            alt="Combustibles - Diesel 500"
            title="Combustibles - Diesel 500"
          />
          <p className={`${styles.card__title} text text--h5`}>Diesel 500</p>
          <p className={`${styles.card__content} text text--body-01`}>
            Combustible dirigido a motorizaciones Diesel que requieran la
            utilización de un gasoil grado 2 para su adecuado funcionamiento.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/Diesel-500.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/gnc.png"
            alt="Combustibles - GNC"
            title="Combustibles - GNC"
          />
          <p className={`${styles.card__title} text text--h5`}>GNC</p>
          <p className={`${styles.card__content} text text--body-01`}>
            Asegura una combustión más limpia, con bajos niveles de emisiones,
            lo cual lo convierte en un producto más amigable con el medio
            ambiente.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/GNC.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/ultra-diesel.png"
            alt="Combustibles - Ultra Diesel"
            title="Combustibles - Ultra Diesel"
          />
          <p className={`${styles.card__title} text text--h5`}>Ultradiesel</p>
          <p className={`${styles.card__content} text text--body-01`}>
            Combustible dirigido a motorizaciones Diesel que requieran la
            utilización de un gasoil grado 2 para su adecuado funcionamiento.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/Ultradiesel.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
      </>
    ),
  },
  {
    content: () => (
      <>
        {/* <div
        className={`${styles.content__item} ${styles.tab} ${styles.tab__lubricant} ${styles.card_list}`}
      > */}
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/elaion.png"
            align="Lubricantes - Elaion"
            title="Lubricantes - Elaion"
          />
          <p className={`${styles.card__title} text text--h5`}>ELAION</p>
          <p className={`${styles.card__subtitle} text text--h5`}>
            (Vehículos livianos)
          </p>
          <p className={`${styles.card__content} text text--body-01`}>
            Su tecnología anti-stress permite mayor performance, resistencia a
            la degradación,control de consumo de aceite, economía de combustible
            y capacidad de limpieza.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/elaion/Paginas/YPF-Elaion-maxima-innovacion-en-lubricantes.html"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/moto.png"
            alt="Lubricantes"
            title="Lubricantes"
          />
          <p className={`${styles.card__title} text text--h5`}>
            Otros lubricantes
          </p>
          <p className={`${styles.card__subtitle} text text--h5`}>
            (Vehículos)
          </p>
          <ul className={styles.card__content}>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Lubricantes de motor
            </li>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Lubricantes de transmisión
            </li>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Lubricantes de transmisión automática
            </li>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Lubricantes de motor monogrado
            </li>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Lubricante para moto
            </li>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Lubricante marino
            </li>
          </ul>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/Estaciones-de-servicio-Lubricantes.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/extravida.png"
            alt="Lubricantes - Extravida"
            title="Lubricantes - Extravida"
          />
          <p className={`${styles.card__title} text text--h5`}>EXTRAVIDA</p>
          <p className={`${styles.card__subtitle} text text--h5`}>
            (Vehículos pesados)
          </p>
          <p className={`${styles.card__content} text text--body-01`}>
            Extravida es el lubricante de YPF que te ofrece la línea más
            completa de productos para que logres la mejor protección y el mayor
            rendimiento.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/Extravida-XV.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/azul-32.png"
            alt="Lubricantes - Azul 32"
            title="Lubricantes - Azul 32"
          />
          <p className={`${styles.card__title} text text--h5`}>AZUL 32</p>
          <p className={`${styles.card__subtitle} text text--h5`}>
            (Vehículos pesados)
          </p>
          <p className={`${styles.card__content} text text--body-01`}>
            Azul 32 es una solución de urea automotriz lanzada por YPF para
            vehículos Diesel pesados con tecnología Euro 5. Con Azul 32 lográs
            que tu camión sea más eficiente y contribuís a que el aire sea más
            puro.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/Azul-32.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/vectis.png"
            alt="Lubricantes - Vectis"
            title="Lubricantes - Vectis"
          />
          <p className={`${styles.card__title} text text--h5`}>VECTIS</p>
          <p className={`${styles.card__subtitle} text text--h5`}>
            (Motores Estacionarios)
          </p>
          <p className={`${styles.card__content} text text--body-01`}>
            Lubricante de última generación para motores estacionarios de 4
            tiempos, con bajo contenido de cenizas, los cuales poseen una alta
            resistencia a la oxidación y una baja tendencia a la formación de
            depósitos.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/Vectis-AS.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/hidraulico-bp.png"
            alt="Lubricantes - Vehículos pesados"
            title="Lubricantes - Vehículos pesados"
          />
          <p className={`${styles.card__title} text text--h5`}>
            Otros lubricantes{' '}
          </p>
          <p className={`${styles.card__subtitle} text text--h5`}>
            (Vehículos pesados)
          </p>
          <ul className={styles.card__content}>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Lubricantes de carter
            </li>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Lubricantes de transmisión e hidráulicos
            </li>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Grasas
            </li>
            <li className={`${styles.card__content_item} text text--body-01`}>
              Refrigerantes
            </li>
          </ul>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/Transporte-Lubricantes.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/guia-lubricacion.png"
            alt="Guía de lubricación"
            title="Guía de lubricación"
          />
          <p className={`${styles.card__title} text text--h5`}>
            Guía de lubricación
          </p>
          <p className={`${styles.card__content} text text--body-01`}>
            Te recomendamos que lubricante utilizar en función de la marca
            modelo y parte de tu transporte.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/Transporte-Guia-de-Lubricacion.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        {/* </div> */}
      </>
    ),
  },
  {
    content: () => (
      <>
        {/* <div
        className={`${styles.content__item} ${styles.tab} ${styles.tab__solutions} ${styles.card_list}`}
      > */}
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/boxes.png"
            alt="Boxes"
            title="Boxes"
          />
          <p className={`${styles.card__title} text text--h5`}>BOXES</p>
          <p className={`${styles.card__content} text text--body-01`}>
            Es el servicio de Lubricación y Diagnóstico de YPF. En BOXES además
            de cambiarte el aceite, un especialista te revisa los puntos más
            importantes de tu auto (partes mecánicas, fluidos y filtros,
            elementos de seguridad y lubricantes).
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.ypf.com/productosyservicios/YPF-Ruta/Documents/BOXES.pdf"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/full.png"
            alt="Full"
            title="Full"
          />
          <p className={`${styles.card__title} text text--h5`}>Full</p>
          <p className={`${styles.card__content} text text--body-01`}>
            Más de 650 tiendas full distribuidas en todo el país donde podrás
            encontrar productos frescos, livianos, saludables y recién hechos.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/Paginas/YPF-Full.aspx"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/boxes-servicio-movil.png"
            alt="Boxes móvil"
            title="Boxes móvil"
          />
          <p className={`${styles.card__title} text text--h5`}>Boxes móvil</p>
          <p className={`${styles.card__content} text text--body-01`}>
            Con boxes móvil podemos cambiarte el aceite, revisar los puntos más
            importantes de tu auto y entregarte un certificado con el resultado
            de la revisión sin moverte de tu lugar.
          </p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/filler.png"
            alt="Filler"
            title="Filler"
          />
          <p className={`${styles.card__title} text text--h5`}>Filler</p>
          <p className={`${styles.card__content} text text--body-01`}>
            Servicio de delivery de combustibles directo a tus instalaciones o a
            tus unidades en los lugares donde se encuentran operando o paradas,
            disponible en AMBA.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ypf.com/productosyservicios/YPF-Ruta/Documents/filler.pdf"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver más
            </button>
          </a>
        </div>
        <div className={styles.card}>
          <img
            className={styles.card__image}
            src="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/images/products-and-services/integracion-patios.png"
            alt="Integración de patios"
            title="Integración de patios"
          />
          <p className={`${styles.card__title} text text--h5`}>
            Solución Integral para Patios de Carga
          </p>
          <p className={`${styles.card__content} text text--body-01`}>
            Integrada con YPF Ruta para administrar tanques y cargaderos de
            combustible en instalaciones del cliente.
          </p>
          <a
            targe="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=813_pOurd58"
            target="blank"
          >
            <button
              className={`${styles.card__action} button button--primary button--small`}
            >
              Ver video
            </button>
          </a>
        </div>
        {/* </div> */}
      </>
    ),
  },
]

const ProductsServicesView = () => {
  return (
    <Tabs
      buttons={Buttons}
      tabBody={TabBody}
      title="Productos & Servicios YPF"
      initialTitle="Sensores"
    />
  )
}

export default ProductsServicesView
