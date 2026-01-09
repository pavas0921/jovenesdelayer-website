import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "María Elena García",
    relation: "Hija de residente en Medellín",
    image: "/middle-aged-woman-portrait-smiling-warmly.jpg",
    quote:
      "Encontrar el hogar geriátrico Jóvenes del Ayer en Medellín fue una bendición. Mi madre recibe cuidado especializado para Alzheimer y siempre la vemos feliz. El personal geriátrico es increíblemente atento.",
    location: "Medellín, Antioquia",
  },
  {
    name: "Carlos Rodríguez",
    relation: "Hijo de residente en Antioquia",
    image: "/middle-aged-man-portrait-friendly-smile.jpg",
    quote:
      "La tranquilidad de saber que mi padre está en un hogar geriátrico en Medellín no tiene precio. Las instalaciones para adultos mayores son excelentes y lo mantienen activo con actividades terapéuticas.",
    location: "Envigado, Antioquia",
  },
  {
    name: "Ana Lucía Mejía",
    relation: "Nieta de residente en Medellín",
    image: "/young-woman-portrait-genuine-smile.jpg",
    quote:
      "Mi abuelita ha florecido desde que llegó al hogar geriátrico Jóvenes del Ayer en Medellín. Ha hecho amigos, participa en actividades para tercera edad y se ve más saludable. ¡Gracias por devolvernos su sonrisa!",
    location: "El Poblado, Medellín",
  },
];

export function TestimonialsPreview() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Testimonios de Familias en Medellín
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Familias de Medellín Confían en Nuestro Hogar Geriátrico
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La confianza de familias de Medellín y Antioquia es nuestro mayor
            logro. Conoce experiencias reales de quienes han confiado el cuidado
            de adultos mayores en nuestro hogar geriátrico Jóvenes del Ayer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-card-foreground mb-6 leading-relaxed italic">{`"${testimonial.quote}"`}</p>
                <div className="flex items-center gap-3 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name} - Familia de residente en hogar geriátrico Medellín`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    title={`Testimonio de ${testimonial.name} sobre hogar geriátrico en Medellín`}
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.relation}
                    </p>
                    <p className="text-xs text-primary">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link
              href="/testimonios"
              className="flex items-center gap-2"
              title="Ver más testimonios de familias sobre nuestro hogar geriátrico en Medellín"
            >
              Ver más testimonios de Medellín
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
