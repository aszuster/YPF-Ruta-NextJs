import React, { useState, useEffect, useCallback } from 'react'
import {
  PrevButtonCircle,
  NextButtonCircle,
} from 'components/buttons/Carousel/EmblaCarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import items from './planes.json'
import styles from 'components/views/home/planes/index.module.css'

const PlanesEmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: false,
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
    slideActive: 0,
  })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setEmblaState({
      prevBtnEnabled: embla.canScrollPrev(),
      nextBtnEnabled: embla.canScrollNext(),
      slideActive: embla.selectedScrollSnap(),
    })
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  const { prevBtnEnabled, nextBtnEnabled, slideActive } = emblaState

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {items.map(
            (
              {
                title,
                tag,
                copy,
                des1,
                des2,
                des3,
                des4,
                des5,
                des6,
                des7,
                des8,
                id,
              },
              index
            ) => {
              return (
                <div key={index} className={styles.embla__slide}>
                  <div
                    className={`${styles.embla__slide__inner}  ${
                      slideActive === index &&
                      `${styles.carousel__slide__active}`
                    } `}
                  >
                    <div
                      className={`${styles.plan_card}
                        
                       
                      `}
                    >
                      {tag && (
                        <span
                          className={`${styles.plan_card__label} text text--label-02`}
                        >
                          {tag}
                        </span>
                      )}
                      <h3
                        className={`${styles.plan_card__title} text text--h2`}
                      >
                        {title}
                      </h3>
                      <p
                        className={`${styles.plan_card__description} text text--body-02`}
                      >
                        {copy}
                      </p>
                      <ul className={`${styles.plan_card__feature_list} list`}>
                        {des1 && (
                          <li className="list__item text text--body-04">
                            {des1}
                          </li>
                        )}
                        {des2 && (
                          <li className="list__item text text--body-04">
                            {des2}
                          </li>
                        )}
                        {des3 && (
                          <li className="list__item text text--body-04">
                            {des3}
                          </li>
                        )}

                        {des4 && (
                          <li className="list__item text text--body-04">
                            {des4}
                          </li>
                        )}
                        {des5 && (
                          <li className="list__item text text--body-04">
                            {des5}
                          </li>
                        )}
                        {des6 && (
                          <li className="list__item text text--body-04">
                            {des6}
                          </li>
                        )}
                        {des7 && (
                          <li className="list__item text text--body-04">
                            {des7}
                          </li>
                        )}
                        {des8 && (
                          <li className="list__item text text--body-04">
                            {des8}
                          </li>
                        )}
                      </ul>
                      <Link href={`/planes`}>
                        <a
                          className={`button button--dark-blue  ${styles.plan_card__button}`}
                        >
                          Más información
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
      <div className={styles.planes_buttons_embla}>
        <PrevButtonCircle onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButtonCircle onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  )
}

export default PlanesEmblaCarousel
