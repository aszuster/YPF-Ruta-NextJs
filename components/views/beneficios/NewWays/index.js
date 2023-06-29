import Image from 'next/image'
import styles from './index.module.css'

const NewWays = () => {
  return (
    <section className={`section ${styles.section__new_ways}`}>
      <h2 className={`${styles.new_ways__title} text text--h1`}>
        La nueva forma de gestionar tu cuenta
      </h2>
      <ul className={`${styles.new_ways__list} ${styles.new_way_list}`}>
        <li className={styles.new_ways_list__item}>
          <h3 className={`${styles.new_way__title} text text--h5`}>
            Portal de autogestión on-line
          </h3>
          <ul className="list list--with-checks">
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Modificación en tiempo real
            </li>
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Acceso por Perfiles
            </li>
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Alta y baja de tarjetas y conductores
            </li>
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Cambios en los límites de consumo
            </li>
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Habilitación y bloqueo de productos y estaciones
            </li>
          </ul>
        </li>
        <li className={styles.new_ways_list__item}>
          <h3 className={`${styles.new_way__title} text text--h5`}>
            Facturación centralizada y electrónica
          </h3>
          <ul className="list list--with-checks">
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Consumos consolidados en una única factura
            </li>
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Recupero de IVA
            </li>
          </ul>
        </li>
        <li className={styles.new_ways_list__item}>
          <h3 className={`${styles.new_way__title} text text--h5`}>
            Configuración de tarjetas
          </h3>
          <ul className="list list--with-checks">
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Personalización de los límites de consumo de cada tarjeta por
              rubro
            </li>
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Clave PIN por cada conductor para validar las operaciones
            </li>
          </ul>
        </li>
        <li className={styles.new_ways_list__item}>
          <h3 className={`${styles.new_way__title} text text--h5`}>
            Límites de Crédito
          </h3>
          <ul className="list list--with-checks">
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Definición de límites por: tarjeta, contrato, transacción y
              cantidad de transacciones
            </li>
          </ul>
        </li>
        <li className={styles.new_ways_list__item}>
          <h3 className={`${styles.new_way__title} text text--h5`}>
            Gestión de Contratos
          </h3>
          <ul className="list list--with-checks">
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Administración de sub-cuentas
            </li>
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Auto-consulta de saldos
            </li>
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Transferencia de créditos entre contratos
            </li>
          </ul>
        </li>
        <li className={styles.new_ways_list__item}>
          <h3 className={`${styles.new_way__title} text text--h5`}>
            Productos
          </h3>
          <ul className="list list--with-checks">
            <li
              className={`${styles.list__item_benefits} list__item text text--body-02`}
            >
              Habilitación de rubros por cada tarjeta: combustible, GNC,
              lubricantes, servicios, tienda
            </li>
          </ul>
        </li>
      </ul>
      <div className={styles.grid_wrapper}>
        <div className={styles.new_ways__image}>
          <Image
            src="/images/beneficios/new-ways/trucks.png"
            alt="YPF Ruta - Una nueva plataforma de soluciones para tu flota"
            title="YPF Ruta - Una nueva plataforma de soluciones para tu flota"
            //   width={500}
            //   height={500}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export default NewWays
