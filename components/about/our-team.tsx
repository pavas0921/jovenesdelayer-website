import Image from "next/image"

const team = [
  {
    name: "María del Carmen Rodríguez",
    role: "Directora General y Fundadora",
    image: "/professional-woman-director-60-years-old-portrait.jpg",
    description:
      "Con más de 20 años de experiencia en geriatría, María del Carmen fundó Jóvenes del Ayer con la visión de crear un hogar donde cada adulto mayor sea tratado con amor y dignidad.",
  },
  {
    name: "Dr. Andrés Martínez",
    role: "Director Médico",
    image: "/doctor-man-50-years-old-portrait-professional.jpg",
    description:
      "Médico geriatra con especialización en cuidados paliativos. Lidera nuestro equipo médico asegurando la mejor atención clínica para cada residente.",
  },
  {
    name: "Enfermera Jefe Patricia López",
    role: "Coordinadora de Enfermería",
    image: "/nurse-woman-45-years-old-portrait-professional.jpg",
    description:
      "15 años de experiencia en cuidado geriátrico. Patricia coordina al equipo de enfermería y garantiza la excelencia en el cuidado diario.",
  },
  {
    name: "Sandra Milena Torres",
    role: "Coordinadora de Bienestar",
    image: "/professional-woman-40-years-old-wellness-coordinat.jpg",
    description:
      "Terapeuta ocupacional encargada de diseñar y coordinar todas las actividades recreativas y de estimulación para nuestros residentes.",
  },
]

export function OurTeam() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Nuestro Equipo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profesionales con Vocación de Servicio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Detrás de Jóvenes del Ayer hay un equipo humano excepcional, comprometido con el bienestar de cada uno de
            nuestros residentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover mx-auto w-48 h-48"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-card p-8 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">Nuestro Equipo Completo</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Además de nuestro equipo directivo, contamos con más de 30 profesionales entre enfermeras, auxiliares de
            enfermería, fisioterapeutas, nutricionistas, psicólogos, personal de cocina, aseo y seguridad. Todos
            comprometidos con brindar el mejor cuidado a nuestros residentes.
          </p>
        </div>
      </div>
    </section>
  )
}
