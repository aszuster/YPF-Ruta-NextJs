import Link from 'next/link'
import { useState } from 'react'
import styles from 'components/pages/planes/index.module.css'
import useBreakPoints from 'hooks/useBreakPoints'

const CardsPlanes = (props) => {
  const { isMobile } = useBreakPoints()
  const [open, setOpen] = useState(false)
  function createMarkup(c) {
    return { __html: c }
  }
  return (
    <div key={props.index} className={styles.embla__slide}>
      <div
        className={`${styles.embla__slide__inner}  ${
          props.slideActive === props.index &&
          `${styles.carousel__slide__active}`
        } `}
      >
        <div className={`${styles.plan_card}`}>
          <h2 className={`${styles.plan_card__title} text text--h2`}>
            {props.title}
          </h2>
          {props.tag && (
            <span className={`${styles.plan_card__label} text text--label-02`}>
              {props.tag}
            </span>
          )}

          <p className={`${styles.plan_card__description} text text--body-02`}>
            {props.copy}
          </p>
          <h3
            className={`${styles.plan_card__list_title} ${styles.plan_card__list_title__highlighted} text text--body-02`}
          >
            {props.sub}
          </h3>
          <ul
            className={`${styles.plan_card__list} ${styles.plan_card__list__highlighted} list list--with-checks`}
          >
            {props.des1 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des1}
              </li>
            )}
            {props.des2 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des2}
              </li>
            )}
            {props.des3 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des3}
              </li>
            )}
            {props.des4 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des4}
              </li>
            )}
            {props.des5 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des5}
              </li>
            )}
            {props.des6 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des6}
              </li>
            )}
            {props.des7 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des7}
              </li>
            )}
            {props.des8 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des8}
              </li>
            )}
            {props.des9 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des9}
              </li>
            )}
            {props.des10 && (
              <li
                className={`list__item ${styles.plan_card__list__highlighted} text text--body-02`}
              >
                {props.des10}
              </li>
            )}
          </ul>
          <div
            key={props.index}
            className={`${styles.plan_item} ${
              !open ? `${styles.collapsed}` : ''
            }`}
          >
            <h3
              className={`${styles.plan_card__list_title} text text--body-02`}
            >
              Beneficios
            </h3>

            <ul
              className={`${styles.plan_card__list} ${styles.plan_card__list_line} list`}
            >
              <div dangerouslySetInnerHTML={createMarkup(props.content)}></div>
            </ul>
            <h3
              className={`${styles.plan_card__list_title} text text--body-02`}
            >
              Medios de pago
            </h3>
            <ul
              className={`${styles.plan_card__list} ${styles.plan_card__list_line} list`}
            >
              <div dangerouslySetInnerHTML={createMarkup(props.content2)}></div>
            </ul>

            {props.content3 && (
              <>
                <h3
                  className={`${styles.plan_card__list_title} text text--body-02`}
                >
                  Complementos
                </h3>
                <ul
                  className={`${styles.plan_card__list} ${styles.plan_card__list_line} list`}
                >
                  <div
                    dangerouslySetInnerHTML={createMarkup(props.content3)}
                  ></div>
                </ul>
              </>
            )}
          </div>
          <div className={styles.content_button_planes}>
            <a
              href={props.pdf}
              className={`button button--small text text--body-02 button--secondary ${styles.button__plans_ghost}`}
              target="_blank"
              rel="noreferrer"
            >
              Descargar PDF
            </a>
            <Link href={props.adherirme}>
              <a
                className={`button button--small text text--body-02 ${styles.button__plans_solid}`}
              >
                Quiero adherirme
              </a>
            </Link>
          </div>
          <div
            key={props.index}
            className={`${styles.plan_card__expander} ${
              open ? `${styles.closed}` : `${styles.opened}`
            }`}
          >
            <span
              className={`${styles.plan_card_expander__label} text text--label-02`}
            >
              Más información
            </span>
            <button
              key={props.index}
              onClick={() => setOpen(!open)}
              className={styles.plan_card_expander__button}
            ></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsPlanes
