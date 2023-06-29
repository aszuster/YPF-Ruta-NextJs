import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from 'components/layouts/Layout'
import BeneficiosView from 'components/pages/beneficios'

const Beneficios = () => {
  return (
    <Layout>
      <Head>
        <title>Beneficios | YPF Ruta</title>
        <meta name="description" content="YPF RUTA" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="md:flex w-full border-[1px] bg-blanco1 border-gris3 rounded-2xl shadow-sm p-6">
        <br />
        <BeneficiosView />
      </div>
    </Layout>
  )
}

export default Beneficios
