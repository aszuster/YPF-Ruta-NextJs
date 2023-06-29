import ArticlesAdminPage from 'components/pages/admin/articles/ArticlesAdminPage'

// Pagination initial variants
const INITIAL_PAGE = 1
const INITIAL_LIMIT = 8

const AdminArticlesRoute = ({ limit, page, category }) => {
  return <ArticlesAdminPage limit={limit} page={page} category={category} />
}

AdminArticlesRoute.auth = true

AdminArticlesRoute.getInitialProps = async (context) => {
  const { limit, page, category } = context.query
  return {
    limit: limit || INITIAL_LIMIT,
    page: page || INITIAL_PAGE,
    category: category,
  }
}

export default AdminArticlesRoute
