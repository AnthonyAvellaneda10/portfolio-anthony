import { ArrowRight, MessageCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { RiMailSendLine, RiSendPlaneLine } from "react-icons/ri";
import ContactForm from "../form/ContactForm";

export default function Contact() {

  return (
    <>
      <h2 className="section__title">Contacto</h2>
      <span className="section__subtitle">💬📞</span>

      <div className="contact__container container__section grid section__border">
        <div className="contact__content">
          <h3 className="contact__title">
            <MessageCircle className="h-5 w-5" /> Déjame un mensaje
          </h3>

          <div className="contact__info">
            <div className="contact__card">
              {/* <i className="bx bxl-linkedin-square contact__card-icon"></i> */}
              <span className="flex justify-center">
                  <FaLinkedin className="contact__card-icon h-6 w-6" />
              </span>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">
                Anthony Avellaneda Paitán
              </span>

              <a
                href="https://www.linkedin.com/in/anthonyavellanedapaitán/"
                target="_blank"
                className="contact__button"
              >
                Escríbeme{" "}
                <ArrowRight className="contact__button-icon h-3 w-3" />
              </a>
            </div>

            <div className="contact__card">
              <span className="flex justify-center">
                  <RiMailSendLine className="contact__card-icon h-6 w-6" />
              </span>
              <h3 className="contact__card-title">Email</h3>

              <a
                href="mailto:anthony.avellaneda.p@uni.pe"
                target="_blank"
                className="contact__button"
              >
                Escríbeme{" "}
                <ArrowRight className="contact__button-icon h-3 w-3" />
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <span className="flex justify-center">
                  <ImWhatsapp className="contact__card-icon h-6 w-6" />
              </span>
              <h3 className="contact__card-title">Whatsapp</h3>

              <a
                href="https://api.whatsapp.com/send?phone=51923946801&text=Hola%20Anthony%2C%20me%20intereso%20mucho%20la%20p%C3%A1gina%20de%20tu%20portafolio%2C%20quisiera%20conversar%20contigo%20%F0%9F%98%80"
                target="_blank"
                className="contact__button"
              >
                Escríbeme{" "}
                <ArrowRight className="contact__button-icon h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
          <RiSendPlaneLine className="h-5 w-5" /> Envíame un mensaje
          </h3>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
