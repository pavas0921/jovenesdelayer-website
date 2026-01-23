import React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

// 🔥 METADATA OPTIMIZADA PARA GERIÁTRICOS EN MEDELLÍN
export const metadata: Metadata = {
  // Título optimizado para keywords principales
  title: {
    default:
      "Jóvenes del Ayer | Hogar Geriátrico en Medellín - Cuidado Especializado",
    template: "%s | Jóvenes del Ayer Hogar Geriátrico Medellín",
  },

  // Descripción optimizada con keywords y llamada a acción
  description:
    "Hogar geriátrico en Medellín con cuidado integral para adultos mayores. Atención médica 24/7, cuidado para Alzheimer y Parkinson, actividades recreativas y alimentación balanceada. Ambiente familiar en El Poblado, Medellín. ¡Visítenos!",

  // Keywords mejoradas para Medellín
  keywords: [
    "hogar geriátrico Medellín",
    "residencia adultos mayores Medellín",
    "cuidado ancianos Medellín",
    "asilo de ancianos Medellín",
    "cuidado para Alzheimer Medellín",
    "cuidado para Parkinson Medellín",
    "geriátrico El Poblado",
    "casa de reposo Medellín",
    "atención geriátrica 24 horas",
    "cuidado de adultos mayores Antioquia",
    "residencia tercera edad Medellín",
    "Jóvenes del Ayer geriátrico",
  ].join(", "),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // OpenGraph optimizado
  openGraph: {
    title: "Jóvenes del Ayer | Hogar Geriátrico en Medellín",
    description:
      "Cuidado profesional y amoroso para adultos mayores en Medellín. Atención 24/7, actividades y ambiente familiar.",
    type: "website",
    url: "https://jovenesdelayer.com", // ⚠️ CAMBIAR POR TU DOMINIO REAL
    siteName: "Jóvenes del Ayer Hogar Geriátrico",
    locale: "es_CO",
    countryName: "Colombia",
    images: [
      {
        url: "https://jovenesdelayer.com/og-image.jpg", // ⚠️ Crear esta imagen
        width: 1200,
        height: 630,
        alt: "Jóvenes del Ayer - Hogar Geriátrico en Medellín",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Jóvenes del Ayer | Hogar Geriátrico Medellín",
    description:
      "Cuidado integral para adultos mayores en Medellín con amor y profesionalismo.",
    images: ["https://jovenesdelayer.com/twitter-image.jpg"],
  },

  // Verificaciones (añadir cuando tengas las cuentas)
  verification: {
    google: "tu-codigo-google-search-console", // Obtener de Google Search Console
    yandex: "tu-codigo-yandex",
    yahoo: "tu-codigo-yahoo",
  },

  // Canonical URL
  alternates: {
    canonical: "https://jovenesdelayer.com",
  },

  // Metadata adicional para Colombia
  authors: [{ name: "Jóvenes del Ayer" }],
  publisher: "Jóvenes del Ayer Hogar Geriátrico",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: true, // IMPORTANTE: Permitir detección de teléfono
  },

  // Metadata para apps
  appleWebApp: {
    capable: true,
    title: "Jóvenes del Ayer",
    statusBarStyle: "black-translucent",
  },

  // Metadata de categoría (IMPORTANTE para negocios locales)
  category: "health",

  // Geo tags para Medellín
  other: {
    "geo.region": "CO-ANT",
    "geo.placename": "Medellín",
    "geo.position": "6.244203;-75.581212", // Coordenadas de Medellín (ajustar)
    ICBM: "6.244203, -75.581212",
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false, // Mejor para accesibilidad en adultos mayores
  };
}

// 🔥 SCHEMA MARKUP COMPLETO PARA GERIÁTRICOS
const seniorHousingSchema = {
  "@context": "https://schema.org",
  "@type": "SeniorHousing", // TIPO ESPECÍFICO PARA GERIÁTRICOS
  name: "Jóvenes del Ayer",
  description:
    "Hogar geriátrico en Medellín especializado en cuidado integral para adultos mayores",
  image: "https://jovenesdelayer.com/logo.png",
  url: "https://jovenesdelayer.com",

  // DATOS DE CONTACTO COMPLETOS
  telephone: "+5741234567",
  email: "contacto@jovenesdelayer.com",

  // DIRECCIÓN COMPLETA (IMPORTANTE PARA SEO LOCAL)
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 123 #45-67",
    addressLocality: "Medellín",
    addressRegion: "Antioquia",
    postalCode: "050001",
    addressCountry: "CO",
  },

  // GEO COORDENADAS
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.244203",
    longitude: "-75.581212",
  },

  // HORARIOS
  openingHours: "Mo-Su 00:00-23:59", // 24/7 para geriátricos
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },

  // SERVICIOS OFRECIDOS (CRÍTICO PARA SEO)
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Geriátricos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cuidado 24/7 para Alzheimer y Parkinson",
          description:
            "Atención especializada para adultos mayores con Alzheimer y Parkinson",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residencia Permanente",
          description: "Alojamiento y cuidado continuo para adultos mayores",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estancias Temporales",
          description: "Cuidado por días o semanas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cuidados Paliativos",
          description: "Atención especializada en etapas avanzadas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Actividades Recreativas",
          description: "Programa de actividades para estimulación cognitiva",
        },
      },
    ],
  },

  // ESPECIALIDAD MÉDICA
  medicalSpecialty: "Geriatrics",

  // ACREDITACIONES (si las tienes)
  memberOf: {
    "@type": "Organization",
    name: "Asociación Colombiana de Geriatría",
  },

  // REVIEWS/CRÍTICAS (añadir cuando tengas)
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "32",
    bestRating: "5",
    worstRating: "1",
  },

  priceRange: "$$$",

  // REDES SOCIALES
  sameAs: [
    "https://www.facebook.com/jovenesdelayer",
    "https://www.instagram.com/jovenesdelayer",
    "https://www.linkedin.com/company/jovenes-del-ayer",
  ],

  // ÁREA DE SERVICIO
  areaServed: {
    "@type": "State",
    name: "Antioquia",
    containsPlace: {
      "@type": "City",
      name: "Medellín",
    },
  },
};

// SCHEMA PARA ORGANIZACIÓN (adicional)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jóvenes del Ayer",
  url: "https://jovenesdelayer.com",
  logo: "https://jovenesdelayer.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5741234567",
    contactType: "Customer Service",
    areaServed: "CO",
    availableLanguage: ["Spanish"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" prefix="og: https://ogp.me/ns#">
      <head>
        {/* Múltiples Schemas para mejor SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seniorHousingSchema),
          }}
          key="senior-housing-schema"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          key="organization-schema"
        />

        {/* Favicon en múltiples formatos */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Preconnect para mejor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Meta tags adicionales para Colombia */}
        <meta name="geo.position" content="6.244203;-75.581212" />
        <meta name="geo.region" content="CO-ANT" />
        <meta name="geo.placename" content="Medellín" />
        <meta name="ICBM" content="6.244203, -75.581212" />

        {/* Theme color para PWA */}
        <meta name="theme-color" content="#1a365d" />

        {/* iOS meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Jóvenes del Ayer" />

        {/* Microsoft tiles */}
        <meta name="msapplication-TileColor" content="#1a365d" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Meta para WhatsApp compartir */}
        <meta property="og:locale" content="es_CO" />
        <meta property="og:site_name" content="Jóvenes del Ayer" />
      </head>
      <body
        className={`${playfair.variable} ${lora.variable} font-serif antialiased min-h-screen bg-white text-gray-800`}
      >
        {children}
        <Analytics />

        {/* Script para WhatsApp flotante (muy importante para geriátricos) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // WhatsApp flotante
              function addWhatsAppButton() {
                const btn = document.createElement('a');
                btn.href = 'https://wa.me/573165783244?text=Hola, me interesa información sobre el hogar geriátrico';
                btn.target = '_blank';
                btn.rel = 'noopener noreferrer';
                btn.className = 'fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all';
                btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>';
                document.body.appendChild(btn);
              }
            
              document.addEventListener('DOMContentLoaded', function() {
                addWhatsAppButton();
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
