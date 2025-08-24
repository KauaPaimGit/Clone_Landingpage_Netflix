'use client'
import Container from './Ui/Container'
import { Download, Shield, Monitor, Star } from 'lucide-react'
import { motion } from 'framer-motion'

type Item = { id: string; title: string; description: string; icon: string }

const iconMap: Record<string, JSX.Element> = {
  download: <Download />,
  shield: <Shield />,
  monitor: <Monitor />,
  star: <Star />
}

export default function FeatureSection({ items }: { items: Item[] }) {
  return (
    <section id="features" className="py-16">
      <Container>
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.12, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <div className="mb-2.5 text-accent">{iconMap[it.icon]}</div>
              <h3 className="mb-0.5 font-medium tracking-tightest">{it.title}</h3>
              <p className="text-[13px] leading-snug text-muted">{it.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
