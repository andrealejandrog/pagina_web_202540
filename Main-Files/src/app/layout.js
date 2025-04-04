import { Montserrat } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

// Configura Montserrat con peso 600 como única variante
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
  variable: '--body-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: '50 solutions - Innovamos con propósito, transformamos con tecnología',
    template: '%s | 50 solutions - Innovamos con propósito, transformamos con tecnología',
  },
  description: '50 solutions - Innovamos con propósito, transformamos con tecnología',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es"> {/* Cambiado a "es" para español */}
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}