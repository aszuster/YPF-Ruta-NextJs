import EditUserPage from 'components/pages/admin/users/EditUserPage'

const AdminEditUserRoute = ({ id }) => {
  return <EditUserPage id={id} />
}

AdminEditUserRoute.getInitialProps = async ({ query }) => {
  const { id } = query
  return {
    id,
  }
}
AdminEditUserRoute.auth = true
export default AdminEditUserRoute
