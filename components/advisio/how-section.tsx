const steps = [
  {
    num: "01",
    title: "Trimiți datele",
    text: "Numele afacerii, orașul și tipul ei. Noi cercetăm restul. Sub 2 minute — fără documente, fără linkuri."
  },
  {
    num: "02",
    title: "Noi analizăm",
    text: "Cercetăm afacerea ta online: recenzii, prețuri, prezență digitală. Raport real, nu template."
  },
  {
    num: "03",
    title: "Primești raportul",
    text: "PDF în 48h cu prompt-uri gata de copiat și plan de acțiune prioritizat pe 30 de zile."
  }
]

export function HowSection() {
  return (
    <section className="bg-card border-t border-b border-border">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold-deep mb-4">
          Cum funcționează
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark mb-12 tracking-tight max-w-[500px] text-balance">
          Trei pași. Un raport.<br />Rezultate imediate.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-7 left-[calc(16.66%+14px)] right-[calc(16.66%+14px)] h-px bg-gold/30" />

          {steps.map((step, i) => (
            <div key={i} className="md:pr-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-full border-[1.5px] border-gold flex items-center justify-center font-serif text-sm font-semibold text-gold-deep shrink-0">
                  {step.num}
                </div>
                <span className="text-sm font-medium text-text-dark">{step.title}</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed pl-10">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
