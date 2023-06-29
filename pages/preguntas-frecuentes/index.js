import Head from 'next/head'
import Layout from 'components/layouts/Layout'
import PreguntasFrecuentesPage from 'components/pages/PreguntasFrecuentes'

const PreguntasFrecuentes = () => {
  return (
    <>
      <Head>
        <title>Preguntas Frecuentes | YPF Ruta</title>
        <meta name="description" content="YPF RUTA Preguntas Frecuentes" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <PreguntasFrecuentesPage />
      </Layout>
    </>
  )
}

export default PreguntasFrecuentes
