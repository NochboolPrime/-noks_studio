"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "FlutterFlow", description: "Low-code платформа" },
  { name: "Supabase", description: "PostgreSQL база данных" },
  { name: "Flutter", description: "Кроссплатформенная разработка" },
]

const services = [
  { icon: "✏️", name: "Иллюстрация" },
  { icon: "🎨", name: "UX/UI дизайн" },
  { icon: "📱", name: "Android & iOS разработка" },
]

export function Technologies() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Технологии
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-secondary rounded-xl px-5 py-3 border border-border/50"
                >
                  <p className="font-medium text-foreground">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Что делали?
            </h3>
            <div className="flex flex-wrap gap-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center gap-3 bg-secondary rounded-xl px-5 py-3 border border-border/50"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-medium text-foreground">{service.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
