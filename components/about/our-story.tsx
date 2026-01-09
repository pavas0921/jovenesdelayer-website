import Image from "next/image";

export function OurStory() {
  return (
    <section className="py-24 bg-background" aria-labelledby="our-story-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Nuestra Historia
            </p>

            <h2
              id="our-story-title"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              15 Años de Amor y Dedicación al Cuidado del Adulto Mayor en
              Medellín
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong>Jóvenes del Ayer</strong> nació en 2009 como un sueño
                familiar en Medellín: crear un hogar geriátrico donde los
                adultos mayores pudieran vivir sus años dorados rodeados de
                amor, cuidado profesional y la calidez de un verdadero hogar.
              </p>

              <p>
                Todo comenzó cuando nuestra fundadora, María del Carmen
                Rodríguez, vivió en primera persona la dificultad de encontrar
                un lugar digno para el cuidado de su madre. Esta experiencia dio
                origen a un modelo de atención humana, empática y centrada en la
                dignidad del adulto mayor.
              </p>

              <p>
                Lo que inició como una pequeña casa con capacidad para 8
                residentes, hoy se ha convertido en un hogar geriátrico en
                Medellín que ha acompañado a más de{" "}
                <strong>500 familias </strong>a lo largo de estos años.
              </p>

              <p>
                Actualmente, Jóvenes del Ayer cuenta con un equipo
                interdisciplinario de más de <strong>30 profesionales</strong>,
                instalaciones modernas y adaptadas, y el reconocimiento de la
                comunidad como un referente en el cuidado humanizado del adulto
                mayor en Antioquia.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?key=12nkz"
              alt="Fundación del hogar geriátrico Jóvenes del Ayer en Medellín"
              width={280}
              height={350}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="rounded-2xl object-cover w-full h-64 md:h-80"
            />

            <Image
              src="/placeholder.svg?key=2y6mc"
              alt="Instalaciones actuales del hogar geriátrico Jóvenes del Ayer en Medellín"
              width={280}
              height={350}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="rounded-2xl object-cover w-full h-64 md:h-80 mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
