import { useTranslations } from "@/app/hooks/useTranslations";

const Cta1 = () => {
  const { t } = useTranslations();
    return (
        <div className="cta" id = 'contacto'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="heading1-w">
                  <h2 className="title tg-element-title">
                    {t('cta1.title')}
                    </h2>
                  <div className="space16"></div>
                  <p data-aos="fade-right" data-aos-duration="700" >
                    {t('cta1.propuesta')}
                    </p>
                </div>
              </div>

              <div className="col-lg-5">
              </div>
            </div>
          </div>
        </div>

    );
};

export default Cta1;