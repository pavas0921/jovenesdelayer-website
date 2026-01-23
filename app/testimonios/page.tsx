import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { TestimonialsHero } from "@/components/testimonials/testimonials-hero";
import { TestimonialsList } from "@/components/testimonials/testimonials-list";
import { VideoTestimonials } from "@/components/testimonials/video-testimonials";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Testimonios | Jóvenes del Ayer - Hogar Geriátrico",
  description:
    "Lee los testimonios de las familias que han confiado el cuidado de sus seres queridos en Jóvenes del Ayer. Experiencias reales que nos llenan de orgullo.",
};

export default function TestimoniosPage() {
  return (
    <>
      <Header />
      <main>
        <TestimonialsHero />
        <TestimonialsList />
        {/* <VideoTestimonials /> */}
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
