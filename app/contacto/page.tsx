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
  title: "Contacto | Jóvenes del Ayer - Hogar Geriátrico",
  description:
    "Contáctenos para agendar una visita o solicitar información sobre nuestros servicios de cuidado para adultos mayores. Estamos aquí para ayudarle.",
  openGraph: {
    title: "Contacto | Jóvenes del Ayer - Hogar Geriátrico",
    description:
      "Contáctanos para agendar tu visita o recibir más información sobre cuidado integral para adultos mayores.",
    url: "https://tusitio.com/contacto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Jóvenes del Ayer - Hogar Geriátrico",
    description:
      "Contáctanos para agendar tu visita o recibir más información sobre cuidado integral para adultos mayores.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
        <LocationMap />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
