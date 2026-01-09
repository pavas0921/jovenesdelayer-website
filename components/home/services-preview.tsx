import Link from "next/link";
import {
  Heart,
  Stethoscope,
  UtensilsCrossed,
  Users,
  Activity,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Atención Médica 24/7 en Medellín",
    description:
      "Equipo médico y de enfermería disponible 24 horas para cuidado integral de adultos mayores en nuestro hogar geriátrico de Medellín.",
  },
  {
    icon: UtensilsCrossed,
    title: "Alimentación Balanceada Geriátrica",
    description:
      "Menús nutritivos diseñados por nutricionistas especializados en alimentación para adultos mayores en Medellín.",
  },
  {
    icon: Users,
    title: "Actividades para Adultos Mayores",
    description:
      "Talleres, terapias y actividades recreativas para el bienestar físico y mental de residentes en hogar geriátrico.",
  },
  {
    icon: Heart,
    title: "Cuidado Especializado con Cariño",
    description:
      "Personal capacitado en geriatría brinda atención humanizada con amor y respeto en Medellín.",
  },
  {
    icon: Activity,
    title: "Fisioterapia y Rehabilitación",
    description:
      "Sesiones de rehabilitación y ejercicios para mantener movilidad y autonomía en adultos mayores.",
  },
  {
    icon: Shield,
    title: "Seguridad en Hogar Geriátrico",
    description:
      "Instalaciones seguras y adaptadas para garantizar el bienestar de residentes en Medellín.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Nuestros Servicios Geriátricos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Cuidado Integral para Adultos Mayores en Medellín
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            En Jóvenes del Ayer ofrecemos servicios especializados para el
            bienestar, salud y felicidad de adultos mayores en nuestro hogar
            geriátrico de Medellín, Antioquia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link
              href="/servicios"
              className="flex items-center gap-2"
              title="Ver todos los servicios de nuestro hogar geriátrico en Medellín"
            >
              Ver todos los servicios geriátricos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
