import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "../../hooks/useTranslations"; // Importar hook de traducciones

const Choose1 = () => {
  const { t } = useTranslations();

  return (
    <div className="work sp" id='proceso'>
      <div className="container">
        <div className='col-lg-8 m-auto text-center'>
          <div className="heading1">
            <SectionTitle
              SubTitle={t('choose.subTitle')}
              Title={t('choose.title')}
            />
          </div>
        </div>
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-4 order-lg-1 d-flex flex-column justify-content-center">
            <div className="heading1">
              <div className="space16"></div>
              {t('choose.processes').map((process, i) => (
                <div key={i} className="process-category" data-aos="fade-right" data-aos-duration="700">
                  <div className="process-header">
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
          </div>

          <div className="col-lg-8 order-lg-2 mb-4 mb-lg-0">
            <div className="work-images">
              <Image
                src={t('choose.mainImage')}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose1;