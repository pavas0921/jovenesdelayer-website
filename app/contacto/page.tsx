import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { LocationMap } from "@/components/contact/location-map";
import { FAQ } from "@/components/contact/faq";

export const metadata: Metadata = {
  title: "Contacto | Jóvenes del Ayer - Hogar Geriátrico en Medellín",
  description:
    "Contáctenos para agendar una visita al Hogar Geriátrico Jóvenes del Ayer en Medellín. Atención integral y personalizada para adultos mayores.",
  openGraph: {
    title: "Contacto | Jóvenes del Ayer - Hogar Geriátrico",
    description:
      "Agende una visita o solicite información sobre nuestro hogar geriátrico en Medellín. Cuidado humano y profesional.",
    url: "https://www.jovenesdelayer.com/contacto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Jóvenes del Ayer - Hogar Geriátrico",
    description:
      "Contáctenos para conocer nuestros servicios de cuidado integral para adultos mayores.",
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* ✅ Schema JSON-LD: ContactPage + LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["ContactPage", "LocalBusiness"],
            name: "Hogar Geriátrico Jóvenes del Ayer",
            url: "https://www.jovenesdelayer.com/contacto",
            logo: "https://www.jovenesdelayer.com/logo.png",
            description:
              "Hogar geriátrico en Medellín especializado en el cuidado integral de adultos mayores, con atención médica, actividades diarias y acompañamiento familiar.",
            telephone: "+573001234567",
            email: "info@jovenesdelayer.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Calle 45 #12-34",
              addressLocality: "Medellín",
              addressRegion: "Antioquia",
              addressCountry: "CO",
            },
            openingHours: "Mo-Su 09:00-18:00",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+573001234567",
              contactType: "customer service",
              availableLanguage: ["Spanish"],
            },
          }),
        }}
      />

      <Header />

      <main id="main-content">
        <ContactHero />

        <section
          className="py-20 bg-background"
          aria-labelledby="contact-form-section"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        <LocationMap />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
