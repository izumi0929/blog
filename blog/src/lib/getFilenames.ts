import { getArticlesDirectory } from "@/lib/getArticlesDirectory"
import fs from "fs"
import path from "path"

export const getFilenames = async () => {
  const articlesDirectory = getArticlesDirectory()
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, "")
  }))
}
