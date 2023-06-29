import Image from 'next/image'
import styles from './index.module.css'

const ScrollToTop = () => {
  return (
    <>
      <button className={`button button--primary ${styles.scrollToTop}`}>
        <Image
          width={16}
          height={16}
          title="Subir"
          alt="Subir"
          src="/images/articles/arrow.svg"
        />
      </button>
    </>
  )
}

export default ScrollToTop
