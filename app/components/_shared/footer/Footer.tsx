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
              Inicio
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
