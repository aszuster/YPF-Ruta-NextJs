import styles from './index.module.css'

export default function SwitchToggle({
  action,
  checked = true,
  disabled = false,
  id,
}) {
  return (
    <div className={styles.switch}>
      <input
        type="checkbox"
        checked={checked}
        id={`switch-${id}`}
        onChange={action}
        disabled={disabled}
      />
      <label htmlFor={`switch-${id}`}>Toggle</label>
    </div>
  )
}
