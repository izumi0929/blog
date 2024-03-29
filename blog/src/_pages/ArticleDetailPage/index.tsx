"use client"

import { FC, useEffect } from "react"
import styles from "./index.module.scss"

import { Article } from "@/_objects/article/types/Article"
import hljs from "highlight.js"
import "highlight.js/styles/github-dark.css"
import { formatDate } from "@/lib/date/format"
import { BreadCrumbs } from "@/_components/ui/breadCrumbs"

type Props = {
  article: Article
}

export const ArticleDetailPage: FC<Props> = ({ article }) => {
  useEffect(() => {
    hljs.highlightAll()
  })
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.breadCrumbsContainer}>
          <BreadCrumbs
            previousPages={[
              {
                title: "記事一覧",
                href: "/articles"
              }
            ]}
            currentPage={article.title}
          />
        </div>
        <h1>{article.title}</h1>
        <time>{formatDate(article.date)}</time>
        <img className={styles.keyVisual} src={article.thumbnail} />
        <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
      </div>
    </main>
  )
}
