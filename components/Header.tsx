'use client'
import { useEffect, useState } from 'react'
import { Menu, Sun, Moon } from 'lucide-react'
import Container from './Ui/Container'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  return (
    <header
      role="banner"
      aria-label="Topo"
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="#" className="font-display text-xl font-bold tracking-tightest">
          BrandX
        </Link>
        <nav aria-label="principal" className="hidden gap-6 md:flex">
          <Link className="text-sm text-muted hover:text-fg" href="#features">Recursos</Link>
          <Link className="text-sm text-muted hover:text-fg" href="#popular">Populares</Link>
          <Link className="text-sm text-muted hover:text-fg" href="#plans">Planos</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Alternar tema" className="rounded p-2 hover:bg-white/10" onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Abrir menu"
            className="rounded p-2 hover:bg-white/10 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </Container>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
