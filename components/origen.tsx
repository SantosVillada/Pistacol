export default function Origen() {
  return (
    <section id="origen" className="bg-[#1e3a1e] py-24 px-6 relative overflow-hidden" aria-labelledby="origen-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a227] text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a227] inline-block" />
            Origen
            <span className="h-px w-8 bg-[#c9a227] inline-block" />
          </p>
          <h2
            id="origen-heading"
            className="text-4xl lg:text-5xl font-bold text-white text-balance"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Desde San Juan al resto del país
          </h2>
          <p className="text-[#a8c0a0] mt-4 max-w-xl mx-auto leading-relaxed">
            Nacimos en el corazón de la provincia pistachera de Argentina y expandimos nuestros sabores a Córdoba.
          </p>
        </div>

        {/* Two regions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* San Juan */}
          <div className="relative rounded-xl overflow-hidden group">
            <div className="aspect-[4/3] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
                alt="Paisaje de San Juan, Argentina — Andes y valles áridos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152a15]/90 via-[#1e3a1e]/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#c9a227] text-[#1e3a1e] text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  Sede Central
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                San Juan, Argentina
              </h3>
              <p className="text-[#d4cdbf] text-sm leading-relaxed mb-4">
                Tierra de sol intenso, amplitud térmica y suelos aluviales ideales para el cultivo del pistacho.
                Aquí nació Pistacol, aquí crecemos, aquí cosechamos.
              </p>
              <a
                href="https://wa.me/542644588978"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#e2c265] text-[#1e3a1e] font-bold text-xs px-4 py-2.5 rounded transition-colors tracking-wide uppercase"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                264 458 8978
              </a>
            </div>
          </div>

          {/* Córdoba */}
          <div className="relative rounded-xl overflow-hidden group">
            <div className="aspect-[4/3] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                alt="Paisaje de Córdoba, Argentina — sierras y valles"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152a15]/90 via-[#1e3a1e]/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#a8c0a0] text-[#1e3a1e] text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  Nueva Distribución
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Córdoba, Argentina
              </h3>
              <p className="text-[#d4cdbf] text-sm leading-relaxed mb-4">
                El crecimiento en la demanda nos llevó a expandir nuestros sabores a Córdoba.
                El mismo producto premium, ahora más cerca de vos.
              </p>
              <a
                href="https://wa.me/543515991020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c9a227] hover:bg-[#e2c265] text-[#1e3a1e] font-bold text-xs px-4 py-2.5 rounded transition-colors tracking-wide uppercase"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                351 599 1020
              </a>
            </div>
          </div>
        </div>

        {/* Growth story */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#a8c0a0] text-base leading-relaxed">
            El crecimiento del consumo de pistachos en Argentina refleja una tendencia mundial hacia snacks más
            saludables y naturales. En Pistacol acompañamos ese crecimiento con la misma dedicación y calidad
            que nos caracteriza desde el primer día.
          </p>
        </div>
      </div>
    </section>
  )
}
