import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AboutHero } from "@/components/about/about-hero";
import { OurStory } from "@/components/about/our-story";
import { MissionVision } from "@/components/about/mission-vision";
import { OurValues } from "@/components/about/our-values";
import { OurTeam } from "@/components/about/our-team";
import { CTASection } from "@/components/home/cta-section";

/* ============================
   METADATA SEO
============================ */
export const metadata: Metadata = {
  title: "Sobre Nosotros | Jóvenes del Ayer – Hogar Geriátrico en Medellín",
  description:
    "Conoce la historia, misión, valores y el equipo profesional de Jóvenes del Ayer, hogar geriátrico en Medellín con más de 20 años de experiencia en el cuidado integral del adulto mayor.",
  alternates: {
    canonical: "https://jovenesdelayer.com/nosotros",
  },
};

/* ============================
   SCHEMA JSON-LD
============================ */
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre Jóvenes del Ayer",
  url: "https://jovenesdelayer.com/nosotros",
  mainEntity: {
    "@type": ["MedicalOrganization", "SeniorHousing"],
    name: "Jóvenes del Ayer",
    url: "https://jovenesdelayer.com",
    logo: "https://jovenesdelayer.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    telephone: "+57 316 578 32 44",
    employee: [
      {
        "@type": "Person",
        name: "María del Carmen Rodríguez",
        jobTitle: "Directora General y Fundadora",
        worksFor: {
          "@type": "Organization",
          name: "Jóvenes del Ayer",
        },
      },
      {
        "@type": "Person",
        name: "Dr. Andrés Martínez",
        jobTitle: "Director Médico",
        worksFor: {
          "@type": "Organization",
          name: "Jóvenes del Ayer",
        },
      },
      {
        "@type": "Person",
        name: "Patricia López",
        jobTitle: "Coordinadora de Enfermería",
        worksFor: {
          "@type": "Organization",
          name: "Jóvenes del Ayer",
        },
      },
      {
        "@type": "Person",
        name: "Sandra Milena Torres",
        jobTitle: "Coordinadora de Bienestar",
        worksFor: {
          "@type": "Organization",
          name: "Jóvenes del Ayer",
        },
      },
    ],
  },
};

export default function NosotrosPage() {
  return (
    <>
      {/* 🔥 SCHEMA JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

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
  );
}
