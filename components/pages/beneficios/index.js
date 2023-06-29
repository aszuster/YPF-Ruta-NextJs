import Features from 'components/views/beneficios/Features'
import Labels from 'components/views/beneficios/Labels'
import NewWays from 'components/views/beneficios/NewWays'
import SliderBeneficios from 'components/views/beneficios/Slider'
import Tabs from 'components/views/beneficios/Tabs'
import './index.module.css'

const BeneficiosView = () => {
  return (
    <>
      <SliderBeneficios />
      <Labels />
      <Tabs />
      <Features />
      <NewWays />
    </>
  )
}

export default BeneficiosView
