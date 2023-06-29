import styles from 'components/buttons/FooterSignUpButton/index.module.css'

export default function FooterSignUpButton({ type = 'button', action }) {
  return (
    <button
      type={type}
      onClick={action}
      className={`${styles.footer__button} ${styles.adherirmef}`}
    >
      Adherirme
    </button>
  )
}
