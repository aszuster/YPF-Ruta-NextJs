import EditArticlePage from 'components/pages/admin/articles/EditArticlesPage'

const AdminEditArticleRoute = ({ id, img_path }) => {
  return <EditArticlePage id={id} img_path={img_path} />
}
AdminEditArticleRoute.getInitialProps = async ({ query }) => {
  const { id, img_path } = query
  return {
    id,
    img_path,
  }
}
AdminEditArticleRoute.auth = true
export default AdminEditArticleRoute
