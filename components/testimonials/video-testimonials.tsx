import { Play } from "lucide-react"

export function VideoTestimonials() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Testimonios en Video</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Escucha directamente de las familias sus experiencias con Jóvenes del Ayer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-video bg-foreground/10 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
              <p className="text-background font-semibold">Familia García comparte su experiencia</p>
              <p className="text-background/80 text-sm">{"2 minutos de duración"}</p>
            </div>
          </div>

          <div className="relative aspect-video bg-foreground/10 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
              <p className="text-background font-semibold">Don Roberto nos cuenta su historia</p>
              <p className="text-background/80 text-sm">{"3 minutos de duración"}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-card p-8 rounded-2xl border border-border">
          <h3 className="text-xl font-semibold text-card-foreground mb-3">¿Quiere compartir su experiencia?</h3>
          <p className="text-muted-foreground">
            Si usted o su familia desean compartir su testimonio, estaremos encantados de escucharles. Su experiencia
            puede ayudar a otras familias en la misma situación.
          </p>
        </div>
      </div>
    </section>
  )
}
