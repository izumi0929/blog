import { ArticleDetailPage } from "@/_pages/ArticleDetailPage"
import { getFilenames } from "@/lib/getFilenames"
import { getMarkdownData } from "@/lib/getMarkdownData"

export async function generateStaticParams() {
  return getFilenames()
}

type AriticleParams = {
  params: {
    id: string
  }
}

const Article = async ({ params }: AriticleParams) => {
  const { id } = params
  const articleData = await getMarkdownData(id)
  return <ArticleDetailPage article={articleData} />
}

export default Article
