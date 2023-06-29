import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Formik, Form, Field } from 'formik'
import { filterWebinars } from 'services/webinars'
// Components
import LayoutAdmin from 'components/layouts/LayoutAdmin'
import AdminTitle from 'components/views/admin/AdminTitle'
import AdminIconButton from 'components/buttons/AdminIconButton'
import TableWebinars from 'components/tables/admin/TableWebinars'
// Styles
import styles from './index.module.css'
import TablePagination from 'components/tables/TablePagination'
import { allCategories } from 'services/categories'

const WebinarsAdminPage = ({ limit, page, category }) => {
  const [showFilters, setShowFilters] = useState(false)
  //Queries
  const { data: categories, isLoading: isLoadingCategories } = useQuery(
    ['categories'],
    () => allCategories()
  )
  const { data, isLoading, isError } = useQuery(
    ['webinars', page, category],
    () => filterWebinars({ limit: limit, page: page, category: category })
  )
  //Submit form
  const handleSubmit = (values) => {
    router.push({
      query: { category: values.category },
    })
  }
  const router = useRouter()
  return (
    <LayoutAdmin>
      {/* Title and Filters */}
      <AdminTitle title="Webinars">
        <AdminIconButton
          action={() => router.push('/admin/webinars/new_webinar')}
        >
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
              d="M14 2C14.5523 2 15 2.44772 15 3V7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H14C13.4477 9 13 8.55228 13 8V3C13 2.44772 13.4477 2 14 2Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 4C4 2.89543 4.89543 2 6 2H14.5858C15.1162 2 15.6249 2.21071 16 2.58579L19.4142 6L18.7071 6.70711L19.4142 6C19.7893 6.37507 20 6.88378 20 7.41421V13C20 13.5523 19.5523 14 19 14C18.4477 14 18 13.5523 18 13L18 7.41421L14.5858 4L6 4V20H12C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22H6C4.89543 22 4 21.1046 4 20V4Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 20H15V18H21V20Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 22V16H19V22H17Z"
            />
          </svg>
        </AdminIconButton>
        <AdminIconButton
          action={() => setShowFilters((prev) => !prev)}
          active={showFilters && true}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={20}
            width={20}
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <defs></defs>
            <g>
              <path d="M27.49,2h-22A1.54,1.54,0,0,0,4,3.53v2a1.53,1.53,0,0,0,.31.93l7.83,10.36A4.32,4.32,0,0,1,13,19.41v4.92a3.57,3.57,0,0,0,1.36,2.8l3.22,2.5a1.52,1.52,0,0,0,.93.32,1.44,1.44,0,0,0,.67-.16A1.5,1.5,0,0,0,20,28.42l0-9a4.32,4.32,0,0,1,.86-2.6L28.69,6.47A1.53,1.53,0,0,0,29,5.54v-2A1.52,1.52,0,0,0,27.49,2ZM27,5.39,19.27,15.61A6.37,6.37,0,0,0,18,19.43l0,8-2.45-1.89A1.57,1.57,0,0,1,15,24.33V19.41a6.29,6.29,0,0,0-1.27-3.79L6,5.39V4H27Z" />
            </g>
          </svg>
        </AdminIconButton>
      </AdminTitle>

      {/* Filtros */}
      {showFilters && (
        <div className={styles.filters_wrap}>
          <h3>Filtrar por:</h3>
          <Formik
            initialValues={{
              category: '',
            }}
            onSubmit={handleSubmit}
          >
            <Form className={styles.filters_form}>
              <div className={styles.filter}>
                <label>Categoria:</label>
                {!isLoadingCategories && (
                  <Field
                    as="select"
                    className={styles.filter_select}
                    name="category"
                    id="category"
                  >
                    {categories?.data.response.map((item) => {
                      return <option key={item.id}>{item.name}</option>
                    })}
                  </Field>
                )}
              </div>
              <button type="submit" className={styles.btn_edit}>
                Filtrar
              </button>
              <button
                type="button"
                className={styles.btn_edit}
                onClick={() => router.push('/admin/webinars')}
              >
                Limpiar filtros
              </button>
            </Form>
          </Formik>
        </div>
      )}

      {/* Tabla */}
      <TableWebinars webinars={data?.data.response} isLoading={isLoading} />

      {/* Paginación  */}
      <TablePagination
        pages={data?.data.pages}
        currentPage={data?.data.currentPage}
        registers={data?.data.registers}
        changePage={(newPage) => {
          router.push({
            query: { page: newPage },
          })
        }}
        title="Webinars"
      />
    </LayoutAdmin>
  )
}

export default WebinarsAdminPage
