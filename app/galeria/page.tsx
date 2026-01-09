import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Galería | Jóvenes del Ayer - Hogar Geriátrico",
  description:
    "Conoce nuestras instalaciones, actividades y el día a día en Jóvenes del Ayer a través de nuestra galería fotográfica.",
}

export default function GaleriaPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryHero />
        <GalleryGrid />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
