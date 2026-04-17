import { HeroSection } from "@/components/advisio/hero-section"
import { HowSection } from "@/components/advisio/how-section"
import { ComparisonSection } from "@/components/advisio/comparison-section"
import { PreviewSection } from "@/components/advisio/preview-section"
import { AuditSection } from "@/components/advisio/audit-section"
import { MetricsSection } from "@/components/advisio/metrics-section"
import { AboutSection } from "@/components/advisio/about-section"
import { PainSection } from "@/components/advisio/pain-section"
import { FormSection } from "@/components/advisio/form-section"
import { TestimonialsSection } from "@/components/advisio/testimonials-section"
import { Footer } from "@/components/advisio/footer"

export default function Home() {
  return (
    <main className="bg-cream">
      <HeroSection />
      <HowSection />
      <ComparisonSection />
      <PreviewSection />       {/* NOU — preview audit real */}
      <AuditSection />
      <MetricsSection />
      <AboutSection />         {/* NOU — cine ești tu */}
      <PainSection />
      <TestimonialsSection />
      <FormSection />          {/* ACTUALIZAT — cu câmpuri de feedback */}
      <Footer />
    </main>
  )
}
