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
                content="Innovamos con propósito, transformamos con tecnología."
                btnName="Get Started Now"
                btnUrl="/contact"
                image1="/assets/img/hero/hero1-image1.png"
                image2="/assets/img/hero/hero1-image2.png"
                shapeImage1="/assets/img/hero/hero1-image3.png"
                shapeiamge2="/assets/img/hero/hero1-image4.png"
            ></HeroBanner1>
            <Award1></Award1>
            {/* Seccion de Soluciones  */}
            <About1
                image1="/assets/img/about/about1-img1.png"
                image2="/assets/img/about/about1-img2.png"
                supIcon="/assets/img/icons/about1-shape-icon.png"
                supTitle="24/7 Support"
                supCon="5-0technology"
                subTitle="About Our Company"
                Title="Discover Our Story Empowering Business Through Innovation"
                content="TechXen pioneering force in the realm of technology and IT solutions, dedicated to revolutionising the way businesses thrive in the digital age. Our approach is rooted in collaboration, transparency, and a relentless pursuit of excellence. We believe that by staying ahead of the curve and embracing change, we can help our clients stay ahead of  competition."
                featurelist={[
                    "Dramatically re-engineer value added IT system.",
                    "Highlight any unique selling points or differentiators.",
                    "Incorporate visuals such as team photos shots.",
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