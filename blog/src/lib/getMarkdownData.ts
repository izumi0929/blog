import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { getArticlesDirectory } from "@/lib/getArticlesDirectory"

type MarkdownData = {
  slug: string
  contentHtml: string
  thumbnail: string
}

export async function getMarkdownData(slug: string): Promise<MarkdownData> {
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
    ...matterResult.data
  }
}
