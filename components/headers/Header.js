import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import useBreakPoints from 'hooks/useBreakPoints'
// Components
import HeaderSignUpButton from 'components/buttons/HeaderSignUpButton'
import LoginDropdown from 'components/dropdowns/LoginDropdown'
// Assets
import styles from 'components/headers/index.module.css'
import menu from '/public/images/menu.svg'
import brand from '/public/images/brand.svg'

const Header = () => {
  const [show, setShow] = useState(false)
  const navbar = useRef(null)
  const router = useRouter()
  const { isMobile, isTablet } = useBreakPoints()

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [show])

  return (
    <header>
      <nav
        ref={navbar}
        className={` ${styles.nav} ${show ? `${styles.nav__active}` : ''}`}
      >
        <div className={styles.nav__container}>
          <Link href={`/`}>
            <a className={styles.nav__logo_container}>
              <div className={styles.nav__logo}>
                <Image src={brand} alt="logo YPF Ruta" title="logo YPF Ruta" />
              </div>
            </a>
          </Link>
          <ul className={styles.nav__links}>
            <li>
              <Link href={`/beneficios`}>
                <a
                  className={`${styles.nav__link} ${
                    router.pathname == '/beneficios'
                      ? `${styles.nav__link__active}`
                      : ''
                  } text text--body-02 `}
                >
                  Beneficios
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/analiticas`}>
                <a
                  className={`${styles.nav__link} ${
                    router.pathname == '/analiticas'
                      ? `${styles.nav__link__active}`
                      : ''
                  } text text--body-02 `}
                >
                  Analíticas
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/planes`}>
                <a
                  className={`${styles.nav__link} ${
                    router.pathname == '/planes'
                      ? `${styles.nav__link__active}`
                      : ''
                  } text text--body-02 `}
                >
                  Planes
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/productos-y-servicios`}>
                <a
                  className={`${styles.nav__link} ${
                    router.pathname == '/productos-y-servicios'
                      ? `${styles.nav__link__active}`
                      : ''
                  } text text--body-02 `}
                >
                  Productos y Servicios
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/preguntas-frecuentes`}>
                <a
                  className={`${styles.nav__link} ${
                    router.pathname == '/preguntas-frecuentes'
                      ? `${styles.nav__link__active}`
                      : ''
                  } text text--body-02 `}
                >
                  Preguntas frecuentes
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/blog`}>
                <a className={`${styles.nav__link} text text--body-02`}>Blog</a>
              </Link>
              <div className={`${styles.mega_box}  menu-box transition `}>
                <div className="content d-lg-flex">
                  <div className={`${styles.box}`}>
                    <ul className="mega_links">
                      <li className="d-none">
                        <Link href={`/blog`}>
                          <a>Articulos</a>
                        </Link>
                      </li>
                      <li className="d-none">
                        <Link href={`/webinars`}>
                          <a>Webinars</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <span className={`${styles.nav__break}`}></span>

            <LoginDropdown
              inlineStyles={
                isMobile || isTablet
                  ? { marginBottom: '2.4rem' }
                  : { marginRight: '1.4rem' }
              }
            />

            <HeaderSignUpButton />
          </ul>

          <button
            className={` ${styles.nav__menu_toggle} ${show ? 'toggled' : ''}`}
            onClick={() => setShow(!show)}
          >
            <Image
              title="menu"
              alt="menu"
              className="nav__menu-toggle-icon"
              src={menu}
            />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
