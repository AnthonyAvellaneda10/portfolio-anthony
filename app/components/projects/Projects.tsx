"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import "./Projects.css";
import { Monitor, Settings, Search } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import ShareMenu from "./ShareMenu";
import { useTranslations, useLocale } from "next-intl";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Proyecto {
  id: string;
  mockup: string | string[];
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


async function fetchProjects(locale: string) {
  // Use the locale to fetch translated content if the API supports it
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?lang=${locale}`);
  const projectsData = await res.json();

  // Add unique IDs to each project
  const frontendProjects = (projectsData.data.results.frontend || []).map(
    (project: Proyecto, index: number) => ({
      ...project,
      id: `frontend-${index + 1}`,
    })
  );

  const fullstackProjects = (projectsData.data.results.fullstack || []).map(
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
  const t = useTranslations("Projects");
  const locale = useLocale();
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
  const [isLoading, setIsLoading] = useState(true);
  
  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);

  const itemsPerPage = 4;

  useEffect(() => {
    async function loadProjects() {
      setIsLoading(true);
      try {
        const data = await fetchProjects(locale);
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProjects();
  }, [locale]);

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

  const openGallery = (mockup: string | string[], event: React.MouseEvent) => {
    const images = Array.isArray(mockup) 
      ? mockup.map(src => ({ src })) 
      : [{ src: mockup }];
    setLightboxImages(images);
    setIsLightboxOpen(true);
    
    // Blur the button to remove focus-within state
    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.blur();
    }
  };

  const ProjectSkeleton = () => (
    <li className="skeleton skeleton-card">
      <div className="portfolio-card" style={{ visibility: 'hidden' }}>
      </div>
    </li>
  );

  return (
    <>
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">🎯🚀</span>

      <div className="containers">
        <div className="sm:block flex justify-center select-none">
          <div className="border-b border-gray-200 mb-8">
            <nav
              className="-mb-px flex gap-6 flex-col sm:flex-row"
              aria-label="Tabs"
            >
              {isLoading ? (
                // Skeleton tabs
                Array.from({ length: 2 }).map((_, index) => (
                  <div key={`tab-skeleton-${index}`} className="skeleton skeleton-tab mb-4" />
                ))
              ) : (
                (["FullStack", "Frontend"] as const).map((tab) => {
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
                })
              )}
            </nav>
          </div>
        </div>

        <ul 
          key={`${activeTab}-${currentPage}-${isLoading}`} 
          className={`portfolio-list ${!isLoading ? 'fade-in' : ''}`}
        >
          {isLoading ? (
            // Render 4 skeletons while loading
            Array.from({ length: 4 }).map((_, index) => (
              <ProjectSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            paginatedProjects.map((proyecto, index) => {
              const thumbnail = Array.isArray(proyecto.mockup) ? proyecto.mockup[0] : proyecto.mockup;
              
              return (
                <li key={`${proyecto.id}-${index}`}>
                  <div className="portfolio-card">
                    <div
                      className="card-banner img-holder flex justify-center"
                      style={
                        { "--width": 800, "--height": 540 } as React.CSSProperties
                      }
                    >
                      <Image
                        src={thumbnail}
                        alt={proyecto.appName}
                        width={800}
                        height={540}
                        className="img-cover"
                        loading="lazy"
                      />
                      <button 
                        className="btn-icon"
                        aria-label={`${t("gallery")} ${proyecto.appName}`}
                        onClick={(e) => openGallery(proyecto.mockup, e)}
                      >
                        <Search />
                      </button>
                    </div>
                    <div className="card-content">
                      <span className="chip label-md">{proyecto.siteType}</span>
                      <h3 className="title-md">{proyecto.appName}</h3>
                      <p className="card-text date">
                        🗓️{" "}
                        {new Date(proyecto.publicationDate).toLocaleDateString(
                          locale
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
                                aria-label={`${t("project")} ${proyecto.appName}`}
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

                        {proyecto.url && (
                          <a
                            href={proyecto.url}
                            target="_blank"
                            className="btn btn-primary"
                            aria-label={`Ver demo de ${proyecto.appName}`}
                          >
                            {t("viewDemo")}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
          )}
        </ul>

        {!isLoading && (
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
                  {locale === 'es' ? 'Anterior' : 'Previous'}
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
                  {locale === 'es' ? 'Siguiente' : 'Next'}
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={lightboxImages}
        animation={{ fade: 500, swipe: 500 }}
        render={{
          buttonPrev: lightboxImages.length <= 1 ? () => null : undefined,
          buttonNext: lightboxImages.length <= 1 ? () => null : undefined,
        }}
      />
    </>
  );
}
