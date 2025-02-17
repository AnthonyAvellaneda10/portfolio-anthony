import { FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    // <!--==================== FOOTER ====================-->
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Anthony AP</h1>
        <p>Ingeniero de Sistemas</p>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Habilidades
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Proyectos
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

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=51923946801&text=Hola%20Anthony%2C%20me%20intereso%20mucho%20la%20p%C3%A1gina%20de%20tu%20portafolio%2C%20quisiera%20conversar%20contigo%20%F0%9F%98%80"
              target="_blank"
              className="footer__social-link"
              aria-label="Whatsapp"
            >
              <FaWhatsapp />
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
          - Portafolio
          <span className="current-year" id="current-year">
            {currentYear}
          </span>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
