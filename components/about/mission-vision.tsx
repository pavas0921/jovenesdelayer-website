import { Target, Eye, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MissionVision() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Nuestra Misión</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Brindar cuidado integral, humanizado y de alta calidad a los adultos mayores, promoviendo su bienestar
                físico, emocional y social en un ambiente familiar que fomente su dignidad y autonomía.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Nuestra Visión</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Ser reconocidos como el hogar geriátrico líder en la región, referente en cuidado humanizado y modelo de
                excelencia en la atención integral del adulto mayor, contribuyendo a dignificar esta etapa de la vida.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Nuestro Enfoque</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Cada residente es único y merece un cuidado personalizado. Nuestro enfoque centrado en la persona nos
                permite conocer sus historias, preferencias y necesidades para ofrecerles la mejor experiencia de vida.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
