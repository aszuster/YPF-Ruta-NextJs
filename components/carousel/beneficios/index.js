import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  PrevButton,
  NextButton,
} from '../../buttons/Carousel/EmblaCarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import items from './beneficios.json'
import styles from 'components/views/home/beneficios/index.module.css'

const BeneficiosEmblaCarousel = ({ isHome }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
      align: 'center',
      skipSnaps: false,
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
    <div className={isHome ? styles.embla_home : styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {items.map(({ title, tag, icon, copy, id }, index) => {
            return (
              <div
                key={index}
                className={
                  isHome ? styles.embla__slide_home : styles.embla__slide
                }
              >
                <div className={styles.embla__slide__inner}>
                  <article
                    className={`${styles.benefits_card} 
                      ${styles.benefits_card__new} 
                      ${
                        slideActive === index &&
                        (isHome === true
                          ? `${styles.carousel__slide__active_home}`
                          : `${styles.carousel__slide__active}`)
                      }
                      ${!isHome && `${styles.filter_benefits_cards}`}
                    `}
                  >
                    {tag && (
                      <span
                        className={`${styles.benefits_card__label} text text--label-02`}
                      >
                        {tag}
                      </span>
                    )}
                    <Image
                      title="Etiqueta de ahorro"
                      alt="Etiqueta de ahorro"
                      className={styles.benefits_card__icon}
                      src={icon}
                      width={75}
                      height={76}
                    />
                    <h3
                      className={`${styles.benefits_card__title} text text--h5`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`${styles.benefits_card__text} text text--body-03`}
                    >
                      {copy}
                    </p>
                  </article>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.benefits_buttons_embla}>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  )
}

export default BeneficiosEmblaCarousel
