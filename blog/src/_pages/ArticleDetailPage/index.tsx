import { FC } from "react"
import styles from "./index.module.scss"

import { Article } from "@/_objects/article/types/Article"
type Props = {
  article: Article
}

export const ArticleDetailPage: FC<Props> = ({ article }) => {
  return (
    <main className={styles.main}>
      <h1>{article.title}</h1>
      <div className={styles.content}>
        <img className={styles.keyVisual} src={article.thumbnail} />
        <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      </div>
    </main>
  )
}
