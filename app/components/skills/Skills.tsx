"use client";

import Image from "next/image";
import "./Skills.css";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaDatabase, FaDesktop, FaTools } from "react-icons/fa";
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
            {t("frontend")}
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
            {t("backend")}
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
                  src="/skills/flask-light.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">Flask</h3>
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
                  src="/skills/nestjs.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">NestJS</h3>
            </div>
          </div>
        </div>

        {/* <!--==================== SKILLS 3 ====================--> */}
        <div className="skills__content">
          <h3 className="skills__title">
            <FaDatabase />
            {t("database")}
          </h3>

          <div className="skills__info">
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
                  src="/svg/oracle.svg"
                  alt="skills image"
                  width={45} // Ancho en píxeles
                  height={35} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "45px", height: "35px" }}
                />
              </div>

              <h3 className="skills__name">Oracle</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/svg/mariadb.svg"
                  alt="skills image"
                  width={52} // Ancho en píxeles
                  height={35} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "52px", height: "35px" }}
                />
              </div>

              <h3 className="skills__name">MariaDB</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/svg/mysql-icon-light.svg"
                  alt="skills image"
                  width={35} // Ancho en píxeles
                  height={35} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "35px", height: "35px" }}
                />
              </div>

              <h3 className="skills__name">MySQL</h3>
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

        {/* <!--==================== SKILLS 4 ====================--> */}
        <div className="skills__content">
          <h3 className="skills__title">
            <FaTools />
            {t("tools")}
          </h3>

          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/aws_light.svg"
                  alt="skills image"
                  width={50} // Ancho en píxeles
                  height={30} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "50px", height: "30px" }}
                />
              </div>

              <h3 className="skills__name">AWS</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/google-cloud.svg"
                  alt="skills image"
                  width={45} // Ancho en píxeles
                  height={35} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "45px", height: "35px" }}
                />
              </div>

              <h3 className="skills__name">GCP</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/docker.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={41} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "41px" }}
                />
              </div>

              <h3 className="skills__name">Docker</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/git.svg"
                  alt="skills image"
                  width={40} // Ancho en píxeles
                  height={40} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>

              <h3 className="skills__name">Git</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/skills/postman.svg"
                  alt="skills image"
                  width={44} // Ancho en píxeles
                  height={44} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "44px", height: "44px" }}
                />
              </div>

              <h3 className="skills__name">Postman</h3>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <Image
                  src="/svg/swagger.svg"
                  alt="skills image"
                  width={44} // Ancho en píxeles
                  height={44} // Alto en píxeles
                  loading="lazy"
                  style={{ width: "44px", height: "44px" }}
                />
              </div>

              <h3 className="skills__name">Swagger</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
