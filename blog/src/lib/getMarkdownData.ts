import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { getArticlesDirectory } from "@/lib/getArticlesDirectory"
import { Article } from "@/_objects/article/types/Article"

export async function getMarkdownData(slug: string): Promise<Article> {
  const articlesDirectory = getArticlesDirectory()
  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    thumbnail: matterResult.data.thumbnail,
    title: matterResult.data.title,
    description: matterResult.data.description,
    date: matterResult.data.date
  }
}
