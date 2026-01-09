import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { CTASection } from "@/components/home/cta-section";

// ================================
// 🔥 METADATA SEO LOCAL OPTIMIZADA
// ================================
export const metadata: Metadata = {
  title:
    "Jóvenes del Ayer | Hogar Geriátrico en Medellín – Cuidado Especializado 24/7",
  description:
    "Hogar geriátrico en Medellín especializado en el cuidado integral de adultos mayores y pacientes con Alzheimer. Atención médica 24/7, actividades recreativas y acompañamiento profesional.",

  keywords: [
    "hogar geriátrico Medellín",
    "residencia adultos mayores Medellín",
    "cuidado Alzheimer Medellín",
    "hogar geriátrico El Prado",
    "casa de reposo Medellín",
    "atención geriátrica 24 horas",
    "Jóvenes del Ayer Medellín",
  ].join(", "),

  alternates: {
    canonical: "https://jovenesdelayer.com",
  },

  openGraph: {
    title: "Jóvenes del Ayer | Hogar Geriátrico en Medellín",
    description:
      "Cuidado profesional y humano para adultos mayores en Medellín. Atención especializada 24/7.",
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
    title: "Jóvenes del Ayer – Hogar Geriátrico en Medellín",
    description:
      "Cuidado especializado para adultos mayores en Medellín. Contáctanos por WhatsApp.",
  },
};

// ===================================
// 🧠 SCHEMA JSON-LD – LOCAL BUSINESS
// ===================================
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/SeniorHousing",
  name: "Jóvenes del Ayer",
  url: "https://jovenesdelayer.com",
  telephone: "+573001234567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 45 #12-34, Barrio El Prado",
    addressLocality: "Medellín",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Medellín, Antioquia",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ✅ SCHEMA JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
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

      {/* ✅ BOTÓN WHATSAPP – SEO + CONVERSIÓN */}
      <WhatsAppButton
        phoneNumber="573001234567"
        message="Hola, vi su página web y me interesa información sobre el hogar geriátrico Jóvenes del Ayer en Medellín"
      />
    </>
  );
}
