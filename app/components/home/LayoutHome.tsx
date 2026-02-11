"use client";

import Image from "next/image";
import "./LayoutHome.css";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Typed from "../typed/Typed";
import { useTranslations } from "next-intl";

export default function LayoutHome() {
  const t = useTranslations("Home");

  return (
    <div className="home_container container__section section__border header__home">
      <div className="content__home">
        <span className="blur"></span>
        <span className="blur"></span>
        <Typed />
        <span>
          {t("description").split("🛡️")[0]}🛡️
        </span>
        <span>
          {t("description").split("🛡️")[1]}
        </span>

        <div className="text-center mt-32">
          <a
            href={t("cvUrl")}
            target="_blank"
            className="button"
          >
            <div className="download">
              {t("downloadCV")}
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
                fetchPriority="high"
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
