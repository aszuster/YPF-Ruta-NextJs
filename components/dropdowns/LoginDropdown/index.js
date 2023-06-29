import Image from 'next/image'
import { useState } from 'react'
import stylesBlue from 'components/dropdowns/LoginDropdown/blue.module.css'
import stylesTransparent from 'components/dropdowns/LoginDropdown/transparent.module.css'
import arrow from '/public/images/arrow.svg'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function HeaderLoginDropdown({ theme, inlineStyles }) {
  const [show, setShow] = useState(false)
  const { status } = useSession()
  let styles = stylesBlue
  if (theme === 'transparent') {
    styles = stylesTransparent
  }

  return (
    <div className={styles.selectme} style={inlineStyles}>
      <div onClick={() => setShow(!show)}>
        <div id={styles.selectme}>Iniciar Sesión</div>
        <span id={styles.arrow} className={show ? styles.up : styles.down}>
          <Image src={arrow} alt="" />
        </span>
      </div>
      {show && (
        <ul id={styles.options} onMouseLeave={() => setShow(!show)}>
          <li>
            <a
              href="https://produccionypfyer.everilion.com/ilionMVC/custom/YPF/Account/Login"
              target="blank"
            >
              YPF Ruta <b> Contado</b>
            </a>
          </li>
          <li>
            <a
              href="https://www.ypf.com/siteminderagent/forms/login-ypf-cp-p-v02.fcc?TYPE=33554433&amp;REALMOID=06-15b116a3-0ce8-4ffe-98b9-4ca96ff1f6a3&amp;GUID=&amp;SMAUTHREASON=0&amp;METHOD=GET&amp;SMAGENTNAME=-SM-gKH04i%2fhxMfEYdAuRqLOI0uzyqUCVSDtd7dIjPWwiArPf7mrXHlY1Y2IK8kG9add&amp;TARGET=-SM-https%3a%2f%2fwww%2eypf%2ecom%2fextranets%2f"
              target="blank"
            >
              YPF Ruta <b> Crédito</b>
            </a>
          </li>
          {status === 'authenticated' ? (
            <li onClick={() => signOut()}>Logout</li>
          ) : (
            <li>
              <Link href={`/login`}>Admin dashboard</Link>
            </li>
          )}
        </ul>
      )}
    </div>
  )
}
