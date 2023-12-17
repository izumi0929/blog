import { ButtonWrapper } from "@/_components/ui/button/ButtonWrapper"
import { ButtonProps } from "@/_components/ui/button/type"
import { forwardRef } from "react"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "filled", size = "large", ...props }, ref) => {
    return (
      <ButtonWrapper variant={variant} size={size} {...props} ref={ref}>
        {props.children}
      </ButtonWrapper>
    )
  }
)
