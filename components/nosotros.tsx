export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-[#f5f0e8] py-24 px-6" aria-labelledby="nosotros-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#c9a227] text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c9a227] inline-block" />
            Sobre Nosotros
          </p>
          <h2
            id="nosotros-heading"
            className="text-4xl lg:text-5xl font-bold text-[#1e3a1e] leading-tight text-balance mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Pasión por el pistacho, compromiso con la calidad
          </h2>
          <div className="h-0.5 w-16 bg-[#c9a227] mb-8" />
          <p className="text-[#5a5040] text-base leading-relaxed mb-5">
            En Pistacol trabajamos desde el corazón de San Juan para ofrecer pistachos de la más alta calidad.
            Con más de 4 años de experiencia en la distribución y el fraccionamiento, cuidamos cada etapa del proceso,
            desde la selección hasta el envasado, para que disfrutes de un producto único.
          </p>
          <p className="text-[#5a5040] text-base leading-relaxed mb-5">
            Nuestros pistachos son <strong className="text-[#1e3a1e]">100% naturales, sin conservantes y libres de Gluten</strong>.
            Recientemente expandimos nuestra distribución a
            <strong className="text-[#1e3a1e]"> Córdoba</strong>, llevando el sabor premium de San Juan
            a todo el país.
          </p>
          <p className="text-[#5a5040] text-base leading-relaxed mb-10">
            Además de nuestros pistachos tostados y salados, ofrecemos una delicia gourmet exclusiva:
            aceitunas rellenas con pistacho, una combinación que conquista el paladar de quienes buscan
            lo mejor en frutos secos y conservas.
          </p>
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="text-center min-w-0">
              <p className="text-3xl sm:text-4xl font-bold text-[#1e3a1e]" style={{ fontFamily: 'Playfair Display, serif' }}>4+</p>
              <p className="text-[#5a5040] text-[10px] sm:text-xs tracking-wide uppercase">Años de experiencia</p>
            </div>
            <div className="h-12 w-px bg-[#c9a227]/40 shrink-0" />
            <div className="text-center min-w-0">
              <p className="text-3xl sm:text-4xl font-bold text-[#1e3a1e]" style={{ fontFamily: 'Playfair Display, serif' }}>2</p>
              <p className="text-[#5a5040] text-[10px] sm:text-xs tracking-wide uppercase">Provincias</p>
            </div>
            <div className="h-12 w-px bg-[#c9a227]/40 shrink-0" />
            <div className="text-center min-w-0">
              <p className="text-3xl sm:text-4xl font-bold text-[#1e3a1e]" style={{ fontFamily: 'Playfair Display, serif' }}>100%</p>
              <p className="text-[#5a5040] text-[10px] sm:text-xs tracking-wide uppercase">Natural y Libre de Gluten</p>
            </div>
          </div>
        </div>

        {/* Image block */}
        <div className="relative">
          <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src="/images/nosotros-sanjuan.png"
            alt="Paisaje montañoso de San Juan, Argentina — tierra de pistachos"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating card */}
          <div className="absolute bottom-[-24px] right-[-24px] lg:bottom-[-32px] lg:right-[-32px] bg-[#1e3a1e] text-white rounded-lg p-6 shadow-xl max-w-[180px]">
            <div className="text-[#c9a227] mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
            <p className="text-[#e2c265] font-bold text-sm tracking-wide uppercase">Origen San Juan</p>
            <p className="text-[#a8c0a0] text-xs mt-1 leading-relaxed">Tierra de sol, aire puro y tradición productiva.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
