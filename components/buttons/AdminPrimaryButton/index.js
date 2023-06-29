import stiling from './index.module.css'

export default function AdminPrimaryButton({ action, text, styles }) {
  return <button className={stiling.button__primary} style={styles} onClick={action}>{text}</button>
}