import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import ArticleCard from 'components/cards/ArticleCard'
import { filterArticles } from 'services/articles'
import ArticlesRelated from './ArticleRelated'

import styles from './index.module.css'

const Relacionadas = ({ category }) => {
  // Get data
  const {
    data: articles,
    isLoading,
    isError,
  } = useQuery(
    ['articles_by_category', category],
    () => filterArticles({ category: category }),
    { keepPreviousData: true }
  )

  return (
    <section className={`section ${styles.section__related}`}>
      <div className={styles.related}>
        <h5 className={`text--h2 ${styles.text} ${styles.negro}}`}>
          Artículos <br />
          relacionados
        </h5>
        <Link href="/blog">
          <a className={`${styles.underlined} ${styles.azul}`}>Ver todos</a>
        </Link>
      </div>

      <div className={styles.container}>
        <div>
          <ArticlesRelated
            isLoading={isLoading}
            isError={isError}
            articles={articles?.data?.response}
          />
        </div>
      </div>
    </section>
  )
}

export default Relacionadas
