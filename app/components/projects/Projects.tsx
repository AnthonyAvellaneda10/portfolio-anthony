"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import "./Projects.css";
import { IoDownloadOutline } from "react-icons/io5";
import { Monitor, Settings } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import ShareMenu from "./ShareMenu";

interface Proyecto {
  id: string;
  mockup: string;
  appName: string;
  publicationDate: string;
  about: string;
  siteType: string;
  sourceCode?: string;
  url?: string;
  message: string;
  hashtags: string[];
  technologies: { name: string; url: string }[];
}


async function fetchProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`);
  const projectsData = await res.json();

  // Add unique IDs to each project
  const frontendProjects = projectsData.data.results.frontend.map(
    (project: Proyecto, index: number) => ({
      ...project,
      id: `frontend-${index + 1}`,
    })
  );

  const fullstackProjects = projectsData.data.results.fullstack.map(
    (project: Proyecto, index: number) => ({
      ...project,
      id: `fullstack-${index + 1}`,
    })
  );

  return {
    frontend: frontendProjects.reverse(),
    fullstack: fullstackProjects.reverse(),
  };
}

const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Projects() {
  const [projects, setProjects] = useState<{
    frontend: Proyecto[];
    fullstack: Proyecto[];
  }>({
    frontend: [],
    fullstack: [],
  });
  const [activeTab, setActiveTab] = useState("FullStack");
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const itemsPerPage = 4;

  useEffect(() => {
    async function loadProjects() {
      const data = await fetchProjects();
      setProjects(data);
    }
    loadProjects();
  }, []);

  const displayedProjects =
    activeTab === "FullStack"
      ? projects.fullstack ?? []
      : projects.frontend ?? [];
  const totalPages = Math.ceil(displayedProjects.length / itemsPerPage);
  const paginatedProjects = displayedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Mapeo de íconos
  const tabIcons = {
    FullStack: Settings,
    Frontend: Monitor,
  };

  // Función para alternar el menú
  const toggleMenu = (id: string) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id)); // Abre o cierra el menú
  };

  // Función para cerrar otros menús
  const closeOtherMenus = () => {
    setOpenMenuId(null);
  };

  return (
    <>
      <h2 className="section__title">Proyectos</h2>
      <span className="section__subtitle">Trabajo más reciente</span>

      <div className="containers">
        <div className="sm:block flex justify-center select-none">
          <div className="border-b border-gray-200 mb-8">
            <nav
              className="-mb-px flex gap-6 flex-col sm:flex-row"
              aria-label="Tabs"
            >
              {(["FullStack", "Frontend"] as const).map((tab) => {
                const Icon = tabIcons[tab]; // Obtener el ícono correspondiente
                return (
                  <button
                    key={tab}
                    className={`transition-all duration-300 px-1 pb-4 text-sm font-medium border-b-2 flex items-center gap-2 ${
                      activeTab === tab
                        ? "border-sky-500 text-[#027BBA] pointer-events-none"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer"
                    }`}
                    onClick={() => {
                      setActiveTab(tab);
                      setCurrentPage(1); // Resetear paginación al cambiar de pestaña
                    }}
                  >
                    <Icon className="h-5 w-5" /> {/* Renderizar el ícono */}
                    {tab}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <ul className="portfolio-list animate-fadeIn">
          {paginatedProjects.map((proyecto, index) => (
            <li key={`${proyecto.id}-${index}`}>
              <div className="portfolio-card">
                <div
                  className="card-banner img-holder hover:shine flex justify-center"
                  style={
                    { "--width": 800, "--height": 540 } as React.CSSProperties
                  }
                >
                  <Image
                    src={proyecto.mockup}
                    alt={proyecto.appName}
                    width={800}
                    height={540}
                    className="img-cover"
                    loading="lazy"
                  />
                  <a download href={proyecto.mockup} className="btn-icon">
                    <IoDownloadOutline />
                  </a>
                </div>
                <div className="card-content">
                  <span className="chip label-md">{proyecto.siteType}</span>
                  <h3 className="title-md">{proyecto.appName}</h3>
                  <p className="card-text date">
                    🗓️{" "}
                    {new Date(proyecto.publicationDate).toLocaleDateString(
                      "es"
                    )}
                  </p>
                  <p className="card-text">{proyecto.about}</p>
                  <div className="imgs-technologies">
                    {proyecto.technologies.map((tech, index) => (
                      <Image
                        key={`${proyecto.id}-${tech.name}-${index}`}
                        src={tech.url}
                        alt={tech.name}
                        title={tech.name}
                        width={24}
                        height={24}
                        style={{
                          width: "22px",
                          height: "22px",
                          objectFit: "contain",
                        }}
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="container__btns">
                    {proyecto.sourceCode && (
                      <div className="menus">
                        <div className="toggles">
                          <a
                            href={proyecto.sourceCode}
                            target="_blank"
                            aria-label={`Proyecto ${proyecto.appName}`}
                            rel="noopener noreferrer"
                          >
                            <BsGithub className="w-6 h-6" />
                          </a>
                        </div>
                      </div>
                    )}

                    <ShareMenu
                      proyecto={proyecto}
                      isOpen={openMenuId === proyecto.id} // Estado de apertura
                      onToggle={() => toggleMenu(proyecto.id)} // Alternar menú
                      onCloseOthers={closeOtherMenus} // Cerrar otros menús
                    />

                    {proyecto.sourceCode && (
                      <a
                        href={proyecto.sourceCode}
                        target="_blank"
                        className="btn btn-primary"
                        aria-label={`Ver demo de ${proyecto.appName}`}
                      >
                        Ver demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div id="pagination" className="container__section section__border">
          {totalPages > 1 && (
            <>
              <button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  scrollToProjects();
                }}
                disabled={currentPage === 1}
                className="transition duration-300"
              >
                Anterior
              </button>
              <div id="pageNumbers">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    className={
                      currentPage === index + 1
                        ? "active"
                        : "page-number transition duration-300"
                    }
                    onClick={() => {
                      setCurrentPage(index + 1);
                      scrollToProjects();
                    }}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  scrollToProjects();
                }}
                disabled={currentPage === totalPages}
                className="transition duration-300"
              >
                Siguiente
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
