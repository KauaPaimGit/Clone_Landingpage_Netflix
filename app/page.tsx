import Header from '@/components/Header'
import Hero from '@/components/Hero'
import dynamic from 'next/dynamic'
const FeatureSection = dynamic(() => import('@/components/FeatureSection'), { ssr: false })
const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: false })
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
import { contentRows, features } from '@/lib/data'
import Container from '@/components/Ui/Container'
const Card = dynamic(() => import('@/components/Card'), { ssr: false })

export default function Page() {
  return (
    <main id="content">
      <Header />
      <Hero />
      <FeatureSection items={features} />
      {/* Responsive grid of cards */}
      <section aria-labelledby="grid-title" className="py-12">
        <Container>
          <h2 id="grid-title" className="mb-4 text-lg font-semibold text-fg">
            Sugestões para você
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {contentRows[0].items.slice(0, 12).map((item) => (
              <Card key={`grid-${item.id}`} item={item} />
            ))}
          </div>
        </Container>
      </section>
      {contentRows.map((row) => (
        <section id={row.id === 'trending' ? 'popular' : undefined} key={row.id} aria-labelledby={`row-${row.id}`} className="py-8">
          <Container>
            <h2 id={`row-${row.id}`} className="mb-4 text-lg font-semibold text-fg">
              {row.title}
            </h2>
            <Carousel items={row.items} label={row.title} />
          </Container>
        </section>
      ))}
      {/* Plans anchor section */}
      <section id="plans" className="py-16">
        <Container>
          <h2 className="mb-2 text-xl font-semibold">Planos</h2>
          <p className="text-muted">Planos fictícios para demonstração. Escolha o que combina com você.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 p-4">
              <h3 className="font-medium">Essencial</h3>
              <p className="text-sm text-muted">Qualidade padrão, 1 tela.</p>
            </div>
            <div className="rounded-lg border border-white/10 p-4">
              <h3 className="font-medium">Padrão</h3>
              <p className="text-sm text-muted">HD, 2 telas.</p>
            </div>
            <div className="rounded-lg border border-white/10 p-4">
              <h3 className="font-medium">Premium</h3>
              <p className="text-sm text-muted">4K, 4 telas.</p>
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
      <Footer />
    </main>
  )
}
