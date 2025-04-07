import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
    return (
        <div className="footer1 _relative" id ='footer'>
        <div className="container">
             <div className="row">
                  <div className="col-lg-6">
                       <div className="single-footer-items footer-logo-area">
                            <div className="footer-logo">
                              <a href="">
                              <Image
                              src="/assets/img/logo/Original_logo.svg"
                              alt="img"
                              width={250}
                              height={50}
                              />
                                </a>
                            </div>
                            <div className="space20"></div>
                            <div className="heading1">
                              <p>Innovamos con propósito, transformamos con tecnología. </p>
                            </div>
                            <ul className="social-icon">
                                 <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                 <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                 <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                 <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            </ul>
                       </div>
                  </div>

                  {/* <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Servicios</h3>

                            <ul className="menu-list">
                                 <li><Link href="/service/service-details">Cloud Computing Solution</Link></li>
                                 <li><Link href="/service/service-details">Cybersecurity & Compliance</Link></li>
                                 <li><Link href="/service/service-details">Software Development</Link></li>
                                 <li><Link href="/service/service-details">It Consulting & Support</Link></li>
                            </ul>
                       </div>
                  </div> */}

                  {/* <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Useful Links</h3>

                            <ul className="menu-list">
                                 <li><Link href="/about">About Us </Link></li>
                                 <li><Link href="/service">Our Services</Link></li>
                                 <li><Link href="/blog">Blog & News</Link></li>
                                 <li><Link href="/project">Project</Link></li>
                                 <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                       </div>
                  </div> */}


                  <div className="col-lg-6">
                       <div className="single-footer-items">
                            <h3>Contactanos</h3>

                            <div className="contact-box">
                              <div className="icon">
                                <Image src="/assets/img/icons/footer1-icon4.png" alt="img" width={30} height={30}   />
                              </div>
                              <div className="pera">
                                <a href="tel:+50241517120">
                                   Guatemala: Condado El Naranjo 23 Calle 14-58 zona 4 Mixco Guatemala.
                                   <br />
                                   <br />
                                   US: 306 East 17th St, Lumberton, NC 28358
                               </a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                              <Image src="/assets/img/icons/footer1-icon2.png" alt="img" width={24} height={24}   />
                              </div>
                              <div className="pera">
                                <a href="tel:+50241517120">+502 4151-7120</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                              <Image src="/assets/img/icons/footer1-icon3.png" alt="img" width={24} height={24}   />
                              </div>
                              <div className="pera">
                                <a href="mailto:info@50-technology.com">info@50-technology.com</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                              <Image src="/assets/img/icons/footer1-icon4.png" alt="img" width={24} height={24}/>                                
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
                         <p>Copyright @2024 50 Tecnology.All Rights Reserved</p>
                    </div>
               </div>
                    <div className="col-md-4">
                         <div className="freepik">
                              <p>Illustrations designed by <Link href="http://www.freepik.es/">Freepik</Link></p>
                         </div>
                    </div>
                    <div className="col-md-4">
                         <div className="coppyright right-area">
                              <a href="#">Terms & Conditions</a>
                              <a href="#">Privacy Policy</a>
                         </div>
                    </div>
               </div>
          </div>
        </div>

      </div>
    );
};

export default Footer1;