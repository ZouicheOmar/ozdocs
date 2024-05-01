/** @format */

import type {Metadata} from "next"
import {Inter} from "next/font/google"
import {Roboto} from "next/font/google"
import "./globals.css"

const inter = Inter({subsets: ["latin"]})
const roboto = Roboto({subsets: ["latin"], weight: "400"})

export const metadata: Metadata = {
  title: "ozdocs",
  description: "Omar Zouiche's personnal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <body className={roboto.className}>{children}</body> */}
    </html>
  )
}
