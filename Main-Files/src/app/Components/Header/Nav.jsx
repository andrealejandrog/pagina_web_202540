'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from '../../hooks/useTranslations'

export default function Nav({ setMobileToggle }) {
  const { t } = useTranslations()

  const handleSmoothScroll = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
      
      setMobileToggle(false)
    }
  }

  // Datos de navegación para mapear
  const navItems = [
    { id: 'soluciones', key: 'nav.solutions' },
    { id: 'impacto', key: 'nav.impact' },
    { id: 'proceso', key: 'nav.process' },
    { id: 'diferenciador', key: 'nav.differentiator' },
    { id: 'contacto', key: 'nav.contact' }
  ]

  return (
    <ul className="cs_nav_list fw-medium">
      {navItems.map((item) => (
        <li key={item.id}>
          <a 
            href={`#${item.id}`}
            onClick={(e) => handleSmoothScroll(e, item.id)}
          >
            {t(item.key)}
          </a>
        </li>
      ))}
    </ul>
  )
}