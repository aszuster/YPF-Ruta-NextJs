import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { filterArticles } from 'services/articles'
// Components
import BlogPagination from 'components/tables/BlogPagination'
import Highlighted from 'components/views/blog/Highlighted'
import Articles from 'components/views/blog/Articles'
import AdminPrimaryButton from 'components/buttons/AdminPrimaryButton'
import styles from './index.module.css'
// import styles from './index.module.css'

const BlogView = ({ page, sort, q, categories }) => {
  // Get data
  const {
    data: articles,
    isLoading,
    isError,
  } = useQuery(
    ['articles', +page, sort, q, categories],
    () =>
      filterArticles({
        limit: 5,
        page: page,
        sort: sort,
        q: q,
        categories: categories,
      }),
    { keepPreviousData: true }
  )

  // Ref to input search
  const qRef = useRef()

  const router = useRouter()
  const changeQuery = (newQuery) => {
    const newData = { ...router.query, ...newQuery }
    router.push({
      query: newData,
    })
  }

  // const newCat = encodeURI(JSON.stringify(newCatAf))
  // const categoriesQuery = () => {
  // }

  return (
    <>
      <Highlighted />
      {/* 
      <form
        onSubmit={(e) => {
          e.preventDefault()
          changeQuery({ page: 1, q: encodeURI(qRef.current.value) })
        }}
      >
        <input
          ref={qRef}
          style={{ backgroundColor: 'black', color: 'white', padding: '1rem' }}
          type="search"
          name="q"
          placeholder="Buscar palabra clave"
          v-model="search"
        />
      </form> */}
      <section className={`section ${styles.section__list}`}>
        <div className={styles.header}>
          <h2 className={`text text--h2 ${styles.letter_02} ${styles.oscuro}`}>
            Descubrí nuestros artículos
          </h2>
          <form
            action=""
            className={`${styles.search} ${styles.relative}`}
            onSubmit={(e) => {
              e.preventDefault()
              changeQuery({ page: 1, q: encodeURI(qRef.current.value) })
            }}
          >
            <img
              className={styles.absolute}
              src="https://ruta.ypf.com/images/blog/list/search.svg"
            />
            <input
              ref={qRef}
              className={`text ${styles.negro} ${styles.input__search}`}
              type="search"
              name="q"
              placeholder="Buscar palabra clave"
              v-model="search"
            />
          </form>
        </div>
        <div className={styles.filters}>
          <div className={styles.pills}></div>
          <div className={styles.order}>
            {/* <AdminPrimaryButton
            action={() => changeQuery({ sort: 'desc' })}
            rel="noreferrer"
            text="Más recientes"
          />
          <AdminPrimaryButtonn
            action={() => changeQuery({ sort: 'asc' })}
            rel="noreferrer"
            text="Más recientes"
          /> */}

            <AdminPrimaryButton
              text="Más recientes"
              action={() => changeQuery({ sort: 'desc' })}
            />
            <AdminPrimaryButton
              text="Más antiguos"
              action={() => changeQuery({ sort: 'asc' })}
            />
          </div>
        </div>
        <Articles
          isLoading={isLoading}
          isError={isError}
          articles={articles?.data?.response}
        />
      </section>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {/* <AdminPrimaryButton
          text="Más recientes"
          action={() => changeQuery({ sort: 'desc' })}
        />
        <AdminPrimaryButton
          text="Más antiguos"
          action={() => changeQuery({ sort: 'asc' })}
        /> */}
        {/* <AdminPrimaryButton
          text="Pág 1"
          action={() => changeQuery({ page: 1 })}
        />
        <AdminPrimaryButton
          text="Pág 2"
          action={() => changeQuery({ page: 2 })}
        />
        <AdminPrimaryButton
          text="Pág 3"
          action={() => changeQuery({ page: 3 })}
        /> */}

        {/* Paginación */}
        <BlogPagination
          pages={articles?.data.pages}
          currentPage={articles?.data.currentPage}
          registers={articles?.data.registers}
          changePage={(newPage) => {
            router.push({
              query: { page: newPage },
            })
          }}
        />
      </div>
    </>
  )
}

export default BlogView
