"use client"
import { useEffect } from "react"; // useState fue removido ya que setMobileToggle no se usaba activamente
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { useTranslations } from "@/app/hooks/useTranslations";

const HeroBanner1 = () => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);
  
  const { t } = useTranslations();

  return (
    <div className="hero_main_area1">
      {/* El div .hero1 ahora actuará como el contenedor principal con fondo de video */}
      <div className="hero1 hero-video-bg">
        
        {/* 1. Video como Fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-background-video"
          // poster="/assets/img/fallback-poster.jpg" // Opcional: Un poster mientras carga el video
        >
          <source
            src="/assets/videos/herobanner/Video_invertido.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta la etiqueta de video.
        </video>

        {/* 2. Opcional: Capa semi-transparente (Scrim) para mejorar legibilidad del texto */}
        <div className="hero-scrim"></div>

        {/* 3. Contenedor para el contenido superpuesto */}
        <div className="hero-content-container">
          <div className="container">
            {/* Fila para posicionar el texto a la derecha en pantallas grandes */}
            <div className="row justify-content-lg-start align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-10 col-12"> {/* Ajusta el ancho de la columna de texto */}
                <div className="main-headding hero-text-content">
                  <h1 className="title tg-element-title">{t('home.heroBanner.title')}</h1>
                  <p>{t('home.heroBanner.content')}</p>
                  {/* Aquí podrías añadir botones u otros elementos si es necesario */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroBanner1;