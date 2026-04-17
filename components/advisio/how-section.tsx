"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./how-section.module.css"

const steps = [
  {
    num: "01",
    title: "Trimiți datele",
    text: "Numele afacerii, orașul și tipul ei. Sub 2 minute — fără documente, fără linkuri."
  },
  {
    num: "02",
    title: "Noi analizăm",
    text: "Cercetăm afacerea ta online: recenzii, prețuri, prezență digitală. Raport real, nu template."
  },
  {
    num: "03",
    title: "Primești raportul",
    text: "PDF în 48h cu prompt-uri gata de copiat și plan de acțiune prioritizat pe 30 de zile."
  }
]

export function HowSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // 1. Line animation
      gsap.to(containerRef.current, {
        "--strokeDashoffset": -1500,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      })

      // 2. Cards appearing animation
      const cards = gsap.utils.toArray(`.${styles.cardWrapper}`)
      cards.forEach((card: any, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-cream border-t border-b border-border overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col items-center">
        <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold-deep mb-4 text-center">
          Cum funcționează
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark mb-12 tracking-tight max-w-[500px] text-center text-balance align-center">
          Trei pași. Un raport.<br />Rezultate imediate.
        </h2>

        <div className={styles.howMain} ref={containerRef} style={{ "--strokeDashoffset": 0 } as React.CSSProperties}>
          <div className={styles.cards}>
            
            <div className={styles.cardWrapper}>
              <div className={`${styles.card}`} id="codepen">
                <div className="flex flex-col items-center justify-center h-full px-8 text-center" style={{ filter: 'brightness(1.4)', mixBlendMode: 'plus-lighter', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-tr from-gold to-gold-light">{steps[0].num}. <br/> {steps[0].title}</h3>
                  <p className="text-sm font-medium text-white/90 leading-relaxed">{steps[0].text}</p>
                </div>
              </div>
            </div>

            <div className={styles.cardWrapper}>
              <div className={`${styles.card}`} id="html">
                <div className="flex flex-col items-center justify-center h-full px-8 text-center" style={{ filter: 'brightness(1.4)', mixBlendMode: 'plus-lighter', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-tr from-gold to-gold-light">{steps[1].num}. <br/> {steps[1].title}</h3>
                  <p className="text-sm font-medium text-white/90 leading-relaxed">{steps[1].text}</p>
                </div>
              </div>
            </div>

            <div className={styles.cardWrapper}>
              <div className={`${styles.card}`} id="css">
                <div className="flex flex-col items-center justify-center h-full px-8 text-center" style={{ filter: 'brightness(1.4)', mixBlendMode: 'plus-lighter', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-tr from-gold to-gold-light">{steps[2].num}. <br/> {steps[2].title}</h3>
                  <p className="text-sm font-medium text-white/90 leading-relaxed">{steps[2].text}</p>
                </div>
              </div>
            </div>

          </div>

          <svg id="svgPaths" className={styles.svgPathsContainer} width="740" height="1500" viewBox="0 0 740 1500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="linePath01" d="m 106,45h 375c 114,0 226,128 226,235v 236c 0,136 -122,222 -224,221l -182,-2c -89,1 -141,42 -142,158l -2,204c -1,117 37,173 134,173h 186c 110,-3 230,111 230,220v 242c 0,113 -125,225 -248,225H 105" />   
              <path id="linePath02" d="m 33,85h 444c 96,0 190,107 190,201v 224c 0,116 -98,188 -190,187l -192,-2c -92,0 -166,75 -166,168v 278c 0,94 74,169 166,169h 194c 92,0 188,94 188,188v 228c 0,94 -104,191 -214,191H 105" />
              <path id="linePath03" d="m 155,127h 308c 94,0 162,86 162,177v 178c 0,109 -50,174 -166,173L 277,653C 158,653 77,762 77,849v 302c 0,118 107,196 180,197l 204,4c 92,0 164,67 164,160v 200c 0,91 -89,163 -188,163H 105" />

              <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                <stop offset="20%" stopColor="#243d5c"/>
                <stop offset="45%" stopColor="#c9a84c"/>
                <stop offset="65%" stopColor="#e2c47a"/>
                <stop offset="85%" stopColor="#8a6f2e"/>
                <stop offset="100%" stopColor="#0f1b2d"/>
              </linearGradient>
            </defs>

            <use href="#linePath01" className={styles.path1} />
            <use href="#linePath02" className={styles.path2} />
            <use href="#linePath03" className={styles.path3} />
          </svg>
        </div>
      </div>
    </section>
  )
}
