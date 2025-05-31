'use client';
import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Choose1 from '../Components/Choose/Choose1';
import Project1 from '../Components/Project/Project1';
import Cta1 from '../Components/Cta/Cta1';
import ContactInfo1 from '../Components/ContactInfo/ContactInfo1';
import { useTranslations } from '../hooks/useTranslations';

const Home = () => {
  const { t } = useTranslations();

  return (
    <div>
      <HeroBanner1
        bgImg="/assets/img/bg/hero1-bg.png"
        subTitle={t('home.heroBanner.subTitle')}
        title={t('home.heroBanner.title')}
        content={t('home.heroBanner.content')}
        btnName={t('home.heroBanner.btnName')}
        btnUrl={t('home.heroBanner.btnUrl')}
        image1="/assets/img/hero/hero1-image1.png"
        image2="/assets/img/hero/hero1-image2.png"
        shapeImage1="/assets/img/hero/hero1-image3.png"
        shapeiamge2="/assets/img/hero/hero1-image4.png"
      />
      <About1
        supCon={t('home.heroBanner.subTitle')}
        subTitle={t('home.about.subTitle')}
        Title={t('home.about.title')}
        // En tu page.jsx, al construir featurelist
        featurelist={t('home.about.featureList').map((section, categoryIndex) => {
          let galleryImagesForThisCategory = [];
          // Define tus galleryImages como antes...
          if (categoryIndex === 0) {
            galleryImagesForThisCategory = [
              '/assets/img/icons/Control_de_acceso.webp', // Reemplaza con tus imágenes de galería
              '/assets/img/icons/Centro_de_monitoreo.webp',
              '/assets/img/icons/Automation_2.webp'
            ];
          } else if (categoryIndex === 1) {
            galleryImagesForThisCategory = [
              '/assets/img/icons/Desarrollo_de_software.webp',
              '/assets/img/icons/Digital_transformation.webp'
            ];
          }
          // Define los iconos para cada item de texto específico de esta categoría
          // Esto es un ejemplo, necesitas tus propias rutas de iconos
          const itemIconsForCategory0 = [
            'bi bi-camera-video',    // Icono para "Sistemas de CCTV..."
            'bi bi-display', // Icono para "Centros de monitoreo..."
            'bi bi-house-gear',// Icono para "Automatización de casas..."
            'bi bi-ethernet'    // Icono para "Instalación de cableado..."
          ];
          const itemIconsForCategory1 = [
            'bi bi-terminal', // Icono para "Desarrollo de software..."
            'bi bi-cloud',    // Icono para "Almacenamiento en la nube..."
            'bi bi-diagram-3',  // Icono para "Automatización de procesos..."
            'bi bi-file-earmark-arrow-up'   // Icono para "Transformación digital..."
          ];

          const currentItemIcons = categoryIndex === 0 ? itemIconsForCategory0 : itemIconsForCategory1;

          return {
            title: section.title,
            items: section.items.map((item, itemIndex) => ({
              text: item.text,
              // NUEVO: Asignar un icono a cada item de texto
              icon: currentItemIcons[itemIndex] || '/assets/img/icons/default_service_icon.svg' // Un icono por defecto si no hay suficientes
            })),
            galleryImages: galleryImagesForThisCategory
          };
        })}
        btnName={t('home.about.btnName')}
        btnUrl={t('home.about.btnUrl')}
      />
      <Services1
      image1='/assets/img/icons/Impacto.webp'
      />
      <Choose1 />
      <Project1 />
      <Cta1 />
      <ContactInfo1 />
    </div>
  );
};

export default Home;