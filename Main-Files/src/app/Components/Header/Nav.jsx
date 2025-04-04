import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext'; // Ajusta la ruta según tu estructura
import { useTranslation } from '../Common/useTranslation'; // Ajusta la ruta

export default function Nav({ setMobileToggle }) {
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation('nav');

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      setMobileToggle(false);
    }
  };

  return (
    <div className="nav-wrapper">
      <ul className="cs_nav_list fw-medium">
        <li>
          <a 
            href="#soluciones" 
            onClick={(e) => handleSmoothScroll(e, 'soluciones')}
          >
            {t.solutions || 'Soluciones'}
          </a>
        </li>

        <li>
          <a 
            href="#impacto" 
            onClick={(e) => handleSmoothScroll(e, 'impacto')}
          >
            {t.impact || 'Impacto'}
          </a>
        </li>

        <li>
          <a 
            href="#proceso" 
            onClick={(e) => handleSmoothScroll(e, 'proceso')}
          >
            {t.process || 'Proceso'}
          </a>
        </li>

        <li>
          <a 
            href="#diferenciador" 
            onClick={(e) => handleSmoothScroll(e, 'diferenciador')}
          >
            {t.differentiator || 'Diferenciador'}
          </a>
        </li>

        <li>
          <a 
            href="#contacto" 
            onClick={(e) => handleSmoothScroll(e, 'contacto')}
          >
            {t.contact || 'Contáctanos'}
          </a>
        </li>

        {/* Selector de idioma */}
        <li className="language-selector">
          <button 
            onClick={toggleLanguage}
            className="language-toggle"
          >
            {language === 'es' ? 'ENG' : 'ESP'}
          </button>
        </li>
      </ul>
    </div>
  );
}