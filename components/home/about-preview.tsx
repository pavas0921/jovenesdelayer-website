import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Personal altamente capacitado y comprometido con el cuidado geriátrico en Medellín",
  "Instalaciones modernas y adaptadas para adultos mayores en Antioquia",
  "Ambiente familiar y acogedor en nuestro hogar geriátrico Medellín",
  "Programas personalizados de cuidado para Alzheimer, Parkinson y tercera edad",
  "Comunicación constante con las familias de Medellín y Antioquia",
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images - SEO Optimizado */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/caring-nurse-with-elderly-woman-smiling-warmly.jpg"
                alt="Cuidadora especializada con residente en hogar geriátrico Jóvenes del Ayer Medellín - Cuidado para adultos mayores"
                width={300}
                height={400}
                className="rounded-2xl object-cover w-full h-64 md:h-80"
                title="Cuidado especializado para adultos mayores en Medellín"
              />
              <Image
                src="/elderly-people-doing-activities-together--painting.jpg"
                alt="Actividades recreativas para adultos mayores en hogar geriátrico Medellín - Terapia ocupacional tercera edad"
                width={300}
                height={400}
                className="rounded-2xl object-cover w-full h-64 md:h-80 mt-8"
                title="Actividades terapéuticas para residentes en Medellín"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">
                Años cuidando adultos mayores en Medellín
              </p>
            </div>
          </div>

          {/* Content - SEO Optimizado */}
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Sobre Nuestro Hogar Geriátrico
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Hogar Geriátrico Jóvenes del Ayer en Medellín - Amor y Respeto
              Primero
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Desde 2009, <strong>Jóvenes del Ayer</strong> ha sido un{" "}
              <strong>hogar geriátrico en Medellín</strong> que sirve como
              refugio de amor y cuidado especializado para{" "}
              <strong>adultos mayores</strong> y sus familias en{" "}
              <strong>Antioquia</strong>. Nuestra filosofía se basa en tratar a
              cada residente como un miembro más de nuestra familia, brindándole
              la atención geriátrica, el cariño y la dignidad que merece.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contamos con un equipo multidisciplinario de profesionales
              especializados en <strong>geriatría</strong> comprometidos con el
              bienestar integral de nuestros residentes, en un ambiente seguro,
              cálido y lleno de vida en <strong>Medellín</strong>.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link
                href="/nosotros"
                className="flex items-center gap-2"
                title="Conoce la historia de nuestro hogar geriátrico en Medellín"
              >
                Conocer nuestra historia en Medellín
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
