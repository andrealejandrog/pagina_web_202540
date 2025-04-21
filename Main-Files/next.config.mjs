/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
      locales: ['es', 'en'],
      defaultLocale: 'es',
    },
    charset: 'utf-8',
    trailingSlash: true,
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