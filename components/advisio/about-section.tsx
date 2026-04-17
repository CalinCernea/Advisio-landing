"use client"

import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="bg-navy pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left — identity & Methodology */}
        <div className="flex flex-col">
          {/* Avatar placeholder — inițiale */}
          <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-6">
            <span className="font-serif text-2xl text-gold font-semibold">A</span>
          </div>

          <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold mb-4">
            Metodologia Noastră
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-[1.15] mb-5 tracking-tight">
            Expertiză umană<br />
            <em className="italic text-gold-light">amplificată de AI.</em>
          </h2>

          <p className="text-sm text-white/60 leading-relaxed mb-4">
            Noi suntem <strong className="text-white">Advisio</strong>. Nu suntem doar o platformă software. Suntem echipa care scanează manual infrastructura digitală a afacerii tale pentru a găsi scurgerile de profit pe care algoritmii generici le ignoră.
          </p>

          <p className="text-sm text-white/60 leading-relaxed mb-8">
            Fiecare dosar PDF este un activ de business. Analizăm datele reale din Google, Social Media și site-ul tău pentru a-ți oferi o foaie de parcurs executabilă, nu doar teorie.
          </p>

          {/* Micro-credibilitate */}
          <div className="flex flex-col gap-3">
            {[
              "Audităm manual fiecare sursă a business-ului",
              "Livrăm strategii executabile în 48h",
              "Identificăm minim 5 scurgeri de eficiență",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — process + CTA */}
        <div className="flex flex-col gap-6">
          {/* Process steps box */}
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8">
            <p className="text-[0.68rem] font-medium tracking-widest uppercase text-gold/70 mb-6">
              Cum lucrez
            </p>
            <div className="flex flex-col gap-5">
              {[
                { step: "01", title: "Trimiți datele", desc: "Numele afacerii și orașul. Sub 2 minute." },
                { step: "02", title: "Analizez", desc: "Recenzii, social media și site. Research uman real." },
                { step: "03", title: "Scriu raportul", desc: "Specific pentru tine — nu copy-paste din template." },
                { step: "04", title: "Primești PDF-ul", desc: "În 48h, cu un plan concret pe 30 de zile." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="font-serif text-gold text-lg font-semibold leading-none mt-0.5 min-w-[28px]">{s.step}</span>
                  <div>
                    <div className="text-sm font-medium text-white mb-0.5">{s.title}</div>
                    <div className="text-xs text-white/40 leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-6 py-4 rounded-lg text-[0.92rem] font-bold hover:bg-gold-light transition-all active:scale-[0.98] w-full"
          >
            Rezervă auditul gratuit
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[0.65rem] text-white/20 text-center -mt-2 uppercase tracking-wider">Primii 50 — gratuit · Fără card</p>
        </div>
      </div>
    </section>
  )
}
