import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const siteDescription =
  "Periodismo de investigación multimedia centroamericano desde el exilio. Reportajes de largo aliento sobre tecnología, migración, derechos humanos y democracia."

export const metadata: Metadata = {
  metadataBase: new URL("https://focos.tv"),
  title: {
    template: "%s | FOCOS",
    default: "FOCOS | Periodismo de investigación centroamericano",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "FOCOS",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${playfair.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
