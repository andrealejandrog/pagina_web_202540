import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const About1 = ({ subTitle, Title, featurelist }) => {
  return (
    <div className="about1 sp" id="soluciones">
      <div className="container">
        {/* Título */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="heading1">
              <span className="span" data-aos="zoom-in">
                <SectionTitle SubTitle={subTitle} Title={Title} />
              </span>
            </div>
          </div>
        </div>

        {/* Items - Nueva estructura */}
        <div className="solutions-grid">
          {featurelist?.map((category, index) => (
            <div key={index} className="category-section">
              <h3 className="category-title text-center mb-5">
                <span className="category-icon">●</span> {category.title}
              </h3>
              
              <div className="row">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="col-lg-6 mb-2"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <div className="solution-card h-100">
                      <div className="row align-items-center h-100">
                        {/* Texto - Columna izquierda */}
                        <div className="col-lg-12 order-lg-2 order-2">
                          <div className="solution-content p-4">
                            <h4 className="solution-title mb-4">{item.text}</h4>
                          </div>
                        </div>
                        
                        {/* Imagen - Columna derecha */}
                        <div className="col-lg-12 order-lg-1 order-1">
                          {item.image && (
                            <div className="solution-image-wrapper">
                              <Image
                                src={item.image}
                                alt={item.text}
                                width={800}
                                height={533}
                                quality={100}
                                className="solution-image img-fluid rounded"
                                style={{
                                  objectFit: 'cover',
                                  width: '100%',
                                  height: '100%',
                                  minHeight: '300px'
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About1;