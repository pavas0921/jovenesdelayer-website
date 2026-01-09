export function GalleryHero() {
  return (
    <section
      className="relative pt-32 pb-16 bg-secondary px-6 lg:px-8"
      role="banner"
      aria-label="Introducción a la galería de Jóvenes del Ayer"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
          Nuestra Galería
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto text-balance">
          Momentos de Alegría y Cuidado
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Descubre a través de estas imágenes cómo es la vida en Jóvenes del
          Ayer: nuestras instalaciones, actividades diarias y los momentos
          especiales que compartimos con nuestros residentes.
        </p>
        {/* Opcional: CTA botón para explorar galería */}
        {/* <div className="mt-8">
          <a
            href="#gallery"
            className="inline-block rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition"
          >
            Ver Galería Completa
          </a>
        </div> */}
      </div>
    </section>
  );
}
