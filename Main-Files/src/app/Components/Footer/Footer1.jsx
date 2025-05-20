'use client'
import Image from "next/image";
import { useTranslations } from '../../hooks/useTranslations';

const Footer1 = () => {
  const { t } = useTranslations();
  return (
    <div className="footer1 _relative" id='footer'>
      <div className="container">
        <div className="row footer-main-content align-items-center"> {/* Fila principal con alineación vertical */}
          
          {/* Columna Izquierda: Logo, Slogan, Copyright */}
          <div className="col-lg-6 footer-left-content">
            <div className="footer-logo mb-3"> {/* mb-3 para espacio debajo del logo */}
              <Image
                src="/assets/img/logo/Original_logo.svg"
                alt="5.0 Technology Logo"
                width={350} // Ancho ajustado para el logo
                height={10} // Altura ajustada (o la que corresponda a tu logo para mantener proporción)
                            // Si tu SVG escala bien, podrías omitir height y controlarlo con CSS.
              />
            </div>
            <div className="footer-slogan mb-3"> {/* mb-3 para espacio debajo del slogan */}
              <p>{t('footer.slogan')}</p>
            </div>
            <div className="footer-copyright">
              <p>Copyright @2025 5.0 Technology. All Rights Reserved</p>
            </div>
          </div>

          {/* Columna Derecha: Título "Follow us" e Iconos Sociales */}
          <div className="col-lg-6 footer-right-content">
            <h3 className="footer-follow-us-title">{t('footer.contact_title')}</h3>
            <ul className="social-icon-list">
              <li><a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a></li>
              <li><a href="#" aria-label="Twitter X"><i className="bi bi-twitter-x"></i></a></li>
              <li><a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer1;