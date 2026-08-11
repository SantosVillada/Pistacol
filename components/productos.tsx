'use client'

import { useState } from 'react'

const WA_SAN_JUAN = '542644588978'
const WA_CORDOBA = '543515991020'

type Region = 'sanjuan' | 'cordoba'

interface Product {
  id: string
  name: string
  detail: string
  description: string
  image: string
  badge?: string
  isOlive?: boolean
}

const products: Product[] = [
  {
    id: 'bolsa-500g',
    name: 'Pistachos Tostados y Salados',
    detail: 'Bolsa · 500 g',
    description: 'La presentación ideal para disfrutar o compartir. Pistachos tostados y salados, 100% naturales y sin conservantes.',
    image: '/images/producto-bolsa-500g.png',
  },
  {
    id: 'bolsa-1kg',
    name: 'Pistachos Tostados y Salados',
    detail: 'Bolsa · 1 kg',
    description: 'El formato más popular. Perfectos para snacks diarios o para incorporar en tus recetas favoritas.',
    image: '/images/producto-bolsa-1kg.png',
    badge: 'Más vendido',
  },
  {
    id: 'bolsa-5kg',
    name: 'Pistachos Tostados y Salados',
    detail: 'Bolsa · 5 kg',
    description: 'Formato familiar o para negocios. Libre de Gluten, sin aditivos, con toda la calidad Pistacol.',
    image: '/images/producto-bolsa-5kg.png',
  },
  {
    id: 'caja-10kg',
    name: 'Pistachos Tostados y Salados',
    detail: 'Caja · 10 kg',
    description: 'La elección de profesionales y revendedores. Producto de primera calidad en gran volumen.',
    image: '/images/producto-caja-10kg.png',
    badge: 'Mayorista',
  },
  {
    id: 'frasco-150g',
    name: 'Pistachos Tostados y Salados',
    detail: 'Frasco · 150 g',
    description: 'Presentación gourmet en frasco. El regalo perfecto o el snack premium para disfrutar en cualquier momento.',
    image: '/images/producto-frasco-150g.png',
    badge: 'Gourmet',
  },
  {
    id: 'aceitunas',
    name: 'Aceitunas Rellenas con Pistacho',
    detail: 'Frasco · Selección Gourmet',
    description: 'Una combinación única: aceitunas premium rellenas con pistacho artesanal. El acompañamiento perfecto para tablas y aperitivos.',
    image: '/images/producto-aceitunas.png',
    badge: 'Exclusivo',
    isOlive: true,
  },
]

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

interface RegionModalProps {
  product: Product
  onClose: () => void
}

function RegionModal({ product, onClose }: RegionModalProps) {
  const buildMessage = (region: Region) => {
    const phone = region === 'sanjuan' ? WA_SAN_JUAN : WA_CORDOBA
    const msg = encodeURIComponent(
      `Hola! Quisiera consultar sobre: ${product.name} — ${product.detail}. ¿Podría darme más información?`
    )
    return `https://wa.me/${phone}?text=${msg}`
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="bg-[#f5f0e8] rounded-xl shadow-2xl max-w-sm w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5a5040] hover:text-[#1e3a1e] transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 id="modal-title" className="text-[#1e3a1e] font-bold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
          {product.name}
        </h3>
        <p className="text-[#c9a227] text-sm font-semibold mb-6">{product.detail}</p>
        <p className="text-[#5a5040] text-sm mb-6">Seleccioná tu región para contactar al vendedor:</p>

        <div className="flex flex-col gap-3">
          <a
            href={buildMessage('sanjuan')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 bg-[#1e3a1e] hover:bg-[#2d5a2d] text-white font-semibold text-sm px-5 py-3.5 rounded-lg transition-colors"
          >
            <div>
              <p className="font-bold">San Juan</p>
              <p className="text-[#a8c0a0] text-xs">264 458 8978</p>
            </div>
            <WhatsAppIcon />
          </a>
          <a
            href={buildMessage('cordoba')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 bg-[#1e3a1e] hover:bg-[#2d5a2d] text-white font-semibold text-sm px-5 py-3.5 rounded-lg transition-colors"
          >
            <div>
              <p className="font-bold">Córdoba</p>
              <p className="text-[#a8c0a0] text-xs">351 599 1020</p>
            </div>
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Productos() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section id="productos" className="bg-[#f5f0e8] py-24 px-6" aria-labelledby="productos-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a227] text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a227] inline-block" />
            Productos
            <span className="h-px w-8 bg-[#c9a227] inline-block" />
          </p>
          <h2
            id="productos-heading"
            className="text-4xl lg:text-5xl font-bold text-[#1e3a1e] text-balance"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Descubrí nuestra línea premium
          </h2>
          <p className="text-[#5a5040] mt-4 max-w-xl mx-auto leading-relaxed">
            Todos nuestros productos son tostados y salados, libres de gluten y sin conservantes. Consultá por tu región para realizar tu pedido.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#f5f0e8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={`${product.name} — ${product.detail}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#c9a227] text-[#1e3a1e] text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                {/* Libre de Gluten badge */}
                <span className="absolute top-3 right-3 bg-[#1e3a1e]/90 text-[#e2c265] text-xs font-bold px-2.5 py-1 rounded-full">
                  Libre de Gluten
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[#c9a227] text-xs font-bold tracking-widest uppercase mb-1">{product.detail}</p>
                <h3 className="text-[#1e3a1e] font-bold text-lg mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {product.name}
                </h3>
                <p className="text-[#5a5040] text-sm leading-relaxed mb-6 flex-1">{product.description}</p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full flex items-center justify-center gap-2 bg-[#1e3a1e] hover:bg-[#2d5a2d] text-white font-bold text-sm py-3 rounded-lg transition-colors duration-200 tracking-wide"
                  aria-label={`Pedir ${product.name} — ${product.detail} por WhatsApp`}
                >
                  <WhatsAppIcon />
                  Consultar / Pedir
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Region selection modal */}
      {selectedProduct && (
        <RegionModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}
