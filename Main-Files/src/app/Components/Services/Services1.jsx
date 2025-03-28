import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/Home1/impacto.json';
import Image from "next/image";

const Services1 = () => {
    return (
        <div className="service sp" id='impacto'>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="5-0techonology"
                        Title="Protege, Optimiza y Crece"
                    />
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
              {data.map((category, i) => (
                <div key={i} className={category.addClass} data-aos="zoom-in-up" data-aos-duration="700">
                  <div className="single-box">
                    <div className="icon">
                      <Image src={category.icon} alt={category.title} width={39} height={40} />
                    </div>
                    <div className="heading1">
                      <h4>{category.title}</h4>
                      <p className="category-desc">{category.desc}</p>
                      
                      <ul className="service-items-list">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <span className="service-bullet">●</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
};

export default Services1;