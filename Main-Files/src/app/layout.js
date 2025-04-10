import { Montserrat } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import { LanguageProvider } from './context/LanguageContext';

// 1. Configuración de fuente mejorada (cambios clave)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
  variable: '--body-font', // Cambiado a nombre más estándar
});

export const metadata = {
  title: {
    absolute: '',
    default: '5.0 solutions - Innovamos con propósito, transformamos con tecnología',
    template: '%s | 5.0 solutions',
  },
  description: '5.0 solutions - Innovamos con propósito, transformamos con tecnología',
  // 2. Metadata adicional para multi-idioma (opcional)
  alternates: {
    languages: {
      'es': '/es',
      'en': '/en',
    }
  }
};

export default function RootLayout({ children }) {
  return (
    // 3. HTML modificado para soporte de idioma dinámico
    <html lang="es" className={montserrat.variable} suppressHydrationWarning>
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* 4. Precarga de fuentes */}
        <link rel="preload" href="/_next/static/media/Montserrat-latin-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {/* 5. LanguageProvider envuelve todo */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}