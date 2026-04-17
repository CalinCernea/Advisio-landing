import { Plus } from "lucide-react"


export function PainSection() {
  const painPoints = [
    <span key={0}>Recenzii Google fără răspuns — o invitație deschisă pentru <span className="font-bold text-text-dark">concurență</span> să îți ia clienții</span>,
    <span key={1}>Postări automate care lipsesc — afacerea ta pare <span className="font-bold text-navy">închisă</span> în mediul online</span>,
    <span key={2}>Documentație de training inexistentă — depinzi de oameni, nu de procese <span className="font-bold text-text-dark">scalabile</span></span>,
    <span key={3}>Lead-uri <span className="font-bold text-navy">pierdute</span> pe DM — clienți care vor să cumpere, dar la care nu răspunzi la timp</span>
  ]

  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold-deep mb-4">
            Diagnostic Business
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark leading-[1.15] mb-4 tracking-tight text-balance">
            Unde <span className="text-gold-deep font-bold italic">pierzi profit</span><br />fără să<br />îți dai seama.
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Majoritatea <span className="font-bold text-text-dark">blocajelor</span> dintr-un business local nu vin din lipsa clienților, ci din gestionarea manuală a fluxurilor digitale. Auditul nostru îți arată unde se scurg banii.
          </p>
        </div>

        <ul className="flex flex-col">
          {painPoints.map((point, i) => (
            <li
              key={i}
              className={`flex items-start gap-3 py-4 text-sm text-text-mid leading-normal ${i === 0 ? '' : 'border-t border-border'
                }`}
            >
              <div className="w-[18px] h-[18px] shrink-0 mt-0.5 rounded-full border border-text-muted flex items-center justify-center">
                <Plus className="w-3 h-3 text-text-muted" />
              </div>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
