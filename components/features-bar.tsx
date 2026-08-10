const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 3-4 4-4 8s2.5 5 4 9c1.5-4 4-5 4-9s-2.5-5-4-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9c-2 1-3 3-3 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 9c2 1 3 3 3 5" />
      </svg>
    ),
    title: '100% Natural',
    description: 'Sin conservantes ni aditivos',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>
    ),
    title: 'Origen San Juan',
    description: 'Producidos en el corazón pistachero de Argentina',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Calidad Premium',
    description: 'Seleccionados y procesados con los más altos estándares',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fuente de Energía',
    description: 'Ricos en proteínas, fibra y antioxidantes',
  },
]

export default function FeaturesBar() {
  return (
    <section className="bg-[#1e3a1e] py-10 px-6" aria-label="Características principales">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#c9a227]/20">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-4 lg:px-8 first:lg:pl-0 last:lg:pr-0">
            <div className="text-[#c9a227] mt-0.5 flex-shrink-0">{f.icon}</div>
            <div>
              <p className="text-[#e2c265] font-bold text-sm tracking-wide uppercase">{f.title}</p>
              <p className="text-[#a8c0a0] text-xs leading-relaxed mt-0.5">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
