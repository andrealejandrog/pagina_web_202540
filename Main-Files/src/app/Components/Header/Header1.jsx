'use client'
import { useState } from 'react'
import Nav from './Nav'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '../../context/LanguageContext'
import { useTranslations } from '../../hooks/useTranslations'
import Logo from '@public/assets/img/logo/Transparent_logo.svg'

export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const { t } = useTranslations()

  return (
    <div className='header-area2 header_nav_03'>
      <header className={`cs_site_header cs_style_1 ${variant || ''} cs_sticky_header cs_site_header_full_width ${mobileToggle ? 'cs_mobile_toggle_active' : ''}`}>
        {/* Top Header (Misión) */}
        <div className="cs_top_header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="pera">
                  <p>{t('header.mission')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="cs_main_header cs_accent_bg">
          <div className="container">
            <div className="cs_main_header_in">
              {/* Logo + Idioma móvil */}
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <Image src={Logo} alt="5-0 Technology" width={115} height={23} priority />
                </Link>

                {/* Botón de idioma móvil con mejor espaciado */}
                <div className="d-lg-none mobile-language-toggle ms-3">  {/* Añadido ms-3 para margen */}
                  <button
                    onClick={toggleLanguage}
                    className="cs_language_toggle cs_language_text"
                    aria-label="Toggle language"
                  >
                    {language === 'es' ? 'ENG' : 'ES'}
                  </button>
                </div>
              </div>

              {/* Navegación principal */}
              <div className="cs_main_header_center1">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              {/* Elementos derecha (desktop) */}
              <div className="cs_main_header_right header_right_one d-none d-lg-flex">
                {/* Idioma desktop */}
                <div className="language-selector me-3">
                  <button
                    onClick={toggleLanguage}
                    className="cs_language_toggle cs_language_text"
                  >
                    {language === 'es' ? 'ENG' : 'ES'}
                  </button>
                </div>

                {/* Contacto */}
                <div className="header1-buttons">
                  <div className="contact-btn">
                    <div className="icon">
                      <Image
                        src="/assets/img/icons/header1-icon.png"
                        alt="Contact"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div className="headding">
                      <p>{t('header.contact_us')}</p>
                      <a href="tel:+502 3758 0290">+502 3758 0290</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}