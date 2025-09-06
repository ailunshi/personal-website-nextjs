import type { Metadata, Viewport } from "next";
import { Alata, Raleway, Cherish, Zhi_Mang_Xing } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Ailun Shi",
    default: "Ailun Shi \u2014 YA/Adult Fantasy Novelist",
  },
  description: "Ailun Shi is a fantasy novelist based in the Bay Area.",
  keywords: [
    "ailun",
    "shi",
    "shiailun",
    "ailunshi",
    "writing",
    "novel",
    "novelist",
    "ya fantasy",
    "adult fantasy"
  ],
  openGraph: {
    siteName: "Ailun Shi \u2014 YA/Adult Fantasy Novelist",
    type: "website",
    locale: "en_US",
    url: "https://shiailun.com",
    images: [
      {
        url: "/DSC01700.jpg",
        width: 1200,
        height: 630,
      }
    ]
  },

};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: "#8666A9",
}

const raleway = Raleway({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
  style: ["normal", "italic"]
})

const alata = Alata({
  display: "swap",
  weight: "400",
  variable: "--font-alata",
})

const cherish = Cherish({
  display: "swap",
  weight: "400",
  variable: "--font-cherish",
})

const zhimangxing = Zhi_Mang_Xing({
  display: "swap",
  weight: "400",
  variable: "--font-zhimangxing",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${alata.variable} ${cherish.variable} ${raleway.variable} ${zhimangxing.variable}`}>
      <body className="theme-bg flex flex-col">
        <main className="flex-grow w-full pl-10 pr-10 pt-5 relative">
            {children}
        </main>

        {/* Footer Content*/}
        <footer className="p-5">
          <p className="text-right raleway text-[12px] italic">
            Designed with Figma, built with NextJS and Tailwind CSS, deployed with Vercel
          </p>
        </footer>
        
      </body>
    </html>
  );
}
