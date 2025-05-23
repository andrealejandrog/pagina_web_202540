import Image from "next/image";
import SectionTitle from "../Common/SectionTitle"; // Asumo que este es tu componente para el título principal de la sección

const About1 = ({ subTitle, Title, featurelist }) => {
  return (
    <div className="about1 sp" id="soluciones">
      <div className="container">
        {/* Título Principal de la Sección "About1" */}
        <div className="row justify-content-center">
          <div className="col-lg-12 m-auto text-center">
            <div className="heading1"> {/* Usa tus estilos existentes para el título principal */}
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
              className="unified-category-card" // Nueva clase para la tarjeta de categoría
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* Título de la Categoría */}
              <h3 className="category-card-title text-center">
                {/* Puedes agregar un ícono si lo deseas, similar a tu clase .category-icon */}
                {/* <span className="category-icon-main">●</span> */}
                {category.title}
              </h3>
              
              {/* Contenido de la tarjeta: textos a la izquierda, imágenes a la derecha (en desktop) */}
              <div className="category-card-content-area">
                {/* Columna de Textos */}
                <div className="items-text-column">
                  <ul className="items-text-list">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="item-text-entry">
                        <span className="category-icon-main">●</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Columna de Imágenes */}
                {/* Solo renderizar la galería si hay al menos una imagen en la categoría */}
                {category.items.some(item => item.image) && (
                  <div className="images-gallery-column">
                    {category.items.map((item, itemIndex) => (
                      item.image && (
                        <div key={itemIndex} className="gallery-image-wrapper">
                          <Image
                            src={item.image}
                            alt={item.text || `Imagen de ${category.title} ${itemIndex + 1}`}
                            // Ajusta width/height para el tamaño base deseado en la galería.
                            // Next/Image usa esto para la relación de aspecto y optimización.
                            // El CSS controlará el tamaño final.
                            width={800} 
                            height={533}
                            quality={100} // Buena calidad para galería
                            className="gallery-image" // Clase para estilizar la imagen
                            // style={{ objectFit: 'cover' }} // objectFit se puede aplicar vía CSS
                          />
                        </div>
                      )
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