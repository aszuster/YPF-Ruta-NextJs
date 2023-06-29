import Unauthorized from 'components/Alerts/Unauthorized'
import FormEditArticle from 'components/forms/admin/FormEditArticle'
import LayoutAdmin from 'components/layouts/LayoutAdmin'
import AdminTitle from 'components/views/admin/AdminTitle'
import { useSession } from 'next-auth/react'

const EditArticlePage = ({ id, img_path }) => {
  const { data } = useSession()
  return (
    <LayoutAdmin>
      {data.user.role.toLowerCase() === 'administrador' ? (
        <>
          <AdminTitle title="Editar artículo" />
          <FormEditArticle id={id} img_path={img_path} />
        </>
      ) : (
        <Unauthorized />
      )}
    </LayoutAdmin>
  )
}

export default EditArticlePage
