import { Clock } from "lucide-react"

const schedule = [
  { time: "6:30 AM", activity: "Despertar y aseo personal asistido" },
  { time: "7:30 AM", activity: "Desayuno nutritivo" },
  { time: "8:30 AM", activity: "Administración de medicamentos" },
  { time: "9:00 AM", activity: "Ejercicios de estiramiento y movilidad" },
  { time: "10:00 AM", activity: "Actividades cognitivas y talleres" },
  { time: "11:00 AM", activity: "Refrigerio de media mañana" },
  { time: "12:00 PM", activity: "Almuerzo" },
  { time: "1:00 PM", activity: "Tiempo de descanso" },
  { time: "3:00 PM", activity: "Terapia ocupacional o fisioterapia" },
  { time: "4:00 PM", activity: "Merienda y tiempo social" },
  { time: "5:00 PM", activity: "Actividades recreativas (música, juegos, manualidades)" },
  { time: "6:30 PM", activity: "Cena" },
  { time: "7:30 PM", activity: "Tiempo libre y preparación para dormir" },
  { time: "9:00 PM", activity: "Descanso nocturno" },
]

export function DailyActivities() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Rutina Diaria</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Un Día en Jóvenes del Ayer</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Cada día en nuestro hogar está diseñado para mantener a nuestros residentes activos, saludables y felices.
              Nuestra rutina combina cuidados médicos, actividades estimulantes y momentos de descanso.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Las actividades se adaptan a las capacidades y preferencias de cada residente, siempre respetando su ritmo
              y fomentando su autonomía.
            </p>
            <div className="bg-muted p-6 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">Actividades Semanales Especiales</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Lunes: Musicoterapia</li>
                <li>• Martes: Taller de manualidades</li>
                <li>• Miércoles: Cine y palomitas</li>
                <li>• Jueves: Jardinería terapéutica</li>
                <li>• Viernes: Bingo y juegos de mesa</li>
                <li>• Sábado: Visita de familiares y celebraciones</li>
                <li>• Domingo: Servicios religiosos y tiempo en familia</li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-card-foreground">Horario Típico</h3>
            </div>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <span className="text-sm font-medium text-primary min-w-[70px]">{item.time}</span>
                  <span className="text-card-foreground">{item.activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
