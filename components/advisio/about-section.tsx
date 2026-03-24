"use client"

import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="bg-navy py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left — identity */}
        <div>
          {/* Avatar placeholder — inițiale */}
          <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-6">
            <span className="font-serif text-2xl text-gold font-semibold">A</span>
          </div>

          <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold mb-4">
            Cine face auditul
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-[1.15] mb-5 tracking-tight">
            Un om real,<br />
            <em className="italic text-gold-light">nu un software.</em>
          </h2>

          <p className="text-sm text-white/60 leading-relaxed mb-4">
            Noi suntem <strong className="text-white">Advisio</strong>. Analizăm prezența digitală a restaurantelor locale și identific exact unde se pierd clienți și timp — folosind instrumente AI pe care proprietarii nu au timp să le exploreze singuri.
          </p>

          <p className="text-sm text-white/60 leading-relaxed mb-8">
            Fiecare raport pe care îl livrez e scris specific pentru afacerea ta, bazat pe date reale din Google Maps, TripAdvisor, Instagram și site-ul tău — nu dintr-un template generic.
          </p>

          {/* Micro-credibilitate */}
          <div className="flex flex-col gap-3">
            {[
              "Cercetez fiecare afacere înainte să scriu un cuvânt",
              "Primești raportul în 48h, nu în 2 săptămâni",
              "Dacă nu găsesc 5 oportunități concrete, nu livrezi nimic",
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
          {/* Process steps */}
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
            <p className="text-[0.68rem] font-medium tracking-widest uppercase text-gold/70 mb-5">
              Cum lucrez
            </p>
            <div className="flex flex-col gap-5">
              {[
                { step: "01", title: "Trimiți datele", desc: "Numele afacerii, orașul. Sub 2 minute." },
                { step: "02", title: "Analizez", desc: "Recenzii, social media, site, concurență. 1-2 ore de research real." },
                { step: "03", title: "Scriu raportul", desc: "Specific pentru tine — nu copy-paste dintr-un template." },
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
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-6 py-3.5 rounded-lg text-[0.92rem] font-medium hover:bg-gold-light transition-colors active:scale-[0.99] w-full"
          >
            Rezervă auditul gratuit
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-white/25 text-center -mt-2">Primii 50 — gratuit · Fără card</p>
        </div>
      </div>
    </section>
  )
}
