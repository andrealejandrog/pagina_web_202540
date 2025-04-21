import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "../../hooks/useTranslations"; // Importar hook de traducciones

const Choose1 = () => {
  const { t } = useTranslations();

  return (
    <div className="work sp" id='proceso'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading1">
              <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                <SectionTitle
                  SubTitle={t('choose.subTitle')}
                  Title={t('choose.title')}
                />
              </span>
              <div className="space16"></div>
              {t('choose.processes').map((process, i) => (
                <div key={i} className="process-category" data-aos="fade-right" data-aos-duration="700">
                  <div className="process-header">
                    <div className="icon">
                      <Image 
                        src={process.img} 
                        alt={process.title} 
                        width={24} 
                        height={20} 
                      />
                    </div>
                    <h4>{process.title}</h4>
                  </div>
                  <ul className="process-items">
                    {process.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span className="process-icon">o</span> 
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="space16"></div>
                </div>
              ))}
            </div>
            <div className="space30"></div>
          </div>

          <div className="col-lg-6">
            <div className="work-images">
              <Image
                src={t('choose.mainImage')}
                alt="Proceso 5.0 Technology"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose1;