import { Heart, Users, Shield, Smile, Award, HandHeart } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Amor",
    description:
      "El amor es el motor de todo lo que hacemos. Cada acción y cada cuidado hacia nuestros adultos mayores está impregnado de cariño genuino y respeto.",
  },
  {
    icon: Shield,
    title: "Respeto",
    description:
      "Respetamos la individualidad, la historia de vida y la dignidad de cada residente, promoviendo un entorno seguro y humano para ellos y sus familias.",
  },
  {
    icon: Users,
    title: "Familia",
    description:
      "Somos una gran familia donde residentes, familiares y cuidadores construimos lazos de confianza, cercanía y acompañamiento permanente.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description:
      "Nos esforzamos por ofrecer un servicio geriátrico de alta calidad, mejorando continuamente nuestros procesos, atención y cuidado profesional.",
  },
  {
    icon: HandHeart,
    title: "Empatía",
    description:
      "Nos ponemos en el lugar de nuestros residentes y sus familias para comprender sus necesidades físicas, emocionales y afectivas.",
  },
  {
    icon: Smile,
    title: "Alegría",
    description:
      "Creemos en el poder de la sonrisa y fomentamos actividades que promueven el bienestar emocional y la felicidad diaria de nuestros adultos mayores.",
  },
];

export function OurValues() {
  return (
    <section className="py-24 bg-background" aria-labelledby="our-values-title">
      {/* Título oculto solo para SEO y accesibilidad */}
      <h2 id="our-values-title" className="sr-only">
        Valores del Hogar Geriátrico Jóvenes del Ayer en Medellín
      </h2>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Nuestros Valores
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Los Pilares que Nos Guían
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estos valores guían cada decisión que tomamos y cada acción que
            realizamos en el cuidado integral y humanizado de nuestros adultos
            mayores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
