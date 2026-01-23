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
      "Cuidado especializado para adultos mayores en Medellín. Atención 24/7.",
    images: ["https://jovenesdelayer.com/og-home.jpg"],
  },
};

// ===================================
// 🧠 SCHEMA JSON-LD – MEDICAL BUSINESS
// ===================================
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SeniorHousing"],
  name: "Jóvenes del Ayer",
  url: "https://jovenesdelayer.com",
  image: "https://jovenesdelayer.com/logo.png",
  telephone: "+573165783244",
  email: "contacto@jovenesdelayer.com",
  priceRange: "$$$",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 29 # 81A - 35",
    addressLocality: "Medellín",
    addressRegion: "Antioquia",
    postalCode: "050001",
    addressCountry: "CO",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.244203,
    longitude: -75.581212,
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  medicalSpecialty: "Geriatrics",

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Geriátricos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cuidado 24/7 para Alzheimer y Parkinson",
          description: "Atención especializada para adultos mayores",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residencia Permanente",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estancias Temporales",
        },
      },
    ],
  },

  sameAs: [
    "https://www.facebook.com/jovenesdelayer",
    "https://www.instagram.com/jovenesdelayer",
    "https://www.linkedin.com/company/jovenes-del-ayer",
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

      {/* ✅ BOTÓN WHATSAPP – CONVERSIÓN */}
      <WhatsAppButton
        phoneNumber="573165783244"
        message="Hola, vi su página web y me interesa información sobre el hogar geriátrico Jóvenes del Ayer en Medellín"
      />
    </>
  );
}
