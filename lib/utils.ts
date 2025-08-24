export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export const clamp = (min: number, value: number, max: number) => Math.min(Math.max(value, min), max)

export type CardItem = {
  id: string
  title: string
  image: string
  alt?: string
}

export type CarouselRow = {
  id: string
  title: string
  items: CardItem[]
}

export const media = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)'
}

