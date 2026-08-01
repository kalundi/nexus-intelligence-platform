import { Inter, JetBrains_Mono, Libre_Baskerville } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { AppShell } from "../components/layout/AppShell"
import { cn } from "../lib/utils"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fontDisplay = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
})

const fontData = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-data",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontDisplay.variable, fontData.variable)}
    >
      <body>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
