
import "./ui/globals.css";
import { Lora, Roboto } from "next/font/google";
import Navbar from "./components/_shared/navbar/Navbar";
import Footer from "./components/_shared/footer/Footer";

const lora = Lora({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-lora',
});

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-roboto',
});

export const metadata = {
  title: "Anthony Avellaneda Paitán | Portafolio",
  description: "Portafolio de Anthony Avellaneda Paitán. ¡Entusiasta por crear sitios web visualmente impresionantes y fáciles de usar, !Apasionado por el desarrollo fullstack.",
  canonical: "https://portafolio-anthony-avellaneda.vercel.app",

  openGraph: {
    title: "Anthony Avellaneda Paitán | Portafolio",
    description: "Portafolio de Anthony Avellaneda Paitán, desarrollador fullstack.",
    type: "website",
    url: "https://portafolio-anthony-avellaneda.vercel.app/",
    images: [
      {
        url: "https://i.ibb.co/Z64kHJHr/portfolio-anthony.png",
        width: 1200,
        height: 630,
        alt: "Anthony Avellaneda Paitán | Portafolio",
      },
    ],
    locale: "es_ES",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anthony Avellaneda Paitán | Portafolio",
    description: "Portafolio de Anthony Avellaneda Paitán, desarrollador fullstack.",
    images: [
      {
        url: "https://i.ibb.co/Z64kHJHr/portfolio-anthony.png",
        width: 1200,
        height: 630,
        alt: "Anthony Avellaneda Paitán | Portafolio",
      },
    ],
    creator: "@TomStark08",
  },

  robots: {
    index: true,
    follow: true,
    goobleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    }
  },

  charSet: "utf-8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${roboto.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
