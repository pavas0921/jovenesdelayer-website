/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://tuhogargeriatricomedellin.com', // Cambiar por tu dominio
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 1,
            },
        ],
        additionalSitemaps: [
            'https://tuhogargeriatricomedellin.com/sitemap-0.xml',
        ],
    },
    exclude: ['/admin/*', '/api/*'],
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    // Configuración para páginas importantes
    transform: async (config, path) => {
        // Asignar mayor prioridad a páginas clave
        const priorities = {
            '/': 1.0,
            '/servicios': 0.9,
            '/servicios/cuidado-alzheimer': 0.9,
            '/servicios/residencia-permanente': 0.9,
            '/contacto': 0.8,
            '/nosotros': 0.8,
            '/blog': 0.7,
        };

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: priorities[path] || config.priority,
            lastmod: new Date().toISOString(),
        };
    },
};