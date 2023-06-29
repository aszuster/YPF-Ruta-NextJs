import styles from './index.module.css'

export default function TablePagination({
  pages,
  currentPage,
  registers,
  changePage,
}) {
  return (
    <div className={styles.container__pagination}>
      <div className={styles.container__buttons}>
        <button
          className={styles.brl}
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          ANTERIOR
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
          SIGUIENTE
        </button>
      </div>
    </div>
  )
}
