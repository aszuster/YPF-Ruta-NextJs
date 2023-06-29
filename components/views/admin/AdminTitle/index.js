import styles from './index.module.css'

export default function AdminTitle({ children, title }) {
  return <>
    <div className={styles.container__top}>
      <h1>{title}</h1>
      <div className={styles.container__children}>
        {children}
      </div>
    </div>
    <div className={styles.separador} />
  </>
}
