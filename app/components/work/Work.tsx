import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";

async function fetchWorks(locale: string) {
  const workResponse = await fetch(`${process.env.BACKEND_URL}/api/work?lang=${locale}`, {
    headers: {
      "x-origin": `${process.env.FRONTEND_URL}`,
    }
  });
  const work = await workResponse.json();

  return {
    work,
  };
}

interface Company {
  name: string;
  image: string;
  url?: string;
  description: string;
}

interface Experience {
  company: Company;
  position: string;
  startDate: { year: number; month: number } | string;
  endDate: { year: number; month: number } | string;
  responsibilities: string[];
  technologies: { name: string; url: string; alt: string }[];
}

const isOngoing = (
  date: Experience["startDate"] | Experience["endDate"]
): boolean => {
  if (typeof date !== "string") return false;
  const normalized = date.toLowerCase();
  return normalized === "presente" || normalized === "present";
};

const getComparableDate = (
  date: Experience["startDate"] | Experience["endDate"]
): Date => {
  if (isOngoing(date)) {
    return new Date(); // Para experiencias en curso, usamos la fecha actual
  }
  if (typeof date === "object" && date !== null) {
    return new Date(date.year, date.month - 1);
  }
  return new Date(0);
};

export default async function Work() {
  const locale = await getLocale();
  const t = await getTranslations("Work");
  const { work } = await fetchWorks(locale);

  const formatDate = (
    date: Experience["startDate"] | Experience["endDate"]
  ): string => {
    if (isOngoing(date)) return t("present");
    if (typeof date === "object") {
      const monthNames = t.raw("months");
      return `${monthNames[date.month - 1]} ${date.year}`;
    }
    return "";
  };

  // Ordenar las experiencias:
  // - Si ambas están en curso, se ordena por startDate (más reciente primero)
  // - Si solo una está en curso, se coloca primero
  // - Si ambas están finalizadas, se ordena por endDate (más reciente primero)
  const sortedExperiences = work.experiences.sort((a: Experience, b: Experience) => {
    const aOngoing = isOngoing(a.endDate);
    const bOngoing = isOngoing(b.endDate);

    if (aOngoing && bOngoing) {
      // Comparamos las fechas de inicio para trabajos en curso
      return getComparableDate(b.startDate).getTime() - getComparableDate(a.startDate).getTime();
    } else if (aOngoing) {
      return -1;
    } else if (bOngoing) {
      return 1;
    } else {
      // Comparación de trabajos finalizados por fecha de finalización
      return getComparableDate(b.endDate).getTime() - getComparableDate(a.endDate).getTime();
    }
  });

  return (
    <>
      <div className="container__section section__border">
        <h2 className="section__title">{t("title")}</h2>
        <span className="section__subtitle">💼👨🏻‍💻</span>

        <div className="about__container work-experience">
          {sortedExperiences.map((exp: Experience, index: number) => (
            <div key={index} className="group relative flex gap-x-5">
              <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-6 flex justify-center items-center">
                  <Image
                    className="shrink-0 size-6 text-gray-600 rounded-full"
                    src={exp.company.image}
                    alt={exp.company.name}
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="grow pb-8 group-last:pb-0">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="font-medium text-xs text-gray-600 dark:text-neutral-400 cursor-default">
                    {exp.company.url ? (
                      <a
                        href={exp.company.url}
                        className="hover:text-blue-600 hover:underline transition duration-300"
                      >
                        {exp.company.name}
                      </a>
                    ) : (
                      exp.company.name
                    )}
                  </div>
                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </h3>
                </div>
                <p className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                  {exp.position}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  {exp.company.description}
                </p>
                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {exp.responsibilities.map(
                    (responsibility: string, idx: number) => (
                      <li
                        key={idx}
                        className="ps-1 text-sm text-gray-600 dark:text-neutral-400"
                      >
                        {responsibility}
                      </li>
                    )
                  )}
                </ul>
                <dl className="flex flex-col sm:flex-row gap-1 mt-5">
                  <dt className="min-w-40">
                    <span className="block text-sm text-gray-500 dark:text-neutral-400">
                      {t("technologies")}
                    </span>
                  </dt>
                  <dd>
                    <ul className="space-x-3">
                      {exp.technologies.map(
                        (
                          tech: { name: string; url: string; alt: string },
                          idx: number
                        ) => (
                          <li
                            key={idx}
                            className={`inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 ${
                              idx > 0 ? "me-2" : ""
                            }`}
                          >
                            <Image
                              className="shrink-0 me-1"
                              src={tech.url}
                              alt={tech.alt}
                              width={16}
                              height={16}
                              style={{
                                width: "16px",
                                height: "16px",
                                objectFit: "contain",
                              }}
                              loading="lazy"
                            />
                            {tech.name}
                          </li>
                        )
                      )}
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
