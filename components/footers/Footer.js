import Image from 'next/image'
import Link from 'next/link'
import useBreakPoints from 'hooks/useBreakPoints'
// Components
import FooterSignUpButton from 'components/buttons/FooterSignUpButton/FooterSignUpButton'
import LoginDropdown from 'components/dropdowns/LoginDropdown'
import Accordion from 'components/accordions/FooterAccordion'
import PrimaryButton from 'components/buttons/PrimaryButton/PrimaryButton'
// Assets
import styles from 'components/footers/index.module.css'
import brand from '/public/images/brand-footer.png'
import facebook from 'public/images/footer/facebook.png'
import googlePlay from 'public/images/footer/googleplay.png'
import instagram from 'public/images/footer/instagram.png'
import linkedin from 'public/images/footer/linkedin.png'
import twitter from 'public/images/footer/twitter.png'
import youtube from 'public/images/footer/youtube.png'
import chevronRight from 'public/images/footer/chevron-right.png'
import MediaQuery2 from 'react-responsive'

const Footer = () => {
  const { isMobile, isTablet, isDesktop, isBigDesktop } = useBreakPoints()

  // Estilos Dropdown Login
  let stylesLoginDropdown
  if (isMobile) {
    stylesLoginDropdown = { marginBottom: '2.4rem' }
  }
  if (isTablet || isDesktop) {
    stylesLoginDropdown = { marginBottom: '2.4rem' }
  }
  if (isBigDesktop) {
    stylesLoginDropdown = { marginRight: '1.4rem' }
  }

  //datos acordeon

  const social = [
    {
      title: () => (
        <h2 className={`text--body-01 ${styles.footer__dropdown_title}`}>
          YPF.COM
        </h2>
      ),
      button: () => <Image src={chevronRight} alt="" />,

      content: () => (
        <ul data-index="1" className={`row`}>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://www.facebook.com/YPFoficial"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={facebook}
                alt=""
              />
            </a>
          </li>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://twitter.com/YPFoficial"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={twitter}
                alt=""
              />
            </a>
          </li>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://www.linkedin.com/company/ypf-s-a-/"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={linkedin}
                alt=""
              />
            </a>
          </li>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://www.youtube.com/ypfoficial"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={youtube}
                alt=""
              />
            </a>
          </li>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://www.instagram.com/ypfoficial/?C=todo-sobre-ypf"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={instagram}
                alt=""
              />
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: () => (
        <h2
          className={`${styles.text__body_01} ${styles.footer__dropdown_title}`}
        >
          YPF Serviclub
        </h2>
      ),
      button: () => <Image src={chevronRight} alt="" />,
      content: () => (
        <ul
          data-index="2"
          className={`row ${styles.footer__dropdown_links_container}`}
        >
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://www.facebook.com/YPFServiClub"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={facebook}
                alt=""
              />
            </a>
          </li>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://twitter.com/YPFServiclub"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={twitter}
                alt=""
              />
            </a>
          </li>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://play.google.com/store/apps/details?id=com.ypf.jpm&hl=es-419"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={googlePlay}
                alt=""
              />
            </a>
          </li>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://www.youtube.com/playlist?list=PLi-tJ8ciWyAnOC7jDgf8dCC4-BvEae8hx"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={youtube}
                alt=""
              />
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: () => (
        <h2
          className={`${styles.text__body_01} ${styles.footer__dropdown_title}`}
        >
          Fundación YPF
        </h2>
      ),
      button: () => <Image src={chevronRight} alt="" />,

      content: () => (
        <ul
          data-index="3"
          className={`row ${styles.footer__dropdown_links_container}`}
        >
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://www.facebook.com/FundacionYPF?fref=ts"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={facebook}
                alt=""
              />
            </a>
          </li>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://twitter.com/FundacionYPF"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={twitter}
                alt=""
              />
            </a>
          </li>
          <li className={styles.footer__dropdown_link}>
            <a
              className={styles.footer__dropdown_links}
              href="https://www.youtube.com/user/fundacionypf"
            >
              <Image
                className={styles.footer__dropdown_links_img}
                src={youtube}
                alt=""
              />
            </a>
          </li>
        </ul>
      ),
    },
  ]

  return (
    <footer className={`${styles.background} ${styles.footer}`} id="footer">
      <div className={styles.footer__logo_container}>
        <div className={styles.footer__logo}>
          <Image
            title="logo YPF Ruta"
            alt="logo YPF Ruta"
            src={brand}
            width={118}
            height={30}
          />
        </div>
        <p className={styles.footer__contact_info}>
          Consultas: 0810 122 2020 <br /> Email:
          <a href="mailto:ventas@ruta.ypf.com">ventas@ruta.ypf.com</a>
        </p>
      </div>
      <div className={styles.footer__links_container}>
        <ul className={styles.footer__nav_links_list}>
          <li className={styles.footer__nav_link}>
            <Link href={`/beneficios`}>
              <a>Beneficios</a>
            </Link>
          </li>
          <li className={styles.footer__nav_link}>
            <Link href={`/analiticas`}>
              <a>Analíticas</a>
            </Link>
          </li>
          <li className={styles.footer__nav_link}>
            <Link href={`/planes`}>
              <a>Planes</a>
            </Link>
          </li>
          <li className={styles.footer__nav_link}>
            <Link href={`/productos-y-servicios`}>
              <a>Productos y servicios</a>
            </Link>
          </li>
          <li className={styles.footer__nav_link}>
            <Link href={`/preguntas-frecuentes`}>
              <a>Preguntas Frecuentes</a>
            </Link>
          </li>
          <li className={styles.footer__nav_link}>
            <Link href={`/blog`}>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <div className={styles.footer__other_links}>
          <h3 className={styles.footer__social_net_title}>
            Nuestras redes sociales
          </h3>
          <ul className={styles.footer__social_net_links}>
            <li className={styles.footer__social_net}>
              <a
                href="https://www.youtube.com/ypfoficial"
                className={styles.footer__social_net_link}
                target="blank"
              >
                <Image
                  title="logo YouTube"
                  alt="logo YouTube"
                  src="/images/footer/youtube-2.png"
                  className={styles.footer__social_net_logo}
                  width={15}
                  height={11}
                />
              </a>
            </li>
            <li className={styles.footer__social_net}>
              <a
                href="https://www.linkedin.com/company/ypf-s-a-/mycompany/"
                className={styles.footer__social_net_link}
                target="blank"
              >
                <Image
                  title="logo LinkedIn"
                  alt="logo LinkedIn"
                  src="/images/footer/linkedin-2.png"
                  className={styles.footer__social_net_logo}
                  width={15}
                  height={15}
                />
              </a>
            </li>
            <li className={styles.footer__social_net}>
              <a
                href="https://www.facebook.com/YPFoficial"
                className={styles.footer__social_net_link}
                target="blank"
              >
                <Image
                  title="logo Facebook"
                  alt="logo Facebook"
                  src="/images/footer/facebook-2.png"
                  className={styles.footer__social_net_logo}
                  width={10}
                  height={17}
                />
              </a>
            </li>
            <li className={styles.footer__social_net}>
              <a
                href="https://twitter.com/YPFoficial"
                className={styles.footer__social_net_link}
                target="blank"
              >
                <Image
                  title="logo Twitter"
                  alt="logo Twitter"
                  src="/images/footer/twitter-2.png"
                  className={styles.footer__social_net_logo}
                  width={14}
                  height={12}
                />
              </a>
            </li>
          </ul>
          <div>
            <Accordion list={social} />
          </div>
        </div>
      </div>
      <div className={styles.footer__buttons_container}>
        <div className={styles.footer_inicio_sesion}>
          <LoginDropdown
            theme="transparent"
            inlineStyles={stylesLoginDropdown}
          />
          <FooterSignUpButton />
        </div>
      </div>
      <small className={`${styles.footer__copyright} ${styles.background}`}>
        © YPF 2021 |
        <a href="https://www.ypf.com/Paginas/terminos-y-condiciones.aspx">
          Términos y condiciones
        </a>
        |
        <a href="https://www.ypf.com/Extranet/Paginas/Extranet-de-YPF.aspx">
          Extranets
        </a>
        |
        <a href="https://www.ypf.com/Proveedores/Paginas/Ser-proveedor-de-ypf.aspx">
          Proveedores
        </a>
        |
        <a href="https://www.ypf.com/productosyservicios/Paginas/Atencion-al-usuario-de-servicios-financieros.aspx">
          Com. &quot;A&quot; 5460 BCRA
        </a>
      </small>
    </footer>
  )
}

export default Footer
