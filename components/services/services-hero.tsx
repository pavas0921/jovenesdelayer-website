import Image from "next/image";

export function ServicesHero() {
  return (
    <section
      className="relative pt-32 pb-20 bg-secondary"
      aria-labelledby="services-hero-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Servicios Geriátricos en Medellín
            </p>

            <h1
              id="services-hero-title"
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              Cuidado Integral para Adultos Mayores con Atención Profesional
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              En <strong>Jóvenes del Ayer</strong> ofrecemos servicios
              geriátricos integrales en Medellín, enfocados en la salud, el
              bienestar emocional y la calidad de vida del adulto mayor. Nuestro
              equipo profesional brinda atención personalizada, humana y
              continua para garantizar tranquilidad a las familias y bienestar a
              nuestros residentes.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/professional-caregiver-helping-elderly-person-with.jpg"
              alt="Cuidador profesional brindando atención y apoyo a un adulto mayor en hogar geriátrico en Medellín"
              width={600}
              height={500}
              className="rounded-2xl object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
