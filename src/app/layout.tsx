import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from 'next/script'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const metadata: Metadata = {
  title: "NetCine",
  description: "Aqui você encontra o melhor catálogo de filmes e séries totalmente de graça, explore o melhor do entretenimento no NetCine.",
  openGraph: {
    images: [
      {
        url: `${baseUrl}/netcine-thumb.png`,
        width: 512,
        height: 512,
        alt: "netcine logo",
      },
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/netcine-icon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pr-br">
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/netcine-icon.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PKJCG25JRS"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PKJCG25JRS');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
