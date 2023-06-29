import LayoutAdmin from 'components/layouts/LayoutAdmin'
import AdminTitle from 'components/views/admin/AdminTitle'
import FormNewWebinar from 'components/forms/admin/FormNewWebinar'

const NewWebinarPage = () => {
  return (
    <LayoutAdmin>
      <AdminTitle title="Nuevo webinar" />
      <FormNewWebinar />
    </LayoutAdmin>
  )
}

export default NewWebinarPage
