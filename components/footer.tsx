import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">Jóvenes del Ayer</h3>
                <p className="text-sm text-background/70">
                  Hogar Geriátrico en Medellín
                </p>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Más de 15 años brindando cuidado integral, amor y dignidad a
              adultos mayores en Medellín y el Valle de Aburrá.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                "Inicio",
                "Servicios",
                "Nosotros",
                "Galería",
                "Testimonios",
                "Contacto",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-background/80 hover:text-accent transition-colors"
                    aria-label={`${item} del hogar geriátrico en Medellín`}
                    title={`${item} del hogar geriátrico en Medellín`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-background/80">
                  Calle 45 #12-34, Barrio El Prado, Medellín, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+573001234567"
                  className="text-sm text-background/80 hover:text-accent transition-colors"
                  aria-label="Llamar al hogar geriátrico Jóvenes del Ayer en Medellín"
                  title="Llamar al hogar geriátrico en Medellín"
                >
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@jovenesdelayer.com"
                  className="text-sm text-background/80 hover:text-accent transition-colors"
                  aria-label="Enviar correo al hogar geriátrico en Medellín"
                  title="Correo hogar geriátrico en Medellín"
                >
                  info@jovenesdelayer.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horario de Visitas</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <div
                  className="text-sm text-background/80"
                  aria-label="Horario de visitas del hogar geriátrico en Medellín"
                >
                  <p>Lunes a Viernes: 9am - 6pm</p>
                  <p>Sábados y Domingos: 10am - 5pm</p>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-sm text-background/60">
              Atención administrativa las 24 horas para emergencias.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Jóvenes del Ayer. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacidad"
                className="text-sm text-background/60 hover:text-accent transition-colors"
                aria-label="Política de privacidad del hogar geriátrico en Medellín"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-sm text-background/60 hover:text-accent transition-colors"
                aria-label="Términos y condiciones del hogar geriátrico en Medellín"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
