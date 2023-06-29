import WebinarsAdminPage from 'components/pages/admin/webinars/WebinarsAdminPage'

// Pagination initial variants
const INITIAL_PAGE = 1
const INITIAL_LIMIT = 2

const AdminWebinarsRoute = ({ limit, page, category }) => {
  return <WebinarsAdminPage limit={limit} page={page} category={category} />
}

AdminWebinarsRoute.auth = true

AdminWebinarsRoute.getInitialProps = async (context) => {
  const { limit, page, category } = context.query
  return {
    limit: limit || INITIAL_LIMIT,
    page: page || INITIAL_PAGE,
    category: category,
  }
}

export default AdminWebinarsRoute
