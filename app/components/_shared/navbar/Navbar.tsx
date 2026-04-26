// app/components/Navbar.tsx
"use client"; // Necesario para usar hooks y eventos del navegador

import { useEffect, useState } from "react";
import "./Navbar.css";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";

import {
  BookOpen,
  Briefcase,
  House,
  Menu,
  MessageCircle,
  Moon,
  PanelsTopLeft,
  Sun,
  Trophy,
  X,
} from "lucide-react";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  // Inicializar tema desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("selected-theme");
    const savedThemeTailwindCSS = localStorage.getItem(
      "selected-theme-tailwindCSS"
    );
    if (savedTheme === "dark" && savedThemeTailwindCSS === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.add("dark");
      setIsDarkTheme(true);
    }
  }, []);

  // Actualizar el navbar según el scroll
  useEffect(() => {
    // Verificar si hay un hash en la URL al cargar la página
    const currentHash = window.location.hash.replace("#", "") || "home";
    setActiveSectionId(currentHash);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      let newActiveSectionId: string | null = null;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.getBoundingClientRect().top + scrollY;
        const sectionHeight = section.clientHeight;

        if (
          scrollY >= sectionTop - 50 &&
          scrollY < sectionTop + sectionHeight - 50
        ) {
          newActiveSectionId = sectionId || null;
        }
      });

      if (newActiveSectionId !== activeSectionId) {
        setActiveSectionId(newActiveSectionId);

        // Actualizar la URL conservando el pathname (idioma actual /es /en)
        const pathname = window.location.pathname;
        const newUrl = newActiveSectionId ? `${pathname}#${newActiveSectionId}` : pathname;
        window.history.replaceState(null, "", newUrl);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSectionId]); // Eliminamos la dependencia de activeSectionId para que solo se ejecute una vez al inicio

  // Cambiar el tema
  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.body.classList.add("dark-theme");
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.remove("dark");
      }
      localStorage.setItem("selected-theme", newTheme ? "dark" : "light");
      localStorage.setItem(
        "selected-theme-tailwindCSS",
        newTheme ? "dark" : "light"
      );
      return newTheme;
    });
  };

  // Alternar menú móvil
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header" id="header">
      <nav className={`nav container container__nav`}>
        <div className="nav__logo focus:outline-none">Anthony AP</div>
        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className={`nav__link ${
                  activeSectionId === "home" ? "active-link" : ""
                }`}
              >
                <House className="w-5 h-5" />
                {t("home")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className={`nav__link ${
                  activeSectionId === "projects" ? "active-link" : ""
                }`}
              >
                <PanelsTopLeft className="w-5 h-5" />
                {t("projects")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#work"
                onClick={() => setIsMenuOpen(false)}
                className={`nav__link ${
                  activeSectionId === "work" ? "active-link" : ""
                }`}
              >
                <Briefcase className="w-5 h-5" />
                {t("work")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
                className={`nav__link ${
                  activeSectionId === "skills" ? "active-link" : ""
                }`}
              >
                <Trophy className="w-5 h-5" />
                {t("skills")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#studies"
                onClick={() => setIsMenuOpen(false)}
                className={`nav__link ${
                  activeSectionId === "studies" ? "active-link" : ""
                }`}
              >
                <BookOpen className="w-5 h-5" />
                {t("studies")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className={`nav__link ${
                  activeSectionId === "contact" ? "active-link" : ""
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                {t("contact")}
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <X />
          </div>
        </div>
        <div className="nav__buttons">
          <LanguageSelector />
          <button aria-label="Cambiar tema" type="button" onClick={toggleTheme} className="theme-toggle">
            {isDarkTheme ? (
              <Sun className="change-theme h-5 w-5" id="theme-button" />
            ) : (
              <Moon className="change-theme h-5 w-5" id="theme-button" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="nav__toggle"
            id="nav-toggle"
            type="button"
            aria-label="Mostrar menú de navegación"
          >
            <Menu />
          </button>
        </div>
      </nav>
    </header>
  );
}
