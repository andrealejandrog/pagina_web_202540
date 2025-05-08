"use client"
import { useTranslations } from "@/app/hooks/useTranslations";
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";
import WatermarkBackground from "../Watermark/WatermarkBackground";


const Project1 = () => {
  const { t } = useTranslations();

  return (
    <WatermarkBackground
      opacity={0.05}
      size={{ base: "80% auto", md: "65% auto", lg: "35% auto" }}
      id="diferenciador"
      className="project sp"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <SectionTitle
                SubTitle={t('project.subTitle')}
                Title={t('project.title')}
              ></SectionTitle>
            </div>
          </div>
        </div>

        <div className="space30"></div>
        <div className="row">
          <p>{t('project.propuesta')}</p>
        </div>
        <div className="space30"></div>
        <Image
          src={t('project.mainImage')}
          alt="Proceso 5.0 Technology"
          width={800}
          height={533}
          quality={100}
          // className="solution-image img-fluid rounded"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </WatermarkBackground>
  );
};

export default Project1;