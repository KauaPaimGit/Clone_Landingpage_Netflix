'use client'
import Container from './Ui/Container'
import Button from './Ui/Button'
import { finalCta } from '@/lib/data'
import { track } from '@/lib/analytics'

export default function CTASection() {
  return (
    <section id="cta" className="py-20">
      <Container>
        <div className="rounded-2xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 p-8 text-center">
          <h2 className="font-display text-3xl font-bold">{finalCta.title}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted">{finalCta.subtitle}</p>
          <div className="mt-6">
            <Button href={finalCta.button.href} size="lg" onClick={() => track('cta_click', { id: 'final' })}>
              {finalCta.button.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
