import styles from 'components/tables/light_table.module.css'

export default function TablePagination({
  pages,
  currentPage,
  registers,
  changePage,
  title,
}) {
  return (
    <div className={styles.container__pagination}>
      <p>
        <strong className={styles.color__active}>página {currentPage}</strong> |{' '}
        {registers} {title}
        {registers > 1 && 's'} en total
      </p>
      <div className={styles.container__buttons}>
        <button
          className={styles.brl}
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <polygon
              fill="currentColor"
              points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293"
            />
          </svg>
        </button>

        {/* Iterar páginas */}
        {Array(pages)
          .fill()
          .map((u, i) => {
            // Numero de página
            const pageButton = i + 1

            return (
              <button
                onClick={() => changePage(pageButton)}
                key={`pagination-${pageButton}`}
                className={`${styles.nml} ${
                  currentPage === pageButton ? styles.btn__active : ''
                }`}
                disabled={currentPage === pageButton && true}
              >
                {pageButton}
              </button>
            )
          })}

        <button
          className={`${styles.nml} ${styles.brr}`}
          disabled={currentPage === pages}
          onClick={() => changePage(currentPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <polygon
              fill="currentColor"
              points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
