import { Slot } from '@radix-ui/react-slot'
import { cn } from '@xstyle-test/theme'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

import './style.css'

const buttonVariants = cva('x_btn_wrapper', {
  variants: {
    variant: {
      default: 'x_btn_default',
      'default-outline': 'x_btn_default_outline',
      destructive: 'x_btn_destructive',
      'destructive-outline': 'x_btn_destructive_outline',
      outline: 'x_btn_outline',
      secondary: 'x_btn_secondary',
      ghost: 'x_btn_ghost',
      link: 'x_btn_link',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    },
    rounded: {
      default: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      xxl: 'rounded-2xl',
      none: 'rounded-none',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    rounded: 'default',
  },
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className, rounded }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
