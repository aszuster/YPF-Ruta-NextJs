import EditWebinarPage from 'components/pages/admin/webinars/EditWebinarsPage'

const AdminEditWebinarRoute = ({ id, img_path }) => {
  return <EditWebinarPage id={id} img_path={img_path} />
}

AdminEditWebinarRoute.getInitialProps = async ({ query }) => {
  const { id, img_path } = query

  return {
    id,
    img_path,
  }
}

AdminEditWebinarRoute.auth = true
export default AdminEditWebinarRoute
