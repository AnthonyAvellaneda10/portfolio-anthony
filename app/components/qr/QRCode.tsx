"use client";

import { useState, useEffect, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { BsTelegram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "lucide-react";

const QRCode = () => {
  const generateQR = "https://portafolio-anthony-avellaneda.vercel.app";
  const shareName = "Anthony Avellaneda Paitán | Portafolio";

  const url = "https://portafolio-anthony-avellaneda.vercel.app";
  const message =
    "¡Echa un vistazo al increíble portafolio web de Anthony Avellaneda!";
  const hashtags: string[] = [
    "webdevelopment",
    "webprojects",
    "websiteportfolio",
  ];

  const [facebookPortfolio, setFacebookPortfolio] = useState("");
  const [whatsappPortfolio, setWhatsappPortfolio] = useState("");
  const [twitterPortfolio, setTwitterPortfolio] = useState("");
  const [linkedinPortfolio, setLinkedinPortfolio] = useState("");
  const [telegramPortfolio, setTelegramPortfolio] = useState("");

  const copyText = "https://goo.su/A0H2";
  const [copyButtonText, setCopyButtonText] = useState("Copiar");
  const inputRef = useRef<HTMLInputElement | null>(null); // 🔹 Definir el tipo correctamente

  useEffect(() => {
    setFacebookPortfolio(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}&quote=${encodeURIComponent(message)}&hashtag=${encodeURIComponent(
        hashtags.join(",")
      )}`
    );
    setWhatsappPortfolio(
      `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`
    );
    setTwitterPortfolio(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${message} ${getHashtags(hashtags)} ${url} via @TomStark08`
      )}`
    );
    setLinkedinPortfolio(
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(message)}&summary=${encodeURIComponent(
        hashtags.join(",")
      )}`
    );
    setTelegramPortfolio(
      `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(message)}`
    );
  }, []);

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select(); // 🔹 Ahora no da error porque se definió el tipo correctamente
      document.execCommand("copy");
      setCopyButtonText("Copiado");
      setTimeout(() => setCopyButtonText("Copiar"), 3000);
    }
  };

  const getHashtags = (hashtags: string[]): string =>
    hashtags.map((tag: string) => `#${tag}`).join(" "); // 🔹 Tipos corregidos

  return (
    <div className="contenedor-qr">
      <h2 className="section__title">Comparte</h2>
      <span className="section__subtitle">En redes sociales</span>

      <div className="flex justify-center items-center">
        <QRCodeSVG
          value={url}
          title={shareName}
          size={256}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          imageSettings={{
            src: "/icons/work_logo.webp",
            x: undefined,
            y: undefined,
            height: 75,
            width: 75,
            opacity: 1,
            excavate: true,
          }}
        />
      </div>
      <div className="content container__section grid">
        <section>
          <ul className="icons">
            <li>
              <a href={facebookPortfolio} target="_blank" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href={twitterPortfolio} target="_blank" aria-label="Twitter">
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a href={linkedinPortfolio} target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href={whatsappPortfolio} target="_blank" aria-label="Whatsapp">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href={telegramPortfolio} target="_blank" aria-label="Telegram">
                <BsTelegram />
              </a>
            </li>
          </ul>
          <div className="field">
            <label htmlFor="inputField" className="sr-only">
              Enlace:
            </label>
            {/* <i className="bx bx-link"></i> */}
            <Link className="w-7 ml-2" />
            <span className="border border-r border-[#e1e1e1] inline-block h-[20px]"></span>
            <input
              id="inputField"
              ref={inputRef}
              type="text"
              readOnly
              value={copyText}
            />
            <button onClick={copyToClipboard} className="copy">
              {copyButtonText}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QRCode;
