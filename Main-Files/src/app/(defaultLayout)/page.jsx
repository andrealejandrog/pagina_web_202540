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
        image1="/assets/img/about/about1-img1.png"
        image2="/assets/img/about/about1-img2.png"
        supIcon="/assets/img/icons/about1-shape-icon.png"
        supCon={t('home.heroBanner.subTitle')}
        subTitle={t('home.about.subTitle')}
        Title={t('home.about.title')}
        featurelist={t('home.about.featureList').map((section, index) => ({
          ...section,
          items: section.items.map((item, itemIndex) => ({
            text: item.text,
            image: `/assets/img/icons/${index === 0 ? 
              ['Cableado_estructurado_op1.svg', 'Cctv.svg', 'Monitoreo_24_7.svg', 'Automatizacion.svg'][itemIndex] : 
              ['Desarrollo_software.svg', 'Automatizacion_procesos.svg', 'Almacenamiento_nube.svg', 'Transformacion_digital.svg'][itemIndex]}`
          }))
        }))}
        btnName={t('home.about.btnName')}
        btnUrl={t('home.about.btnUrl')}
      />
      <Services1 />
      <Choose1 />
      <Project1 />
      <Cta1 />
      <ContactInfo1 />
    </div>
  );
};

export default Home;