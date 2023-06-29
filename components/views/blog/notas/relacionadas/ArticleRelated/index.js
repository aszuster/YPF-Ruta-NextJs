import React, { useState, useEffect, useCallback } from 'react'
import {
  PrevButton,
  NextButton,
} from 'components/buttons/Carousel/EmblaCarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import ArticleCard from 'components/cards/ArticleCard'
import styles from './index.module.css'

const ArticlesRelated = ({ articles, isLoading }) => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
      align: 'start',
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
  console.log(articles)
  return (
    <>
      {!isLoading && (
        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={viewportRef}>
            <div className={styles.embla__container}>
              {articles.map((art) => {
                return (
                  <div
                    key={`article-${art.id}`}
                    className={styles.embla__slide}
                  >
                    <div className={styles.embla__slide__inner}>
                      <ArticleCard data={art} />
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
      )}
    </>
  )
}
export default ArticlesRelated
