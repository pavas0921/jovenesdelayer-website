import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Nuestra Historia</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">15 Años de Amor y Dedicación</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jóvenes del Ayer nació en 2009 de un sueño familiar: crear un espacio donde los adultos mayores pudieran
                vivir sus años dorados rodeados de amor, cuidado profesional y la calidez de un verdadero hogar.
              </p>
              <p>
                Todo comenzó cuando nuestra fundadora, María del Carmen Rodríguez, experimentó en carne propia la
                dificultad de encontrar un lugar digno para el cuidado de su madre. Esta experiencia la impulsó a crear
                lo que ella hubiera querido encontrar: un hogar donde cada residente fuera tratado como familia.
              </p>
              <p>
                Lo que empezó como una pequeña casa con capacidad para 8 residentes, hoy se ha convertido en un hogar
                que ha acogido a más de 500 familias a lo largo de estos años. Nuestras instalaciones han crecido, pero
                nuestra esencia sigue siendo la misma: cuidar con amor.
              </p>
              <p>
                Hoy, Jóvenes del Ayer cuenta con un equipo de más de 30 profesionales comprometidos, instalaciones
                modernas y adaptadas, y el reconocimiento de la comunidad como un referente en el cuidado humanizado de
                adultos mayores.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?key=12nkz"
              alt="Fundación del hogar"
              width={280}
              height={350}
              className="rounded-2xl object-cover w-full h-64 md:h-80"
            />
            <Image
              src="/placeholder.svg?key=2y6mc"
              alt="Nuestro hogar hoy"
              width={280}
              height={350}
              className="rounded-2xl object-cover w-full h-64 md:h-80 mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
