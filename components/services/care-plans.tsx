import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Plan Básico",
    subtitle: "Cuidado Esencial",
    features: [
      "Alojamiento en habitación compartida",
      "Alimentación balanceada (5 comidas)",
      "Atención de enfermería 24/7",
      "Administración de medicamentos",
      "Actividades recreativas básicas",
      "Asistencia en higiene personal",
      "Servicio de lavandería",
    ],
    highlighted: false,
  },
  {
    name: "Plan Integral",
    subtitle: "El más popular",
    features: [
      "Todo lo del Plan Básico",
      "Habitación semi-privada",
      "Fisioterapia 3 veces por semana",
      "Estimulación cognitiva diaria",
      "Consulta médica semanal",
      "Acompañamiento a citas externas",
      "Comunicación diaria con familia",
      "Actividades personalizadas",
    ],
    highlighted: true,
  },
  {
    name: "Plan Premium",
    subtitle: "Atención Exclusiva",
    features: [
      "Todo lo del Plan Integral",
      "Habitación privada con baño",
      "Fisioterapia diaria",
      "Médico asignado personal",
      "Atención psicológica semanal",
      "Menú personalizado",
      "Servicio de peluquería incluido",
      "Visitas sin restricción de horario",
      "Transporte para paseos",
    ],
    highlighted: false,
  },
]

export function CarePlans() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Planes de Cuidado</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Opciones Adaptadas a sus Necesidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrecemos diferentes planes de cuidado para adaptarnos a las necesidades específicas de cada residente y las
            posibilidades de cada familia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.highlighted ? "border-primary shadow-xl scale-105" : "border-border"} bg-card`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Recomendado
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                <CardTitle className="text-2xl font-bold text-card-foreground">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-card-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"}`}
                  asChild
                >
                  <Link href="/contacto">Solicitar Información</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Los precios varían según las necesidades específicas de cada residente. Contáctenos para una evaluación
          personalizada.
        </p>
      </div>
    </section>
  )
}
