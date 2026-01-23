import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-24 bg-primary"
      aria-labelledby="cta-title"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            id="cta-title"
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance"
            itemProp="headline"
          >
            Agende una Visita a Nuestro Hogar Geriátrico en Medellín
          </h2>

          <p
            className="text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
            itemProp="description"
          >
            Contáctenos hoy mismo y conozca nuestras instalaciones, el equipo
            profesional y el ambiente seguro y humano que ofrecemos para el
            cuidado integral del adulto mayor.
          </p>
        </div>

        {/* Contact Options */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14"
          itemScope
          itemType="https://schema.org/Organization"
        >
          {/* Phone */}
          <div
            className="text-center"
            itemProp="contactPoint"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <Phone
                className="h-6 w-6 text-primary-foreground"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-1">
              Llámenos
            </h3>
            <a
              href="tel:+573165783244"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              itemProp="telephone"
            >
              +57 316 578 32 44
            </a>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <Mail
                className="h-6 w-6 text-primary-foreground"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-1">
              Escríbanos
            </h3>
            <a
              href="mailto:jovenesdelayermed@gmail.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              itemProp="email"
            >
              jovenesdelayermed@gmail.com
            </a>
          </div>

          {/* Address */}
          <div
            className="text-center"
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <MapPin
                className="h-6 w-6 text-primary-foreground"
                aria-hidden="true"
              />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-1">
              Visítenos
            </h3>
            <p className="text-primary-foreground/80">
              <span itemProp="streetAddress">Calle 29 # 81A - 35</span>,{" "}
              <span itemProp="addressLocality">Belén la Palma</span>,{" "}
              <span itemProp="addressRegion">Medellín</span>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link href="/contacto" itemProp="url">
              Agendar Visita
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            asChild
          >
            <a
              href="https://wa.me/3165783244?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20al%20hogar%20geriátrico%20Jóvenes%20del%20Ayer%20en%20Medellín"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp para agendar visita"
            >
              Escribir por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
