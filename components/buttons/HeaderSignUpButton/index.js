import styles from 'components/buttons/HeaderSignUpButton/index.module.css'

export default function HeaderSignUpButton({ type = 'button', action }) {
  return (
    <button
      type={type}
      onClick={action}
      className={`${styles.nav__button} ${styles.nav__button__secondary} ${styles.text} ${styles.text__body_02} ${styles.adherirme}`}
    >
      Adherirme
    </button>
  )
}
