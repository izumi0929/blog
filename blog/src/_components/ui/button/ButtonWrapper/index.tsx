import React, { forwardRef } from "react"

import styles from "./index.module.css"
import { ButtonWrapperProps } from "@/_components/ui/button/type"

export const ButtonWrapper = forwardRef<HTMLButtonElement, ButtonWrapperProps>(
  ({ variant = "filled", size = "large", ...props }, ref) => {
    return (
      <button className={styles.button} {...props} ref={ref}>
        {props.children}
      </button>
    )
  }
)
