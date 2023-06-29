import Head from 'next/head'
import Layout from 'components/layouts/Layout'
import Analiticasview from 'components/pages/analiticas'

const Analiticas = () => {
  return (
    <>
      <Head>
        <title>Analíticas | YPF Ruta</title>
        <meta name="description" content="YPF RUTA Analíticas" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Analiticasview />
      </Layout>
    </>
  )
}

export default Analiticas
