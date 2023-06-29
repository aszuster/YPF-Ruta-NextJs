import ArticleCard from 'components/cards/ArticleCard'
import styles from './index.module.css'

const Articles = ({ articles }) => {
  return (
    <>
      <div className={styles.masonry_grid}>
        {articles?.map((art, i) => {
          return (
            <div key={`article-${i}`}>
              <ArticleCard data={art} />
            </div>
          )
        })}
      </div>
      {/* <div
        v-if="filterResult.length >= rows"
        className={`${styles.load_more} ${styles.text_center}`}
      >
        <a
          className={`${styles.button} button--primary ${styles.no_round} ${styles.upper} ${styles.inline_block} ${styles.initial}`}
          rel="noreferrer"
        >
          Cargar más
        </a>
      </div> */}

      {/* <div
          v-if="filterResult.length == 0"
          className={`text text--h4 ${styles.oscuro} ${styles.text_center}`}
        >
          Ningun articulo coincide con la consulta
        </div> */}
    </>
  )
}
export default Articles
