'use client'

import * as React from 'react'

export interface AvatarProps {
  children: React.ReactNode
}

export function Avatar({ children, ...other }: AvatarProps): JSX.Element {
  return <div {...other}>{children}</div>
}

Avatar.displayName = 'Avatar'
