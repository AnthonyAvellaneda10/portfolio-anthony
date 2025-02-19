import Image from "next/image";

async function fetchWorks() {
  const workResponse = await fetch(`${process.env.BACKEND_URL}/api/work`);
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

const formatDate = (
  date: Experience["startDate"] | Experience["endDate"]
): string => {
  if (date === "Presente") return "Presente";
  if (typeof date === "object") {
    const monthNames = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    return `${monthNames[date.month - 1]} ${date.year}`;
  }
  return "";
};

export default async function Work() {
  const { work } = await fetchWorks();

  return (
    <>
      <div className="container__section section__border">
        <h2 className="section__title">Experiencia Laboral</h2>
        <span className="section__subtitle">💼👨🏻‍💻</span>

        <div className="about__container work-experience">
          {work.experiences.map((exp: Experience, index: number) => (
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
                      Tecnologías:
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
