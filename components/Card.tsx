'use client'
import Image from 'next/image'
import { CardItem } from '@/lib/utils'

export default function Card({ item }: { item: CardItem }) {
  return (
  <article className="group relative aspect-[2/3] w-full overflow-hidden rounded-md bg-white/5">
      <Image
        src={item.image}
        alt={item.alt ?? item.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
  <h4 className="absolute bottom-1.5 left-1.5 right-1.5 line-clamp-2 text-[11px] font-medium text-white/90">
        {item.title}
      </h4>
    </article>
  )
}
