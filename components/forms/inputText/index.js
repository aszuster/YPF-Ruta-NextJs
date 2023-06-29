import { ErrorMessage, Field } from 'formik'
import styles from './index.module.css'

export const InputTextFormik = ({
  name,
  placeholder = '',
  label = 'Label',
  type,
  readOnly,
  error,
}) => {
  return (
    <div
      className={`${styles.input_wrap} ${styles.width100} ${
        error ? `${styles.error_message_input}` : null
      }`}
    >
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        id={name}
        type={type ? type : 'text'}
        placeholder={placeholder}
        readOnly={readOnly}
      />
      <ErrorMessage
        className={styles.error_message}
        name={name}
        component="p"
      />
    </div>
  )
}

export default InputTextFormik
