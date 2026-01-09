import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { MissionVision } from "@/components/about/mission-vision"
import { OurValues } from "@/components/about/our-values"
import { OurTeam } from "@/components/about/our-team"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Jóvenes del Ayer - Hogar Geriátrico",
  description:
    "Conoce nuestra historia, misión, visión y el equipo humano detrás de Jóvenes del Ayer. Más de 15 años cuidando con amor y profesionalismo a los adultos mayores.",
}

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <OurValues />
        <OurTeam />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
