
import "../ui/globals.css";
import { Lora, Roboto } from "next/font/google";
import Navbar from "../components/_shared/navbar/Navbar";
import Footer from "../components/_shared/footer/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const lora = Lora({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-lora',
  preload: false,
});

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-roboto',
  preload: false,
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

import { Toaster } from "react-hot-toast";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${lora.variable} ${roboto.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
