import { FC } from "react"
import styles from "./index.module.scss"

import { ArticleList } from "@/_objects/article/components/ArticleList"
import { Article } from "@/_objects/article/types/Article"
type Props = {
  articles: Article[]
}

export const ArticlesPage: FC<Props> = ({ articles }) => {
  return (
    <main className={styles.main}>
      <h1>記事一覧</h1>
      <ArticleList articles={articles} />
    </main>
  )
}
