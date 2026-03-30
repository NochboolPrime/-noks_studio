"use client"

import { motion } from "framer-motion"

export function TaskSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Задача
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
              Основной задачей было перевести действующую школу иностранных языков с разрозненных чатов и таблиц в единую цифровую экосистему
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Весь процесс обучения — от уроков до оплат и аналитики — должен быть собран в одном месте
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
