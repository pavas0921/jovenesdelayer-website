import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Sobre Nosotros</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Una Familia Dedicada al Cuidado con Amor
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En Jóvenes del Ayer creemos que cada adulto mayor merece vivir con dignidad, amor y la mejor calidad de
              vida posible. Nuestra historia es una historia de vocación, compromiso y cariño por nuestros mayores.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?key=7rrr9"
              alt="Nuestro equipo con residentes"
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
