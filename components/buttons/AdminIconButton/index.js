import styling from './index.module.css'

export default function AdminIconButton({ children, action, active, styles }) {
  return <button className={`${styling.icon__button} ${active && styling.active}`} onClick={action} styles={styles}>
    {children}
  </button>
}
