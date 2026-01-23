import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Quick Contact Cards */}
      <Card
        className="bg-primary border-none"
        role="region"
        aria-label="Contacto rápido"
      >
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-primary-foreground mb-4">
            ¿Prefiere hablar directamente?
          </h3>
          <p className="text-primary-foreground/90 mb-6 leading-relaxed">
            Nuestro equipo está disponible para atender sus llamadas y mensajes.
            No dude en comunicarse con nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a
                href="tel:+573165783244"
                className="flex items-center justify-center gap-2"
                aria-label="Llamar ahora al +57 316 578 32 44"
              >
                <Phone className="h-4 w-4" />
                Llamar Ahora
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <a
                href="https://wa.me/3165783244?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20el%20hogar%20geriátrico%20Jóvenes%20del%20Ayer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
                aria-label="Enviar mensaje por WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Details */}
      <Card
        className="bg-card border-border"
        role="region"
        aria-label="Información de contacto"
      >
        <CardContent className="p-6 space-y-6">
          <h3 className="text-xl font-bold text-card-foreground">
            Información de Contacto
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">
                  Dirección
                </h4>
                <address className="not-italic text-muted-foreground">
                  Calle 29 # 81A - 35
                  <br />
                  Belén la Palma, Medellín
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">
                  Teléfonos
                </h4>
                <p className="text-muted-foreground">
                  <a
                    href="tel:+573165783244"
                    className="hover:text-primary transition-colors"
                    aria-label="Llamar al celular o WhatsApp +57 316 578 32 44"
                  >
                    +57 316 578 32 44 (Celular/WhatsApp)
                  </a>
                  <br />
                  <a
                    href="tel:+573165783244"
                    className="hover:text-primary transition-colors"
                    aria-label="Llamar al teléfono fijo +57 316 578 32 44"
                  >
                    +57 316 578 32 44
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">
                  Correo Electrónico
                </h4>
                <p className="text-muted-foreground">
                  <a
                    href="mailto:jovenesdelayermed@gmail.com"
                    className="hover:text-primary transition-colors"
                    aria-label="Enviar correo a jovenesdelayermed@gmail.com"
                  >
                    jovenesdelayermed@gmail.com
                  </a>
                  <br />
                  <a
                    href="mailto:admisiones@jovenesdelayer.com"
                    className="hover:text-primary transition-colors"
                    aria-label="Enviar correo a admisiones@jovenesdelayer.com"
                  >
                    jovenesdelayermed@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">
                  Horario de Atención
                </h4>
                <p className="text-muted-foreground">
                  Lunes a Viernes: 9:00 AM - 4:00 PM
                  <br />
                  Sábados: 9:00 AM - 12:00 PM
                  <br />
                  <br />
                  <strong>Visitas a Residentes:</strong>
                  <br />
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                  <br />
                  Sábados y Domingos: 10:00 AM - 5:00 PM
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule Visit */}
      <Card
        className="bg-muted border-border"
        role="region"
        aria-label="Agendar visita"
      >
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            Agende una Visita
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Lo invitamos a conocer nuestras instalaciones personalmente. Las
            visitas se realizan con cita previa.
          </p>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a
              href="https://wa.me/3165783244?text=Hola,%20me%20gustaría%20agendar%20una%20visita%20para%20conocer%20las%20instalaciones%20de%20Jóvenes%20del%20Ayer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar visita por WhatsApp"
            >
              Agendar Visita por WhatsApp
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
