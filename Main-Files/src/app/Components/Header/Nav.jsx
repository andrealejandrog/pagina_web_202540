import { useEffect } from 'react';
import Link from 'next/link';

export default function Nav({ setMobileToggle }) {
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
    <ul className="cs_nav_list fw-medium">
      <li>
        <a 
          href="#soluciones" 
          onClick={(e) => handleSmoothScroll(e, 'soluciones')}
        >
          Soluciones
        </a>
      </li>

      <li>
        <a 
          href="#impacto" 
          onClick={(e) => handleSmoothScroll(e, 'impacto')}
        >
          Impacto
        </a>
      </li>

      <li>
        <a 
          href="#proceso" 
          onClick={(e) => handleSmoothScroll(e, 'proceso')}
        >
          Proceso
        </a>
      </li>

      <li>
        <a 
          href="#diferenciador" 
          onClick={(e) => handleSmoothScroll(e, 'diferenciador')}
        >
          Diferenciador
        </a>
      </li>

      <li>
        <a 
          href="#contacto" 
          onClick={(e) => handleSmoothScroll(e, 'contacto')}
        >
          Contactanos
        </a>
      </li>
    </ul>
  );
}