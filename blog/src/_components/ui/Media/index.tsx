import { FC } from "react"
import styles from "./index.module.scss"
import Image from "next/image"
import { formatDate } from "@/lib/date/format"

export type Media = {
  thumbnail: string
  title: string
  date: string
}

type Props = Media

export const Media: FC<Props> = ({ thumbnail, title, date }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={thumbnail} alt={title} layout="fill" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{formatDate(date)}</p>
      </div>
    </div>
  )
}
