import Head from 'next/head'
import Layout from 'components/layouts/Layout'
import ProductosyServiciosPage from 'components/pages/productos-y-servicios'

const ProductosyServicios = () => {
  return (
    <>
      <Head>
        <title>Productos y Servicios | YPF Ruta</title>
        <meta name="description" content="YPF RUTA Productos y Servicios" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <ProductosyServiciosPage />
      </Layout>
    </>
  )
}

export default ProductosyServicios
