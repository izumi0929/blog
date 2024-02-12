import { Article } from "@/_objects/article/types/Article"
import { FC } from "react"
import styles from "./index.module.scss"
import { Media } from "@/_components/ui/media"

type Props = {
  articles: Article[]
}

export const ArticleList: FC<Props> = ({ articles }) => {
  return (
    <ul className={styles.ul}>
      {articles.map((article) => (
        <Media
          key={article.title}
          title={article.title}
          thumbnail={article.thumbnail}
          date={article.date}
          href={`articles/${article.slug}`}
        />
      ))}
    </ul>
  )
}
