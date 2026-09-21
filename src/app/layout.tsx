import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C86A4B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Brightfield | Perimenopause & Menopause Wellness for Women 38+ | Ankita Pareek",
  description:
    "If losing weight suddenly feels impossible after 38, feeling stuck — Brightfield is for you. Whole-woman wellness combining Fitness, Nutrition, and Emotional Wellbeing. Founded by Ankita Pareek. Since 2013.",
  keywords: [
    "perimenopause wellness",
    "menopause fitness coach",
    "women 38 weight loss",
    "hormonal health women",
    "Ankita Pareek",
    "Brightfield wellness",
    "menopause nutrition",
  ],
  authors: [{ name: "Ankita Pareek - Brightfield" }],
  openGraph: {
    title: "Brightfield | Perimenopause & Menopause Wellness for Women 38+",
    description:
      "Stop fighting your body. Start understanding it. Personalised guidance, sustainable habits, no crash diets. 13+ years transforming women's health.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-screen bg-[#FCFAF8] text-[#26201D] selection:bg-[#FAF0EB] selection:text-[#A64E33]">
        {children}
      </body>
    </html>
  );
}
