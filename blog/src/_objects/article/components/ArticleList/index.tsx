import { Article } from "@/_objects/article/types/Article"
import { FC } from "react"
import styles from "./index.module.scss"
import Link from "next/link"
import { Media } from "@/_components/ui/Media"

type Props = {
  articles: Article[]
}

export const ArticleList: FC<Props> = ({ articles }) => {
  return (
    <ul className={styles.ul}>
      {articles.map((article) => (
        <li key={article.title}>
          <Link href={`articles/${article.slug}`}>
            <Media {...article} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
