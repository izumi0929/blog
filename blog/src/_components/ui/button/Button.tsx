import { ButtonWrapper } from "@/_components/ui/button/ButtonWrapper"
import { forwardRef } from "react"

type Prop = {
  variant?: "filled" | "outlined"
  size?: "small" | "medium" | "large"
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Prop>(
  ({ variant = "filled", size = "large", ...props }, ref) => {
    return (
      <ButtonWrapper variant={variant} size={size} {...props} ref={ref}>
        {props.children}
      </ButtonWrapper>
    )
  }
)
