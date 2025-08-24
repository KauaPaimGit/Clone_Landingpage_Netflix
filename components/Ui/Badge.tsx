'use client'
import { cn } from '@/lib/utils'

type Props = { children: React.ReactNode; className?: string }

export default function Badge({ children, className }: Props) {
  return (
    <span className={cn('inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs text-fg', className)}>
      {children}
    </span>
  )
}
