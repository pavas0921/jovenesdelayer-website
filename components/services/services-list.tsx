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
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Atención Médica 24/7",
    description:
      "Contamos con médicos y enfermeras disponibles las 24 horas del día, los 7 días de la semana. Realizamos controles periódicos de signos vitales, manejo de enfermedades crónicas y atención de emergencias.",
  },
  {
    icon: Pill,
    title: "Administración de Medicamentos",
    description:
      "Control riguroso y personalizado de la medicación de cada residente, con seguimiento de horarios y dosis según prescripción médica.",
  },
  {
    icon: UtensilsCrossed,
    title: "Alimentación Balanceada",
    description:
      "Menús nutritivos elaborados por nutricionistas, adaptados a las necesidades dietéticas de cada residente. Dietas especiales para diabéticos, hipertensos y otras condiciones.",
  },
  {
    icon: Activity,
    title: "Fisioterapia y Rehabilitación",
    description:
      "Sesiones de fisioterapia para mantener y mejorar la movilidad, fuerza y equilibrio. Programas de rehabilitación post-hospitalaria.",
  },
  {
    icon: Brain,
    title: "Estimulación Cognitiva",
    description:
      "Actividades diseñadas para mantener activa la mente: juegos de memoria, lectura, música y terapia ocupacional.",
  },
  {
    icon: Users,
    title: "Actividades Sociales",
    description:
      "Eventos, celebraciones y actividades grupales que fomentan la socialización y el sentido de comunidad entre nuestros residentes.",
  },
  {
    icon: Bath,
    title: "Asistencia en Higiene Personal",
    description:
      "Ayuda con el baño, aseo personal y cuidado de la piel, siempre respetando la dignidad e intimidad de cada residente.",
  },
  {
    icon: Shirt,
    title: "Servicio de Lavandería",
    description:
      "Lavado, planchado y cuidado de la ropa personal de cada residente, manteniendo sus prendas en perfecto estado.",
  },
  {
    icon: Moon,
    title: "Vigilancia Nocturna",
    description:
      "Personal de guardia durante toda la noche para atender cualquier necesidad y garantizar el descanso seguro de nuestros residentes.",
  },
  {
    icon: Smile,
    title: "Acompañamiento Emocional",
    description:
      "Apoyo psicológico y emocional tanto para residentes como para sus familias, ayudando en el proceso de adaptación.",
  },
  {
    icon: Heart,
    title: "Cuidados Paliativos",
    description:
      "Atención especializada para pacientes que requieren cuidados de confort, siempre con dignidad y amor.",
  },
  {
    icon: Shield,
    title: "Seguridad y Vigilancia",
    description:
      "Instalaciones seguras con control de acceso, cámaras de vigilancia y personal de seguridad para la tranquilidad de todos.",
  },
]

export function ServicesList() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios Completos para su Tranquilidad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada servicio está diseñado pensando en el bienestar integral de nuestros residentes y la tranquilidad de
            sus familias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
