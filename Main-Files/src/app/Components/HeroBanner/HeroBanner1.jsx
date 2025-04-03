"use client"
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";
import Image from "next/image";

const HeroBanner1 = ({bgImg,subTitle,title,content,btnName,btnUrl,image1,image2,shapeImage1,shapeiamge2}) => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClose = () => {
  setIframeSrc('about:blank');
  setToggle(!toggle);
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
                    <Link className="theme-btn1" href={btnUrl}>{btnName} <span><i className="bi bi-arrow-right"></i>
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
        <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handelClose}        
      ></VideoModal>
      </div>
    );
};

export default HeroBanner1;