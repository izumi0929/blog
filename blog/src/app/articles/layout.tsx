import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "記事一覧",
  description: "記事一覧です"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
