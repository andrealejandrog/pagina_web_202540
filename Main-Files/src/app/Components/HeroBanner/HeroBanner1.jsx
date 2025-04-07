"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import Link from "next/link";
import Image from "next/image";

const HeroBanner1 = ({
bgImg,
title,
content,
btnName,
btnUrl,
}) => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);
  
  const [mobileToggle, setMobileToggle] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };
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
    <div className="hero_main_area1">
      <div className="hero1" data-background={bgImg}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="main-headding">
                <h1 className="title tg-element-title">{parse(title)}</h1>
                <div className="space16"></div>
                <p>{content}</p>

                <div className="space30"></div>
                <div className="buttons">
                  <Link className="theme-btn1" href={btnUrl}
                  onClick={(e) => handleSmoothScroll(e, 'contacto')}>
                    {btnName}
                      <span>
                        <i className="bi bi-arrow-right"></i>
                  </span></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="hero1-all-images">
                <Image
                  src="/assets/img/logo/Transparent_logo.svg"
                  alt="5-0 Technology - Soluciones Tecnológicas"
                  width={600}  // Más ancho para mejor legibilidad
                  height={120}
                  priority     // Opcional: carga prioritario si está en el header
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner1;