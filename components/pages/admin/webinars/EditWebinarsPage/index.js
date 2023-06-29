import Unauthorized from 'components/Alerts/Unauthorized'
import FormEditWebinar from 'components/forms/admin/FormEditWebinar'
import LayoutAdmin from 'components/layouts/LayoutAdmin'
import AdminTitle from 'components/views/admin/AdminTitle'
import { useSession } from 'next-auth/react'

const EditWebinarPage = ({ id, img_path }) => {
  const { data } = useSession()

  return (
    <LayoutAdmin>
      {data.user.role.toLowerCase() === 'administrador' ? (
        <>
          <AdminTitle title="Editar webinar" />
          <FormEditWebinar id={id} img_path={img_path} />
        </>
      ) : (
        <Unauthorized />
      )}
    </LayoutAdmin>
  )
}

export default EditWebinarPage
