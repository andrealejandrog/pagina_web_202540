import Image from "next/image";
import Link from "next/link";

const About1 = ({image1, image2, supIcon, supTitle, supCon, subTitle, Title, content, featurelist, btnName, btnUrl}) => {
    return (
        <div className="about1 sp" id="soluciones">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                    {subTitle}
                  </span>
                  <h2 className="title tg-element-title">{Title}</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="heading2">
                  <div className="space16"></div>
                  <div className="solutions-list" data-aos="fade-left" data-aos-duration="1100">
                    {featurelist?.map((category, index) => (
                      <div key={index} className="solution-category">
                        <h4 className="category-title">
                          <span className="category-icon">●</span> {category.title}
                        </h4>
                        <ul className="category-items">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="solution-item">
                              <span className="item-icon">o</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="space30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default About1;