"use client"

import { LogoWithText } from "./logo"
import { ArrowRight } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => [
      "Automatizăm ce te ține pe loc.",
      "Eliminăm munca manuală repetitivă.",
      "Transformăm recenziile în profit.",
      "Identificăm scurgerile de eficiență.",
      "Implementăm AI, nu doar promisiuni."
    ],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col bg-navy overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute -top-52 -right-52 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)'
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-8 border-b border-gold/15">
        <LogoWithText size={40} />
        <span className="text-[0.72rem] text-text-muted tracking-[0.08em] uppercase font-semibold">
          Beta 1.0 · Acces Prioritar pentru 50 Afaceri
        </span>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 py-12 md:py-20 max-w-[900px]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/35 text-gold-light text-[0.72rem] font-medium px-4 py-1.5 rounded-full mb-8 tracking-[0.06em] uppercase w-fit">
          <span className="w-1.5 h-1.5 bg-gold animate-pulse rounded-full" />
          Audit de Eficiență AI · 0 RON (Limitat)
        </div>

        {/* Eyebrow */}
        <p className="text-[0.78rem] font-medium text-gold tracking-[0.1em] uppercase mb-5">
          Pentru afaceri locale care vor să scaleze
        </p>

        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-semibold text-white/90 leading-[1.08] mb-6 tracking-tight text-balance">
          Afacerea ta are <span className="font-extrabold text-white italic">părți oarbe</span> nediagnosticate.<br />
          Identifică-le înainte să te coste <span className="font-extrabold text-white">profitul</span>.<br />
          <span className="relative flex w-full justify-start overflow-hidden pt-2 pb-6 min-h-[1.5em]">
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-serif italic text-gold-light font-medium"
                initial={{ opacity: 0, y: "-100" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? {
                      y: 0,
                      opacity: 1,
                    }
                    : {
                      y: titleNumber > index ? -150 : 150,
                      opacity: 0,
                    }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Sub text */}
        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-[580px] mb-10 font-light">
          Majoritatea managerilor pierd 8-12 ore săptămânal pe sarcini care pot fi automatizate azi. Advisio livrează o strategie completă de implementare AI — fără abonamente software inutile.
        </p>

        {/* CTA Row */}
        <div className="flex items-center gap-6 flex-wrap">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-lg text-[0.92rem] font-bold shadow-lg shadow-gold/10 hover:bg-gold-light transition-all active:scale-[0.98]"
          >
            Obține Raportul de Audit (Gratuit)
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex flex-col">
            <span className="text-xs text-gold font-medium uppercase tracking-wider">Disponibilitate</span>
            <span className="text-sm text-white/40">27/50 locuri rămase</span>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 border-t border-gold/15">
        <div className="px-6 md:px-12 py-7 border-b md:border-b-0 md:border-r border-gold/15">
          <div className="font-serif text-4xl font-semibold text-gold-light leading-none mb-1">5+</div>
          <div className="text-[0.78rem] text-white/40 tracking-wide">instrumente AI recomandate per raport</div>
        </div>
        <div className="px-6 md:px-12 py-7 border-b md:border-b-0 md:border-r border-gold/15">
          <div className="font-serif text-4xl font-semibold text-gold-light leading-none mb-1">48h</div>
          <div className="text-[0.78rem] text-white/40 tracking-wide">timp de livrare al raportului PDF</div>
        </div>
        <div className="px-6 md:px-12 py-7">
          <div className="font-serif text-4xl font-semibold text-gold-light leading-none mb-1">~5h</div>
          <div className="text-[0.78rem] text-white/40 tracking-wide">economisite săptămânal per afacere</div>
        </div>
      </div>
    </section>
  )
}
