"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

const promises = [
  "Raport PDF personalizat, livrat în 24h",
  "5+ instrumente AI cu prompt-uri gata de folosit",
  "Plan de acțiune pe 30 de zile, săptămână cu săptămână",
  "Fără spam. Datele tale nu sunt vândute sau redistribuite."
]

const businessTypes = [
  "Restaurant / Cafenea / Bistro",
  "Fast-food / QSR",
  "Pizzerie / Fine dining",
  "Salon / Spa / Beauty",
  "Magazin local / Retail",
  "Fitness / Sală",
  "Altul"
]

export function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    city: "",
    type: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const spotsLeft = 27
  const registered = 23

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbyt_n4IuDRMXGMhEj1xLezqWw8WsuWE4WhEPizERCFCXc4qQqJwoWPyEa7L8do1yAk1/exec"
      
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          email: formData.email,
          city: formData.city,
          type: formData.type,
          timestamp: new Date().toISOString()
        }),
      })
      
      // With no-cors mode, we can't read the response, but if no error is thrown, assume success
      setSubmitted(true)
    } catch (error) {
      console.error("Form submission error:", error)
      alert("A apărut o eroare. Te rugăm să încerci din nou.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="form-section" className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-gold" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-dark mb-4">
            Ești înregistrat!
          </h2>
          <p className="text-text-muted max-w-md mx-auto">
            Ți-am trimis un email de confirmare. Echipa Advisio va analiza afacerea ta și va livra raportul personalizat în 24–48h.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="form-section" className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      {/* Left side */}
      <div className="lg:sticky lg:top-8">
        <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold-deep mb-4">
          Lista de așteptare
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark leading-[1.15] mb-5 tracking-tight text-balance">
          Rezervă-ți<br />locul gratuit.
        </h2>
        <p className="text-sm text-text-muted leading-relaxed mb-8">
          Primii 50 de participanți primesc raportul complet fără costuri. Fără card, fără abonament forțat.
        </p>

        <ul className="flex flex-col gap-2.5">
          {promises.map((promise, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-text-mid">
              <div className="w-4 h-4 rounded-full border border-gold-deep flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-gold-deep" />
              </div>
              {promise}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-[0_4px_40px_rgba(15,27,45,0.06)]">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-text-dark mb-1">
          Înscrie-te acum
        </h3>
        <p className="text-sm text-text-muted mb-6">
          Mai sunt <strong>{spotsLeft}</strong> locuri gratuite din 50.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[0.72rem] font-medium text-text-muted tracking-wide uppercase">
                Numele tău
              </label>
              <input
                type="text"
                id="name"
                placeholder="ex. Andrei Ionescu"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-cream border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-dark placeholder:text-text-muted/60 outline-none focus:border-gold focus:bg-card transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="business" className="text-[0.72rem] font-medium text-text-muted tracking-wide uppercase">
                Afacerea ta
              </label>
              <input
                type="text"
                id="business"
                placeholder="ex. Bistro Central"
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                required
                className="w-full bg-cream border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-dark placeholder:text-text-muted/60 outline-none focus:border-gold focus:bg-card transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[0.72rem] font-medium text-text-muted tracking-wide uppercase">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="andrei@afacere.ro"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-cream border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-dark placeholder:text-text-muted/60 outline-none focus:border-gold focus:bg-card transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="city" className="text-[0.72rem] font-medium text-text-muted tracking-wide uppercase">
                Orașul
              </label>
              <input
                type="text"
                id="city"
                placeholder="ex. Cluj-Napoca"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
                className="w-full bg-cream border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-dark placeholder:text-text-muted/60 outline-none focus:border-gold focus:bg-card transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="type" className="text-[0.72rem] font-medium text-text-muted tracking-wide uppercase">
              Tipul afacerii
            </label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
              className="w-full bg-cream border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-dark outline-none focus:border-gold focus:bg-card transition-colors appearance-none"
            >
              <option value="">Selectează...</option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-navy text-white py-3.5 rounded-lg text-[0.92rem] font-medium hover:bg-navy-mid transition-colors active:scale-[0.99] disabled:bg-text-muted disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? "Se procesează..." : "Rezervă locul gratuit"}
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-2 text-[0.78rem] text-text-muted mt-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
            {registered} afaceri înscrise · mai sunt <strong>{spotsLeft}</strong> locuri gratuite
          </div>
        </form>
      </div>
    </section>
  )
}
