"use client"

/* Pure CSS 3D carousel — no JS animation needed */

const testimonials = [
  {
    quote: "Am primit raportul în două zile și am implementat primul instrument AI în aceeași săptămână. Acum răspund recenziilor Google în câteva secunde, nu în 20 de minute.",
    name: "Mihai D.",
    role: "Proprietar",
    business: "Bistro Central, Cluj-Napoca",
  },
  {
    quote: "Nu mă așteptam să fie atât de concret. Am primit prompt-uri gata de folosit pentru Instagram — nu teorie, ci lucruri pe care le-am aplicat imediat a doua zi.",
    name: "Andreea F.",
    role: "Manager",
    business: "Salon Lumière, București",
  },
  {
    quote: "Planul pe 30 de zile mi-a dat o direcție clară. În prima lună am redus cu 3 ore pe săptămână timpul pierdut cu social media.",
    name: "Radu C.",
    role: "Co-fondator",
    business: "Pizzeria Napoletana, Timișoara",
  },
  {
    quote: "Cel mai util lucru a fost secțiunea despre automatizarea mesajelor. Acum chatbot-ul răspunde în locul meu la 80% din întrebările clienților.",
    name: "Elena P.",
    role: "Proprietară",
    business: "Studio Fit, Brașov",
  },
  {
    quote: "Am primit recomandări specifice pentru tipul meu de afacere, nu sfaturi generice. Se vede că raportul a fost gândit special pentru restaurante.",
    name: "Bogdan I.",
    role: "Proprietar",
    business: "Terasa Verde, Iași",
  },
  {
    quote: "Economisesc cel puțin 4 ore pe săptămână. Recenziile negative nu mai rămân fără răspuns, iar clienții observă asta imediat.",
    name: "Cristina M.",
    role: "Proprietară",
    business: "Cofetăria Dulce Viață, Sibiu",
  },
  {
    quote: "Raportul PDF mi-a arătat exact ce instrumente să folosesc și în ce ordine. N-am mai pierdut timp căutând soluții pe YouTube pe care nu știam dacă funcționează.",
    name: "Alexandru P.",
    role: "Manager",
    business: "Grill Box, Ploiești",
  },
  {
    quote: "Am implementat un script de răspuns pentru DM-uri și rata de conversie din Instagram a crescut vizibil. Clienții primesc răspuns instant, nu după ore.",
    name: "Diana S.",
    role: "Proprietară",
    business: "Spa Serenity, Constanța",
  },
  {
    quote: "Meniul meu de pe Google arăta dezastruos. Raportul mi-a dat un plan simplu să îl optimizez — acum am cu 40% mai multe cereri de rezervare.",
    name: "George L.",
    role: "Proprietar",
    business: "La Cuptor, Galați",
  },
  {
    quote: "Am folosit scripturile de training din raport pentru angajații noi. Mi-am redus la jumătate timpul de onboarding față de cum o făceam manual.",
    name: "Ioana C.",
    role: "Manager",
    business: "Fitness Zone, Oradea",
  },
  {
    quote: "Credeam că AI-ul e complicat. Raportul mi-a arătat că nu e — am automatizat postările de pe Facebook în mai puțin de o oră.",
    name: "Marian D.",
    role: "Proprietar",
    business: "Crama Sinaia, Sinaia",
  },
  {
    quote: "Cea mai bună investiție de timp din ultimul an. 48 de ore așteptare și am primit ceva ce mi-ar fi luat luni să construiesc singură.",
    name: "Alina N.",
    role: "Proprietară",
    business: "Glam Beauty, Bacău",
  },
]

const N = testimonials.length

const css = `
  @keyframes advisio-ry {
    to { transform: rotateY(1turn); }
  }

  .advisio-scene {
    display: grid;
    overflow: hidden;
    perspective: 42em;
    -webkit-mask: linear-gradient(90deg, #0000, red 16% 84%, #0000);
    mask: linear-gradient(90deg, #0000, red 16% 84%, #0000);
  }

  .advisio-a3d {
    display: grid;
    place-self: center;
    transform-style: preserve-3d;
    animation: advisio-ry 48s linear infinite;
  }

  .advisio-card {
    --w: 15em;
    --ba: calc(1turn / var(--n));
    grid-area: 1 / 1;
    width: var(--w);
    aspect-ratio: 7 / 10;
    backface-visibility: hidden;
    transform:
      rotateY(calc(var(--i) * var(--ba)))
      translateZ(calc(-1 * (.5 * var(--w) + .5em) / tan(.5 * var(--ba))));

    /* Card appearance */
    background: #ffffff;
    border: 1px solid rgba(15, 27, 45, 0.10);
    border-radius: 1.1em;
    padding: 1.5em 1.3em 1.2em;
    box-shadow: 0 8px 40px rgba(15, 27, 45, 0.13);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .advisio-quote-mark {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 4em;
    line-height: 0.75;
    color: rgba(201, 168, 76, 0.28);
    flex-shrink: 0;
    margin-bottom: 0.15em;
    user-select: none;
  }

  .advisio-quote-text {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 0.9em;
    line-height: 1.55;
    color: #0f1b2d;
    flex: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }

  .advisio-divider {
    height: 1px;
    background: rgba(15, 27, 45, 0.08);
    margin: 1em 0 0.9em;
    flex-shrink: 0;
  }

  .advisio-author-name {
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 0.72em;
    font-weight: 600;
    color: #0f1b2d;
    margin-bottom: 0.25em;
  }

  .advisio-author-role {
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 0.64em;
    color: #7a8fa6;
  }

  @media (prefers-reduced-motion: reduce) {
    .advisio-a3d { animation-duration: 128s; }
  }
`

export function TestimonialsSection() {
  return (
    <section className="bg-cream-dark border-b border-border">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* ── Header ── */}
        <div className="mb-12 md:mb-16">
          <p className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-gold-deep mb-4">
            Ce spun primii utilizatori
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-dark leading-[1.15] tracking-tight text-balance max-w-sm">
            Oameni reali.<br />Rezultate concrete.
          </h2>
        </div>

        {/* ── 3D Testimonial Carousel ── */}
        <div className="advisio-scene">
          <div
            className="advisio-a3d"
            style={{ '--n': N } as React.CSSProperties}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="advisio-card"
                style={{ '--i': i } as React.CSSProperties}
              >
                <div className="advisio-quote-mark">"</div>
                <p className="advisio-quote-text">{t.quote}</p>
                <div className="advisio-divider" />
                <div>
                  <div className="advisio-author-name">{t.name}</div>
                  <div className="advisio-author-role">{t.role} · {t.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
