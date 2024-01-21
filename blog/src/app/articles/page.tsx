import fs from "fs"
import { getArticlesDirectory } from "@/lib/getArticlesDirectory"
import { getMarkdownData } from "@/lib/getMarkdownData"
import { ArticlesPage } from "@/_pages/ArticlesPage"

const Articles = async () => {
  const articlesDirectory = getArticlesDirectory()
  const articlePaths = fs.readdirSync(articlesDirectory)
  const articles = await Promise.all(
    articlePaths.map((path) => getMarkdownData(path.replace(/\.md$/, "")))
  )
  const orderedArticles = articles.sort((a, b) => {
    if (a.date > b.date) {
      return 1
    } else {
      return -1
    }
  })

  return <ArticlesPage articles={orderedArticles} />
}

export default Articles
