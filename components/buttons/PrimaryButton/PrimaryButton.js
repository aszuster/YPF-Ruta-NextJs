import styles from 'components/buttons/PrimaryButton/index.module.css'

export default function PrimaryButton({ text, type = 'submit' }) {
  return (
    <button
      className={`${styles.button} ${styles.button__large} ${styles.button__primary}`}
      type={type}
    >
      {text}
    </button>
  )
}
