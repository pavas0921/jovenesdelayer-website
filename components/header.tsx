"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Inicio", href: "/", label: "Hogar geriátrico en Medellín" },
  {
    name: "Servicios",
    href: "/servicios",
    label: "Servicios de cuidado para adultos mayores en Medellín",
  },
  {
    name: "Nosotros",
    href: "/nosotros",
    label: "Hogar geriátrico Jóvenes del Ayer en Medellín",
  },
  {
    name: "Galería",
    href: "/galeria",
    label: "Instalaciones del hogar geriátrico en Medellín",
  },
  {
    name: "Testimonios",
    href: "/testimonios",
    label: "Opiniones del hogar geriátrico en Medellín",
  },
  {
    name: "Contacto",
    href: "/contacto",
    label: "Contactar hogar geriátrico en Medellín",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center gap-2 -m-1.5 p-1.5"
            aria-label="Jóvenes del Ayer - Hogar geriátrico en Medellín"
            title="Jóvenes del Ayer - Hogar geriátrico en Medellín"
          >
            <Heart className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">
                Jóvenes del Ayer
              </span>
              <span className="text-xs text-muted-foreground">
                Hogar Geriátrico en Medellín
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              aria-label={item.label}
              title={item.label}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Button variant="outline" size="sm" asChild>
            <a
              href="tel:+573165783244"
              aria-label="Llamar al hogar geriátrico en Medellín"
              title="Llamar al hogar geriátrico en Medellín"
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Llamar
            </a>
          </Button>

          <Button
            size="sm"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://wa.me/573165783244?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20el%20hogar%20geriátrico%20en%20Medellín"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp hogar geriátrico en Medellín"
              title="WhatsApp hogar geriátrico en Medellín"
            >
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú de navegación"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full bg-background px-6 py-6 sm:max-w-sm">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground"
                  aria-label={item.label}
                  title={item.label}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
