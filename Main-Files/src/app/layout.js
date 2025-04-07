import { Montserrat } from "next/font/google"; // Cambia la importación
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import { LanguageProvider } from '@/app/context/LanguageContext';

// Configura Montserrat con peso 600
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600', // Solo el peso 600 (puedes añadir más si lo necesitas, ej: ['400', '600', '700'])
  variable: '--body-color-font', // Opcional: cambia el nombre de la variable CSS si lo prefieres
});

export const metadata = {
  title: {
    absolute: '',
    default: '5.0 solutions - Innovamos con propósito, transformamos con tecnología',
    template: '%s | 5.0 solutions',
  },
  description: '5.0 solutions - Innovamos con propósito, transformamos con tecnología',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}