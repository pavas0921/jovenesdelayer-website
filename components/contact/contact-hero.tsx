export function ContactHero() {
  return (
    <section
      className="relative pt-32 pb-16 bg-secondary"
      aria-labelledby="contact-hero-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
          Contáctenos
        </p>
        <h1
          id="contact-hero-title"
          className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
        >
          Estamos Aquí Para Ayudarle
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          ¿Tiene preguntas sobre nuestros servicios? ¿Desea agendar una visita?
          Estamos disponibles para atenderle y resolver todas sus inquietudes.
        </p>
      </div>
    </section>
  );
}
