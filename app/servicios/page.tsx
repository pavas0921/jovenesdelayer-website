import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import { CarePlans } from "@/components/services/care-plans";
import { DailyActivities } from "@/components/services/daily-activities";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Servicios Geriátricos en Medellín | Jóvenes del Ayer",
  description:
    "Servicios geriátricos integrales en Medellín: cuidado 24/7, atención médica especializada, alimentación balanceada, fisioterapia y actividades recreativas para adultos mayores.",
  keywords: [
    "hogar geriátrico Medellín",
    "servicios geriátricos",
    "cuidado adulto mayor Medellín",
    "geriátrico en Medellín",
    "hogar para ancianos",
    "atención geriátrica 24 horas",
  ],
  alternates: {
    canonical: "https://jovenesdelayer.com/servicios",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Servicios Geriátricos en Medellín | Jóvenes del Ayer",
    description:
      "Cuidado integral para adultos mayores con atención médica, planes personalizados y actividades diarias en Medellín.",
    url: "https://jovenesdelayer.com/servicios",
    siteName: "Jóvenes del Ayer",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Geriátricos en Medellín | Jóvenes del Ayer",
    description:
      "Atención geriátrica profesional y humana en Medellín. Conoce nuestros servicios y planes de cuidado.",
  },
};

export default function ServiciosPage() {
  const schemaServices = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Jóvenes del Ayer",
    description:
      "Hogar geriátrico en Medellín especializado en el cuidado integral del adulto mayor.",
    url: "https://jovenesdelayer.com",
    telephone: "+57-XXX-XXX-XXXX",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Medellín y Colombia",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cuidado Geriátrico Integral",
          description:
            "Atención médica 24/7, cuidado personalizado, alimentación balanceada y acompañamiento emocional.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Planes de Cuidado para Adultos Mayores",
          description:
            "Planes flexibles según el nivel de dependencia y necesidades médicas del adulto mayor.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Actividades Recreativas y Terapéuticas",
          description:
            "Estimulación cognitiva, actividades físicas, recreación diaria y fisioterapia.",
        },
      },
    ],
  };

  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaServices),
        }}
      />

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
  );
}
