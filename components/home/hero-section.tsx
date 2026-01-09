import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image - SEO OPTIMIZADO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/elderly-couple-holding-hands-in-beautiful-garden-w.jpg"
          alt="Adultos mayores felices en hogar geriátrico Jóvenes del Ayer Medellín - Cuidado especializado para Alzheimer y tercera edad en Antioquia"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content - SEO OPTIMIZADO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Texto optimizado con keywords locales */}
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            Hogar Geriátrico en Medellín con más de 15 años de experiencia
          </p>

          {/* Título principal con keywords */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 text-balance">
            Hogar Geriátrico Jóvenes del Ayer Cuidado con Amor en Medellín
          </h1>

          {/* Descripción optimizada para SEO local */}
          <p className="text-lg text-background/90 mb-8 leading-relaxed max-w-xl">
            En Jóvenes del Ayer ofrecemos un hogar geriátrico en Medellín donde
            cada adulto mayor recibe atención personalizada 24/7, cuidado
            especializado para Alzheimer, y el respeto que merece. Somos familia
            en Antioquia.
          </p>

          {/* Botones optimizados con URLs mejoradas */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link
                href="/contacto"
                className="flex items-center gap-2"
                title="Solicitar información sobre residencia geriátrica en Medellín"
              >
                Solicitar Información en Medellín
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 border-background text-background hover:bg-background hover:text-foreground"
              asChild
            >
              <a
                href="tel:+5741234567"
                className="flex items-center gap-2"
                title="Llamar al hogar geriátrico Jóvenes del Ayer en Medellín"
              >
                <Phone className="h-5 w-5" />
                Llamar: +57 4 123 4567
              </a>
            </Button>
          </div>

          {/* Stats optimizadas con contexto local */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">15+</p>
              <p className="text-sm text-background/80">
                Años cuidando adultos mayores en <strong>Medellín</strong>
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">500+</p>
              <p className="text-sm text-background/80">
                Familias de <strong>Antioquia</strong> atendidas
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">24/7</p>
              <p className="text-sm text-background/80">
                Atención médica continua en <strong>Medellín</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
