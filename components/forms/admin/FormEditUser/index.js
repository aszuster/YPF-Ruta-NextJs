import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Field, Form, Formik } from 'formik'
import promiseToast from 'helpers/promiseToastAlert'
import styles from 'components/forms/admin/form_elements.module.css'
import { editUser, userId } from 'services/users'
import { roles } from 'utils/roles'

const FormEditUser = ({ id }) => {
  const { mutate: mutateEdit } = useMutation(editUser)
  const queryClient = useQueryClient()
  const router = useRouter()
  const { data: initialProject, isLoading: isLoadingInitial } = useQuery(
    ['user', id],
    () => userId({ id })
  )
  const handleSubmit = async (values) => {
    let headers = values
    headers = {
      ...headers,
      id: id,
    }
    promiseToast(
      (resolve) =>
        mutateEdit([{ id }, { ...headers }], {
          onSuccess: () => {
            queryClient.invalidateQueries(['user'], id)
            queryClient.invalidateQueries(['users'])
            resolve()
            router.push('/admin/users')
          },
        }),
      'Editando el usuario',
      'Usuario Editado',
      'Error al editar el usuario'
    )
  }
  return (
    <>
      {!isLoadingInitial && (
        <Formik
          initialValues={{
            name: initialProject?.data.name,
            email: initialProject?.data.email,
            userName: initialProject?.data.userName,
            password: '',
            role: initialProject?.data.role,
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
              Editar usuario
            </button>
          </Form>
        </Formik>
      )}
    </>
  )
}

export default FormEditUser
