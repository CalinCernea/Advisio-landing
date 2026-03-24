"use client"

import { useState } from "react"
import { FileText, ChevronLeft, ChevronRight } from "lucide-react"

const auditPages = [
  {
    label: "Secțiunea 1",
    title: "Profilul restaurantului",
    color: "bg-[#1A0F0A]",
    content: (
      <div className="font-sans text-[10px] leading-relaxed space-y-2">
        <div className="flex gap-3 mb-3">
          {["3.4 ★", "#137", "0%", "14.6K"].map((v, i) => (
            <div key={i} className="flex-1 bg-[#2A1A10] rounded p-1.5 text-center">
              <div className="text-[#C17F3E] font-bold text-sm">{v}</div>
              <div className="text-[#888] text-[8px] mt-0.5">
                {["Rating TA", "din 409 CJ", "Reply rate", "Facebook"][i]}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#CCC]">
          <strong className="text-white">Enigma Restaurant & Secret Garden</strong> este primul bar steampunk cinetic din lume, cu șapte mecanisme în mișcare...
        </p>
        <p className="text-[#AAA]">
          Imaginea din online este îngrijorătoare: rating <strong className="text-[#C17F3E]">3.4 pe TripAdvisor</strong> din 147 recenzii, poziția #137 din 409 restaurante Cluj.
        </p>
        <div className="bg-[#FFF0E8]/10 border border-[#C17F3E]/30 rounded p-2 mt-2">
          <span className="text-[#C17F3E] font-semibold">⚠ SITUAȚIE CRITICĂ:</span>
          <span className="text-[#BBB] ml-1">Zero răspunsuri la 147 recenzii TripAdvisor</span>
        </div>
      </div>
    )
  },
  {
    label: "Secțiunea 2",
    title: "Cele 5 pierderi de timp",
    color: "bg-white",
    content: (
      <div className="font-sans text-[10px] leading-relaxed space-y-2.5">
        {[
          { n: "01", t: "Răspunsuri TripAdvisor", manual: "90 min", ai: "~15 min", saving: "-75 min" },
          { n: "02", t: "Postări social media", manual: "80 min", ai: "~18 min", saving: "-62 min" },
          { n: "03", t: "DM-uri repetitive", manual: "60 min", ai: "~8 min", saving: "-52 min" },
        ].map((item) => (
          <div key={item.n} className="border-b border-gray-100 pb-2">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[#C17F3E] font-bold text-sm">{item.n}</span>
              <span className="font-semibold text-gray-800">{item.t}</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-red-50 rounded p-1 text-center">
                <div className="text-red-600 font-bold">{item.manual}</div>
                <div className="text-[8px] text-gray-400">manual</div>
              </div>
              <div className="flex-1 bg-green-50 rounded p-1 text-center">
                <div className="text-green-600 font-bold">{item.ai}</div>
                <div className="text-[8px] text-gray-400">cu AI</div>
              </div>
              <div className="flex-1 bg-gray-50 rounded p-1 text-center">
                <div className="text-gray-700 font-bold">{item.saving}</div>
                <div className="text-[8px] text-gray-400">economie</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    label: "Secțiunea 3",
    title: "Instrumente + prompturi",
    color: "bg-white",
    content: (
      <div className="font-sans text-[10px] leading-relaxed space-y-2">
        {[
          { tool: "ChatGPT", cost: "Gratuit", use: "Recenzii, postări social media" },
          { tool: "Claude", cost: "Gratuit", use: "Rescriere meniu, campanie recenzii" },
          { tool: "ManyChat", cost: "Gratuit 1K contacte", use: "DM-uri automate 24/7" },
        ].map((t) => (
          <div key={t.tool} className="flex gap-2 items-start border border-gray-100 rounded p-1.5">
            <div className="bg-[#1A0F0A] rounded px-1.5 py-1 min-w-[52px] text-center">
              <div className="text-[#C17F3E] font-bold text-[9px]">{t.tool}</div>
            </div>
            <div>
              <div className="text-[#C17F3E] text-[8px]">{t.cost}</div>
              <div className="text-gray-600">{t.use}</div>
            </div>
          </div>
        ))}
        <div className="bg-[#FFF8EC] border border-[#C17F3E]/40 rounded p-2 mt-1">
          <div className="text-[#7A5C00] font-semibold text-[8px] mb-1">EXEMPLU GENERAT — GATA DE FOLOSIT</div>
          <div className="text-gray-600 italic">"Estimado explorador, lamentamos que vuestra expedición no alcanzara las expectativas..."</div>
        </div>
      </div>
    )
  },
  {
    label: "Secțiunea 5",
    title: "Pachetul complet",
    color: "bg-white",
    content: (
      <div className="font-sans text-[10px] leading-relaxed space-y-2">
        {[
          "20 răspunsuri la recenzii scrise complet (RO/EN/ES)",
          "Calendar conținut 30 zile — 16 postări finalizate",
          "5 template-uri DM bilingve gata de salvat",
          "Meniu rescris în ton steampunk",
          "Materiale campanie recenzii TripAdvisor",
        ].map((item, i) => (
          <div key={i} className="flex gap-2 items-start">
            <span className="text-[#C17F3E] font-bold mt-0.5">→</span>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
        <div className="bg-[#1A0F0A] rounded p-2 mt-2 text-center">
          <div className="text-white text-[9px] mb-1">COMANDĂ PACHETUL — 247 USD</div>
          <div className="text-[#C17F3E] text-[8px]">Click → plată cu cardul → livrare 48h</div>
        </div>
      </div>
    )
  }
]

export function PreviewSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-20">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end mb-12">
        <div>
          <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold-deep mb-4">
            Cum arată raportul
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark leading-[1.15] tracking-tight text-balance">
            Nu promisiuni.<br />
            <em className="italic text-gold">Pagini reale.</em>
          </h2>
        </div>
        <p className="text-sm text-text-muted leading-relaxed max-w-[360px]">
          Acesta este un preview din auditul real livrat pentru <strong className="text-text-dark">Enigma Restaurant Cluj</strong> — primul bar steampunk cinetic din lume. Fiecare raport e la fel de specific.
        </p>
      </div>

      {/* Preview container */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 items-start">
        {/* Tab navigation */}
        <div className="flex flex-col gap-2">
          {auditPages.map((page, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left px-4 py-3 rounded-lg border transition-all ${
                active === i
                  ? "bg-navy text-white border-navy"
                  : "bg-card border-border text-text-mid hover:border-gold/40"
              }`}
            >
              <div className={`text-[0.68rem] font-medium tracking-widest uppercase mb-0.5 ${active === i ? "text-gold" : "text-text-muted"}`}>
                {page.label}
              </div>
              <div className={`text-sm font-medium ${active === i ? "text-white" : "text-text-dark"}`}>
                {page.title}
              </div>
            </button>
          ))}
        </div>

        {/* Mock PDF page */}
        <div className="relative">
          {/* PDF chrome */}
          <div className="bg-[#E5E5E5] rounded-t-lg px-3 py-2 flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-[#888]" />
            <span className="text-[10px] text-[#666] font-medium">Audit_AI_Enigma.pdf</span>
            <div className="ml-auto flex gap-1">
              {[0,1,2].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#CCC]" />)}
            </div>
          </div>

          {/* Page */}
          <div className={`${auditPages[active].color} shadow-lg rounded-b-lg overflow-hidden`}>
            {/* Header bar */}
            <div className="bg-[#1A0F0A] px-3 py-1.5 flex items-center justify-between">
              <span className="text-[#C17F3E] text-[8px] font-bold tracking-widest uppercase">AUDIT AI RESTAURANT</span>
              <span className="text-[#888] text-[8px]">Enigma Restaurant | Cluj-Napoca</span>
            </div>
            {/* Orange top stripe */}
            <div className="h-[3px] bg-[#C17F3E]" />

            {/* Content */}
            <div className="p-4">
              <div className="text-[#C17F3E] text-[8px] font-bold tracking-widest uppercase mb-1">
                {auditPages[active].label.toUpperCase()}
              </div>
              <h3 className={`font-bold text-base mb-3 ${auditPages[active].color === "bg-[#1A0F0A]" ? "text-white" : "text-[#1A0F0A]"}`}>
                {auditPages[active].title}
              </h3>
              {auditPages[active].content}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-4 py-1.5 flex justify-between items-center">
              <span className="text-[7px] text-gray-400">Confidential — Enigma Restaurant & Secret Garden</span>
              <span className="text-[7px] text-gray-400">Pagina {active + 1}</span>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-between mt-3">
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              className="p-1.5 rounded border border-border text-text-muted hover:border-gold hover:text-gold disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-text-muted self-center">
              {active + 1} / {auditPages.length}
            </span>
            <button
              onClick={() => setActive(Math.min(auditPages.length - 1, active + 1))}
              disabled={active === auditPages.length - 1}
              className="p-1.5 rounded border border-border text-text-muted hover:border-gold hover:text-gold disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* CTA */}
          <p className="text-[0.72rem] text-text-muted text-center mt-4 leading-relaxed">
            Vrei un raport la fel de detaliat<br />pentru restaurantul tău?{" "}
            <button
              onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              className="text-gold-deep underline underline-offset-2 hover:text-gold transition-colors"
            >
              Înscrie-te gratuit →
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
