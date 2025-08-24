import type { Metadata } from 'next'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://brandx-stream-landing.vercel.app'),
  title: {
    default: 'BrandX Stream — Filmes, séries e muito mais',
    template: '%s | BrandX Stream'
  },
  description:
    'Assista aos melhores filmes e séries com BrandX Stream. Sem logos oficiais, projeto educativo inspirado em uma landing famosa.',
  openGraph: {
    title: 'BrandX Stream — Filmes, séries e muito mais',
    description:
      'Assista aos melhores filmes e séries com BrandX Stream. Projeto educativo, identidade genérica.',
    url: 'https://brandx-stream-landing.vercel.app',
    siteName: 'BrandX Stream',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 900,
        alt: 'BrandX hero image'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandX Stream — Filmes, séries e muito mais',
    description: 'Projeto educativo com identidade genérica.',
    images: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop'
    ]
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-bg text-fg antialiased',
          inter.variable,
          montserrat.variable
        )}
      >
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-bg">
          Pular para conteúdo
        </a>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'BrandX Stream',
              url: 'https://brandx-stream-landing.vercel.app'
            }),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
                { '@type': 'ListItem', position: 2, name: 'Recursos', item: '#features' }
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
