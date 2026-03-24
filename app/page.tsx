import { HeroSection } from "@/components/advisio/hero-section"
import { HowSection } from "@/components/advisio/how-section"
import { PreviewSection } from "@/components/advisio/preview-section"
import { AuditSection } from "@/components/advisio/audit-section"
import { MetricsSection } from "@/components/advisio/metrics-section"
import { AboutSection } from "@/components/advisio/about-section"
import { PainSection } from "@/components/advisio/pain-section"
import { FormSection } from "@/components/advisio/form-section"
import { Footer } from "@/components/advisio/footer"

export default function Home() {
  return (
    <main className="bg-cream">
      <HeroSection />
      <HowSection />
      <PreviewSection />       {/* NOU — preview audit real */}
      <AuditSection />
      <MetricsSection />
      <AboutSection />         {/* NOU — cine ești tu */}
      <PainSection />
      <FormSection />          {/* ACTUALIZAT — cu câmpuri de feedback */}
      <Footer />
    </main>
  )
}
