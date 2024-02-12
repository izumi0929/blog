import { getMarkdownData } from "@/lib/getMarkdownData"
import type { Metadata } from "next"

export const generateMetadata = async ({
  params: { id }
}: {
  params: {
    id: string
  }
}): Promise<Metadata> => {
  const articleData = await getMarkdownData(id)
  return {
    title: `${articleData.title} | 自由帳`,
    description: `${articleData.description}`
  }
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
