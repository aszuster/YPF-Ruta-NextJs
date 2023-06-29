import styles from './index.module.css'
import Tabs from 'components/tabs'
import Image from 'next/image'

const Buttons = ['Sensores', 'Plataforma de Mantenimiento', 'Servicios & otros']

const TabBody = [
  {
    content: () => (
      <>
        {/* <div
        className={`${styles.content__item} ${styles.tab} ${styles.tab__sensors} ${styles.card_list}`}
      > */}
        <div className={styles.sensors_card}>
          <Image
            className={styles.sensors_card__icon}
            src="/images/icons/blue/icon--car-door.svg"
            alt="Sensor magnético de puertas"
            title="Sensor magnético de puertas"
            width={90}
            height={90}
            layout="fixed"
          />
          <p className={`${styles.sensors_card__title} text text--h5`}>
            Sensor Magnético de puertas
          </p>
          <p className={`${styles.sensors_card__content} text text--body-01`}>
            Controlá la apertura y cierre de puertas para la seguridad de la
            mercadería.
          </p>
        </div>
        <div className={styles.sensors_card}>
          <Image
            className={styles.sensors_card__icon}
            src="/images/icons/blue/icon--hook.svg"
            alt="Sensor de enganche y desenganche"
            title="Sensor de enganche y desenganche"
            width={90}
            height={90}
            layout="fixed"
          />
          <p className={`${styles.sensors_card__title} text text--h5`}>
            Sensor de Enganche y/o Desenganche
          </p>
          <p className={`${styles.sensors_card__content} text text--body-01`}>
            Controlá la conexión y desconexión de los remolques de sus
            cabezales.
          </p>
        </div>
        <div className={styles.sensors_card}>
          <Image
            className={styles.sensors_card__icon}
            src="/images/icons/blue/icon--sos.svg"
            alt="Botón SOS"
            title="Botón SOS"
            width={90}
            height={90}
            layout="fixed"
          />
          <p className={`${styles.sensors_card__title} text text--h5`}>
            Botón SOS (Reposición)
          </p>
          <p className={`${styles.sensors_card__content} text text--body-01`}>
            Botón para alertas, check in, o georeferenciación ante condiciones
            ambientales severas, siniestros o incidentes viales.
          </p>
        </div>
        <div className={styles.sensors_card}>
          <Image
            className={styles.sensors_card__icon}
            src="/images/icons/blue/icon--temperature-sensor.svg"
            align="Sensor de temperatura"
            title="Sensor de temperatura"
            width={90}
            height={90}
            layout="fixed"
          />
          <p className={`${styles.sensors_card__title} text text--h5`}>
            Sensor de Temperatura
          </p>
          <p className={`${styles.sensors_card__content} text text--body-01`}>
            Controlá minuto a minuto el nivel de temperatura de carga.
          </p>
        </div>
        <div className={styles.sensors_card}>
          <Image
            className={styles.sensors_card__icon}
            src="/images/icons/blue/icon--kit-dallas.svg"
            alt="Kit Dallas"
            title="Kit Dallas"
            width={90}
            height={90}
            layout="fixed"
          />
          <p className={`${styles.sensors_card__title} text text--h5`}>
            Kit Dallas
          </p>
          <p className={`${styles.sensors_card__content} text text--body-01`}>
            Identificá a cada conductor sin importar qué vehículo conduzca.
          </p>
        </div>
        <div className={styles.sensors_card}>
          <Image
            className={styles.sensors_card__icon}
            src="/images/icons/blue/icon--buzzer.svg"
            alt="Buzzer sonoro"
            title="Buzzer sonoro"
            width={90}
            height={90}
            layout="fixed"
          />
          <p className={`${styles.sensors_card__title} text text--h5`}>
            Buzzer Sonoro
          </p>
          <p className={`${styles.sensors_card__content} text text--body-01`}>
            Controlá los excesos de velocidad, entradas y salidas de zonas con
            alertas sonoras programadas.
          </p>
        </div>
        <div className={styles.sensors_card}>
          <Image
            className={styles.sensors_card__icon}
            src="/images/icons/blue/tacometro.svg"
            alt="CAN Bus"
            title="CAN Bus"
            width={90}
            height={90}
            layout="fixed"
          />
          <p className={`${styles.sensors_card__title} text text--h5`}>
            CAN Bus
          </p>
          <p className={`${styles.sensors_card__content} text text--body-01`}>
            Obtené toda la información precisa del desempeño del vehículo.
          </p>
        </div>
        <div className={styles.sensors_card}>
          <Image
            className={styles.sensors_card__icon}
            src="/images/icons/blue/candado.svg"
            alt="Bloqueo preventivo"
            title="Bloqueo preventivo"
            width={90}
            height={90}
            layout="fixed"
          />
          <p className={`${styles.sensors_card__title} text text--h5`}>
            Bloqueo preventivo
          </p>
          <p className={`${styles.sensors_card__content} text text--body-01`}>
            Permite bloquear a distancia el encendido del vehículo.
          </p>
        </div>
        {/* </div> */}
      </>
    ),
  },
  {
    content: () => (
      <>
        {/* <div
        className={`${styles.content__item} ${styles.tab} ${styles.tab__maintainance} ${styles.card_list}`}
      > */}
        <p className={`${styles.maintainance__description} text text--body-02`}>
          Plataforma de mantenimiento en la nube, diseñada para crear los planes
          de mantenimiento y gestionar las reparaciones de tu flota.
        </p>
        <ul className={`${styles.maintainance__content}`}>
          <li className={`${styles.feature} text text--body-01`}>
            Mantenimiento
          </li>
          <li className={`${styles.feature} text text--body-01`}>Checklist</li>
          <li className={`${styles.feature} text text--body-01`}>Neumáticos</li>
          <li className={`${styles.feature} text text--body-01`}>Viajes</li>
          <li className={`${styles.feature} text text--body-01`}>
            Planeación y disponibilidad
          </li>
          <li className={`${styles.feature} text text--body-01`}>
            Gestión documental
          </li>
          <li className={`${styles.feature} text text--body-01`}>Inventario</li>
        </ul>
        {/* </div> */}
      </>
    ),
  },
  {
    content: () => (
      <div
        className={`${styles.content__item} ${styles.tab} ${styles.tab__services} ${styles.card_list}`}
      >
        {/* Servicios de Analítica Avanzada */}
        <div className={styles.services_card}>
          <div className={styles.services_card__images}>
            <Image
              className={styles.services_card__image}
              src="/images/prodservices/servicios-de-analitica-avanzada.jpg"
              alt="Servicios de analitica de avanzada"
              title="Servicios de analitica de avanzada"
              width={342}
              height={200}
              // layout="fill"
              // objectFit="cover"
            />
          </div>
          <div className={styles.services_card__texts}>
            <p className={`${styles.services_card__title} text text--h5`}>
              Servicios de Analítica Avanzada
            </p>
            <p
              className={`${styles.services_card__content} text text--body-01`}
            >
              <strong>Con el Plan RT Avanzado</strong>.<br />
              Utilizando la telemática vehicular podemos mejorar tu operación
              haciéndola más rápida y eficiente, generando ahorros.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.ypf.com/productosyservicios/YPF-Ruta/Documents/Modulo-avanzado-analitica.pdf"
            >
              <button
                className={`${styles.services_card__action} button button--primary button--small`}
              >
                Más información
              </button>
            </a>
          </div>
        </div>
        {/* Central de Monitoreo propio */}
        <div className={styles.services_card}>
          <div className={styles.services_card__images}>
            <Image
              className={styles.services_card__image}
              src="/images/prodservices/centro-monitoreo-propio.jpg"
              alt="Central de monitoreo"
              title="Central de monitoreo"
              width={342}
              height={230}
              // layout="fill"
              // objectFit="cover"
            />
          </div>
          <div className={styles.services_card__texts}>
            <p className={`${styles.services_card__title} text text--h5`}>
              Central de Monitoreo propio
            </p>
            <p
              className={`${styles.services_card__content} text text--body-01`}
            >
              <strong>Con el Plan RT Avanzado</strong>.<br />
              Servicios de monitoreo 24x7 los 365 días del año, presencia en
              todo el país. Ejecución de protocolos y respuestas operativas
              coordinadas con fuerzas públicas.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ypf.com/productosyservicios/YPF-Ruta/Documents/servicio-monitoreo-activo.pdf"
            >
              <button
                className={`${styles.services_card__action} button button--primary button--small`}
              >
                Más información
              </button>
            </a>
          </div>
        </div>
        {/* Monitoreo pasivo + Recupero */}
        <div className={styles.services_card}>
          <div className={styles.services_card__images}>
            <Image
              className={styles.services_card__image}
              src="/images/prodservices/recupero-pasivo.jpg"
              alt="Monitoreo pasivo y recupero"
              title="Monitoreo pasivo y recupero"
              width={342}
              height={251}
              // layout="fill"
              // objectFit="cover"
            />
          </div>
          <div className={styles.services_card__texts}>
            <p className={`${styles.services_card__title} text text--h5`}>
              Monitoreo pasivo + Recupero
            </p>
            <p
              className={`${styles.services_card__content} text text--body-01`}
            >
              <strong>Con el Plan RT Avanzado</strong>.<br />
              Monitoreo alarmas o eventos (predefinidos entre el SOC y el
              Cliente) mediante software específico, junto a la activación de
              distintos accesorios (botón de pánico, apertura de puertas/portón,
              etc).
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ypf.com/productosyservicios/YPF-Ruta/Documents/servicio-monitoreo-activo.pdf"
            >
              <button
                className={`${styles.services_card__action} button button--primary button--small`}
              >
                Más información
              </button>
            </a>
          </div>
        </div>
        {/* Monitoreo activo por evento + Recupero */}
        <div className={styles.services_card}>
          <div className={styles.services_card__images}>
            <Image
              className={styles.services_card__image}
              src="/images/prodservices/Monitoreo-activo-por-evento.jpg"
              alt="Monitoreo activo por evento y recupero"
              title="Monitoreo activo por evento y recupero"
              width={342}
              height={281}
              // layout="fill"
              // objectFit="cover"
            />
          </div>
          <div className={styles.services_card__texts}>
            <p className={`${styles.services_card__title} text text--h5`}>
              Monitoreo activo por evento + Recupero
            </p>
            <p
              className={`${styles.services_card__content} text text--body-01`}
            >
              <strong>Con el Plan RT Avanzado</strong>.<br />
              Seguimiento dedicado a unidades durante un trayecto o viaje con el
              objeto de prevenir y/o solucionar posibles incidentes, antes lo
              cuales se activarán los protocolos y asistencia definidos
              previamente con el Cliente.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ypf.com/productosyservicios/YPF-Ruta/Documents/servicio-monitoreo-activo.pdf"
            >
              <button
                className={`${styles.services_card__action} button button--primary button--small`}
              >
                Más información
              </button>
            </a>
          </div>
        </div>
        {/* Recupero de Vehículos */}
        <div className={styles.services_card}>
          <div className={styles.services_card__images}>
            <Image
              className={styles.services_card__image}
              src="/images/prodservices/recupero.jpg"
              alt="Recupero de vehículos"
              title="Recupero de vehículos"
              width={342}
              height={200}
              // layout="fill"
              // objectFit="cover"
            />
          </div>
          <div className={styles.services_card__texts}>
            <p className={`${styles.services_card__title} text text--h5`}>
              Recupero de Vehículos
            </p>
            <p
              className={`${styles.services_card__content} text text--body-01`}
            >
              <strong>Con el Plan RT Avanzado</strong>.<br />
              Actuamos de forma rápida y precisa.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ypf.com/productosyservicios/YPF-Ruta/Documents/servicio-monitoreo-activo.pdf"
            >
              <button
                className={`${styles.services_card__action} button button--primary button--small`}
              >
                Más información
              </button>
            </a>
          </div>
        </div>
        {/* Copiloto */}
        <div className={styles.services_card}>
          <div className={styles.services_card__images}>
            <Image
              className={styles.services_card__image}
              src="/images/prodservices/copiloto.png"
              alt="App Copiloto"
              title="App Copiloto"
              width={342}
              height={213}
              // layout="fill"
              // objectFit="cover"
            />
            <span
              className={`${styles.services_card__label} text text--label-02`}
            >
              Próximamente
            </span>
          </div>
          <div className={styles.services_card__texts}>
            <p className={`${styles.services_card__title} text text--h5`}>
              Copiloto
            </p>
            <p
              className={`${styles.services_card__content} text text--body-01`}
            >
              <strong>Con el Plan RT Avanzado</strong>.<br />
              Nuestra solución (app mobile) permite a los transportistas y a las
              flotas privadas aumentar el rendimiento del conductor para que
              pueda mejorar todas sus operaciones de transporte protegiendo la
              salud del chofer así como la vida útil del activo.
            </p>
          </div>
        </div>

        {/* APP YPF Ruta */}
        <div className={styles.services_card}>
          <div className={styles.services_card__images}>
            <Image
              className={styles.services_card__image}
              src="/images/prodservices/app-ruta.png"
              alt="APP YPF Ruta"
              title="APP YPF Ruta"
              width={342}
              height={248}
              // layout="fill"
              // objectFit="cover"
            />
          </div>
          <div className={styles.services_card__texts}>
            <p className={`${styles.services_card__title} text text--h5`}>
              APP YPF Ruta
            </p>
            <p
              className={`${styles.services_card__content} text text--body-01`}
            >
              La App YPF Ruta funciona como una billetera virtual que te permite
              gestionar tus tarjetas. Podrás realizar las mismas operaciones que
              realizás con las tarjetas físicas: iniciar compras en nuestras
              estaciones, consultar el saldo y ver últimas transacciones, todo
              en un solo lugar.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.ypf.ypfruta"
            >
              <button
                className={`${styles.services_card__action} button button--primary button--small`}
              >
                Descargala
              </button>
            </a>
          </div>
        </div>
        {/* APP Monitor Ruta */}
        <div className={styles.services_card}>
          <div className={styles.services_card__images}>
            <Image
              className={styles.services_card__image}
              src="/images/prodservices/ruta-monitor.png"
              alt="APP Monitor Ruta"
              title="APP Monitor Ruta"
              width={342}
              height={229}
              // layout="fill"
              // objectFit="cover"
            />
          </div>
          <div className={styles.services_card__texts}>
            <p className={`${styles.services_card__title} text text--h5`}>
              APP Monitor Ruta
            </p>
            <p
              className={`${styles.services_card__content} text text--body-01`}
            >
              Esta APP es útil para la gestión de todo tipo de flotas. Sin
              importar donde estés, te ayudará a: consultar la ubicación y
              estado de los vehículos, revisar el historial de viajes de cada
              unidad, recibir alertas y notificaciones en tiempo real, etc.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.ypf.monitoreoenruta"
            >
              <button
                className={`${styles.services_card__action} button button--primary button--small`}
              >
                Descargala
              </button>
            </a>
          </div>
        </div>
      </div>
    ),
  },
]

const Complements = () => {
  return (
    // <>
    //   <div id="productos" style={{ position: 'relative' }}></div>
    //   <section
    //     className={`${styles.section} ${styles.section__products_and_services}`}
    //   >
    // <div className={`${styles.tabs} ${styles.tabs__services}`}>
    <Tabs
      buttons={Buttons}
      tabBody={TabBody}
      title="Complementos para Planes YPF Ruta"
      initialTitle="Sensores"
    />
    ///* </div>
    //</section>
    //</> */}
  )
}

export default Complements
