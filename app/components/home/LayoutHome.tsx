import Image from "next/image";
import "./LayoutHome.css";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Typed from "../typed/Typed";

export default function LayoutHome() {
  return (
    <div className="home_container container__section section__border header__home">
      <div className="content__home">
        <span className="blur"></span>
        <span className="blur"></span>
        <Typed />
        <span>
          🚀 ¡Entusiasta por crear sitios web visualmente impresionantes y
          fáciles de usar 💻🎨!
        </span>
        <span>
          Apasionado con la implementación de sistemas en el backend para
          garantizar la seguridad de los datos 🛡️.
        </span>
        <span>
          Me encanta aprender y mejorar mis habilidades en el área de la
          programación 🌟.
        </span>

        <div className="text-center mt-32">
          <a
            href="https://drive.google.com/file/d/18Fj5AnpRb_5RwN3GBHTDtqHfcQg78_8S/view"
            target="_blank"
            className="button"
          >
            <div className="download">
              Descargar CV
              <Image 
              src="/icons/cv_logo.webp" 
              alt="Logo de descargar CV" 
              width={35}
              height={30}
              priority
              />
            </div>
          </a>
        </div>
      </div>
      <div className="image animate__animated animate__fadeInRightBig">
        <div className="home__data grid">
          <div className="home__blob grid">
            <div className="home__perfil" data-tilt>
              <Image
                src="/profile/perfil_anthony.avif"
                alt="Perfil de Anthony Avellaneda Paitán"
                width={340} // Ancho en píxeles
                height={453} // Alto en píxeles
                style={{ width: "340px", height: "auto" }} // Estilo responsive
                priority
              />
            </div>

            <Image
              src="/icons/shape-wawes.svg"
              alt=""
              className="home__shape-wawes"
              width={200} // Ancho en píxeles
              height={140} // Alto en píxeles
              priority
            />
            <Image
              src="/icons/shape-circle.svg"
              alt=""
              className="home__shape-circle"
              width={300} // Ancho en píxeles
              height={300} // Alto en píxeles
              priority
            />
          </div>

          <ul className="home__social">
            <li>
              <a
                href="https://www.linkedin.com/in/AnthonyAvellanedaPaitán/"
                target="_blank"
                className="home__social-link"
                aria-label="LinkedIn"
              >
                <RiLinkedinBoxLine />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/AnthonyAvellaneda10"
                target="_blank"
                className="home__social-link"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
