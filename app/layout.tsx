import "@/styles/bootstrap.min.css"
import "@/styles/globals.css"
import { Metadata } from "next"
import Head from "next/head"

import { siteConfig } from "@/config/site"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className='antialiased" bg-background min-h-screen font-sans'>
        <div className="relative flex h-screen flex-col">
          <Header />
          <div className="flex-1  pt-[75px]">{children}</div>
          <Footer />
        </div>
        <TailwindIndicator />
      </body>
    </html>
  )
}
