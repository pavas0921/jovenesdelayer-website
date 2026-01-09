import { Heart, Users, Shield, Smile, Award, HandHeart } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Amor",
    description:
      "El amor es el motor de todo lo que hacemos. Cada acción, cada cuidado, está impregnado de cariño genuino.",
  },
  {
    icon: Shield,
    title: "Respeto",
    description:
      "Respetamos la individualidad, la historia y la dignidad de cada uno de nuestros residentes y sus familias.",
  },
  {
    icon: Users,
    title: "Familia",
    description:
      "Somos una gran familia donde residentes, familiares y colaboradores construimos lazos de confianza y afecto.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description:
      "Nos esforzamos constantemente por ofrecer el mejor servicio, mejorando cada día en todo lo que hacemos.",
  },
  {
    icon: HandHeart,
    title: "Empatía",
    description:
      "Nos ponemos en el lugar de nuestros residentes y sus familias para entender sus necesidades y sentimientos.",
  },
  {
    icon: Smile,
    title: "Alegría",
    description:
      "Creemos en el poder de la sonrisa y trabajamos para que cada día en nuestro hogar sea motivo de felicidad.",
  },
]

export function OurValues() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Nuestros Valores</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Los Pilares que Nos Guían</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estos valores fundamentan cada decisión que tomamos y cada acción que realizamos en beneficio de nuestros
            residentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
