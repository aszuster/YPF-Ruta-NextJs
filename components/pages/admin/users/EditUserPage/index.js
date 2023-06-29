import Unauthorized from 'components/Alerts/Unauthorized'
import FormEditUser from 'components/forms/admin/FormEditUser'
import LayoutAdmin from 'components/layouts/LayoutAdmin'
import AdminTitle from 'components/views/admin/AdminTitle'
import { useSession } from 'next-auth/react'
import React from 'react'

const EditUserPage = ({ id }) => {
  const { data } = useSession()
  return (
    <LayoutAdmin>
      {data.user.role.toLowerCase() === 'administrador' ? (
        <>
          <AdminTitle title="Editar Usuario" />
          <FormEditUser id={id} />
        </>
      ) : (
        <Unauthorized />
      )}
    </LayoutAdmin>
  )
}

export default EditUserPage
