'use client'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-40 transform transition-transform duration-200 md:hidden ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative ml-auto h-full w-72 bg-bg p-4 shadow-lg">
        <button aria-label="Fechar" className="mb-4 rounded p-2 hover:bg-white/10" onClick={onClose}>
          <X />
        </button>
        <nav className="flex flex-col gap-3" aria-label="mobile">
          <Link className="rounded px-2 py-2 hover:bg-white/10" href="#features" onClick={onClose}>
            Recursos
          </Link>
          <Link className="rounded px-2 py-2 hover:bg-white/10" href="#popular" onClick={onClose}>
            Populares
          </Link>
          <Link className="rounded px-2 py-2 hover:bg-white/10" href="#plans" onClick={onClose}>
            Planos
          </Link>
        </nav>
      </div>
    </div>
  )
}
