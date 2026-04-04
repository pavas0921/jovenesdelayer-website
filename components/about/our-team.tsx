import Image from "next/image";

const team = [
  {
    name: "Luz Estela Higuita",
    role: "Directora y Fundadora",
    image: "/professional-woman-director-60-years-old-portrait.jpg",
    description:
      "Con más de 20 años de experiencia en geriatría, Luz Estella fundó Jóvenes del Ayer con la visión de crear un hogar geriátrico donde cada adulto mayor sea tratado con amor, respeto y dignidad.",
  },
  {
    name: "Dr. Andrés Martínez",
    role: "Director Médico",
    image: "/doctor-man-50-years-old-portrait-professional.jpg",
    description:
      "Médico geriatra con especialización en cuidados paliativos. Lidera el equipo médico garantizando atención clínica integral y personalizada para cada residente.",
  },
  {
    name: "Patricia López",
    role: "Enfermera Jefe y Coordinadora de Enfermería",
    image: "/nurse-woman-45-years-old-portrait-professional.jpg",
    description:
      "Con más de 15 años de experiencia en cuidado geriátrico, coordina al equipo de enfermería asegurando excelencia en el cuidado diario de los adultos mayores.",
  },
  {
    name: "Sandra Milena Torres",
    role: "Coordinadora de Bienestar",
    image: "/professional-woman-40-years-old-wellness-coordinat.jpg",
    description:
      "Terapeuta ocupacional encargada de diseñar y coordinar actividades recreativas, cognitivas y de estimulación para mejorar la calidad de vida de nuestros residentes.",
  },
];

export function OurTeam() {
  return (
    <section className="py-24 bg-secondary" aria-labelledby="our-team-title">
      {/* H2 oculto solo para SEO y accesibilidad */}
      <h2 id="our-team-title" className="sr-only">
        Equipo profesional del hogar geriátrico Jóvenes del Ayer en Medellín
      </h2>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Nuestro Equipo
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profesionales con Vocación de Servicio
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Detrás de Jóvenes del Ayer hay un equipo interdisciplinario de
            profesionales en geriatría comprometidos con el bienestar físico,
            emocional y social de cada adulto mayor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <article key={index} className="text-center">
              <div className="mb-4 relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`${member.name}, ${member.role} del hogar geriátrico Jóvenes del Ayer en Medellín`}
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover mx-auto w-48 h-48"
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h4>
              <p className="text-primary text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center bg-card p-8 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Un Equipo Humano Integral
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Además del equipo directivo, contamos con más de 30 profesionales
            entre enfermeras, auxiliares de enfermería, fisioterapeutas,
            nutricionistas, psicólogos, personal de cocina, aseo y seguridad,
            todos comprometidos con el cuidado integral y humanizado de nuestros
            adultos mayores.
          </p>
        </div>
      </div>
    </section>
  );
}
