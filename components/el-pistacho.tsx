const facts = [
  {
    number: '7–10',
    unit: 'años',
    label: 'para la primera cosecha',
    description: 'El pistachero es paciente. Tarda hasta 10 años en producir su primera cosecha significativa, pero una vez establecido, puede vivir y producir frutos por más de 300 años.',
  },
  {
    number: '+300',
    unit: 'años',
    label: 'de vida productiva',
    description: 'Es uno de los árboles frutales más longevos del mundo. A medida que envejece, su producción puede aumentar.',
  },
  {
    number: '300–400',
    unit: 'mm',
    label: 'de agua anual',
    description: 'El pistachero es extremadamente resistente a la sequía. Requiere muy poca agua, lo que lo hace ideal para las condiciones áridas de San Juan.',
  },
]

const growthSteps = [
  {
    title: 'Plantación',
    description: 'Se planta en suelos bien drenados, profundos y preferentemente arenosos o pedregosos. Requiere exposición solar plena durante todo el día.',
  },
  {
    title: 'Crecimiento vegetativo',
    description: 'Durante los primeros 3-4 años, el árbol crece sin producir frutos. Se podas y cuidados para darle la forma adecuada y fortalecer su estructura.',
  },
  {
    title: 'Primeras flores',
    description: 'Alrededor del año 4-5 aparecen las primeras flores. El pistachero es dioico: necesita árboles machos y hembras para la polinización.',
  },
  {
    title: 'Primera cosecha',
    description: 'Entre los años 7 y 10 se produce la primera cosecha comercial. A partir de allí, la producción crece año a año.',
  },
  {
    title: 'Madurez plena',
    description: 'A los 15-20 años, el árbol alcanza su plena producción. La cosecha se realiza en otoño, cuando los frutos se abren naturalmente.',
  },
]

export default function ElPistacho() {
  return (
    <section id="pistacho" className="bg-[#f5f0e8] py-24 px-6" aria-labelledby="pistacho-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a227] text-xs font-bold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c9a227] inline-block" />
            El Pistacho
            <span className="h-px w-8 bg-[#c9a227] inline-block" />
          </p>
          <h2
            id="pistacho-heading"
            className="text-4xl lg:text-5xl font-bold text-[#1e3a1e] text-balance"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            El fruto seco más antiguo del mundo
          </h2>
          <p className="text-[#5a5040] mt-4 max-w-2xl mx-auto leading-relaxed">
            El pistacho (<em>Pistacia vera</em>) es originario de Asia Central y el Medio Oriente, y ha sido consumido
            por la humanidad desde hace más de 9.000 años. Hoy, San Juan es una de las zonas más prometedoras
            de Argentina para su cultivo.
          </p>
        </div>

        {/* Two-column: intro text + image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-[#1e3a1e] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              ¿Qué es el pistacho?
            </h3>
            <p className="text-[#5a5040] leading-relaxed mb-5">
              El pistacho es la semilla comestible de un árbol llamado <em>Pistacia vera</em>, que pertenece a la familia de las Anacardiáceas.
              La semilla se encuentra dentro de una drupa — un fruto carnoso con una cáscara dura — que se abre naturalmente
              cuando el fruto madura, dando lugar al icónico pistacho &quot;entreabierto&quot;.
            </p>
            <p className="text-[#5a5040] leading-relaxed mb-5">
              Es uno de los frutos secos más nutritivos: rico en proteínas, grasas saludables, fibra, vitaminas del grupo B, vitamina E,
              potasio, fósforo y antioxidantes. A diferencia de otros frutos secos, el pistacho tiene uno de los menores contenidos
              calóricos y uno de los más altos en proteínas.
            </p>
            <p className="text-[#5a5040] leading-relaxed">
              Su color verde característico se debe a la clorofila presente en la semilla, mientras que los tonos
              amarillos y morados de la piel interior provienen de los carotenoides y antocianinas.
            </p>
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/fruto-seco.png"
              alt="Pistachos maduros abriéndose en el árbol, con la plantación en el fondo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {facts.map((f) => (
            <div key={f.label} className="bg-[#1e3a1e] rounded-xl p-7 text-center">
              <p className="text-[#c9a227] text-4xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                {f.number} <span className="text-xl">{f.unit}</span>
              </p>
              <p className="text-[#e2c265] text-sm font-bold uppercase tracking-wide mb-3">{f.label}</p>
              <p className="text-[#a8c0a0] text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Cultivo y crecimiento */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Climate requirements */}
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a1e] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Clima y condiciones de cultivo
            </h3>
            <div className="space-y-5">
              {[
                {
                  icon: '☀️',
                  title: 'Veranos calurosos y secos',
                  text: 'El pistachero necesita temperaturas estivales superiores a 35-38°C durante la maduración del fruto. San Juan, con sus veranos extremos, es ideal.',
                },
                {
                  icon: '❄️',
                  title: 'Inviernos fríos',
                  text: 'Requiere entre 1.000 y 1.500 horas de frío por debajo de 7°C para romper la dormancia invernal. Las noches frías de San Juan cumplen perfectamente esta función.',
                },
                {
                  icon: '💧',
                  title: 'Muy poca agua',
                  text: 'Con apenas 300-400mm anuales (incluso menos con riego de apoyo) el árbol prospera. Es uno de los cultivos más eficientes en el uso del agua.',
                },
                {
                  icon: '🌱',
                  title: 'Suelo bien drenado',
                  text: 'No tolera suelos encharcados. Prefiere suelos sueltos, profundos, con pH neutro a alcalino, similares a los suelos aluviales del piedemonte sanjuanino.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl mt-0.5 flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <div>
                    <p className="text-[#1e3a1e] font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-[#5a5040] text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth timeline */}
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a1e] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              El camino hasta la cosecha
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#c9a227]/30" aria-hidden="true" />
              <div className="space-y-6">
                {growthSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1e3a1e] border-2 border-[#c9a227] flex items-center justify-center text-[#c9a227] text-xs font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="pb-2">
                      <p className="text-[#1e3a1e] font-bold text-sm mb-1">{step.title}</p>
                      <p className="text-[#5a5040] text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
