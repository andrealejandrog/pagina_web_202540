import Image from "next/image";
import { useTranslations } from "../../hooks/useTranslations";

const ContactInfo1 = () => {
    const { t } = useTranslations();
    return (
        <div>
            <div className="space100"></div>
        <div className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-boxs">
                            <div className="heading1">
                                {/* <h2>Contact Information</h2> */}
                                <h2>{t('contactinfo.title')}</h2>
                                <div className="space16"></div>
                                <p>{t('contactinfo.subTitle')}</p>
                            </div>
                            <div className="contact-box">
                                <div className="icon">
                                <Image src="/assets/img/icons/contact-page-icon1.png" alt="img" width={40} height={38}   />
                                </div>
                                <div className="heading">
                                    <h5>{t('contactinfo.contact_text')}</h5>
                                    <a href="tel:+502 3758-0290" className="text">+502 3758-0290</a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                <Image src="/assets/img/icons/contact-page-icon2.png" alt="img" width={34} height={32}   />
                                </div>
                                <div className="heading">
                                    <h5>{t('contactinfo.email_text')}</h5>
                                    <a href="info@50-technology.com" className="text">info@50-technology.com</a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                <Image src="/assets/img/icons/contact-page-icon3.png" alt="img" width={32} height={32}   />
                                </div>
                                <div className="heading">
                                    <h5>{t('contactinfo.ubication')}</h5>
                                    <a href="tel:(124)555-6565" className="text">Guatemala: Condado El Naranjo 23 Calle 14-58 zona 4 Mixco Guatemala. <br/> US: 306 East 17th St, Lumberton, NC 28358.</a>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form-details">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder={t('contactinfo.placeholders.first_name')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder={t('contactinfo.placeholders.last_name')} />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="email" placeholder={t('contactinfo.placeholders.email')} />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="number" placeholder={t('contactinfo.placeholders.phone')}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <input type="text" placeholder={t('contactinfo.placeholders.subject')} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <textarea cols="30" rows="5" placeholder={t('contactinfo.placeholders.message')}></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button className="theme-btn1">{t('contactinfo.button')} <span><i className="bi bi-arrow-right"></i></span></button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    );
};

export default ContactInfo1;