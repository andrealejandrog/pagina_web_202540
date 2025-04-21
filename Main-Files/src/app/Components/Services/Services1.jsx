"use client";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import WatermarkBackground from "../Watermark/WatermarkBackground";
import { useTranslations } from "../../hooks/useTranslations";

const Services1 = () => {
  const { t } = useTranslations();

  return (
    <WatermarkBackground
      opacity={0.05}
      size={{ base: "50% auto", md: "75% auto", lg: "75% auto" }}
      id="impacto"
      className="service sp"
    >
      <div className="container">
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

        {t('services.items').map((category, i) => (
          <div 
            key={i} 
            className="row align-items-center mb-5" 
            data-aos="zoom-in-up" 
            data-aos-duration="700"
          >
            <div className={`col-md-6 ${i % 2 === 0 ? 'order-md-2' : ''}`}>
              <div className="single-box">
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

            <div className={`col-md-6 ${i % 2 === 0 ? 'order-md-1' : ''}`}>
              <div className="icon-container text-center">
                <Image
                  src={category.icon} // Las imágenes permanecen igual
                  alt={category.title}
                  width={200}
                  height={200}
                  className="img-fluid"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%'
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </WatermarkBackground>
  );
};

export default Services1;