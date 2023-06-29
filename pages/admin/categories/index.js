import AdminCategoriesPage from 'components/pages/admin/categories/CategoriesAdminPage'

// Pagination initial variants
const INITIAL_PAGE = 1
const INITIAL_LIMIT = 3

const AdminCategoriesRoute = ({ limit, page }) => {
  return <AdminCategoriesPage limit={limit} page={page} />
}

AdminCategoriesRoute.auth = true

AdminCategoriesRoute.getInitialProps = async (context) => {
  const { limit, page } = context.query
  return {
    limit: limit || INITIAL_LIMIT,
    page: page || INITIAL_PAGE,
  }
}

export default AdminCategoriesRoute
