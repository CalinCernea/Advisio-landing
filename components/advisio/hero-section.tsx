"use client"

import { LogoWithText } from "./logo"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
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
        <span className="text-[0.72rem] text-text-muted tracking-[0.08em] uppercase">
          Beta · Locuri limitate
        </span>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 py-12 md:py-20 max-w-[900px]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/35 text-gold-light text-[0.72rem] font-medium px-4 py-1.5 rounded-full mb-8 tracking-[0.06em] uppercase w-fit">
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          Audit AI personalizat · Livrat în 48h
        </div>

        {/* Eyebrow */}
        <p className="text-[0.78rem] font-medium text-gold tracking-[0.1em] uppercase mb-5">
          Pentru restaurante · Și nu numai
        </p>

        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] mb-6 tracking-tight text-balance">
          Afacerea ta pierde<br />
          bani și timp.<br />
          <em className="italic text-gold-light">Îți arătăm exact unde.</em>
        </h1>

        {/* Sub text */}
        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-[540px] mb-10 font-light">
          Advisio analizează afacerea ta și livrează un raport complet cu instrumentele AI exacte, prompt-urile gata de folosit și un plan de 30 de zile — fără consultanți scumpi.
        </p>

        {/* CTA Row */}
        <div className="flex items-center gap-6 flex-wrap">
          <button 
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-gold text-navy px-7 py-3.5 rounded-lg text-[0.92rem] font-medium hover:bg-gold-light transition-colors active:scale-[0.99]"
          >
            Rezervă auditul gratuit
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="text-sm text-white/35">Primii 50 — gratuit</span>
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
