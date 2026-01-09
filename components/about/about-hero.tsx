import Image from "next/image";

export function AboutHero() {
  return (
    <section
      className="relative pt-32 pb-20 bg-secondary"
      aria-labelledby="about-hero-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Sobre Nosotros
            </p>

            <h1
              id="about-hero-title"
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              Una Familia Dedicada al Cuidado del Adulto Mayor en Medellín
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              En <strong>Jóvenes del Ayer</strong> creemos que cada adulto mayor
              merece vivir con dignidad, amor y la mejor calidad de vida
              posible. Somos un hogar geriátrico en Medellín con una historia
              basada en la vocación, el compromiso y el cuidado humano
              especializado para nuestros mayores.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?key=7rrr9"
              alt="Equipo de cuidadores del hogar geriátrico Jóvenes del Ayer acompañando a adultos mayores en Medellín"
              width={600}
              height={500}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
