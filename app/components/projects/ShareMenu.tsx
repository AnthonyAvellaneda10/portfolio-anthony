"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Share2 } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

interface ShareMenuProps {
  proyecto: {
    id: string;
    sourceCode?: string;
    url?: string;
    message: string;
    hashtags: string[];
    appName: string;
  };
  isOpen: boolean; // Estado para controlar si el menú está abierto
  onToggle: () => void; // Función para alternar el estado del menú
  onCloseOthers: () => void; // Función para cerrar otros menús
}

export default function ShareMenu({
  proyecto,
  isOpen,
  onToggle,
  onCloseOthers,
}: ShareMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Función para generar enlaces de compartir
  const generateShareLinks = () => {
    const { sourceCode, url, message, hashtags, appName } = proyecto;
    const shareUrl = url || sourceCode || "#";
    const hashtagsString = hashtags.map((tag) => `#${tag}`).join(" ");

    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}&quote=${encodeURIComponent(message)}&hashtag=${encodeURIComponent(
        hashtags.join(",")
      )}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        `${message} ${shareUrl}`
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${message} ${hashtagsString} ${shareUrl} via @TomStark08`
      )}`,
      linkedin: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        shareUrl
      )}&title=${encodeURIComponent(message)}&summary=${encodeURIComponent(
        hashtags.join(",")
      )}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(message)}`,
      gmail: `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent(
        appName
      )}&body=${encodeURIComponent(`${message} ${shareUrl}`)}`,
    };
  };

  const shareLinks = generateShareLinks();

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onToggle(); // Cierra el menú
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  // Manejar el clic en el toggle
  const handleToggle = () => {
    onCloseOthers(); // Cierra otros menús abiertos
    onToggle(); // Abre o cierra este menú
  };

  return (
    <div className={`menu ${isOpen ? "active" : ""}`} ref={menuRef}>
      <div
        className="toggle"
        onClick={(e) => {
          e.stopPropagation(); // Evita que el evento se propague
          handleToggle(); // Alternar el estado del menú
        }}
      >
        <Share2 className="share__icon" />
      </div>
      <div
        className="menu-item"
        style={{ "--i": 0, "--clr": "#1877f2" } as React.CSSProperties}
      >
        <Link
          href={shareLinks.facebook}
          target="_blank"
          aria-label="Compartir por Facebook"
        >
          <FaFacebook />
        </Link>
      </div>
      <div
        className="menu-item"
        style={{ "--i": 1, "--clr": "#25d366" } as React.CSSProperties}
      >
        <Link
          href={shareLinks.whatsapp}
          target="_blank"
          aria-label="Compartir por Whatsapp"
        >
          <FaWhatsapp />
        </Link>
      </div>
      <div
        className="menu-item"
        style={{ "--i": 2, "--clr": "#000000" } as React.CSSProperties}
      >
        <Link
          href={shareLinks.twitter}
          target="_blank"
          aria-label="Compartir por X (Twitter)"
        >
          <FaXTwitter />
        </Link>
      </div>
      <div
        className="menu-item"
        style={{ "--i": 3, "--clr": "#0a66c2" } as React.CSSProperties}
      >
        <Link
          href={shareLinks.linkedin}
          target="_blank"
          aria-label="Compartir por LinkedIn"
        >
          <FaLinkedin />
        </Link>
      </div>
      <div
        className="menu-item"
        style={{ "--i": 4, "--clr": "#eb4335" } as React.CSSProperties}
      >
        <Link
          href={shareLinks.gmail}
          target="_blank"
          aria-label="Compartir por Gmail"
        >
          <Image
            src="/tecnologias/gmail_logo.webp"
            alt="Gmail"
            className="w-5 h-5"
            width={24}
            height={24}
            style={{ objectFit: "contain" }}
            loading="lazy"
          />
        </Link>
      </div>
      <div
        className="menu-item"
        style={{ "--i": 5, "--clr": "#0088cc" } as React.CSSProperties}
      >
        <Link
          href={shareLinks.telegram}
          target="_blank"
          aria-label="Compartir por Telegram"
        >
          <FaTelegram />
        </Link>
      </div>
    </div>
  );
}
