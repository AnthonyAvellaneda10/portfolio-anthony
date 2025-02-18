import Image from "next/image";
import Link from "next/link";
import "./LayoutHome.css";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { Mail, MapPin } from "lucide-react";
import { IoBasketballOutline, IoFootballOutline } from "react-icons/io5";
import { TbSwimming } from "react-icons/tb";
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

        <div className="container__info__description">
          <div>
            <h1 className="home__info-title">CONTACTO</h1>
            <p className="home__info-description">
              <span className="flex justify-center">
                <MapPin className="m-[5px] h-4 w-4" /> Lima, Perú
              </span>{" "}
              <br />
              <Link
                href="mailto:anthony.avellaneda.p@uni.pe"
                target="_blank"
                className="api-gmail transition duration-300"
              >
                <Mail className="m-[5px] h-4 w-4" />
                anthony.avellaneda.p@uni.pe
              </Link>
            </p>
          </div>
          <div>
            <h1 className="home__info-title">PASATIEMPOS</h1>
            <p className="home__info-numbers">
              <span className="flex items-center gap-1">
                <IoFootballOutline />
                Fútbol
              </span>
            </p>
            <p className="home__info-numbers">
              <span className="flex items-center gap-1">
              <TbSwimming />
                Natación
              </span>
            </p>
            <p className="home__info-numbers">
              <span className="flex items-center gap-1">
              <IoBasketballOutline />
                Basket
              </span>
            </p>
          </div>
        </div>
        <div className="text-center">
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
                width={900} // Ancho en píxeles
                height={1200} // Alto en píxeles
                style={{ width: "100%", height: "auto" }} // Estilo responsive
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
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=51923946801&text=Hola%20Anthony%2C%20me%20intereso%20mucho%20la%20p%C3%A1gina%20de%20tu%20portafolio%2C%20quisiera%20conversar%20contigo%20%F0%9F%98%80"
                target="_blank"
                className="home__social-link"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
