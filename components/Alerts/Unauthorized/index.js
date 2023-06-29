import styles from './index.module.css'

const Unauthorized = () => {
  return (
    <div className={styles.message__container}>
      <div className={styles.message__header}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          //   class="w-6 h-6"
          width="64px"
          height="64px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
        <h1>No autorizado</h1>
      </div>
      <p>No tienes los permisos necesarias para ingresar a esta pagina</p>
    </div>
  )
}

export default Unauthorized
