import Head from 'next/head'
import Script from 'next/script'
import Layout from 'components/layouts/Layout'
import Homeview from 'components/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Conectate con una nueva plataforma de soluciones para tu flota | YPF
          Ruta
        </title>
        <meta name="description" content="YPF RUTA" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Homeview />
      </Layout>
      <Script src="/assets/js/jquery-3.6.0.min.js"></Script>
      <Script src="/assets/js/yermap.js" strategy="lazyOnload" />
      <Script src="https://maps.google.com/maps/api/js?v=3&key=AIzaSyAmtciwILxeaNUVQFzaBaj3MBNaolVz7gc&libraries=places&language=es&channel=YER"></Script>
    </>
  )
}
