import Header from '@/components/header'
import Hero from '@/components/hero'
import FeaturesBar from '@/components/features-bar'
import Nosotros from '@/components/nosotros'
import Productos from '@/components/productos'
import Beneficios from '@/components/beneficios'
import ElPistacho from '@/components/el-pistacho'
import Origen from '@/components/origen'
import Contacto from '@/components/contacto'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesBar />
        <Nosotros />
        <Productos />
        <Beneficios />
        <ElPistacho />
        <Origen />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
