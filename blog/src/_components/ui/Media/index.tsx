import { FC } from "react"
import styles from "./index.module.scss"
import Image from "next/image"

export type Media = {
  thumbnail: string
  title: string
  description: string
}

type Props = Media

export const Media: FC<Props> = ({ thumbnail, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={thumbnail} alt={title} layout="fill" />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
