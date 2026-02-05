"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function LanguageSelector() {
  const t = useTranslations("LanguageSelector");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (nextLocale: "en" | "es") => {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", label: t("en"), flag: "/flags/en.svg" },
    { code: "es", label: t("es"), flag: "/flags/es.svg" },
  ];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none"
        aria-label={t("label")}
      >
        <Image
          src={locale === "en" ? "/flags/en.svg" : "/flags/es.svg"}
          alt={locale === "en" ? "English" : "Spanish"}
          width={22}
          height={16}
          className="rounded-sm object-cover"
        />
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
          {locale}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-xl bg-white dark:bg-[#1C1C1C] shadow-xl ring-1 ring-black/5 dark:ring-white/10 focus:outline-none z-50 overflow-hidden transform transition-all duration-200 ease-out">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as "en" | "es")}
                disabled={locale === lang.code}
                className={`flex items-center w-full px-4 py-2.5 text-sm transition-colors duration-150 group
                  ${
                    locale === lang.code
                      ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 cursor-default"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
              >
                <div className={`mr-2.5 flex-shrink-0 filter grayscale-[0.2] group-hover:grayscale-0 transition-all ${locale === lang.code ? "scale-110" : "scale-100"}`}>
                  <Image
                    src={lang.flag}
                    alt={lang.label}
                    width={20}
                    height={14}
                    className="rounded-sm object-cover"
                  />
                </div>
                <span className={`font-medium ${locale === lang.code ? "font-bold" : "font-normal"}`}>
                  {lang.label}
                </span>
                {locale === lang.code && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
