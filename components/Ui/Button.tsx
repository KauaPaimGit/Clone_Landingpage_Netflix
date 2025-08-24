'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50'
const variants = {
  primary: 'bg-primary text-black hover:bg-green-500',
  secondary: 'bg-accent text-black hover:bg-blue-400',
  ghost: 'bg-transparent text-fg hover:bg-white/10'
}
const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-6 text-lg'
}

export default function Button({ href, variant = 'primary', size = 'md', className, children, onClick }: Props) {
  const cls = cn(base, variants[variant], sizes[size], className)
  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  }
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
