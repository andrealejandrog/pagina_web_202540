import Image from "next/image";

const Footer1 = () => {
    return (
        <div className="footer1 _relative" id ='footer'>
        <div className="container">
             <div className="row">
                  <div className="col-lg-6">
                       <div className="single-footer-items footer-logo-area">
                            <div className="footer-logo">
                              <Image
                              src="/assets/img/logo/Original_logo.svg"
                              alt="img"
                              width={350}
                              height={10}
                              />
                            </div>
                            <div className="heading1">
                              <p>Innovamos con propósito, transformamos con tecnología. </p>
                            </div>
                            <ul className="social-icon">
                                 <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                 <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                 <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                 <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            </ul>
                       </div>
                  </div>
                  <div className="col-lg-6">
                       <div className="single-footer-items">
                            <h3>Contactanos</h3>

                            <div className="contact-box">
                              <div className="icon">
                                <i class="bi bi-geo-alt-fill"></i>
                              </div>
                              <div className="pera">
                                   <p>Guatemala: Condado El Naranjo 23 Calle 14-58 zona 4 Mixco Guatemala.</p>
                              </div>
                            </div>
                            <div className="contact-box">
                              <div className="icon">
                                <i class="bi bi-geo-alt-fill"></i>
                              </div>
                              <div className="pera">
                                   <p>US: 306 East 17th St, Lumberton, NC 28358.</p>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                              {/* <Image src="/assets/img/icons/footer1-icon2.png" alt="img" width={24} height={24}   /> */}
                              <i class="bi bi-telephone-outbound-fill"></i>
                              </div>
                              <div className="pera">
                                <a href="tel:+50237580290">+502 3758-0290</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                              {/* <Image src="/assets/img/icons/footer1-icon3.png" alt="img" width={24} height={24}   /> */}
                              <i class="bi bi-envelope-paper-fill"></i>
                              </div>
                              <div className="pera">
                                <a href="mailto:info@50-technology.com">info@50-technology.com</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                              {/* <Image src="/assets/img/icons/footer1-icon4.png" alt="img" width={24} height={24}/>                                 */}
                              <i class="bi bi-laptop-fill"></i>
                              </div>
                              <div className="pera">
                                <a href="mailto:50-technology.com">50-technology.com</a>
                              </div>
                            </div>

                       </div>
                  </div>

             </div>

             <div className="space40"></div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                    <div className="coppyright">
                         <p>Copyright @2025 5.0 Technology. All Rights Reserved</p>
                    </div>
               </div>
               </div>
          </div>
        </div>

      </div>
    );
};

export default Footer1;