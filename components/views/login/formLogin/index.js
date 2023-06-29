import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'
//Components
import PrimaryButton from 'components/buttons/PrimaryButton/PrimaryButton'
//Styles
import styles from './index.module.css'

const FormLogin = () => {
  const [state, setState] = useState({
    error: undefined,
    showPass: false,
  })
  const router = useRouter()
  const { status } = useSession()
  const userRef = useRef()
  const passRef = useRef()
  const handleLogin = async () => {
    try {
      const res = await signIn('credentials', {
        redirect: false,
        user: userRef.current.value,
        password: passRef.current.value,
        callbackUrl: `${window.location.origin}`,
      })
      if (res?.error) {
        setState({ ...state, error: res.error })
      }
      if (res?.url) router.push(res.url)
    } catch (error) {
      setState({ ...state, error: error })
    }
  }
  if (status === 'authenticated') {
    router.push('/admin')
  }
  return (
    <form
      className={styles.login__form}
      onSubmit={(e) => {
        e.preventDefault()
        handleLogin()
      }}
    >
      <div className={styles.login__form__input}>
        <label>User</label>
        <input type="text" ref={userRef} />
      </div>
      <div className={styles.login__form__input}>
        <label>Password</label>
        <input type="password" ref={passRef} />
      </div>
      <div className={styles.login__buttons}>
        <PrimaryButton text="Login" />
      </div>
      <div className={styles.error__container}>
        {state.error && (
          <div className={styles.errorMessage}>
            {state?.error}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={() => setState({ ...state, error: undefined })}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
    </form>
  )
}

export default FormLogin
