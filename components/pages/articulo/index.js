import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from './index.module.css'
import Compartir from 'components/compartir'
import ScrollToTop from 'components/scrollToTop'
import Relacionadas from 'components/views/blog/notas/relacionadas'

export default function Articulo({ data }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta
          property="og:image"
          content={`http://localhost:3000/uploads/${data?.picture}`}
        />
        <meta property="og:title" content={data?.title} />
      </Head>
      <section className={`section ${styles.section__header}`}>
        <div className={styles.relative}>
          <div className={styles.breadcrumbs}>
            <div className={styles.box_compartir}>
              <Compartir data={data} />
            </div>
            <h6 className={`${styles.gris} ${styles.upper} ${styles.din}`}>
              {data?.category} {data?.subCategory}
            </h6>
          </div>
          <h1
            className={`${styles.header__title} ${styles.text} ${styles.negro}`}
          >
            {data?.title}
          </h1>
          <p
            className={`${styles.header__text} ${styles.text} ${styles.medio} ${styles.upper} ${styles.text__body_04} ${styles.date}`}
          >
            {data?.date}
          </p>
        </div>
        <div className={styles.imagen}>
          <Image
            width={640}
            height={352}
            title="Seguridad en camiones"
            alt="Chofer viajando seguro en su camion"
            src={`/uploads/${data?.picture}`}
          />
        </div>
      </section>

      <section className={`section  ${styles.section__text}`}>
        <div dangerouslySetInnerHTML={{ __html: data?.body }}></div>
      </section>

      <ScrollToTop />

      <section className={`section ${styles.section__carousel}`}>
        <div className={styles.maxed}>
          <Compartir />
        </div>
      </section>
      <Relacionadas category={data?.category} />
    </>
  )
}
