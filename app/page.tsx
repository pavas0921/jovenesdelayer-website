import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { CTASection } from "@/components/home/cta-section";
import type { Metadata } from "next";

// 🔥 METADATA OPTIMIZADA
export const metadata: Metadata = {
  title:
    "Jóvenes del Ayer | Hogar Geriátrico en Medellín - Cuidado Especializado 24/7",
  description:
    "Hogar geriátrico en Medellín especializado en cuidado de adultos mayores con Alzheimer. Atención médica 24/7, actividades recreativas, alimentación balanceada. WhatsApp: +57 300 123 4567",

  keywords: [
    "hogar geriátrico Medellín",
    "residencia adultos mayores Medellín",
    "cuidado para Alzheimer Medellín",
    "geriátrico El Poblado",
    "casa de reposo Medellín",
    "atención geriátrica 24 horas",
    "Jóvenes del Ayer Medellín",
  ].join(", "),

  openGraph: {
    title: "Jóvenes del Ayer | Hogar Geriátrico en Medellín",
    description:
      "Cuidado profesional para adultos mayores con Alzheimer en Medellín. Contacto por WhatsApp.",
    url: "https://jovenesdelayer.com",
    type: "website",
    images: [
      {
        url: "https://jovenesdelayer.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Hogar Geriátrico Jóvenes del Ayer en Medellín",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jóvenes del Ayer - Hogar Geriátrico Medellín",
    description:
      "Cuidado especializado para adultos mayores en Medellín. WhatsApp disponible.",
  },

  alternates: {
    canonical: "https://jovenesdelayer.com",
  },
};

// 🎯 SCHEMA MARKUP SIMPLIFICADO
const seniorHousingSchema = {
  "@context": "https://schema.org",
  "@type": "SeniorHousing",
  name: "Jóvenes del Ayer",
  url: "https://jovenesdelayer.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medellín",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  telephone: "+57 300 123 4567",
  openingHours: "Mo-Su 00:00-23:59",
};

export default function HomePage() {
  return (
    <>
      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seniorHousingSchema),
        }}
      />

      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <AboutPreview />
        <TestimonialsPreview />
        <CTASection />
      </main>
      <Footer />

      {/* ✅ SOLO WHATSAPP - SIN BOTÓN DE TELÉFONO */}
      <WhatsAppButton
        phoneNumber="573001234567"
        message="Hola, vi su página web y me interesa información sobre el hogar geriátrico Jóvenes del Ayer en Medellín"
      />
    </>
  );
}
