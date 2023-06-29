import Head from 'next/head'
import Layout from 'components/layouts/Layout'
import Articulo from 'components/pages/articulo'

export default function ArticleRoute({ dataSsr }) {
  return (
    <>
      <Head>
        <title>{dataSsr.title} | YPF Ruta</title>
        <meta name="description" content="YPF RUTA Titulo del Articulo" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Articulo data={dataSsr} />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  // Param ID
  const { id } = context.query

  // HostName
  const HOSTNAME = process.env.NEXTAUTH_URL

  // Get Data
  const res = await fetch(`${HOSTNAME}/api/articles/${id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { dataSsr: data } }
}
