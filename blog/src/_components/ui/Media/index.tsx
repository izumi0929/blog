import { FC } from "react"
import styles from "./index.module.scss"
import Image from "next/image"
import { formatDate } from "@/lib/date/format"
import Link from "next/link"

export type Media = {
  thumbnail: string
  title: string
  date: string
  href: string
}

type Props = Media

export const Media: FC<Props> = ({ thumbnail, title, date, href }) => {
  return (
    <Link href={href} className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={thumbnail} alt={title} layout="fill" />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{formatDate(date)}</p>
    </Link>
  )
}
