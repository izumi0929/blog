import { ButtonHTMLAttributes, ReactNode } from "react"

export type ButtonWrapperProps = {
  variant?: "filled" | "outlined"
  size?: "small" | "medium" | "large"
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = ButtonWrapperProps
