import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  PrevButton,
  NextButton,
} from '/components/buttons/Carousel/EmblaCarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import items from './analiticas.json'
import styles from '/components/pages/analiticas/index.module.css'

const AnaliticasEmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
      align: 'center',
      skipSnaps: false,
      active: true,
      breakpoints: {
        '(min-width: 768px)': { active: false },
      },
    },
    []
  )
  const [emblaState, setEmblaState] = useState({
    prevBtnEnabled: false,
    nextBtnEnabled: false,
  })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setEmblaState({
      prevBtnEnabled: embla.canScrollPrev(),
      nextBtnEnabled: embla.canScrollNext(),
    })
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  const { prevBtnEnabled, nextBtnEnabled } = emblaState

  return (
    <div className={styles.advanced_features__list}>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {items.map(({ icon, title, copy, detail, id }, index) => {
              return (
                <div key={index} className={`${styles.embla__slide} `}>
                  <div className={styles.embla__slide__inner}>
                    <div>
                      <Image
                        width={32}
                        height={32}
                        className={styles.advanced_features_item__icon}
                        src={icon}
                        alt=""
                      />
                      <h3
                        className={`${styles.advanced_features_item__title} text text--h5`}
                      >
                        {title}
                      </h3>
                      <p
                        className={`${styles.advanced_features_item__description} text text--body-01`}
                      >
                        {copy}
                      </p>
                      <ul className={styles.advanced_features_feature_list}>
                        {detail[0] && (
                          <li
                            className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                          >
                            {detail[0]}
                          </li>
                        )}
                        {detail[1] && (
                          <li
                            className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                          >
                            {detail[1]}
                          </li>
                        )}
                        {detail[2] && (
                          <li
                            className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                          >
                            {detail[2]}
                          </li>
                        )}
                        {detail[3] && (
                          <li
                            className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                          >
                            {detail[3]}
                          </li>
                        )}
                        {detail[4] && (
                          <li
                            className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                          >
                            {detail[4]}
                          </li>
                        )}
                        {detail[5] && (
                          <li
                            className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                          >
                            {detail[5]}
                          </li>
                        )}
                        {detail[6] && (
                          <li
                            className={`${styles.advanced_features_feature_list__item} text text--body-02`}
                          >
                            {detail[6]}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.buttons_embla}>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
    </div>
  )
}

export default AnaliticasEmblaCarousel
