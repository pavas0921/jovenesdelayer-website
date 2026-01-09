// next.config.js - VERSIÓN FINAL OPTIMIZADA
/** @type {import('next').NextConfig} */
const nextConfig = {
  // === SEO CRÍTICO ===
  trailingSlash: false, // Recomendado para Colombia
  compress: true,

  // === IMÁGENES OPTIMIZADAS ===
  images: {
    unoptimized: false, // ¡CAMBIAR ESTO YA!
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jovenesdelayer.com',
      },
      {
        protocol: 'https',
        hostname: 'www.jovenesdelayer.com',
      },
    ],
  },

  // === HEADERS DE SEGURIDAD ===
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
        ],
      },
    ];
  },

  // === REDIRECCIONES PARA SEO ===
  async redirects() {
    return [
      // Redireccionar www a no-www (o viceversa)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.jovenesdelayer.com' }],
        destination: 'https://jovenesdelayer.com/:path*',
        permanent: true,
      },
      // Redirecciones de palabras clave
      {
        source: '/geriatrico-medellin',
        destination: '/servicios',
        permanent: true,
      },
      {
        source: '/asilo-medellin',
        destination: '/servicios/residencia-permanente',
        permanent: true,
      },
    ];
  },

  // === CONFIGURACIÓN DE BUILD ===
  typescript: {
    ignoreBuildErrors: false,
  },

  // === HEADER PARA PREVIEWS EN REDES ===
  async rewrites() {
    return [
      {
        source: '/api/og/:path*',
        destination: '/api/og', // Para Open Graph images dinámicas
      },
    ];
  },
};

export default nextConfig;