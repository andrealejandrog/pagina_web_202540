"use client";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import WatermarkBackground from "../Watermark/WatermarkBackground";
import { useTranslations } from "../../hooks/useTranslations";

const Services1 = ({ image1 }) => {
  const { t } = useTranslations();

  return (
    <WatermarkBackground
      opacity={0.05}
      size={{ base: "50% auto", md: "75% auto", lg: "75% auto" }}
      id="impacto"
      className="service sp"
    >
      <div className="container">
        {/* Título */}
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <SectionTitle
                SubTitle={t('services.subTitle')}
                Title={t('services.title')}
              />
            </div>
          </div>
        </div>

        <div className="space30"></div>
        
        {/* Imagen principal */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <div className="service-main-image">
              <Image
                src={image1}
                alt="Impacto de nuestros servicios"
                width={1200}
                height={600}
                className="img-fluid rounded-3"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                  maxHeight: '500px'
                }}
              />
            </div>
          </div>
        </div>

        {/* Contenedor de servicios en pares - Manteniendo clases existentes */}
        <div className="services-items-container">
          <div className="row g-4">
            {t('services.items').map((category, i) => (
              <div 
                key={i} 
                className="col-lg-6" // Cambiado a 6 columnas para crear pares
                data-aos="fade-up" 
                data-aos-duration="700"
              >
                <div className="single-box h-100">
                  <div className="heading1">
                    <h4>{category.title}</h4>
                    <p className="category-desc">{category.desc}</p>
                    <ul className="service-items-list">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <span className="service-bullet">●</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WatermarkBackground>
  );
};

export default Services1;