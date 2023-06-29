import { Formik, Form, Field } from 'formik'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import promiseToast from 'helpers/promiseToastAlert'
import styles from 'components/forms/admin/form_elements.module.css'
import { newUser } from 'services/users'
import { useRouter } from 'next/router'
import { roles } from 'utils/roles'

const FormNewUser = () => {
  const mutateUsers = useMutation(newUser)
  const queryClient = useQueryClient()
  const router = useRouter()
  const handleSubmit = async (values) => {
    let headers = values
    promiseToast(
      (resolve) =>
        mutateUsers.mutate(
          { ...headers },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(['users'])
              resolve()
              router.push('/admin/users')
            },
          }
        ),
      'Creando usuario',
      'Usuario creado',
      'Error al crear el usuario'
    )
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        userName: '',
        password: '',
        role: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form_article}>
        <div className={styles.form_inputs}>
          <div className={styles.input_wrap}>
            <label>Nombre</label>
            <Field type="text" name="name" id="name" />
          </div>
          <div className={styles.input_wrap}>
            <label>Email</label>
            <Field type="email" name="email" id="email" />
          </div>
        </div>
        <div className={styles.form_inputs}>
          <div className={styles.input_wrap}>
            <label>Nombre de usuario</label>
            <Field type="text" name="userName" id="userName" />
          </div>
          <div className={styles.input_wrap}>
            <label>Contraseña</label>
            <Field type="password" name="password" id="password" />
          </div>
        </div>
        <div className={styles.form_inputs}>
          <div className={styles.input_wrap}>
            <label>Rol</label>
            <Field as="select" name="role" id="role">
              {roles.map((item, index) => {
                return <option key={index}>{item}</option>
              })}
            </Field>
          </div>
        </div>
        <button type="submit" className={styles.button_form}>
          Agregar usuario
        </button>
      </Form>
    </Formik>
  )
}

export default FormNewUser
