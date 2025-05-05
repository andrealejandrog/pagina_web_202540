/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  trailingSlash: true,
  
  // Solo añade estas 2 líneas para SVG:
  images: {
    dangerouslyAllowSVG: true, // Permite SVG con next/image
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8'
          }
        ]
      }
    ]
  }
};

export default nextConfig;