import dynamic from "next/dynamic";
import Contact from "../components/contact/Contact";
import LayoutHome from "../components/home/LayoutHome";
import Skills from "../components/skills/Skills";
import Study from "../components/study/Study";
// Dynamic import for QRCode - code splitting
const QRCode = dynamic(() => import("../components/qr/QRCode"), {
  loading: () => null,
});
import Work from "../components/work/Work";
import Projects from "../components/projects/Projects";
import ScrollUp from "../components/_shared/scrollUp/ScrollUp";

export default function Home() {
  return (
    <>
      {/* <!--==================== HOME ====================--> */}
      <section className="home section" id="home">
        <LayoutHome />
      </section>

      {/* <!--==================== PROJECTS ====================--> */}
      <section className="projects sections portfolio" id="projects">
        <Projects />
      </section>

      {/* <!--==================== WORK EXPERIENCE ====================--> */}
      <section className="about section" id="work">
        <Work />
      </section>

      {/* <!--==================== SKILLS ====================--> */}
      <section className="skills section" id="skills">
        <Skills />
      </section>

      {/* <!--==================== MY STUDIES ====================--> */}
      <section className="about section" id="studies">
        <Study />
      </section>

      {/* <!--=============== CONTACT===============--> */}
      <section className="contact section" id="contact">
        <Contact />
      </section>

      {/* <!--=============== QR CODE===============--> */}
      <section className="about section container__section section__border">
        <QRCode />
      </section>

      {/* Scroll Up */}
      <ScrollUp />
    </>
  );
}
