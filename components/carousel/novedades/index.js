import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  PrevButtonCircle,
  NextButtonCircle,
} from '../../buttons/Carousel/EmblaCarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import styles from 'components/views/home/novedades/index.module.css'

const BeneficiosEmblaCarousel = () => {
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
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          <div className={`${styles.embla__slide} `}>
            <div className={styles.embla__slide__inner}>
              {/* item 1 */}
              <article className={`${styles.news__content_wrapper}`}>
                <div className={`${styles.news__texts}`}>
                  <div className={`${styles.tit__label}`}>Webinar</div>
                  <h2 className={`${styles.news__title} text text--h1`}>
                    El poder de la telemática en la gestión de flotas
                  </h2>

                  <div className={`${styles.news__pic} ${styles.mob} show-mob`}>
                    <div className={`${styles.cont_info__label}`}>
                      <div
                        className={`${styles.info__label} ${styles.info__label__full__telematica} right`}
                      >
                        ¡Este espacio es para vos!
                      </div>
                      <Image
                        src="/images/home/news/webinar-el-poder-de-la-telematica.jpg"
                        alt=""
                        fill="cover"
                        width={330}
                        height={455}
                      />
                    </div>
                  </div>

                  <p className={`${styles.news__text} text text--body-01`}>
                    Será online por Teams el jueves 22/9 - 10:39h Arg
                    <br />
                    <br />
                    Oradores:
                  </p>
                  <ul className={`list  ${styles.list__with_checks}`}>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Federico Mattioli - Especialista telemático - Location
                      World
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      {' '}
                      Gabriel Petracca - Especialista telemático - Location
                      World
                    </li>
                  </ul>
                  <p className={`${styles.news__text} text text--body-01`}>
                    Unite al evento en este{' '}
                    <a
                      href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_ZGQwOTRlNzktMWJiOS00ZmUwLWI5OGQtMzhhMGQyMDgxMGNj%40thread.v2%2F0%3Fcontext%3D%257B%2522Tid%2522%253A%2522038018c3-616c-4b46-ad9b-aa9007f701b5%2522%252C%2522Oid%2522%253A%2522a140abd6-772c-4689-803c-c5c3d18f98ed%2522%252C%2522IsBroadcastMeeting%2522%253Atrue%252C%2522role%2522%253A%2522a%2522%257D%26btype%3Da%26role%3Da%26anon%3Dtrue&type=meetup-join&deeplinkId=593fcbd1-80ee-45d3-9535-e2fa82679b8a&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                      target="_blank"
                      rel="noreferrer"
                      className="link__light-blue"
                    >
                      link
                    </a>
                    .
                  </p>
                  <a
                    className={`${styles.news__button} button button--large button--primary button--light-blue`}
                    href="https://form.jotform.com/222514695874668"
                    target="blank"
                  >
                    Pre-inscribirme
                  </a>
                </div>

                <div className={`${styles.news__pic} hide-mobile-640`}>
                  <div className={`${styles.cont_info__label}`}>
                    <div
                      className={`${styles.info__label} right ${styles.info__label__full__telematica}`}
                    >
                      ¡Este espacio es para vos!
                    </div>
                    <Image
                      src="/images/home/news/webinar-el-poder-de-la-telematica.jpg"
                      alt=""
                      width={360}
                      height={496}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className={`${styles.embla__slide} `}>
            <div className={styles.embla__slide__inner}>
              {/* item 2 */}
              <article className={`${styles.news__content_wrapper}`}>
                <div className={`${styles.news__texts}`}>
                  <div className={`${styles.tit__label}`}>Novedades</div>
                  <h2 className={`${styles.news__title}  text text--h1`}>
                    Solución integral para Patios de Carga
                  </h2>

                  <div className={`${styles.news__pic} ${styles.mob} show-mob`}>
                    <div className={`${styles.cont_info__label}`}>
                      {/* <div className="info--label right">¡Descargala!</div>  */}
                      <Image
                        src="/images/home/news/patios-hero-m.png"
                        alt=""
                        width={330}
                        height={530}
                      />
                    </div>
                  </div>

                  <p className={`${styles.news__text} text text--body-01`}>
                    Transformá la operación de tus instalaciones de
                    combustibles.
                  </p>
                  <ul className={`list  ${styles.list__with_checks}`}>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Unificá todas tus transacciones
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Automatizá toda la operación
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Controlá el stock y los consumos
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Compartí tu instalación
                    </li>
                  </ul>
                  <a
                    className={`${styles.news__button} button button--large button--primary button--light-blue`}
                    href="https://www.youtube.com/watch?v=813_pOurd58"
                    target="blank"
                  >
                    Ver video
                  </a>
                </div>

                <div className={`${styles.news__pic} hide-mobile-640`}>
                  <div className={`${styles.cont_info__label}`}>
                    {/* <div className="info--label right">¡Descargala!</div>  */}
                    <Image
                      src="/images/home/news/patios-hero.png"
                      alt=""
                      width={360}
                      height={496}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className={`${styles.embla__slide} `}>
            <div className={styles.embla__slide__inner}>
              {/* item 3 */}
              <article className={`${styles.news__content_wrapper}`}>
                <div className={`${styles.news__texts}`}>
                  <div className={`${styles.tit__label}`}>Novedades</div>
                  <h2 className={`${styles.news__title}  text text--h1`}>
                    APP YPF Ruta
                  </h2>

                  <div className={`${styles.news__pic} ${styles.mob} show-mob`}>
                    <div className={`${styles.cont_info__label}`}>
                      <div className={`${styles.info__label} ${styles.right}`}>
                        ¡Descargala!
                      </div>
                      <Image
                        src="/images/home/news/app-ruta-hero-m.png"
                        alt=""
                        width={330}
                        height={530}
                      />
                    </div>
                  </div>

                  <p className={`${styles.news__text} text text--body-01`}>
                    Gestioná todas tus tarjetas e iniciá compras de forma más
                    simple, ágil e intuitiva.
                  </p>
                  <ul className={`list  ${styles.list__with_checks}`}>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Mayor seguridad en las transacciones.
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Disponible para toda la red de estaciones que operan con
                      YPF Ruta.
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Todas tus tarjetas en un solo lugar. Agregalas de manera
                      fácil y rápida.
                    </li>
                  </ul>
                  <h2 className={`${styles.header__title} text text--h5`}>
                    ¡Descargala y disfrutá de todos los beneficios!
                  </h2>
                  <a
                    className={styles.news__button}
                    href="https://play.google.com/store/apps/details?id=com.ypf.ypfruta"
                  >
                    <div className={styles.google_play}>
                      <Image
                        src="/images/home/news/google_play.png"
                        alt="Descargar acá en Google Play"
                        title="Descargar acá en Google Play"
                        width={168}
                        height={50}
                      />
                    </div>
                  </a>
                </div>

                <div
                  className={`${styles.news__pic} ${styles.mob} hide-mobile-640`}
                >
                  <div className={`${styles.cont_info__label}`}>
                    <div className={`${styles.info__label} ${styles.right}`}>
                      ¡Descargala!
                    </div>
                    <Image
                      src="/images/home/news/app-ruta-hero.png"
                      alt=""
                      width={360}
                      height={496}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className={`${styles.embla__slide} `}>
            <div className={styles.embla__slide__inner}>
              {/* item 4 */}
              <article className={`${styles.news__content_wrapper}`}>
                <div className={`${styles.news__texts}`}>
                  <div className={`${styles.tit__label}`}>Novedades</div>
                  <h2 className={`${styles.news__title} text text--h1`}>
                    Puntos de instalación rápida YPF Ruta
                  </h2>

                  <div className={`${styles.news__pic} ${styles.mob} show-mob`}>
                    <div className={`${styles.cont_info__label}`}>
                      <div className={`${styles.info__label} ${styles.bottom}`}>
                        Sin cargo para Planes RT con telemetría
                      </div>
                      <Image
                        src="/images/home/news/punto-de-instalacion-rapida-m.png"
                        alt="Puntos de instalación rápida"
                        title="Puntos de instalación rápida"
                        width={330}
                        height={455}
                      />
                    </div>
                  </div>

                  <p className={`${styles.news__text} text text--body-01`}>
                    Agendá un turno para instalación. Llevá tu vehículo y listo!
                  </p>
                  <ul className={`list  ${styles.list__with_checks}`}>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Sin costo.
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Instalación y activación de los equipos en el momento.
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Ubicaciones disponibles: Plottier (Neuquén), Añelo
                      (Neuquén), Mendoza (capital), Córdoba (capital) Zárate
                      (Bs. As).
                    </li>
                  </ul>
                  <h2 className={`${styles.header__title} text text--h5`}>
                    Disponible sin cargo para los planes YPF Ruta con
                    telemetría.
                  </h2>
                  <a
                    className={`${styles.news__button} button button--large button--primary button--light-blue`}
                    href="https://www.youtube.com/watch?v=iDYKx0KVyfI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mirá el video
                  </a>
                </div>
                <div className={`${styles.news__pic} hide-mobile-640`}>
                  <div className={`${styles.cont_info__label}`}>
                    <div
                      className={`${styles.info__label} ${styles.right} ${styles.info__label__full__choferes}`}
                    >
                      Sin cargo para Planes RT con telemetría
                    </div>
                    <Image
                      src="/images/home/news/punto-de-instalacion-rapida-m.png"
                      alt="Puntos de instalación rápida"
                      title="Puntos de instalación rápida"
                      width={360}
                      height={496}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className={`${styles.embla__slide} `}>
            <div className={styles.embla__slide__inner}>
              {/* item 5 */}
              <article className={`${styles.news__content_wrapper}`}>
                <div className={`${styles.news__texts}`}>
                  <div className={`${styles.tit__label}`}>Novedades</div>
                  <h2 className={`${styles.news__title} text text--h1`}>
                    Identificá a tus choferes solo con el celular
                  </h2>

                  <div className={`${styles.news__pic} ${styles.mob} show-mob`}>
                    <div className={`${styles.cont_info__label}`}>
                      <div className={`${styles.info__label} ${styles.bottom}`}>
                        Una app que funciona como llave virtual para identificar
                        a cada chofer que conduce la unidad.
                      </div>
                      <Image
                        src="/images/home/news/app-identificador-de-choferes-m.png"
                        alt=""
                        width={330}
                        height={530}
                      />
                    </div>
                  </div>

                  <p className={`${styles.news__text} text text--body-01`}></p>
                  <ul className={`list  ${styles.list__with_checks}`}>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Sin dispositivos, ni costos extras de equipamiento.
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Generás una identificación virtual desde tu celular.
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Te conectás con el GPS instalado a la unidad y listo.
                    </li>
                  </ul>
                  <h2 className="header__title text text--h5">
                    Disponible sin cargo contratando el Plan RT Óptimo o
                    Avanzado.
                  </h2>
                  <a
                    className={`${styles.news__button} button button--large button--primary button--light-blue`}
                    href="https://www.ypf.com/productosyservicios/YPF-Ruta/Paginas/planes.html"
                  >
                    Planes
                  </a>
                </div>
                <div className={`${styles.news__pic} hide-mobile-640`}>
                  <div className={`${styles.cont_info__label}`}>
                    <div
                      className={`${styles.info__label} ${styles.right} ${styles.info__label__full__choferes}`}
                    >
                      Con el Plan RT Óptimo o Avanzado
                    </div>
                    <Image
                      src="/images/home/news/app-identificador-de-choferes.png"
                      alt=""
                      width={360}
                      height={496}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className={`${styles.embla__slide} `}>
            <div className={styles.embla__slide__inner}>
              {/* item 6 */}
              <article className={`${styles.news__content_wrapper}`}>
                <div className={`${styles.news__texts}`}>
                  <div className={`${styles.tit__label}`}>Novedades</div>
                  <h2 className={`${styles.news__title} text text--h1`}>
                    Equipo GPS
                    <br />
                    auto-instalable
                  </h2>

                  <div className={`${styles.news__pic} ${styles.mob} show-mob`}>
                    <div className={`${styles.cont_info__label}`}>
                      <div className={`${styles.info__label} ${styles.right}`}>
                        Comenzá a gestionar tu flota en 3 minutos
                      </div>
                      <Image
                        src="/images/home/news/gps-autoinstalable-m.png"
                        alt=""
                        width={330}
                        height={525}
                      />
                    </div>
                  </div>

                  <p className={`${styles.news__text} text text--body-01`}>
                    Con el Plan RT Óptimo, podes adquirir el equipo GPS
                    auto-instalable.
                  </p>
                  <ul className={`list  ${styles.list__with_checks}`}>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Recibí el GPS
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Instalalo en 3 minutos
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Comenzá a gestionar tu flota.
                    </li>
                  </ul>
                  <h2 className={`text text--h5`}>
                    Para saber cómo lo instalas, ¡mirá el video!
                  </h2>
                  <a
                    className={`${styles.news__button} button button--large button--primary button--light-blue`}
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtu.be/DSNRlNXZpgE"
                  >
                    Instalación GPS
                  </a>
                </div>

                <div className={`${styles.news__pic} hide-mobile-640`}>
                  <div className={`${styles.cont_info__label}`}>
                    <div
                      className={`${styles.info__label} ${styles.right} ${styles.info__label__full}`}
                    >
                      Comenzá a gestionar tu flota en 3 minutos
                    </div>
                    <div className={styles.imageCont}>
                      <Image
                        src="/images/home/news/gps-autoinstalable.png"
                        alt=""
                        width={360}
                        height={496}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className={`${styles.embla__slide} `}>
            <div className={styles.embla__slide__inner}>
              {/* item 7 */}
              <article className={`${styles.news__content_wrapper}`}>
                <div className={`${styles.news__texts}`}>
                  <div className={`${styles.tit__label}`}>Novedades</div>
                  <h2 className={`${styles.news__title} text text--h1`}>
                    Nuevos servicios
                    <br />
                    YPF Ruta{' '}
                  </h2>

                  <div className={`${styles.news__pic} ${styles.mob} show-mob`}>
                    <div className={`${styles.cont_info__label}`}>
                      <div className={`${styles.info__label} ${styles.right}`}>
                        No tienen costo adicional
                      </div>
                      <Image
                        src="/images/home/news/fig-02-m.png"
                        alt=""
                        width={330}
                        height={524}
                      />
                    </div>
                  </div>

                  <p className={`${styles.news__text} text text--body-01`}>
                    Evolucionamos para brindar a tus conductores los servicios:
                  </p>
                  <ul className={`list  ${styles.list__with_checks}`}>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      Mecánica on-line, remolque y asistencia mécanica, médico
                      on-line, emergencia odontológica, seguro de hogar y otros
                      más…
                    </li>
                    <li
                      className={`list__item text text--body-01 ${styles.light_icon}`}
                    >
                      No tienen costo adicional. Solicitalos directamente con
                      los datos de tu tarjeta YPF Ruta.
                    </li>
                  </ul>
                  <h2 className={`${styles.header__title} text text--h5`}>
                    Con YPF Ruta comenzá a tener un viaje más seguro y
                    placentero.
                  </h2>
                  <a
                    className={`${styles.news__button} button button--large button--primary button--light-blue`}
                    href="docs/Condicionado-YPF-RUTA.pdf"
                  >
                    Conocé más
                  </a>
                </div>

                <div className={`${styles.news__pic} hide-mobile-640`}>
                  <div className={`${styles.cont_info__label}`}>
                    <div className={`${styles.info__label} ${styles.bottom}`}>
                      No tienen costo adicional
                    </div>
                    <Image
                      src="/images/home/news/fig-02.png"
                      alt=""
                      width={360}
                      height={496}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.news_buttons_embla}>
        <PrevButtonCircle onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButtonCircle onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  )
}

export default BeneficiosEmblaCarousel
