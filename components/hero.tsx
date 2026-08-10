export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fruto-seco.png"
          alt="Pistachos maduros en el árbol — plantación Pistacol, San Juan, Argentina"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#152a15]/90 via-[#1e3a1e]/75 to-[#1e3a1e]/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-0 w-full">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-[#c9a227] text-xs font-bold tracking-[0.3em] uppercase mb-5">
            Calidad que viene de nuestras tierras
          </p>

          {/* Headline */}
          <h1
            className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-balance mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Pistachos<br />
            Tostados y Salados
          </h1>

          {/* Gold divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#c9a227]" />
            <svg className="w-5 h-5 text-[#c9a227]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C9 2 7 5 7 8c0 2.5 1.5 4.5 3.5 5.5L9 22h6l-1.5-8.5C15.5 12.5 17 10.5 17 8c0-3-2-6-5-6z" />
            </svg>
            <div className="h-px w-12 bg-[#c9a227]" />
          </div>

          {/* Description */}
          <p className="text-[#d4cdbf] text-lg leading-relaxed mb-10 max-w-md">
            Seleccionamos los mejores pistachos de origen sanjuanino para llevar a tu mesa un producto
            premium, natural y delicioso. Sin TAC, sin conservantes, 100% natural.
          </p>

          {/* Badge SIN TAC */}
          <div className="flex items-center gap-3 mb-10">
            <span className="border border-[#c9a227] text-[#c9a227] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Sin TAC
            </span>
            <span className="border border-[#c9a227] text-[#c9a227] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Sin Gluten
            </span>
            <span className="border border-[#c9a227] text-[#c9a227] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              100% Natural
            </span>
          </div>

          {/* CTA */}
          <a
            href="#productos"
            className="inline-flex items-center gap-3 bg-[#c9a227] hover:bg-[#e2c265] text-[#1e3a1e] font-bold text-sm px-8 py-4 rounded tracking-widest uppercase transition-colors duration-200"
          >
            Conocé nuestros productos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#c9a227]/60 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
