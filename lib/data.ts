import type { CardItem, CarouselRow } from './utils'

export const hero = {
  title: 'Filmes, séries e muito mais. Sem limites.',
  subtitle: 'Assista quando quiser. Cancele quando quiser. Projeto educativo com identidade genérica.',
  ctas: [
    { id: 'start', label: 'Começar agora', href: '#cta' },
    { id: 'plans', label: 'Ver planos', href: '#plans' }
  ],
  image:
    'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1600&auto=format&fit=crop'
}

export const features = [
  {
    id: 'offline',
    title: 'Baixe para assistir offline',
    description: 'Salve seus favoritos e assista em qualquer lugar.',
    icon: 'download'
  },
  {
    id: 'kids',
    title: 'Perfil infantil',
    description: 'Conteúdo seguro para os pequenos explorarem.',
    icon: 'shield'
  },
  {
    id: 'devices',
    title: 'Assista em qualquer dispositivo',
    description: 'TV, notebook, celular e tablet com suporte total.',
    icon: 'monitor'
  },
  {
    id: 'originals',
    title: 'Títulos imperdíveis',
    description: 'Catálogo variado para todos os gostos.',
    icon: 'star'
  }
]

const placeholder = (w: number, h: number, seed: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}.webp`

const makeItems = (count: number, aspect: [number, number] = [16, 9]): CardItem[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `item-${i + 1}`,
    title: `Título ${i + 1}`,
    image: placeholder(640, Math.round((640 / aspect[0]) * aspect[1]), i + 1),
    alt: `Poster genérico ${i + 1}`
  }))
}

export const contentRows: CarouselRow[] = [
  { id: 'trending', title: 'Em alta', items: makeItems(12) },
  { id: 'top', title: 'Mais assistidos', items: makeItems(12) },
  { id: 'new', title: 'Lançamentos', items: makeItems(12) }
]

export const finalCta = {
  title: 'Pronto para assistir? Comece agora.',
  subtitle: 'Teste gratuito fictício para fins educativos. Nenhum dado real será solicitado.',
  button: { label: 'Criar conta genérica', href: '#cta' }
}
