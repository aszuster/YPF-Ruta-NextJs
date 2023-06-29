import LayoutAdmin from 'components/layouts/LayoutAdmin'
import AdminTitle from 'components/views/admin/AdminTitle'
import TableLogActions from 'components/tables/admin/TableLogActions'

const AdminPage = () => {
  return <LayoutAdmin>
    <AdminTitle title="Registro de acciones" />
    <TableLogActions />
  </LayoutAdmin>
}

AdminPage.auth = true

export default AdminPage
