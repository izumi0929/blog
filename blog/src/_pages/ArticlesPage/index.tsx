import { FC } from "react"
import styles from "./index.module.css"

import { ArticleList } from "@/_objects/article/components/ArticleList"
import { Article } from "@/_objects/article/types/Article"
type Props = {
  articles: Article[]
}

export const ArticlesPage: FC<Props> = ({ articles }) => {
  return (
    <main className={styles.main}>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </main>
  )
}
