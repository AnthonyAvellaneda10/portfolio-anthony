import Image from "next/image";
import "./Skills.css";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaDesktop } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Mis habilidades favoritas</span>

      <div className="skills__container container__section grid section__border">
        {/* <!--==================== SKILLS 1 ====================--> */}
        <div className="skills__content">
          <h3 className="skills__title">
            <PiBracketsCurlyBold className="w-4 h-4" />
            Frontend
          </h3>

          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="skills/html-1.svg"
                  alt="Logo de HTML"
                  width={40} // Ancho en píxeles
                  height={46} // Alto en píxeles
                  loading="lazy"
                />
              </div>

              <h3 className="skills__name">HTML</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/css-3.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">CSS</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/logo-javascript.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">JavaScript</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/typescript.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">Typescript</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/angular-icon-1.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">Angular</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/react-2.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">React</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/tailwind-css-2.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">Tailwind CSS</h3>
            </div>
          </div>
        </div>

        {/* <!--==================== SKILLS 2 ====================--> */}
        <div className="skills__content">
          <h3 className="skills__title">
            <FaDesktop />
            Backend
          </h3>

          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/java_logo.webp" alt="skills image" />
              </div>

              <h3 className="skills__name">Java</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="/skills/python-5.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">Python</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/nodejs_logo.webp" alt="skills image" />
              </div>

              <h3 className="skills__name">Node.js</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/spring-3.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">Spring boot</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/postgresql.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">PostgreSQL</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src="skills/mongodb-icon-1-1.svg" alt="skills image" />
              </div>

              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
