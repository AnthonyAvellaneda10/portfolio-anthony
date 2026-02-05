import "./Footer.css";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  return (
    // <!--==================== FOOTER ====================-->
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Anthony AP</h1>
        <p>{t("role")}</p>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              {t("home")}
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              {t("skills")}
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              {t("projects")}
            </a>
          </li>
        </ul>

        <ul className="footer__social">
          <li>
            <a
              href="https://www.linkedin.com/in/AnthonyAvellanedaPaitán/"
              target="_blank"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <RiLinkedinBoxLine />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/AnthonyAvellaneda10"
              target="_blank"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
          </li>
        </ul>

        <p className="footer__copy">
          &#169;
          {" "}
          <a
            href="https://www.linkedin.com/in/AnthonyAvellanedaPaitán/"
            target="_blank"
            className="linkedin__url transition duration-300 cursor-pointer underline"
          >
            Anthony Avellaneda Paitán
          </a>
          {" "}
          - {t("portfolio")}
          <span className="current-year" id="current-year">
            {" "}{currentYear}
          </span>
          . {t("rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
