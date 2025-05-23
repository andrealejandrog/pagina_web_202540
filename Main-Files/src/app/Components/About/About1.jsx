import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const About1 = ({ subTitle, Title, featurelist }) => {
  return (
    <div className="about1 sp" id="soluciones">
      <div className="container">
        {/* Título Principal de la Sección "About1" */}
        <div className="row justify-content-center">
          <div className="col-lg-12 m-auto text-center">
            <div className="heading1">
              <span className="span" data-aos="zoom-in">
                <SectionTitle SubTitle={subTitle} Title={Title} />
              </span>
            </div>
          </div>
        </div>
        
        {/* Contenedor para las nuevas tarjetas de categoría */}
        <div className="category-cards-wrapper">
          {featurelist?.map((category, index) => (
            <div 
              key={index} 
              className="unified-category-card"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* Título de la Categoría */}
              <h3 className="category-card-title text-center">
                {category.title}
              </h3>
              
              {/* Contenido de la tarjeta: textos a la izquierda, imágenes a la derecha (en desktop) */}
              <div className="category-card-content-area">
                {/* Columna de Textos */}
                <div className="items-text-column">
                  <ul className="items-text-list">
                    {/* Iteramos sobre category.items para los textos */}
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="item-text-entry">
                        <span className="category-icon-main">●</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Columna de Imágenes */}
                {/* Iteramos sobre la nueva propiedad category.galleryImages */}
                {category.galleryImages && category.galleryImages.length > 0 && (
                  <div className="images-gallery-column">
                    {category.galleryImages.map((imageSrc, imgIndex) => (
                      <div key={imgIndex} className="gallery-image-wrapper">
                        <Image
                          src={imageSrc}
                          alt={category.title ? `Imagen de ${category.title} ${imgIndex + 1}` : `Imagen de galería ${imgIndex + 1}`}
                          // Ajusta width y height para un tamaño de miniatura adecuado
                          // Estos valores ayudan a Next.js con el aspect ratio y la optimización
                          width={800} 
                          height={533} // Ejemplo para un aspect ratio 4:3
                          quality={90}  // Calidad para la galería
                          className="gallery-image"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About1;