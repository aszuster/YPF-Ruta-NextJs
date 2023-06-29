import { useMutation, useQueryClient } from '@tanstack/react-query'
import AdminIconButton from 'components/buttons/AdminIconButton'
import styles from 'components/tables/light_table.module.css'
import promiseToast from 'helpers/promiseToastAlert'
import { useRouter } from 'next/router'
import { deleteCategory } from 'services/categories'

const TableCategories = ({ categories, isLoading, selectCategory }) => {
  const { mutate, isSuccess } = useMutation(deleteCategory)
  const router = useRouter()
  const queryClient = useQueryClient()
  const handleDelete = (id) => {
    promiseToast(
      (resolve) =>
        mutate(id, {
          onSuccess: () => {
            queryClient.removeQueries(['category', id], { exact: true })
            queryClient.invalidateQueries(['categories'])
            resolve()
          },
        }),
      'Eliminando la categoria',
      'Categoria eliminada',
      'Error al eliminar la categoria'
    )
  }
  return (
    <>
      <table className={styles.styled_table}>
        <thead>
          <tr>
            <th width={30}>ID</th>
            <th width={30}></th>
            <th>Nombre</th>
            <th>Creado en</th>
            <th width={30}></th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            categories.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <AdminIconButton action={() => selectCategory(item)}>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.2415 3.82907C17.6121 4.23861 17.5804 4.87098 17.1709 5.24152L6.86563 14.5653L6.38741 16L7.61338 16L18.3273 6.26004C18.736 5.88854 19.3684 5.91865 19.7399 6.32731C20.1114 6.73597 20.0813 7.36842 19.6727 7.73992L8.67266 17.7399C8.48859 17.9073 8.24875 18 7.99998 18L4.99998 18C4.67854 18 4.37669 17.8455 4.18874 17.5847C4.00079 17.3239 3.94965 16.9887 4.0513 16.6838L5.0513 13.6838C5.10574 13.5204 5.20142 13.3739 5.32907 13.2584L15.8291 3.75845C16.2386 3.38791 16.871 3.41953 17.2415 3.82907Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 21C4 20.4477 4.44772 20 5 20L19 20C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22L5 22C4.44772 22 4 21.5523 4 21Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.7929 3.79286C16.1834 3.40234 16.8166 3.40234 17.2071 3.79286L19.7071 6.29286C20.0976 6.68339 20.0976 7.31655 19.7071 7.70707C19.3166 8.0976 18.6834 8.0976 18.2929 7.70707L15.7929 5.20707C15.4024 4.81655 15.4024 4.18339 15.7929 3.79286Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.2928 9.70706L12.7928 7.20706L14.207 5.79285L16.707 8.29285L15.2928 9.70706Z"
                        />
                      </svg>
                    </AdminIconButton>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.created_at}</td>
                  <td>
                    <AdminIconButton action={() => handleDelete(item.id)}>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 7C6.55228 7 7 7.44772 7 8V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V8C5 7.44772 5.44772 7 6 7Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 8C10.5523 8 11 8.44772 11 9V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V9C9 8.44772 9.44772 8 10 8Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14 8C14.5523 8 15 8.44772 15 9V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V9C13 8.44772 13.4477 8 14 8Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H9C8.44772 4 8 3.55228 8 3Z"
                        />
                      </svg>
                    </AdminIconButton>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
}

export default TableCategories
