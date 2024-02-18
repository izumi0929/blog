import styles from "./index.module.scss"
import { UilAngleRight } from "@iconscout/react-unicons"
import Link from "next/link"

type Props = {
  previousPages: { href: string; title: string }[]
  currentPage: string
}

export const BreadCrumbs = ({ previousPages, currentPage }: Props) => {
  return (
    <nav aria-label="パンクズ" className={styles.breadCrumbs}>
      <ul>
        {previousPages.map((page, index) => (
          <li key={index}>
            <Link href={page.href}>{page.title}</Link>
            <UilAngleRight />
          </li>
        ))}
        <li>{currentPage}</li>
      </ul>
    </nav>
  )
}
