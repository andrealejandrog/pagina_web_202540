import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Award1 from '../Components/Award/Award1';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Choose1 from '../Components/Choose/Choose1';
import Project1 from '../Components/Project/Project1';
import Pricing1 from '../Components/Pricing/Pricing1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Blog1 from '../Components/Blog/Blog1';
import Cta1 from '../Components/Cta/Cta1';

const Home = () => {
    return (
        <div>
            <HeroBanner1
                bgImg="/assets/img/bg/hero1-bg.png"
                subTitle="5-0technology"
                title="Innovamos con propósito, transformamos con tecnología."
                content="Transforma la seguridad y productividad de tu empresa con nuestras soluciones tecnológicas innovadoras."
                btnName="Contáctanos"
                btnUrl="#contacto"
                image1="/assets/img/hero/hero1-image1.png"
                image2="/assets/img/hero/hero1-image2.png"
                shapeImage1="/assets/img/hero/hero1-image3.png"
                shapeiamge2="/assets/img/hero/hero1-image4.png"
            ></HeroBanner1>
            {/* <Award1></Award1> */}
            {/* Seccion de Soluciones  */}
            <About1
                image1="/assets/img/about/about1-img1.png"
                image2="/assets/img/about/about1-img2.png"
                supIcon="/assets/img/icons/about1-shape-icon.png"
                supCon="5-0technology"
                subTitle="Sobre nosotros"
                Title="Tecnología y Seguridad a la Medida de tu Negocio"
                // content="TechXen pioneering force in the realm of technology and IT solutions, dedicated to revolutionising the way businesses thrive in the digital age. Our approach is rooted in collaboration, transparency, and a relentless pursuit of excellence. We believe that by staying ahead of the curve and embracing change, we can help our clients stay ahead of  competition."
                featurelist={[
                  {
                    title: "Seguridad Electrónica y automatización",
                    items: [
                      {
                        text: "Instalación de cableado estructurado",
                        image: "/assets/img/icons/Cableado_estructurado_op1.svg"
                      },
                      {
                        text: "Sistemas de CCTV, alarmas y control de acceso",
                        image: "/assets/img/icons/Cctv.svg"
                      },
                      {
                        text: "Centros de monitoreo 24/7",
                        image: "/assets/img/icons/Monitoreo_24_7.svg"
                      },
                      {
                        text: "Automatización de casas y oficinas",
                        image: "/assets/img/icons/Automatizacion.svg"
                      }
                    ]
                  },
                  {
                    title: "Soluciones tecnológicas",
                    items: [
                      {
                        text: "Desarrollo de software para gestión operativa",
                        image: "/assets/img/icons/Desarrollo_software.svg"
                      },
                      {
                        text: "Automatización de procesos para eficiencia operativa",
                        image: "/assets/img/icons/Automatizacion_procesos.svg"
                      },
                      {
                        text: "Almacenamiento en la nube seguro y escalable",
                        image: "/assets/img/icons/Almacenamiento_nube.svg"
                      },
                      {
                        text: "Transformación digital y digitalización de documentos",
                        image: "/assets/img/icons/Transformacion_digital.svg"
                      }
                    ]
                  }
              ]}
                btnName="Discover More"
                btnUrl="/about"
            ></About1>
            {/* Seccion de impacto */}
            <Services1></Services1>
             {/* Seccion de Proceso  */}
            <Choose1></Choose1>
            {/* Seccion de Diferenciador */}
            <Project1></Project1>
            {/* <Pricing1></Pricing1> */}
            {/* <Testimonial1></Testimonial1>    */}
            {/* <Blog1></Blog1> */}
            {/* Seccion de Contacto */}
            <Cta1></Cta1>                  
        </div>
    );
};

export default Home;