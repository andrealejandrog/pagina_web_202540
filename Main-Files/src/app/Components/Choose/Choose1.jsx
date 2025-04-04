import Link from 'next/link';
import data from '../../Data/Home1/choose1.json';
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";

const Choose1 = () => {
    const mainContent = {
        subTitle:'Paso a paso',
        title:'Así Creamos Soluciones Eficientes y Seguras',
        Content:'Nuestro proceso metódico garantiza resultados óptimos para cada proyecto',
        btnName:'Descubre Más',
        btnUrl:'#contacto',
        img1:'/assets/img/work/Vertical_logo.svg',
    }

    return (
        <div className="work sp" id='proceso'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                    <SectionTitle
                        SubTitle={mainContent.subTitle}
                        Title={mainContent.title}
                    />
                  </span>
                  <div className="space16"></div>
                  {data.map((process, i) => (
                    <div key={i} className="process-category" data-aos="fade-right" data-aos-duration="700">
                      <div className="process-header">
                        <div className="icon">
                          <Image src={process.img} alt={process.title} width={24} height={20} />
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
                src={mainContent.img1}
                alt="img"
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