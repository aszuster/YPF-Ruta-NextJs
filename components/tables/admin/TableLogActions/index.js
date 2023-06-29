import styles from './index.module.css'

const REGISTROS = [
  {
    fecha: "11 de octubre de 2022",
    hora: "13:10 hs.",
    usuario: "Arián Fernández",
    action: "update",
    description: "modificó el artículo nro. 43"
  },
  {
    fecha: "8 de octubre de 2022",
    hora: "12:45 hs.",
    usuario: "Alejandra Szuster",
    action: "delete",
    description: "eliminó el webinar nro. 1"
  },
  {
    fecha: "5 de octubre de 2022",
    hora: "16:13 hs.",
    usuario: "Agustín Zalazar",
    action: "create",
    description: "creó el artículo nro. 39"
  },
  {
    fecha: "4 de octubre de 2022",
    hora: "10:10 hs.",
    usuario: "Arián Fernández",
    action: "update",
    description: "activó el artículo nro. 38"
  },
  {
    fecha: "28 de septiembre de 2022",
    hora: "12:52 hs.",
    usuario: "Arián Fernández",
    action: "update",
    description: "activó el artículo nro. 37"
  },
]

export default function TableLogActions({ actions }) {
  return <>
    {REGISTROS.map((registro, index) => (
      <div key={`registro-${index}`} className={`${styles.container__registro} ${styles[registro.action]}`}>
        <div>
          <span className={styles.fecha}>{registro.fecha} - {registro.hora}</span> <span className={styles.user}>{registro.usuario}</span> {registro.description}.
        </div>
      </div>
    ))}
  </>
}