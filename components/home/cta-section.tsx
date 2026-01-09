import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            ¿Listo para Conocernos?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Agende una visita para conocer nuestras instalaciones, conversar con nuestro equipo y descubrir por qué
            somos la mejor opción para el cuidado de su ser querido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">Llámenos</h3>
            <a
              href="tel:+573001234567"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              +57 300 123 4567
            </a>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">Escríbanos</h3>
            <a
              href="mailto:info@jovenesdel ayer.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              info@jovenesdel ayer.com
            </a>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-primary-foreground mb-2">Visítenos</h3>
            <p className="text-primary-foreground/80">Calle 45 #12-34, Barrio El Prado</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
            <Link href="/contacto">Agendar Visita</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            asChild
          >
            <a
              href="https://wa.me/573001234567?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20al%20hogar%20geriátrico"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
