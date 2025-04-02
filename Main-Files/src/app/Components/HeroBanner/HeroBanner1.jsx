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

  const handelClick = () => {
  setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
  setToggle(!toggle);
  };
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
                  {/* <span className="span" data-aos="zoom-in-left" data-aos-duration="700"> */}
                  {/* <Image src="/assets/img/icons/span1.png" alt="img" width={18} height={16}   />
                     {subTitle} */}
                  {/* <Image src="/assets/img/icons/span1.png" alt="img" width={18} height={16}   /> */}
                  {/* <Image
                      src="/assets/img/icons/Logo_symbol.svg"
                      alt="5-0 Technology - Soluciones Tecnológicas"
                      width={50}  // Más ancho para mejor legibilidad
                      height={10}
                      priority     // Opcional: carga prioritario si está en el header
                  /> */}
                     {/* {subTitle}
                  </span> */}
                  <h1 className="title tg-element-title">{parse(title)}</h1>
                  <div className="space16"></div>
                  <p>{content}</p>

                  <div className="space30"></div>
                  <div className="buttons">
                    <Link className="theme-btn1" href={btnUrl}>{btnName} <span><i className="bi bi-arrow-right"></i>
                    </span></Link>
                    {/* <span onClick={handelClick} className="play-btn"><span><i className="bi bi-play"></i>
                    </span> Watch Demo Video</span> */}
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