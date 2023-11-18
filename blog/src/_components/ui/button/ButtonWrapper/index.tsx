import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from "react"

import styles from "./index.module.css"

type Props = {
  variant?: "filled" | "outlined"
  size?: "small" | "medium" | "large"
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonWrapper = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "filled", size = "large", ...props }, ref) => {
    return (
      <button className={styles.button} {...props} ref={ref}>
        {props.children}
      </button>
    )
  }
)
