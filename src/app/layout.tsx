import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from 'next/script'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

export const metadata: Metadata = {
  title: "Video Cinix",
  description: "Descubra o melhor do entrenimento de filmes e séries, faça sua lista de favoritos e maratone.",
  openGraph: {
    images: [
      {
        url: `${baseUrl}/video-cinix.png`,
        width: 512,
        height: 512,
        alt: "video cinix",
      },
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/botao-play.png"
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
        <link rel="icon" type="image/png" sizes="48x48" href="/botao-play.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NBPCJYY28V"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NBPCJYY28V');
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
