import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const About1 = ({ subTitle, Title, featurelist }) => {
  return (
    <div className="about1 sp-new-layout" id="soluciones"> {/* Nueva clase para el nuevo layout */}
      <div className="container">
        {/* Título Principal de la Sección General "About1" */}
        <div className="row justify-content-center">
          <div className="col-lg-12 m-auto text-center">
            <div className="heading1">
              <span className="span" data-aos="zoom-in">
                <SectionTitle SubTitle={subTitle} Title={Title} />
              </span>
            </div>
          </div>
        </div>
        
        {/* Iterar sobre cada categoría para el nuevo diseño */}
        {featurelist?.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-section-new" data-aos="fade-up">
            
            {/* Fila 1: Título de la Categoría */}
            <div className="row">
              <div className="col-12">
                <h2 className="category-title-new text-center">{category.title}</h2>
              </div>
            </div>

            {/* Fila 2: Galería de Imágenes Horizontales */}
            {category.galleryImages && category.galleryImages.length > 0 && (
              <div className="row category-image-gallery-row justify-content-center">
                {category.galleryImages.map((imageSrc, imgIndex) => (
                  // Ajusta col-md-4 para 3 imágenes, col-md-6 para 2, etc.
                  <div key={imgIndex} className="col-md-4 category-gallery-image-item">
                    <Image
                      src={imageSrc}
                      alt={`Galería de ${category.title} ${imgIndex + 1}`}
                      width={600} // Ajusta según el aspect ratio de tus imágenes de galería
                      height={400}
                      quality={90}
                      className="img-fluid category-gallery-img" // img-fluid de Bootstrap para responsive
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Fila 3: Lista de Servicios/Items con Iconos */}
            {category.items && category.items.length > 0 && (
              <div className="row category-services-row">
                {category.items.map((item, itemIndex) => (
                  // Ajusta col-md-3 para 4 servicios por fila, col-md-4 para 3, etc.
                  <div key={itemIndex} className="col-6 col-md-4 col-lg-3 service-item-new mb-4">
                    {item.icon && (
                      <div className="service-item-icon-wrapper">
                        <i className={item.icon}></i>
                      </div>
                    )}
                    <p className="service-item-text">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
            
            {/* Espaciador entre categorías si no es la última */}
            {categoryIndex < featurelist.length - 1 && <div className="category-spacer"></div>}

          </div>
        ))}
      </div>
    </div>
  );
};

export default About1;