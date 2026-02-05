"use client";

import "./Study.css";
import { useTranslations } from "next-intl";

export default function Study() {
  const t = useTranslations("Study");

  return (
    <div className="container__section  section__border">
      <h2 className="section__title">{t("uni_short")}</h2>
      <span className="section__subtitle">{t("uni")}</span>

      <div className="about__container studies container__section grid">
        <div>
          <h3 className="home__info-title">{t("center")}</h3>

          <p className="home__info-description">
            {t("uni")}
          </p>
        </div>

        <div>
          <h3 className="home__info-title">{t("career_label")}</h3>

          <p className="home__info-description">{t("career")}</p>
        </div>

        <div>
          <h3 className="home__info-title">{t("merit_label")}</h3>

          <p className="home__info-description">{t("merit")}</p>
        </div>

        <div>
          <h3 className="home__info-title">{t("credits_label")}</h3>

          <p className="home__info-description">216</p>
        </div>

        <div>
          <h3 className="home__info-title">{t("situation_label")}</h3>

          <p className="home__info-description cycle-info">{t("situation")}</p>
        </div>

        <div>
          <h3 className="home__info-title">{t("time_label")}</h3>

          <p className="home__info-description">2020 - 2024</p>
        </div>
      </div>
    </div>
  );
}
