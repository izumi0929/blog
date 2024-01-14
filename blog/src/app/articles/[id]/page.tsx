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
  return (
    <div>
      <img src={articleData.thumbnail} width={200} />
      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </div>
  )
}

export default Article
