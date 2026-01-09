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
                >
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@jovenesdelayer.com"
                  className="text-sm text-background/80 hover:text-accent transition-colors"
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
                <div className="text-sm text-background/80">
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

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Jóvenes del Ayer. Todos los derechos
            reservados.
          </p>

          {/* 🔹 Atribución */}
          <p className="mt-2 text-xs text-background/50">
            Sitio web creado por{" "}
            <a
              href="https://insigniatecnologica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Insignia Tecnológica
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
