const metrics = [
  { value: "5", label: "secțiuni personalizate în fiecare raport" },
  { value: "5+", label: "instrumente AI cu prompt-uri incluse" },
  { value: "48h", label: "de la înregistrare la raport livrat" },
  { value: "30", label: "zile plan de acțiune săptămână cu săptămână" }
]

export function MetricsSection() {
  return (
    <section className="bg-navy pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
        {metrics.map((metric, i) => (
          <div 
            key={i} 
            className={`md:px-8 ${i === 0 ? 'md:pl-0' : ''} ${i < metrics.length - 1 ? 'md:border-r md:border-gold/15' : ''}`}
          >
            <div className="font-serif text-4xl md:text-5xl font-semibold text-gold-light leading-none mb-1.5">
              {metric.value}
            </div>
            <div className="text-[0.78rem] text-white/40 leading-snug tracking-wide">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
