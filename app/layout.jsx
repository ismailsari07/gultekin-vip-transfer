import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const SITE_URL = "https://gultekinviptransfer.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Gültekin VIP Transfer | Antalya VIP Transfer & Turizm Taşımacılığı",
    template: "%s | Gültekin VIP Transfer",
  },
  description:
    "Antalya havalimanı transferi, şehir içi ve şehirlerarası VIP taşımacılık. Özel tasarım Ford VIP araç, ekranlı koltuklar, deneyimli şoför — 7/24 hizmet. Antalya, Ege Bölgesi ve Türkiye geneli transfer.",
  keywords: [
    "antalya vip transfer",
    "antalya havalimanı transfer",
    "antalya transfer",
    "antalya turizm taşımacılığı",
    "ege bölgesi transfer",
    "antalya özel araç kiralama",
    "antalya şehirlerarası transfer",
    "vip transfer antalya",
    "antalya airport transfer",
    "ford vip araç antalya",
  ],

  openGraph: {
    title: "Gültekin VIP Transfer | Antalya VIP Transfer & Turizm Taşımacılığı",
    description:
      "Antalya merkezli VIP transfer hizmeti. Ford VIP araç, ekranlı koltuklar, 7/24 hizmet. Havalimanı karşılama, şehir içi ve şehirlerarası konforlu yolculuk.",
    url: SITE_URL,
    siteName: "Gültekin VIP Transfer",
    images: [
      {
        url: "/images/hero-sahil.jpg",
        width: 1200,
        height: 630,
        alt: "Gültekin VIP Transfer — Antalya sahil manzarası",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gültekin VIP Transfer | Antalya VIP Transfer & Turizm Taşımacılığı",
    description:
      "Antalya merkezli VIP transfer hizmeti. Ford VIP araç, ekranlı koltuklar, 7/24 hizmet.",
    images: ["/images/hero-sahil.jpg"],
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
