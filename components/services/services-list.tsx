import {
  Stethoscope,
  UtensilsCrossed,
  Users,
  Heart,
  Activity,
  Shield,
  Moon,
  Pill,
  Brain,
  Shirt,
  Bath,
  Smile,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Stethoscope,
    title: "Atención Médica 24/7",
    description:
      "Servicio médico y de enfermería disponible las 24 horas del día para adultos mayores. Realizamos control de signos vitales, manejo de enfermedades crónicas y atención de emergencias.",
  },
  {
    icon: Pill,
    title: "Administración de Medicamentos",
    description:
      "Gestión segura y personalizada de medicamentos para adultos mayores, cumpliendo estrictamente horarios, dosis y prescripciones médicas.",
  },
  {
    icon: UtensilsCrossed,
    title: "Alimentación Balanceada",
    description:
      "Planes de alimentación geriátrica diseñados por nutricionistas, adaptados a condiciones como diabetes, hipertensión y necesidades especiales.",
  },
  {
    icon: Activity,
    title: "Fisioterapia y Rehabilitación",
    description:
      "Programas de fisioterapia geriátrica para mejorar movilidad, fuerza, equilibrio y procesos de rehabilitación post-hospitalaria.",
  },
  {
    icon: Brain,
    title: "Estimulación Cognitiva",
    description:
      "Actividades de estimulación mental para adultos mayores que fortalecen la memoria, atención y bienestar cognitivo.",
  },
  {
    icon: Users,
    title: "Actividades Sociales",
    description:
      "Actividades recreativas y sociales que promueven la integración, la convivencia y el bienestar emocional del adulto mayor.",
  },
  {
    icon: Bath,
    title: "Asistencia en Higiene Personal",
    description:
      "Apoyo diario en el aseo personal y cuidado corporal del adulto mayor, siempre respetando su dignidad e intimidad.",
  },
  {
    icon: Shirt,
    title: "Servicio de Lavandería",
    description:
      "Servicio completo de lavado y cuidado de la ropa personal de nuestros residentes, garantizando higiene y comodidad.",
  },
  {
    icon: Moon,
    title: "Vigilancia Nocturna",
    description:
      "Supervisión y acompañamiento nocturno continuo para garantizar la seguridad y el descanso tranquilo del adulto mayor.",
  },
  {
    icon: Smile,
    title: "Acompañamiento Emocional",
    description:
      "Apoyo psicológico y emocional para adultos mayores y sus familias durante todo el proceso de adaptación.",
  },
  {
    icon: Heart,
    title: "Cuidados Paliativos",
    description:
      "Cuidados paliativos humanizados enfocados en el confort, la dignidad y el bienestar integral del adulto mayor.",
  },
  {
    icon: Shield,
    title: "Seguridad y Vigilancia",
    description:
      "Hogar geriátrico con control de acceso, monitoreo permanente y personal capacitado para garantizar la seguridad.",
  },
];

export function ServicesList() {
  return (
    <section
      className="py-24 bg-background"
      aria-labelledby="services-list-title"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="services-list-title"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Servicios Geriátricos Integrales para Adultos Mayores
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrecemos servicios geriátricos completos en Medellín, enfocados en
            el cuidado integral del adulto mayor y la tranquilidad de sus
            familias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              itemScope
              itemType="https://schema.org/Service"
            >
              <CardContent className="p-6">
                <div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
                  aria-hidden="true"
                >
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                <h3
                  className="text-xl font-semibold text-card-foreground mb-3"
                  itemProp="name"
                >
                  {service.title}
                </h3>

                <p
                  className="text-muted-foreground leading-relaxed"
                  itemProp="description"
                >
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
