import { Montserrat } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import { LanguageProvider } from './context/LanguageContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
  variable: '--body-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: '5.0 solutions - Innovamos con propósito, transformamos con tecnología',
    template: '%s | 5.0 solutions',
  },
  description: '5.0 solutions - Innovamos con propósito, transformamos con tecnología',
  alternates: {
    languages: {
      'es': '/es',
      'en': '/en',
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        {/* Meta tags esenciales DEBEN ir primero */}
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Precarga de fuentes */}
        <link 
          rel="preload" 
          href="/_next/static/media/Montserrat-latin-600.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}