import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from './index.module.css'

import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import {
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'react-share'

const Compartir = ({ data }) => {
  const [open, setOpen] = useState(true)
  const { asPath, pathname } = useRouter()
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : ''
  const shareUrl = `${origin}${asPath}`

  let url = ''
  if (typeof window === 'object') {
    url = String(window.location)
    console.log(url)
  }

  return (
    <>
      <button
        className={`button button--primary ${styles.compartir}`}
        onClick={() => setOpen(!open)}
      >
        <Image
          width={14}
          height={15}
          title="Compartir"
          alt="Compartir"
          src="/images/articles/share.svg"
        />
        <i>Compartir este artículo </i>
      </button>
      <div
        className={`${styles.compartir_box} ${
          open ? `${styles.closed}` : `${styles.opened}`
        }`}
      >
        <div className={styles.tippy_box}>
          <div className={styles.tippy_content}>
            <ul className={styles.redes}>
              <li className={styles.share__ShareButton}>
                <WhatsappShareButton title={`${data?.title}`} url={shareUrl}>
                  <WhatsappIcon
                    size={24}
                    logofillcolor="white"
                    round={true}
                    bgStyle={{ fill: '#0451dd' }}
                  />
                  <i>Whatsapp</i>
                </WhatsappShareButton>
              </li>
              <li className={styles.share__ShareButton}>
                <EmailShareButton
                  subject={'Mira este artículo interesante... '}
                  body={`Hola,\n\nLeelo y luego me contás: "${url}"\n\nSaludos,`}
                  className="Demo__some-network__share-button"
                  openShareDialogOnClick="true"
                  onClick={() => {}}
                >
                  <EmailIcon
                    size={24}
                    logofillcolor="white"
                    round={true}
                    bgStyle={{ fill: '#0451dd' }}
                  />
                  <i>E-mail</i>
                </EmailShareButton>
              </li>
              <li className={styles.share__ShareButton}>
                <LinkedinShareButton title={`${data?.title}`} url={shareUrl}>
                  <LinkedinIcon
                    size={24}
                    logofillcolor="white"
                    round={true}
                    bgStyle={{ fill: '#0451dd' }}
                  />
                  <i>Linkedin</i>
                </LinkedinShareButton>
              </li>
              <li className={styles.share__ShareButton}>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon
                    size={24}
                    logofillcolor="white"
                    round={true}
                    bgStyle={{ fill: '#0451dd' }}
                  />
                  <i>Facebook</i>
                </FacebookShareButton>
              </li>
              <li className={styles.share__ShareButton}>
                <TwitterShareButton url={shareUrl} title={`${data?.title}`}>
                  <TwitterIcon
                    size={24}
                    logofillcolor="white"
                    round={true}
                    bgStyle={{ fill: '#0451dd' }}
                  />
                  <i>Twitter</i>
                </TwitterShareButton>
              </li>
            </ul>
          </div>
          <div className={styles.tippy_arrow}></div>
        </div>
      </div>
    </>
  )
}

export default Compartir
