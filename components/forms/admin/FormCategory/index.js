import { Field, Form, Formik } from 'formik'
import styles from 'components/forms/admin/form_elements.module.css'
import promiseToast from 'helpers/promiseToastAlert'
import { createCategory, updateCategory } from 'services/categories'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const FormCategory = ({ category, setCategory }) => {
  // Queries
  const mutateCategories = useMutation(createCategory)
  const { mutate: mutateEdit } = useMutation(updateCategory)
  const queryClient = useQueryClient()
  const router = useRouter()
  //Form action
  const handleSubmit = async (values) => {
    let header = values
    if (category) {
      const { id } = category
      header = { ...header, id: id }
      promiseToast(
        (resolve) => {
          mutateEdit([{ id }, { ...header }], {
            onSuccess: () => {
              queryClient.invalidateQueries(['category'], id)
              queryClient.invalidateQueries(['categories'])
              resolve()
              router.push('/admin/categories')
            },
          })
        },
        'Editando categoria',
        'Categoria editada',
        'Error al editar el categoria'
      )
      setCategory(null)
    } else {
      promiseToast(
        (resolve) => {
          mutateCategories.mutate(
            { ...header },
            {
              onSuccess: () => {
                queryClient.invalidateQueries(['categories'])
                resolve()
                router.push('/admin/categories')
              },
            }
          )
        },
        'Creando categoria',
        'Categoria creada',
        'Error al crear el categoria'
      )
    }
  }
  return (
    <Formik
      initialValues={{
        name: category ? category.name : '',
      }}
      enableReinitialize
      validate={(values) => {
        const errors = {}
        if (!values.name) {
          errors.name = 'Por favor, complete el nombre'
        }
        return errors
      }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values)
        resetForm({ values: '' })
      }}
    >
      {({ errors }) => (
        <Form
          className={styles.form_article}
          encType="multipart/form-data"
          style={{ height: 'auto' }}
        >
          <div className={styles.form_inputs} style={{ marginBottom: '10px' }}>
            <div
              className={`${styles.input_wrap} ${
                errors.name ? `${styles.error_message_input}` : null
              }`}
            >
              <label> Nombre (*)</label>
              <Field type="text" name="name" id="name" />
              <div className={styles.error_message}>
                {errors.name ? <p> {errors.name}</p> : null}
              </div>
            </div>
          </div>
          <button type="submit" className={styles.button_form}>
            {category ? 'Editar ' : 'Agregar '}
            categoria
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FormCategory
