import Hero from 'components/views/home/hero'
import Beneficios from 'components/views/home/beneficios'
import Planes from 'components/views/home/planes'
import Novedades from 'components/views/home/novedades'
import Presencia from 'components/views/home/presencia'
import Testimonios from 'components/views/home/testimonios'
import Highlights from 'components/views/home/highlights'
import FormAdherirme from 'components/FormAdherirme/FormAdherirme'

export default function Homeview() {
  return (
    <>
      <Hero />
      <Beneficios />
      <Planes />
      <Novedades />
      <Presencia />
      <Testimonios />
      <Highlights />
      <FormAdherirme />
    </>
  )
}
