"use client";

import Image from "next/image";
import "./Skills.css";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaDesktop } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <>
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">🧠⚡</span>

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
                  src="/skills/html-1.svg"
                  alt="Logo de HTML"
                  width={40} // Ancho en píxeles
                  height={46} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "46px" }}
                />
              </div>

              <h3 className="skills__name">HTML</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/css-3.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={46} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "46px" }}
                />
              </div>

              <h3 className="skills__name">CSS</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/logo-javascript.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">JavaScript</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/typescript.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">Typescript</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/svg/angular.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={43} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "43px" }}
                />
              </div>

              <h3 className="skills__name">Angular</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/react-2.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={36} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "36px" }}
                />
              </div>

              <h3 className="skills__name">React</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/nextjs.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={36} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "36px" }}
                />
              </div>

              <h3 className="skills__name">Next.js</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/tailwind-css-2.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={24} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "24px" }}
                />
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
                <Image
                  src="/skills/java_logo.webp"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">Java</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/python-5.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">Python</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/nodejs_logo.webp"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">Node.js</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/svg/express.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">Express.js</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/spring-3.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">Spring boot</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/postgresql.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={41} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "41px" }}
                />
              </div>

              <h3 className="skills__name">PostgreSQL</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/mongodb-icon-1-1.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={64} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "64px" }}
                />
              </div>

              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
