"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const auditItems = [
  {
    title: "Profilul afacerii tale",
    meta: "½ pagină",
    desc: "Cercetăm afacerea ta înainte să scriem un singur cuvânt: domeniu, locație, calitatea prezenței online, volumul recenziilor. Primești un sumar care demonstrează că am studiat specificul tău — nu un raport copy-paste.",
    tags: [
      { label: "Cercetare reală", type: "navy" },
      { label: "Personalizat 100%", type: "navy" }
    ]
  },
  {
    title: "Cele 5 activități care îți consumă cel mai mult timp",
    meta: "1–2 pagini",
    desc: "Identificăm sarcinile manuale și repetitive specifice afacerii tale: răspunsuri la recenzii, postări pe social media, scripturi de training, răspunsuri repetitive pe DM, actualizări de documente. Fiecare primește: ce este, cât timp îți ia pe săptămână, ce face AI în locul tău.",
    tags: [
      { label: "~5 ore/săptămână economisite", type: "gold" },
      { label: "Soluții concrete AI", type: "navy" }
    ]
  },
  {
    title: "Instrumentele exacte + cum le folosești",
    meta: "2 pagini",
    desc: "Un instrument per problemă identificată. Claude sau ChatGPT pentru conținut scris. Canva AI pentru materiale vizuale. Fiecare instrument primește: nume, cost (majoritatea gratuite), o propoziție despre ce face, și un exemplu de output generat pe care îl poți folosi azi.",
    tags: [
      { label: "Exemple generate real", type: "gold" },
      { label: "Gratuite în majoritate", type: "navy" },
      { label: "Implementabil azi", type: "green" }
    ]
  },
  {
    title: "Planul tău de 30 de zile",
    meta: "1 pagină",
    desc: "Trei acțiuni prioritare pe săptămână, organizate pentru un antreprenor ocupat. Săptămâna 1: quick wins. Săptămâna 2–3: automatizări. Săptămâna 4: optimizări. Fiecare acțiune are un rezultat concret și o estimare de timp.",
    tags: [
      { label: "Structurat pe săptămâni", type: "navy" },
      { label: "Acțiuni prioritizate", type: "gold" }
    ]
  },
  {
    title: "Opțional: îl facem noi pentru tine",
    meta: "½ pagină",
    desc: "Raportul conține tot ce ai nevoie pentru a implementa singur. Dar dacă preferi să primești documentele gata făcute — 20 de răspunsuri la recenzii scrise, calendarul de 30 zile complet, template-urile DM bilingve și meniul rescris — le livrăm în 48 de ore, la 247 USD, o singură plată.",
    tags: [
      { label: "247 USD · o singură plată", type: "gold" },
      { label: "Livrare în 48h", type: "navy" },
      { label: "Fără abonament", type: "navy" }
    ]
  }
]

const tagStyles = {
  gold: "bg-gold-pale text-gold-deep border border-gold/30",
  navy: "bg-navy/[0.06] text-navy-mid border border-navy/10",
  green: "bg-[#eaf3de] text-[#3b6d11] border border-[#3c6e14]/20"
}

export function AuditSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white w-full border-b border-border">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24">
      <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold-deep mb-4">
        Conținutul raportului
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark mb-2 tracking-tight">
        Ce primești în cele 5 pagini
      </h2>
      <p className="text-[0.92rem] text-text-muted mb-10 max-w-[500px] leading-relaxed">
        Fiecare secțiune este cercetată și scrisă specific pentru afacerea ta — nu există două rapoarte identice.
      </p>

      <div className="flex flex-col gap-0.5">
        {auditItems.map((item, i) => (
          <div
            key={i}
            className={cn(
              "border rounded-lg overflow-hidden bg-card transition-colors cursor-pointer",
              openIndex === i ? "border-gold/50" : "border-border hover:border-gold/40"
            )}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className={cn(
              "flex items-center gap-4 px-5 md:px-6 py-4 transition-colors",
              openIndex === i && "bg-gold/[0.04]"
            )}>
              <span className="font-serif text-sm font-semibold text-gold-deep tracking-wide min-w-[24px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[0.92rem] font-medium text-text-dark flex-1">
                {item.title}
              </span>
              <span className="text-xs text-text-muted tracking-wide hidden md:block">
                {item.meta}
              </span>
              <ChevronDown className={cn(
                "w-4 h-4 text-text-muted transition-transform",
                openIndex === i && "rotate-180"
              )} />
            </div>

            {openIndex === i && (
              <div className="px-5 md:px-6 pb-5 pl-10 md:pl-14 border-t border-gold/15">
                <p className="text-sm text-text-mid leading-relaxed mt-4">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={cn(
                        "text-[0.68rem] px-2.5 py-0.5 rounded-full font-medium tracking-wide",
                        tagStyles[tag.type as keyof typeof tagStyles]
                      )}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
