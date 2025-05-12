"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
// import parse from 'html-react-parser';
import { useTranslations } from "@/app/hooks/useTranslations";
import Link from "next/link";
import Image from "next/image";

import Logo from '@public/assets/img/icons/Transparent_logo.svg' //nuevo path de logo
// import videoBackground from '@public/assets/videos/herobanner/opcion_2.mp4';

const HeroBanner1 = ({
bgImg,
}) => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);
  
  const [setMobileToggle] = useState(false);
  
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
  }

  const { t } = useTranslations();

  ;

  return (
    <div className="hero_main_area1">
      <div className="hero1" /*data-background={bgImg}*/>
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="main-headding pe-lg-4">
                <h1 className="title tg-element-title">{t('home.heroBanner.title')}</h1>
                {/* <div className="space16"></div> */}
                <p>{t('home.heroBanner.content')}</p>
              </div>
            </div>

            <div className="col-lg-7 order-1 order-lg-2 mb-4 mb-lg-0">
              <section className="video-container ratio ratio-16x9">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-fit-cover"
                >
                  <source
                    src="/assets/videos/herobanner/opcion_2.mp4"
                    type="video/mp4"
                  />
                </video>
                {/* Contenido sobre el video */}
              </section>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner1;