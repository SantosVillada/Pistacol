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

const SITE_URL = 'https://pistacol.com'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Pistacol',
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description:
        'Productores y distribuidores de pistachos tostados y salados premium de San Juan, Argentina.',
      sameAs: ['https://instagram.com/pistacol'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+54-264-458-8978',
          contactType: 'sales',
          areaServed: 'San Juan, Argentina',
          availableLanguage: 'es',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+54-351-599-1020',
          contactType: 'sales',
          areaServed: 'Córdoba, Argentina',
          availableLanguage: 'es',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Pistacol',
      inLanguage: 'es-AR',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'ItemList',
      name: 'Productos Pistacol',
      itemListElement: [
        {
          '@type': 'Product',
          name: 'Pistachos Tostados y Salados — Bolsa 500 g',
          image: `${SITE_URL}/images/producto-bolsa-500g.png`,
          description:
            'Pistachos tostados y salados, 100% naturales y sin conservantes.',
          brand: { '@type': 'Brand', name: 'Pistacol' },
          category: 'Frutos secos',
        },
        {
          '@type': 'Product',
          name: 'Pistachos Tostados y Salados — Bolsa 1 kg',
          image: `${SITE_URL}/images/producto-bolsa-1kg.png`,
          description: 'Formato más popular, ideal para snacks y recetas.',
          brand: { '@type': 'Brand', name: 'Pistacol' },
          category: 'Frutos secos',
        },
        {
          '@type': 'Product',
          name: 'Pistachos Tostados y Salados — Bolsa 5 kg',
          image: `${SITE_URL}/images/producto-bolsa-5kg.png`,
          description: 'Formato familiar o para negocios, libre de gluten.',
          brand: { '@type': 'Brand', name: 'Pistacol' },
          category: 'Frutos secos',
        },
        {
          '@type': 'Product',
          name: 'Pistachos Tostados y Salados — Caja 10 kg',
          image: `${SITE_URL}/images/producto-caja-10kg.png`,
          description: 'Producto de primera calidad en gran volumen para revendedores.',
          brand: { '@type': 'Brand', name: 'Pistacol' },
          category: 'Frutos secos',
        },
        {
          '@type': 'Product',
          name: 'Pistachos Tostados y Salados — Frasco 150 g',
          image: `${SITE_URL}/images/producto-frasco-150g.png`,
          description: 'Presentación gourmet en frasco, ideal como regalo.',
          brand: { '@type': 'Brand', name: 'Pistacol' },
          category: 'Frutos secos',
        },
        {
          '@type': 'Product',
          name: 'Aceitunas Rellenas con Pistacho',
          image: `${SITE_URL}/images/producto-aceitunas.png`,
          description:
            'Aceitunas premium rellenas con pistacho artesanal, ideales para tablas y aperitivos.',
          brand: { '@type': 'Brand', name: 'Pistacol' },
          category: 'Conservas',
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
