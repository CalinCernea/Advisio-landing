import { ImageComparisonSlider } from "@/components/ui/image-comparison-slider-horizontal"

export function ComparisonSection() {
  return (
    <section className="bg-white w-full border-b border-border">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-2xl mb-12 relative z-10">
          <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold-deep mb-4">
            Evoluția Ta
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark mb-6 tracking-tight text-balance">
            Înainte și După Raportul Advisio
          </h2>
          <p className="text-sm text-text-muted leading-relaxed max-w-[600px]">
            Diferența dintre o prezență digitală care consumă bugetul fără rezultate
            și un sistem de marketing clar, cu direcție și conversii. Trage de slider pentru a vedea transformarea.
          </p>
        </div>

        <div className="mx-auto w-full relative z-10">
          <div className="rounded-xl border border-border overflow-hidden shadow-sm aspect-[16/9] bg-background">
            <ImageComparisonSlider
              leftImage="/images/inainte.jpg"
              rightImage="/images/dupa.jpg"
              altLeft="Situație haotică înainte de raport"
              altRight="Sistem clar și performant după raport"
              initialPosition={50}
            />
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 rounded-xl border border-border bg-background/50">
              <h3 className="text-lg font-serif font-semibold text-text-dark flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-text-muted text-xs">
                  ✗
                </span>
                Înainte
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-text-muted leading-relaxed">
                <li className="flex gap-x-3 items-center">Bugete irosite pe campanii ineficiente și neclare</li>
                <li className="flex gap-x-3 items-center">Fără o direcție vizuală coerentă a brandului</li>
                <li className="flex gap-x-3 items-center">Decizii luate pe instinct, nu pe analize și date clare</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl border border-gold/30 bg-gold/5 flex-1">
              <h3 className="text-lg font-serif font-semibold text-text-dark flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-white text-xs font-bold">
                  ✓
                </span>
                După Raport
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-text-muted leading-relaxed">
                <li className="flex gap-x-3 items-center">Strategie de marketing profitabilă și targetată corect</li>
                <li className="flex gap-x-3 items-center">Brand vizual puternic, memorabil și diferențiat</li>
                <li className="flex gap-x-3 items-center">Claritate totală și un plan de acțiune pas cu pas prestabilit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

