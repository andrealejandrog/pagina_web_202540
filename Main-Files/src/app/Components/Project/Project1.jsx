"use client"
import SectionTitle from "../Common/SectionTitle";
import WatermarkBackground from "../Watermark/WatermarkBackground";


const Project1 = () => {

  return (
    <WatermarkBackground
      opacity={0.05}
      size={{ base: "80% auto", md: "65% auto", lg: "35% auto" }}
      id="diferenciador"
      className="project sp"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <SectionTitle
                SubTitle="5.0 Technology"
                Title="Una Palabra: Diferentes"
              ></SectionTitle>
            </div>
          </div>
        </div>

        <div className="space30"></div>
        <div className="row">
          <p>Somos más que un proveedor, somos tu aliado estratégico. Contamos con un equipo de expertos apasionados por la excelencia, comprometidos en ofrecer soluciones innovadoras y una experiencia única. Nos involucramos en cada proyecto con la misión de superar expectativas, garantizando resultados óptimos que realmente impulsen tu negocio.</p>
        </div>
      </div>
    </WatermarkBackground>
  );
};

export default Project1;