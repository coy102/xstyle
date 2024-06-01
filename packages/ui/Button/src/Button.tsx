'use client'

import * as React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button className="bg-red-400" type="button" {...other}>
      {children}
    </button>
  )
}

Button.displayName = 'Button'
