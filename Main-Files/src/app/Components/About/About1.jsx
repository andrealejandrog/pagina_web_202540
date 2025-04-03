import Image from "next/image";

const About1 = ({ image1, image2, supIcon, supTitle, supCon, subTitle, Title, content, featurelist, btnName, btnUrl }) => {
    return (
        <div className="about1 sp" id="soluciones">
            <div className="container">
                {/* Título con el mismo estilo que Choose1 */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="heading1">
                          <span className="span" data-aos="zoom-in">
                            <Image 
                              src="/assets/img/icons/span1.png" 
                              alt="icon" 
                              width={18} 
                              height={16}
                              className="span-icon" // Clase adicional para control específico
                            />
                            {subTitle}
                          </span>
                          <h2 className="title tg-element-title" style={{ position: 'relative' }}>
                            {Title}
                            <span className="title-underline"></span> {/* Línea decorativa */}
                          </h2>
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
                                                <h4 className="solution-title">{item.text}</h4>
                                                {item.image && (
                                                    <div className="solution-image-wrapper">
                                                        <Image 
                                                            src={item.image}
                                                            alt={item.text}
                                                            width={100}
                                                            height={50}
                                                            className="solution-image"
                                                            layout="responsive"
                                                        />
                                                    </div>
                                                )}
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