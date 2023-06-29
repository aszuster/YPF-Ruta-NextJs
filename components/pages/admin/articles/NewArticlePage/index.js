import LayoutAdmin from 'components/layouts/LayoutAdmin'
import AdminTitle from 'components/views/admin/AdminTitle'
import FormNewArticle from 'components/forms/admin/FormNewArticle'

const NewArticlePage = () => {
  return <LayoutAdmin>
    <AdminTitle title="Nuevo artículo" />
    <FormNewArticle />
  </LayoutAdmin>
}

export default NewArticlePage
