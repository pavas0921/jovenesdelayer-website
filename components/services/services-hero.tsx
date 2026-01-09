import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Nuestros Servicios</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Cuidado Integral para el Bienestar de su Ser Querido
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En Jóvenes del Ayer ofrecemos una amplia gama de servicios diseñados para garantizar la salud, el confort
              y la felicidad de nuestros residentes. Cada servicio está pensado con amor y profesionalismo para brindar
              la mejor calidad de vida.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/professional-caregiver-helping-elderly-person-with.jpg"
              alt="Cuidador profesional ayudando a adulto mayor"
              width={600}
              height={500}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
