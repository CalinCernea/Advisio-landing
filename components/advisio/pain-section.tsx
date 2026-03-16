import { Plus } from "lucide-react"

const painPoints = [
  "Răspunsuri la recenzii Google — scrise manual, una câte una",
  "Postări săptămânale pe Instagram și Facebook create de la zero",
  "Scripturi de training pentru angajați noi, rescrise de fiecare dată",
  "Aceleași 10 întrebări primite zilnic pe DM, la care răspunzi manual"
]

export function PainSection() {
  return (
    <section className="bg-cream-dark border-t border-b border-border">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold-deep mb-4">
            Problema reală
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark leading-[1.15] mb-4 tracking-tight text-balance">
            Ore pierdute<br />săptămânal<br />pe sarcini repetabile.
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Fiecare sarcină din lista de mai jos poate fi automatizată sau accelerată cu AI în câteva ore. Raportul Advisio îți arată exact cum.
          </p>
        </div>

        <ul className="flex flex-col">
          {painPoints.map((point, i) => (
            <li 
              key={i}
              className={`flex items-start gap-3 py-4 text-sm text-text-mid leading-normal ${
                i === 0 ? '' : 'border-t border-border'
              } ${i === painPoints.length - 1 ? '' : ''}`}
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
