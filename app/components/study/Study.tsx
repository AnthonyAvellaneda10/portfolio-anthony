import Image from "next/image";
import "./Study.css";

export default function Study() {
  return (
    <div className="container__section  section__border">
      <h2 className="section__title">Mis Estudios</h2>
      <span className="section__subtitle">UNI</span>

      <div className="about__container studies container__section grid">
        <div>
          <h3 className="home__info-title">CENTRO DE ESTUDIOS</h3>

          <p className="home__info-description">
            Universidad Nacional de Ingeniería (UNI)
          </p>
        </div>

        <div>
          <h3 className="home__info-title">CARRERA</h3>

          <p className="home__info-description">Ingeniería de Sistemas</p>
        </div>

        <div>
          <h3 className="home__info-title">ORDEN DE MÉRITO</h3>

          <p className="home__info-description">Décimo Superior</p>
        </div>

        <div>
          <h3 className="home__info-title">CRÉDITOS ACUMULADOS</h3>

          <p className="home__info-description">216</p>
        </div>

        <div>
          <h3 className="home__info-title">SITUACIÓN</h3>

          <p className="home__info-description cycle-info">Egresado</p>
        </div>

        <div>
          <h3 className="home__info-title">TIEMPO</h3>

          <p className="home__info-description">2020 - 2024</p>
        </div>
      </div>
    </div>
  );
}
