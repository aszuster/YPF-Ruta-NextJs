import Head from 'next/head'
import Layout from 'components/layouts/Layout'
import Planesview from 'components/pages/planes'

const Planes = () => {
  return (
    <>
      <Head>
        <title>Planes | YPF Ruta</title>
        <meta name="description" content="YPF RUTA Analíticas" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Planesview />
      </Layout>
    </>
  )
}

export default Planes
