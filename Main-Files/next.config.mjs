/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  charset: 'utf-8',  // Mantenemos el charset de tu versión
  trailingSlash: true,
  // Configuración de imágenes mejorada
  images: {
    dangerouslyAllowSVG: true,  // Mantenemos la seguridad para SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        // Versión mejorada de la regla de headers
        source: '/:path((?!.*\\..*).*)',  // Excluye archivos con extensiones
        headers: [
          { 
            key: 'Content-Type', 
            value: 'text/html; charset=utf-8'  // Mantenemos el charset
          }
        ]
      }
    ]
  }
};

export default nextConfig;