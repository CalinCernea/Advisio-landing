import { HeroSection } from "@/components/advisio/hero-section"
import { HowSection } from "@/components/advisio/how-section"
import { AuditSection } from "@/components/advisio/audit-section"
import { MetricsSection } from "@/components/advisio/metrics-section"
import { PainSection } from "@/components/advisio/pain-section"
import { FormSection } from "@/components/advisio/form-section"
import { Footer } from "@/components/advisio/footer"

export default function Home() {
  return (
    <main className="bg-cream">
      <HeroSection />
      <HowSection />
      <AuditSection />
      <MetricsSection />
      <PainSection />
      <FormSection />
      <Footer />
    </main>
  )
}
