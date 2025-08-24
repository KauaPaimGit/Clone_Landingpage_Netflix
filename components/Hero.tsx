'use client'
import Image from 'next/image'
import Container from './Ui/Container'
import Button from './Ui/Button'
import { hero } from '@/lib/data'
import { motion } from 'framer-motion'
import { track } from '@/lib/analytics'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40">
        <Image
          src={hero.image}
          alt="Fundo genérico"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>
  <Container className="relative flex min-h-[72vh] flex-col items-center justify-center py-16 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.12 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-extrabold tracking-tightest sm:text-5xl md:text-6xl"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.14, delay: 0.04 }}
          viewport={{ once: true }}
          className="mt-3 max-w-2xl text-base leading-snug text-muted sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16, delay: 0.08 }}
          viewport={{ once: true }}
          className="mt-6 flex gap-3"
        >
          <Button href={hero.ctas[0].href} variant="primary" size="lg" onClick={() => track('cta_click', { id: hero.ctas[0].id })}>
            {hero.ctas[0].label}
          </Button>
          <Button href={hero.ctas[1].href} variant="ghost" size="lg" onClick={() => track('cta_click', { id: hero.ctas[1].id })}>
            {hero.ctas[1].label}
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
