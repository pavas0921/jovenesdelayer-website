"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  {
    name: "Inicio",
    href: "/",
    ariaLabel: "Página principal del hogar geriátrico",
  },
  {
    name: "Servicios",
    href: "/servicios",
    ariaLabel: "Servicios de cuidado para adultos mayores en Medellín",
  },
  {
    name: "Nosotros",
    href: "/nosotros",
    ariaLabel: "Conozca nuestro hogar geriátrico en Medellín",
  },
  {
    name: "Galería",
    href: "/galeria",
    ariaLabel: "Fotos de nuestras instalaciones en Medellín",
  },
  {
    name: "Testimonios",
    href: "/testimonios",
    ariaLabel: "Testimonios de familias sobre nuestro hogar geriátrico",
  },
  {
    name: "Contacto",
    href: "/contacto",
    ariaLabel: "Contacte nuestro hogar geriátrico en Medellín",
  },
];

// 🔥 TELÉFONOS OPTIMIZADOS PARA MEDELLÍN
const CONTACT_INFO = {
  phone: "+57 4 604 1234", // Formato internacional para Colombia
  whatsapp: "573001234567", // Solo números para WhatsApp
  location: "Medellín, Antioquia",
  address: "El Poblado, Medellín", // Si tienes dirección específica
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Efecto para cambiar header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Cerrar menú móvil al hacer scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, mobileMenuOpen]);

  // Cerrar menú con Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  // WhatsApp message optimizado para conversiones
  const whatsappMessage = encodeURIComponent(
    "Hola, vi su página web y me interesa información sobre el hogar geriátrico Jóvenes del Ayer en Medellín. ¿Podrían ayudarme?"
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
      role="banner"
      itemScope
      itemType="https://schema.org/SeniorHousing"
    >
      {/* Microdata para SEO */}
      <meta itemProp="name" content="Jóvenes del Ayer Hogar Geriátrico" />
      <meta itemProp="address" content={CONTACT_INFO.location} />
      <meta itemProp="telephone" content={CONTACT_INFO.phone} />

      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="flex h-20 items-center justify-between">
          {/* Logo con mejor SEO */}
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              aria-label="Jóvenes del Ayer - Hogar Geriátrico en Medellín"
              className="flex items-center gap-3 group"
              onClick={() => setMobileMenuOpen(false)}
              itemProp="url"
            >
              <div className="relative">
                <Heart
                  className="h-9 w-9 text-red-600 group-hover:text-red-700 transition-colors"
                  aria-hidden="true"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  Jóvenes del Ayer
                </span>
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Hogar Geriátrico en Medellín
                </span>
              </div>
            </Link>
          </div>

          {/* Navegación Desktop - Optimizada */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-label={item.ariaLabel}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                onClick={() =>
                  window.gtag?.("event", "nav_click", { menu_item: item.name })
                }
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botones de Contacto Desktop - Optimizados */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            {/* WhatsApp con mejor CTA */}
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                onClick={() => {
                  window.gtag?.("event", "whatsapp_click", {
                    event_category: "Contacto",
                    event_label: "Header WhatsApp Button",
                  });
                }}
                aria-label="Escribir por WhatsApp"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                <span className="font-semibold">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Botón Menú Móvil */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil - Optimizado */}
      <div
        id="mobile-navigation"
        className={`lg:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación móvil"
      >
        {/* Fondo oscuro */}
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panel del menú */}
        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
          <div className="flex h-full flex-col">
            {/* Encabezado del menú */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Ir al inicio"
              >
                <Heart className="h-8 w-8 text-red-600" />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900">
                    Jóvenes del Ayer
                  </span>
                  <span className="text-xs text-gray-600">
                    Hogar Geriátrico
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="rounded-lg p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navegación móvil */}
            <nav className="flex-1 overflow-y-auto p-6" aria-label="Menú móvil">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.gtag?.("event", "mobile_nav_click", {
                        menu_item: item.name,
                      });
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Contacto móvil */}
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-center bg-white border-gray-300 hover:border-red-500 hover:bg-red-50"
                  asChild
                >
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-gray-700"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.gtag?.("event", "mobile_phone_click", {
                        event_category: "Contacto",
                      });
                    }}
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">{CONTACT_INFO.phone}</span>
                  </a>
                </Button>

                <Button
                  className="w-full justify-center bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.gtag?.("event", "mobile_whatsapp_click", {
                        event_category: "Contacto",
                      });
                    }}
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    <span className="font-semibold">Escribir por WhatsApp</span>
                  </a>
                </Button>
              </div>

              {/* Info adicional para SEO */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  Hogar Geriátrico especializado en Medellín
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
