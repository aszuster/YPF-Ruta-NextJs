import Link from 'next/link'
import Image from 'next/image'
import styles from 'components/cards/ArticleCard/index.module.css'

export default function ArticleCard({ data }) {
  return (
    <Link href={`/blog/${data?.id}`}>
      <a rel="noreferrer" className={styles.card}>
        <Image
          width={639}
          height={351}
          layout={'responsive'}
          title="Seguridad en camiones"
          alt="Chofer viajando seguro en su camion"
          src={`/uploads/${data?.picture}`}
        />
        <div className={styles.card_body}>
          <label className="text text--body-04 azul upper underlined">
            {data.category}
          </label>
          <h3 className={`text ${styles.text__h1b} ${styles.negro}`}>
            {data.title}
          </h3>
        </div>
        <div className={styles.card_footer}>
          <p
            className={`${styles.hero__text} text ${styles.negro} upper text--body-04 ${styles.date}`}
          >
            {data?.date}
          </p>
          <p
            className={`${styles.hero__text} text azul upper text--body-04 ${styles.more}`}
          >
            Leer
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 7.21289L0.75 7.21289"
                stroke="#0451DD"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.70117 1.18928L15.7512 7.21328L9.70117 13.2383"
                stroke="#0451DD"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>
      </a>
    </Link>
  )
}
