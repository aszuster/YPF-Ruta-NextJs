import useBreakPoints from 'hooks/useBreakPoints'
import { useState } from 'react'
import styles from './index.module.css'

export default function Tabs({ buttons, tabBody, title, initialTitle }) {
  const [selectedTab, setSelectedTab] = useState({
    index: 0,
    title: initialTitle,
  })
  const [isOpenItemList, setIsOpenItemList] = useState(false)
  const { isDesktop, isTablet, isMobile } = useBreakPoints()
  return (
    <>
      <section className={`section ${styles.section__addons}`}>
        <div
          className={`${styles.tabs} ${styles.tabs__main} ${styles.tabs__addons}`}
        >
          <div
            className={`${styles.tabs__header} ${
              isOpenItemList && `${styles.tabs__header__open}`
            }`}
          >
            <h2 className={`${styles.header__title} text text--h3`}>{title}</h2>
            <div className={styles.header__item_list}>
              {(isDesktop || isTablet) &&
                buttons.map((item, index) => {
                  return (
                    <button
                      className={`${styles.header__item} ${
                        selectedTab.index === index &&
                        `${styles.header__item__active}`
                      } text text--h5`}
                      onClick={() =>
                        setSelectedTab({ title: item, index: index })
                      }
                      key={index}
                    >
                      {item}
                    </button>
                  )
                })}
            </div>
            {isMobile && (
              <>
                <button
                  className={`${styles.header__item} ${styles.header__item__active} ${styles.header__item__selection}  text text--h5`}
                  onClick={() => setIsOpenItemList(!isOpenItemList)}
                >
                  {selectedTab.title}
                </button>
                {isOpenItemList && (
                  <div className={styles.header__item_list}>
                    {buttons.map((item, index) => {
                      return (
                        <button
                          className={`${styles.header__item} ${
                            selectedTab === index &&
                            `${styles.header__item__active}`
                          } text text--h5`}
                          onClick={() => {
                            setSelectedTab({ index, title: item })
                            setIsOpenItemList(false)
                          }}
                          key={index}
                        >
                          {item}
                        </button>
                      )
                    })}
                  </div>
                )}
              </>
            )}
          </div>
          <div className={styles.tabs__content}>
            {tabBody.map((item, index) => {
              const Body = item.content

              return (
                <div
                  className={`
                  ${styles.content__item} 
                  ${styles.tab} 
                  ${styles.tab__garantia} 
                  ${styles.card_list}
                  ${
                    selectedTab.index === index
                      ? `${styles.openTab}`
                      : `${styles.closeTab}`
                  }
                  ${
                    selectedTab.title === 'Plataforma de Mantenimiento' &&
                    `${styles.tab__maintainance}`
                  }
                  ${
                    selectedTab.title === 'Servicios & otros' &&
                    `${styles.tab__services}`
                  }
                  `}
                  key={index}
                >
                  <Body />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
