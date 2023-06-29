import Head from 'next/head'
import Layout from 'components/layouts/Layout'
import WebinarsView from 'components/pages/webinars'

const INITIAL_PAGE = 1
const INITIAL_SORT = 'desc'
const INITIAL_Q = ''
const INITIAL_CATEGORIES = []

const Webinars = ({ page, sort, q, categories }) => {
  return (
    <>
      <Head>
        <title>Webinars | YPF Ruta</title>
        <meta
          name="description"
          content="Conocé toda las ventajas y beneficios de tener YPF Ruta para tu flota. Control de combustible, distancia, rendimiento y mucho más."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <WebinarsView page={page} sort={sort} q={q} categories={categories} />
      </Layout>
    </>
  )
}

Webinars.getInitialProps = async (context) => {
  const { page, sort, q, categories } = context.query
  return {
    page: page || INITIAL_PAGE,
    sort: sort || INITIAL_SORT,
    q: q || INITIAL_Q,
    categories: categories || INITIAL_CATEGORIES,
  }
}

export default Webinars
