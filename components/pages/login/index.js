import useBreakPoints from 'hooks/useBreakPoints'
//Assets
import logo from '/public/images/brand.svg'
import Image from 'next/image'
import styles from './index.module.css'
import FormLogin from 'components/views/login/formLogin'

const LoginView = () => {
  const { isMobile, isDesktop } = useBreakPoints()
  let stylesImageLogin
  let styleSectionForm
  if (isMobile) {
    stylesImageLogin = { display: 'none' }
    styleSectionForm = { width: '100%' }
  }
  if (isDesktop) {
    stylesImageLogin = { display: 'block' }
    styleSectionForm = { width: '50%' }
  }
  return (
    <div className={styles.section__login}>
      <div
        className={styles.section__img_background}
        style={stylesImageLogin}
      ></div>
      <div className={styles.section__form} style={styleSectionForm}>
        <div className={styles.logo__wrapper}>
          <Image src={logo} width={200} alt="logo" />
          <FormLogin />
        </div>
      </div>
    </div>
  )
}

export default LoginView
