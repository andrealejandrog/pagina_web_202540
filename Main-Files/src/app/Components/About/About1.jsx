import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const About1 = ({subTitle, Title, featurelist }) => {
    return (
        <div className="about1 sp" id="soluciones">
            <div className="container">
                {/* Título con el mismo estilo que Choose1 */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="heading1">
                          <span className="span" data-aos="zoom-in">
                            <SectionTitle
                                SubTitle={subTitle}
                                Title={Title}
                            />
                          </span>
                        </div>
                    </div>
                </div>

                {/* Items en pares */}
                <div className="solutions-grid">
                    {featurelist?.map((category, index) => (
                        <div key={index} className="category-section">
                            <h3 className="category-title text-center mb-4">
                                <span className="category-icon">●</span> {category.title}
                            </h3>
                            
                            <div className="row">
                                {category.items.map((item, itemIndex) => (
                                    <div 
                                        key={itemIndex} 
                                        className={`col-md-6 ${itemIndex % 2 === 0 ? 'pr-md-3' : 'pl-md-3'}`}
                                        data-aos={itemIndex % 2 === 0 ? "fade-right" : "fade-left"}
                                        data-aos-duration="800"
                                    >
                                        <div className="solution-card">
                                          <div className="solution-content">
                                            {/* Imagen con contenedor tipo "icon" */}
                                            {item.image && (
                                              <div className="solution-image-wrapper">
                                                <Image 
                                                  src={item.image}
                                                  alt={item.text}
                                                  width={400}
                                                  height={267}
                                                  quality={100}
                                                  className="solution-image"
                                                  style={{
                                                    objectFit: 'contain',
                                                    width: '100%',
                                                    height: 'auto'
                                                  }}
                                                />
                                              </div>
                                            )}
                                            
                                            <h4 className="solution-title">{item.text}</h4>
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