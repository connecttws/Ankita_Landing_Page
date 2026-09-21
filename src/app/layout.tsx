import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Great_Vibes } from "next/font/google";
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

const signatureFont = Great_Vibes({
  weight: "400",
  variable: "--font-signature",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#b85068",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} ${signatureFont.variable} scroll-smooth w-full max-w-full overflow-x-hidden`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-background text-foreground selection:bg-primary/15 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
