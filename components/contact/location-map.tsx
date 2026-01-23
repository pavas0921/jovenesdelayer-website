export function LocationMap() {
  return (
    <section
      className="py-16 bg-secondary"
      role="region"
      aria-label="Mapa de ubicación de Jóvenes del Ayer"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-muted-foreground">
            Estamos ubicados en una zona tranquila y accesible de la ciudad.
          </p>
        </div>

        <div className="aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-border shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.093072442389!2d-75.60174275554198!3d6.227657291702426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429fde0e89a2d%3A0x5fb1fcead2f0886b!2sHogar%20geri%C3%A1trico%20j%C3%B3venes%20del%20ayer!5e0!3m2!1ses!2sco!4v1769184960902!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Jóvenes del Ayer Hogar Geriátrico en Medellín"
          ></iframe>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://maps.app.goo.gl/rjSuk6W32EG5Ligf6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
            aria-label="Abrir ubicación de Jóvenes del Ayer en Google Maps"
          >
            Abrir en Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
