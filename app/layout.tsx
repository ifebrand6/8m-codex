import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import GoogleAnalytics from "@/components/google-analytics"
import GoogleTagManager from "@/components/google-tag-manager"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Codex - Search Analytics Dashboard",
  description: "Monitor and analyze search performance across competitors",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Providers>
          {children}
        </Providers>
        <GoogleAnalytics />
        <GoogleTagManager />
      </body>
    </html>
  )
}
