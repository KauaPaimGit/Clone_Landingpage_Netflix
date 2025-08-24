'use client'
import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Card from './Card'
import type { CardItem } from '@/lib/utils'

export default function Carousel({ items, label }: { items: CardItem[]; label?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: number) => {
    const el = containerRef.current
    if (!el) return
    const width = el.clientWidth
    el.scrollBy({ left: dir * (width * 0.9), behavior: 'smooth' })
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') scrollBy(1)
      if (e.key === 'ArrowLeft') scrollBy(-1)
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [])

  return (
  <div className="relative" aria-label={label}>
      <button aria-label="Anterior" className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-fg hover:bg-black/70" onClick={() => scrollBy(-1)}>
        <ChevronLeft />
      </button>
      <div
        ref={containerRef}
        tabIndex={0}
        className="scrollbar-none flex gap-3 overflow-x-auto scroll-smooth px-10 py-2 [scrollbar-width:none]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-[160px] flex-[0_0_160px] snap-start">
            <Card item={item} />
          </div>
        ))}
      </div>
      <button aria-label="Próximo" className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-fg hover:bg-black/70" onClick={() => scrollBy(1)}>
        <ChevronRight />
      </button>
    </div>
  )
}
