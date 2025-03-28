import { Figtree } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: '50 solutions - Innovamos con propósito, transformamos con tecnología',
    template: '%s | 50 solutions  - Innovamos con propósito, transformamos con tecnología',
  },
  description: '50 solutions  - TInnovamos con propósito, transformamos con tecnología',
  openGraph: {
    title: '50 solutions  - Innovamos con propósito, transformamos con tecnología',
    description: '50 solutions  - Innovamos con propósito, transformamos con tecnología',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${figtree.variable}`}>
        {children}
      </body>
    </html>
  );
}
