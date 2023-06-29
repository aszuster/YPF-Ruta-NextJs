import React, { useState, useEffect, useCallback } from 'react'
import {
  PrevButtonCircle,
  NextButtonCircle,
} from 'components/buttons/Carousel/EmblaCarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import items from './planes.json'
import styles from 'components/pages/planes/index.module.css'
import CardsPlanes from 'components/views/planes/cards'

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
                sub,
                des1,
                des2,
                des3,
                des4,
                des5,
                des6,
                des7,
                des8,
                des9,
                des10,
                pdf,
                adherirme,
                id,
                content,
                content2,
                content3,
              },
              index
            ) => {
              return (
                <CardsPlanes
                  key={index}
                  title={title}
                  tag={tag}
                  copy={copy}
                  sub={sub}
                  des1={des1}
                  des2={des2}
                  des3={des3}
                  des4={des4}
                  des5={des5}
                  des6={des6}
                  des7={des7}
                  des8={des8}
                  des9={des9}
                  des10={des10}
                  pdf={pdf}
                  adherirme={adherirme}
                  id={id}
                  content={content}
                  content2={content2}
                  content3={content3}
                />
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
