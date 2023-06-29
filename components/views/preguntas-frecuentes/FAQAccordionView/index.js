import FAQAccordion from 'components/accordions/FAQAccordion'
import styles from 'components/pages/PreguntasFrecuentes/index.module.css'

const requisitos = [
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Qué requisitos debo cumplir para poder ingresar a YPF Ruta?{' '}
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} ${styles.text} text--body01`}>
        <p>
          Contar con una flota de vehículos (liviana, mediana o pesada).
          <br />
          Para modalidad de <strong> pago con crédito</strong> (disponible en
          todos los planes) deberás contar con:
        </p>
        <ul className={`list list--with-checks ${styles.list__with_checks}`}>
          <li className="list__item">
            Estados contables para sociedades regulares o declaración jurada de
            impuestos a las ganancias para personas físicas y de sociedades de
            hecho.
          </li>
          <li className="list__item">Flota de vehículos</li>
        </ul>
      </div>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Para qué tipo de empresas está pensado el programa?
      </h3>
    ),
    content: () => (
      <p className={`${styles.question__answer} ${styles.text} text__body01`}>
        Para cualquier empresa, pequeña mediana o grande de cualquier rubro o
        segmento:
        <br />
        <br />
        - Logística y Distribución
        <br />
        - Transporte de Cargas
        <br />
        - Retail/Servicios
        <br />
        - Transporte de Pasajeros
        <br />
        - Oil and Gas
        <br />
        - Organismos Públicos
        <br />
        - Minería
        <br />
        - Otros
        <br />
      </p>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Para qué tipo de flotas está pensado?
      </h3>
    ),
    content: () => (
      <p className={`${styles.question__answer} text text__body01`}>
        - Autos
        <br />
        - Camiones
        <br />
        - Utilitarios
        <br />
        - Maquinarias
        <br />
        - Colectivos
        <br />
        - Motos
        <br />- Otros
      </p>
    ),
  },
]

const funcionamiento = [
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Cómo funciona YPF Ruta?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} text text--body01`}>
        <p>
          <strong>
            Es un sistema práctico y ágil que te permite comenzar a utilizarlo
            en tan solo unos pocos pasos:
          </strong>
        </p>
        <ol className={`list ${styles.list__ordered}`}>
          <li className={styles.list__item}>
            Solicitás el plan que más se adecua a tus necesidades.
          </li>
          <li className={styles.list__item}>
            Expertos te asesoran y ayudan a darte de alta en el sistema.
          </li>
          <li className={styles.list__item}>
            Recibís las tarjetas para comenzar a operar y las claves de acceso.
          </li>
          <li className={styles.list__item}>
            En caso de haber solicitado un plan con equipamiento, se coordinan
            las fechas y lugares de instalación.
          </li>
          <li className={styles.list__item}>
            Comenzá a disfrutar de YPF RUTA.
          </li>
        </ol>
      </div>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Qué controles tengo disponibles sobre mi flota de vehículos?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} text text--body01`}>
        <p>YPF Ruta te permite establecer distintos niveles de controles:</p>
        <ul className={`list list--with-checks ${styles.list__with_checks}`}>
          <li className="list__item">
            A través de la plataforma de gestión de cuenta, el gestor de la
            flota puede restringir las estaciones y horarios permitidos para la
            carga, el tipo de producto que el conductor podrá consumir, límites
            por transacción/día/semana y límite mensual de consumo. Además,
            mediante autogestión puede dar de alta, baja y modificar las
            tarjetas, conductores y los controles mencionados anteriormente.
          </li>
          <li className="list__item">
            A través de la plataforma de central de monitoreo (disponible desde
            el plan RT Flexible), el administrador puede acceder en tiempo real
            al rastreo satelital de su flota con reportes sobre recorridos,
            distancia recorrida, visitas, alertas y analítica avanzada sobre
            perfomance de conducción, uso de flota y validación de cargas.
          </li>
        </ul>
      </div>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿La analítica avanzada está incluida en todos los planes?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} text text--body01`}>
        <p>
          No, actualmente solo está disponible en el plan{' '}
          <strong>RT Avanzado</strong>.
        </p>
      </div>
    ),
  },
]

const beneficios = [
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Qué beneficios obtengo al formar parte de YPF Ruta?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} text text--body01`}>
        <p>
          A parte de unirte a la red más grande del país con más de 1500
          estaciones, ofrecemos servicios que van más allá de lo esperado.
          Contamos con analítica avanzada sobre conductas de manejo, consumo
          promedio, uso de flota, control total de los consumos que permiten a
          las empresas optimizar sus operaciones de forma simple y ágil.
        </p>
        <a
          className={`${styles.question__action} button button--large button--primary`}
          href="./beneficios.html"
        >
          Ver beneficios
        </a>
      </div>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Qué ventajas competitivas posee YPF Ruta?
      </h3>
    ),
    content: () => (
      <p className={`${styles.question__answer} text text--body01`}>
        Somos la única empresa en América Latina que integra un sistema de
        abastecimiento y gestión de combustible con telemática vehicular para
        brindar soluciones que permiten a nuestros clientes ser más eficientes
        en sus operaciones.
      </p>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Qué productos están disponibles para consumir dentro de YPF Ruta?
      </h3>
    ),
    content: () => (
      <p className={`${styles.question__answer} text text--body01`}>
        Todos los productos que podrás encontrar en la estación (combustible,
        lubricantes, AZUL 32, productos de la FULL y BOXES). El gestor de flota
        podrá restringir permisos por persona, vehículo, horarios de carga, tipo
        de producto a consumir, límite de transacciones.
        <br />
        <br />
        <a
          className={`${styles.question__action} button button--large button--primary`}
          href="productos-y-servicios.html"
        >
          Conocé mas
        </a>
      </p>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Qué descuentos tengo por asociarme a YPF Ruta?
      </h3>
    ),
    content: () => (
      <p className={`${styles.question__answer} text text--body01`}>
        Precio y plazo diferencial en combustible y lubricantes según tu nivel
        de consumo.
      </p>
    ),
  },
]

const costo = [
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Qué costo tiene el servicio?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} ${styles.text} text--body01`}>
        <p>
          El costo del servicio es en función del plan seleccionado. Completá el
          formulario y solicitá tu presupuesto.
        </p>
        <a
          className={`${styles.question__action} button button--large button--primary`}
          href="#contact"
        >
          Formulario
        </a>
      </div>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Los equipos GPS se compran?
      </h3>
    ),
    content: () => (
      <p className={`${styles.question__answer} text text--body01`}>
        No, se entregan en comodato mediante un contrato por 24 meses con
        renovación anual automática.
      </p>
    ),
  },
]

const equipos = [
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Realizan instalaciones en todo el país?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} text text--body01`}>
        <p>Si, contamos con la red de servicio más amplia del país.</p>
        <a
          className={`${styles.question__action} button button--large button--primary`}
          target="_blank"
          rel="noreferrer"
          href="https://www.ypf.com/Paginas/mapa/home.html?filter=ruta"
        >
          Estaciones de Servicio
        </a>
      </div>
    ),
  },
]

const dudas = [
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Cómo hago para comunicarme con un asesor?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} text text--body01`}>
        <p>
          Para adherirte al programa YPF RUTA comunicate al mail:{' '}
          <a href="mailto:adhesion@ruta.ypf.com">adhesion@ruta.ypf.com</a>
          <br />
          Si ya sos cliente, comunicate por email a:{' '}
          <a href="soporte@ruta.ypf.com">soporte@ruta.ypf.com</a> o comunicate
          al 0810-122-2020.
        </p>
      </div>
    ),
  },
]

const appRuta = [
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Para qué sirve la App YPF Ruta?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} text text--body01`}>
        <p>
          La App YPF Ruta funciona como <strong>billetera virtual</strong> que
          te permite gestionar tus tarjetas e iniciar compras de forma más{' '}
          <strong>simple y ágil</strong>.<br />
          <br />
          <strong>
            Importante: La App YPF Ruta no funciona con sistema de puntos ni
            beneficios de ServiClub.
          </strong>
        </p>
      </div>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Qué necesito para utilizar la App YPF Ruta?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} text text--body01`}>
        <p>Para utilizar la App YPF Ruta deberás:</p>
        <br />
        <br />
        <ul className={`list list--with-checks ${styles.list__with_checks}`}>
          <li className="list__item">Contar con un usuario ServiClub</li>
          <p>
            Si no contas aún con un usuario Serviclub, no te preocupes. Podrás
            generarlo desde la App YPF Ruta y disfrutar de los beneficios de
            ambos programas.
          </p>
          <br />
          <br />
          <li className="list__item">
            Estar habilitado para el uso de la App{' '}
          </li>
          <p>
            Es necesario que el administrador de tu contrato te habilite desde
            el Portal de Autogestión para usar la App.
          </p>
          <p>
            Si todavía no estás habilitado, comunícate con el administrador de
            tu contrato e indicale el correo que tenés registrado en ServiClub.{' '}
          </p>
          <br />
          <br />
          <p>
            <strong>Importante</strong>. El correo electrónico que cargue el
            administrador de tu contrato en el Portal de Autogestión debe ser el
            mismo que tenés registrado el conductor en ServiClub.
            <br />
            Una vez que estés habilitado, recibirás un correo de bienvenida.
            Tendrás que seguir los pasos indicados en ese correo para acceder a
            la App.
          </p>
        </ul>
        <br />
        <br />
        <p>
          Para conocer más sobre el uso de la App YPF Ruta, podes acceder a un
          tutorial en el botón a continuación.
        </p>
        <br />
        <br />
        <a
          className={`${styles.question__action} button button--large button--primary`}
          target="_blank"
          rel="noreferrer"
          href="https://youtu.be/zVDp-yF6g4w"
        >
          Tutorial
        </a>
      </div>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Qué operaciones puedo realizar con la App YPF Ruta?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} ${styles.text} text--body01`}>
        <p
          className={`${styles.question__answer} ${styles.text} text--body01`}
        ></p>
        <ul className={`list list--with-checks ${styles.list__with_checks}`}>
          <li className="list__item">
            Las mismas operaciones de YPF Ruta que realizás con la tarjeta
            física.
          </li>
          <li className="list__item">
            Iniciar compras desde tu celular en nuestras estaciones de servicio.
          </li>
          <li className="list__item">Consultar el saldo de tus tarjetas</li>
          <li className="list__item">
            Consultar los comprobantes de tus últimas transacciones.
          </li>
        </ul>
        <br />
        <br />
        <p>
          Para conocer más sobre el uso de la App YPF Ruta, podes acceder a un
          tutorial en el botón a continuación.
        </p>
        <br />
        <br />
        <a
          className={`${styles.question__action} button button--large button--primary`}
          target="_blank"
          rel="noreferrer"
          href="https://youtu.be/zVDp-yF6g4w"
        >
          Tutorial
        </a>
      </div>
    ),
  },
  {
    button: () => (
      <h3 className={`${styles.question__title} ${styles.text} text--h5`}>
        ¿Dónde la puedo descargar?
      </h3>
    ),
    content: () => (
      <div className={`${styles.question__answer} ${styles.text} text--body01`}>
        <p
          className={`${styles.question__answer} ${styles.text} text--body01`}
        ></p>
        <ul className="">
          <li className="">
            <a
              className={`${styles.question__action} button button--large button--primary`}
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/ar/app/ypf-ruta/id1587760119"
            >
              IOS
            </a>
          </li>
          <li className="">
            <a
              className={`${styles.question__action} button button--large button--primary`}
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.ypf.ypfruta"
            >
              Android
            </a>
          </li>
        </ul>
        <br />
        <br />
      </div>
    ),
  },
]

export default function FAQAccordionView() {
  return (
    <>
      <section className={`section ${styles.section__faq}`}>
        <div className={styles.question_group}>
          <h2 className={`${styles.question_group__title} text text--h4`}>
            Requisitos
          </h2>
          <div className={styles.question_group__content}>
            <FAQAccordion list={requisitos} />
          </div>
        </div>
        <div className={styles.question_group}>
          <h2 className={`${styles.question_group__title} text text--h4`}>
            Funcionamiento
          </h2>
          <div className={styles.question_group__content}>
            <FAQAccordion list={funcionamiento} />
          </div>
        </div>
        <div className={styles.question_group}>
          <h2 className={`${styles.question_group__title} text text--h4`}>
            Beneficios
          </h2>
          <div className={styles.question_group__content}>
            <FAQAccordion list={beneficios} />
          </div>
        </div>

        <div className={styles.question_group}>
          <h2 className={`${styles.question_group__title} text text--h4`}>
            Costo
          </h2>
          <div className={styles.question_group__content}>
            <FAQAccordion list={costo} />
          </div>
        </div>

        <div className={styles.question_group}>
          <h2 className={`${styles.question_group__title} text text--h4`}>
            Equipos e Instalaciones
          </h2>
          <div className={styles.question_group__content}>
            <FAQAccordion list={equipos} />
          </div>
        </div>

        <div className={styles.question_group}>
          <h2 className={`${styles.question_group__title} text text--h4`}>
            Dudas y Consultas
          </h2>
          <div className={styles.question_group__content}>
            <FAQAccordion list={dudas} />
          </div>
        </div>

        <div className={styles.question_group}>
          <h2 className={`${styles.question_group__title} text text--h4`}>
            APP YPF Ruta
          </h2>
          <div className={styles.question_group__content}>
            <FAQAccordion list={appRuta} />
          </div>
        </div>
      </section>
    </>
  )
}
