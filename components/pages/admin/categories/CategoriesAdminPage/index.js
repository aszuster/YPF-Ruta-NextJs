import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { filterCategories } from 'services/categories'
import FormCategory from 'components/forms/admin/FormCategory'
import LayoutAdmin from 'components/layouts/LayoutAdmin'
import TableCategories from 'components/tables/admin/TableCategories'
import AdminTitle from 'components/views/admin/AdminTitle'
import TablePagination from 'components/tables/TablePagination'
import { useRouter } from 'next/router'

const AdminCategoriesPage = ({ limit, page }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { data, isLoading, isError } = useQuery(
    ['categories', page],
    () => filterCategories({ limit: limit, page: page }),
    { keepPreviousData: true }
  )
  const router = useRouter()
  return (
    <LayoutAdmin>
      <AdminTitle title="Categorias" />
      <FormCategory
        category={selectedCategory}
        setCategory={setSelectedCategory}
      />
      <TableCategories
        categories={data?.data.response}
        isLoading={isLoading}
        selectCategory={setSelectedCategory}
      />
      <TablePagination
        pages={data?.data.pages}
        currentPage={data?.data.currentPage}
        registers={data?.data.registers}
        changePage={(newPage) => {
          router.push({
            query: { page: newPage },
          })
        }}
        title="Categoria"
      />
    </LayoutAdmin>
  )
}

export default AdminCategoriesPage
