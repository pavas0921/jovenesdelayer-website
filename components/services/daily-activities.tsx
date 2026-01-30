import { Clock } from "lucide-react";

const schedule = [
  { time: "6:30 AM", activity: "Despertar y aseo personal asistido" },
  { time: "7:30 AM", activity: "Desayuno nutritivo y balanceado" },
  { time: "8:30 AM", activity: "Administración segura de medicamentos" },
  {
    time: "9:00 AM",
    activity: "Ejercicios de estiramiento y movilidad guiados",
  },
  {
    time: "10:00 AM",
    activity: "Refrigerio de media mañana",
  },
  {
    time: "11:00 AM",
    activity: "Actividades cognitivas y talleres terapéuticos",
  },
  { time: "12:00 PM", activity: "Almuerzo nutritivo" },
  { time: "1:00 PM", activity: "Tiempo de descanso supervisado" },
  {
    time: "3:00 PM",
    activity: "Terapia ocupacional o fisioterapia personalizada",
  },
  { time: "4:00 PM", activity: "Merienda y tiempo social guiado" },
  {
    time: "5:00 PM",
    activity: "Actividades recreativas: música, juegos y manualidades",
  },
  { time: "6:30 PM", activity: "Cena" },
  { time: "7:30 PM", activity: "Tiempo libre y preparación para dormir" },
  { time: "9:00 PM", activity: "Descanso nocturno con vigilancia" },
];

export function DailyActivities() {
  return (
    <section
      className="py-24 bg-background"
      aria-labelledby="daily-activities-title"
      itemScope
      itemType="https://schema.org/MedicalTherapy"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* CONTENIDO DESCRIPTIVO */}
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Rutina Diaria Geriátrica
            </p>

            <h2
              id="daily-activities-title"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              itemProp="name"
            >
              Un Día en el Hogar Geriátrico Jóvenes del Ayer
            </h2>

            <p
              className="text-muted-foreground mb-6 leading-relaxed"
              itemProp="description"
            >
              Nuestra rutina diaria para adultos mayores está cuidadosamente
              diseñada para promover la salud física, emocional y cognitiva.
              Cada actividad combina cuidado profesional, estimulación
              terapéutica y espacios de descanso.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Adaptamos las actividades diarias a las capacidades, condiciones
              médicas y preferencias personales de cada residente, fomentando su
              autonomía y bienestar integral.
            </p>

            <div className="bg-muted p-6 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">
                Actividades Terapéuticas Semanales
              </h3>

              <ul className="space-y-2 text-muted-foreground">
                <li>• Lunes: Musicoterapia para estimulación emocional</li>
                <li>• Martes: Taller de manualidades y motricidad fina</li>
                <li>• Miércoles: Cine terapéutico y memoria</li>
                <li>• Jueves: Jardinería terapéutica</li>
                <li>• Viernes: Bingo y juegos cognitivos</li>
                <li>• Sábado: Actividades familiares y celebraciones</li>
                <li>• Domingo: Servicios religiosos y tiempo espiritual</li>
              </ul>
            </div>
          </div>

          {/* HORARIO (SIN SCHEMA EVENT) */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-card-foreground">
                Horario Diario del Adulto Mayor
              </h3>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <time className="text-sm font-medium text-primary min-w-[70px]">
                    {item.time}
                  </time>

                  <span className="text-card-foreground">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
