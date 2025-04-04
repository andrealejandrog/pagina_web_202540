"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
export default function Header1({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <div className='header-area2 header_nav_03'>
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      }`}
    >
      <div className="cs_top_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pera">
                <p>
                {/* <Image
                      src="/assets/img/icons/Logo_symbol.svg"
                      alt="5-0 Technology - Soluciones Tecnológicas"
                      width={50}  // Más ancho para mejor legibilidad
                      height={10}
                      priority     // Opcional: carga prioritario si está en el header
                  /> */}
                   Innovamos con propósito, transformamos con tecnología.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_main_header cs_accent_bg">
        <div className="container">
          <div className="cs_main_header_in">

            <div className="cs_main_header_left">
              <Link className="cs_site_branding" href="/">
                <Image
                    src="/assets/img/logo/Transparent_logo.svg"
                    alt="5-0 Technology - Soluciones Tecnológicas"
                    width={115}  // Más ancho para mejor legibilidad
                    height={23}
                    priority     // Opcional: carga prioritario si está en el header
                />
              </Link>
              </div>

              <div className="cs_main_header_center1">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right header_right_one">

            <div className="header1-buttons">
                    <div className="contact-btn">
                      <div className="icon">
                      <Image src="/assets/img/icons/header1-icon.png" alt="img" width={22} height={22}   />
                      </div>
                      <div className="headding">
                        <p>Envíanos un mensaje</p>
                        <a href="tel:+502 4151 7120">+502 4151 7120</a>
                      </div>
                    </div>
                    {/* <div className="button">
                    <Link href="/contact" className="theme-btn1" >Get A Quote <span><i className="bi bi-arrow-right"></i>
                    </span></Link>
                    </div> */}
               </div>

            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
    
  );
}
