'use client'
import { cn } from '@/lib/utils'

type Props = React.PropsWithChildren<{ className?: string }>

export default function Container({ className, children }: Props) {
  return <div className={cn('mx-auto w-full max-w-[1280px] px-4 sm:px-5 md:px-6 lg:px-8', className)}>{children}</div>
}
