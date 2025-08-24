import Container from './Ui/Container'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <Container>
        <nav aria-label="rodapé" className="grid grid-cols-2 gap-4 text-sm text-muted sm:grid-cols-4">
          <a className="hover:text-fg" href="#features">Recursos</a>
          <a className="hover:text-fg" href="#popular">Populares</a>
          <a className="hover:text-fg" href="#plans">Planos</a>
          <a className="hover:text-fg" href="#cta">Assinar</a>
        </nav>
        <p className="mt-8 text-xs text-muted">
          Projeto educativo inspirado em uma landing famosa. Sem uso de marcas ou logos oficiais. © {new Date().getFullYear()} BrandX.
        </p>
      </Container>
    </footer>
  )
}
