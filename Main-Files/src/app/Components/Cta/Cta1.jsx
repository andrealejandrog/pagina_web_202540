import Link from "next/link";

const Cta1 = () => {
    return (
        <div className="cta" id = 'contacto'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="heading1-w">
                  <h2 className="title tg-element-title">50 Solutions- Innovamos con propósito, transformamos con tecnología." </h2>
                  <div className="space16"></div>
                  <p data-aos="fade-right" data-aos-duration="700" >Transforma la seguridad y productividad de tu empresa con nuestras soluciones tecnológicas innovadoras</p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="buttons">
                  <Link className="cta-btn1" href="/service">Contactanos <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                      </svg>
                    </span></Link>
                  {/* <Link className="cta-btn2" href="/service">Explore Solution <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                      </svg>                   
                    </span></Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

    );
};

export default Cta1;