import { Noto_Sans_JP } from "next/font/google"
import React from "react"

const font = Noto_Sans_JP({
  weight: "500",
  subsets: ["latin"]
})

export type AppLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: AppLayoutProps) {
  return (
    <html lang="ja">
      <head />
      <body className={font.className}>{children}</body>
    </html>
  )
}
