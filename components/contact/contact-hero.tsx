export function ContactHero() {
  return (
    <section
      className="relative pt-32 pb-16 bg-secondary"
      aria-labelledby="contact-hero-title"
      aria-describedby="contact-hero-description"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
          Contáctenos
        </p>

        <h1
          id="contact-hero-title"
          className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
        >
          Contacto Hogar Geriátrico Jóvenes del Ayer
        </h1>

        <p
          id="contact-hero-description"
          className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
        >
          ¿Tiene preguntas sobre nuestros servicios de cuidado para adultos
          mayores o desea agendar una visita a nuestro hogar geriátrico? Nuestro
          equipo está disponible para atenderle, brindarle información clara y
          acompañarle en cada paso del proceso.
        </p>
      </div>
    </section>
  );
}
