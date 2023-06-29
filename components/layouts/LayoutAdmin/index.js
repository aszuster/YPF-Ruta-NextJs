import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.css'
import brand from 'public/images/brand.svg'
import { signOut, useSession } from 'next-auth/react'
import AdminPrimaryButton from 'components/buttons/AdminPrimaryButton'

export default function LayoutAdmin({ children }) {
  const router = useRouter()
  const { data } = useSession()
  return (
    <>
      <section className={styles.section__container}>
        <div className={styles.section__dashboard}>
          {/* Section Menu */}
          <div className={styles.section__menu}>
            {/* Logo Content */}
            <div className={styles.container__logo}>
              <Image alt="Logo YPF Ruta" src={brand} height={40} width={150} />
              <h5 className={styles.text__h5}>BackOffice</h5>
            </div>

            {/* User Content */}
            <div className={styles.container__user}>
              <h5>{data.user.name}</h5>
              <p>{data.user.role}</p>
              <AdminPrimaryButton
                text="Cerrar sesión"
                action={() => signOut()}
              />
            </div>

            {/* Menu Content */}
            <div className={styles.container__menu}>
              <ul>
                <li>
                  <Link href="/admin">
                    <a
                      className={
                        router.pathname == '/admin' ? `${styles.active}` : ''
                      }
                    >
                      Inicio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/users">
                    <a
                      className={
                        router.pathname == '/admin/usuarios'
                          ? `${styles.active}`
                          : ''
                      }
                    >
                      Usuarios
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/articles">
                    <a
                      className={
                        router.pathname == '/admin/articles'
                          ? `${styles.active}`
                          : ''
                      }
                    >
                      Artículos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/webinars">
                    <a
                      className={
                        router.pathname == '/admin/webinars'
                          ? `${styles.active}`
                          : ''
                      }
                    >
                      Webinars
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/categories">
                    <a
                      className={
                        router.pathname == '/admin/categories'
                          ? `${styles.active}`
                          : ''
                      }
                    >
                      Categorias
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section Content */}
          <div className={styles.section__content}>{children}</div>
        </div>
      </section>
    </>
  )
}
