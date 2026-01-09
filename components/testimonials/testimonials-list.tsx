import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "María Elena García",
    relation: "Hija de residente",
    image: "/placeholder.svg?key=2gkbb",
    quote:
      "Encontrar Jóvenes del Ayer fue una bendición para nuestra familia. Mi madre recibe un cuidado excepcional y siempre la vemos feliz. El personal es increíblemente atento y cariñoso. Después de buscar muchas opciones, supimos que este era el lugar indicado desde la primera visita.",
    date: "Residente desde 2021",
  },
  {
    name: "Carlos Rodríguez",
    relation: "Hijo de residente",
    image: "/placeholder.svg?key=4a28a",
    quote:
      "La tranquilidad de saber que mi padre está en buenas manos no tiene precio. Las instalaciones son excelentes y las actividades lo mantienen activo y con buen ánimo. El equipo médico es muy profesional y siempre nos mantienen informados sobre su estado de salud.",
    date: "Residente desde 2020",
  },
  {
    name: "Ana Lucía Mejía",
    relation: "Nieta de residente",
    image: "/placeholder.svg?key=l8xdb",
    quote:
      "Mi abuelita ha florecido desde que llegó al hogar. Ha hecho amigos, participa en todas las actividades y se ve más saludable que nunca. Gracias por devolvernos su sonrisa. La calidad humana del personal es extraordinaria.",
    date: "Residente desde 2022",
  },
  {
    name: "Roberto Sánchez",
    relation: "Esposo de residente",
    image: "/placeholder.svg?key=ixgwz",
    quote:
      "Cuando mi esposa fue diagnosticada con Alzheimer, no sabíamos qué hacer. En Jóvenes del Ayer encontramos no solo profesionales capacitados, sino personas que realmente aman lo que hacen. La cuidan con una paciencia y cariño que me conmueven cada día.",
    date: "Residente desde 2019",
  },
  {
    name: "Patricia Hernández",
    relation: "Hija de residente",
    image: "/placeholder.svg?key=e4yzp",
    quote:
      "Después de la cirugía de cadera de mi padre, necesitaba rehabilitación intensiva. El equipo de fisioterapia hizo un trabajo maravilloso y hoy camina mucho mejor de lo que esperábamos. La atención post-hospitalaria fue excelente.",
    date: "Residente desde 2023",
  },
  {
    name: "Fernando López",
    relation: "Hijo de residente",
    image: "/placeholder.svg?key=qxknz",
    quote:
      "Lo que más valoro es la comunicación constante. Siempre me mantienen al tanto de cómo está mi madre, me envían fotos de las actividades y puedo llamar en cualquier momento. Esa transparencia genera mucha confianza.",
    date: "Residente desde 2022",
  },
];

export function TestimonialsList() {
  return (
    <section
      className="py-20 bg-background"
      aria-label="Testimonios de familias del hogar geriátrico Jóvenes del Ayer"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article key={index} itemScope itemType="https://schema.org/Review">
              <meta itemProp="reviewRating" content="5" />
              <meta
                itemProp="itemReviewed"
                content="Hogar geriátrico Jóvenes del Ayer"
              />

              <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />

                  <blockquote
                    className="text-card-foreground mb-6 leading-relaxed italic"
                    itemProp="reviewBody"
                  >
                    “{testimonial.quote}”
                  </blockquote>

                  <div
                    className="flex items-center gap-2 mb-4"
                    aria-label="Calificación de 5 estrellas"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`Testimonio de ${testimonial.name}, ${testimonial.relation}`}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="rounded-full object-cover"
                      itemProp="image"
                    />
                    <div
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <p
                        className="font-semibold text-card-foreground"
                        itemProp="name"
                      >
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.relation}
                      </p>
                      <p className="text-xs text-primary">{testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
