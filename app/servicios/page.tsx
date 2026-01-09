import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { CarePlans } from "@/components/services/care-plans"
import { DailyActivities } from "@/components/services/daily-activities"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Servicios | Jóvenes del Ayer - Hogar Geriátrico",
  description:
    "Conoce nuestros servicios de cuidado integral para adultos mayores: atención médica 24/7, alimentación balanceada, actividades recreativas, fisioterapia y más.",
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <CarePlans />
        <DailyActivities />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
