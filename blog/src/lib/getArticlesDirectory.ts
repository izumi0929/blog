import path from "path"

export const getArticlesDirectory = () => {
  const articlesDirectory = path.join(process.cwd(), "/src/articles")
  return articlesDirectory
}
