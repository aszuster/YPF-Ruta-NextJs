import Unauthorized from 'components/Alerts/Unauthorized'
import FormNewUser from 'components/forms/admin/FormNewUser'
import LayoutAdmin from 'components/layouts/LayoutAdmin'
import AdminTitle from 'components/views/admin/AdminTitle'
import { useSession } from 'next-auth/react'

const NewUserPage = () => {
  const { data } = useSession()
  return (
    <LayoutAdmin>
      {data.user.role.toLowerCase() === 'administrador' ? (
        <>
          <AdminTitle title="Nuevo usuario" />
          <FormNewUser />
        </>
      ) : (
        <Unauthorized />
      )}
    </LayoutAdmin>
  )
}

export default NewUserPage
