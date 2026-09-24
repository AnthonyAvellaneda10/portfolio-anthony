"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { RiMailSendLine, RiSendPlaneLine } from "react-icons/ri";
import ContactForm from "../form/ContactForm";
import { useTranslations } from "next-intl";
import { FiGithub } from "react-icons/fi";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <>
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">💬📞</span>

      <div className="contact__container container__section grid section__border">
        <div className="contact__content">
          <h3 className="contact__title">
            <MessageCircle className="h-5 w-5" /> {t("leaveMessage")}
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
                {t("writeMe")}{" "}
                <ArrowRight className="contact__button-icon h-3 w-3" />
              </a>
            </div>

            <div className="contact__card">
              <span className="flex justify-center">
                <RiMailSendLine className="contact__card-icon h-6 w-6" />
              </span>
              <h3 className="contact__card-title">Email</h3>

              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="contact__button"
              >
                {t("writeMe")}{" "}
                <ArrowRight className="contact__button-icon h-3 w-3" />
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <span className="flex justify-center">
                <FiGithub className="contact__card-icon h-6 w-6" />
              </span>
              <h3 className="contact__card-title">AnthonyAvellaneda10</h3>

              <a
                href={t("whatsappUrl")}
                target="_blank"
                className="contact__button"
              >
                {t("viewProjects")}{" "}
                <ArrowRight className="contact__button-icon h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
            <RiSendPlaneLine className="h-5 w-5" /> {t("sendMessage")}
          </h3>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
