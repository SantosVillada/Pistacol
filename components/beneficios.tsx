const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Saludable para el Corazón',
    description: 'Ricos en grasas monoinsaturadas y poliinsaturadas que contribuyen a la salud cardiovascular.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fuente de Proteínas',
    description: 'Con más de 20g de proteína por cada 100g, son el snack ideal para quienes llevan una vida activa.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Mejora la Concentración',
    description: 'La vitamina B6 y los antioxidantes favorecen la función cognitiva y la claridad mental.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Fortalece el Sistema Inmune',
    description: 'Alto contenido en zinc, vitamina E y antioxidantes que refuerzan las defensas del organismo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 3-4 4-4 8s2.5 5 4 9c1.5-4 4-5 4-9s-2.5-5-4-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9c-2 1-3 3-3 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 9c2 1 3 3 3 5" />
      </svg>
    ),
    title: 'Rico en Antioxidantes',
    description: 'Contienen luteína y zeaxantina, antioxidantes que protegen las células del estrés oxidativo.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Favorece la Digestión',
    description: 'Su alto contenido en fibra dietética apoya la salud intestinal y regula el tránsito.',
  },
]

export default function Beneficios() {
  return (
    <section id="beneficios" className="bg-[#1e3a1e] py-24 px-6 relative overflow-hidden" aria-labelledby="beneficios-heading">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#c9a227] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#c9a227] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a227] text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a227] inline-block" />
            Beneficios
            <span className="h-px w-8 bg-[#c9a227] inline-block" />
          </p>
          <h2
            id="beneficios-heading"
            className="text-4xl lg:text-5xl font-bold text-white text-balance"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Un snack saludable para tu día a día
          </h2>
          <p className="text-[#a8c0a0] mt-4 max-w-xl mx-auto leading-relaxed">
            El pistacho es uno de los frutos secos más completos nutricionalmente. Incorporarlo a tu dieta es una decisión que el cuerpo agradece.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-[#152a15]/60 border border-[#c9a227]/15 rounded-xl p-7 hover:border-[#c9a227]/40 transition-colors duration-300"
            >
              <div className="text-[#c9a227] mb-5">{b.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
              <p className="text-[#a8c0a0] text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Libre de Gluten highlight */}
        <div className="mt-16 border border-[#c9a227]/30 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 bg-[#152a15]/40">
          <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#c9a227] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8 text-[#c9a227]" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <span className="bg-[#c9a227] text-[#1e3a1e] text-sm font-bold px-4 py-1 rounded-full tracking-widest uppercase">Libre de Gluten</span>
            </div>
            <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              Apto para celíacos e intolerancias
            </h3>
            <p className="text-[#a8c0a0] text-sm leading-relaxed max-w-2xl">
              Nuestros pistachos son Libres de Gluten y están certificados.
              Una opción segura y deliciosa para personas con enfermedad celíaca o sensibilidad al gluten.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
