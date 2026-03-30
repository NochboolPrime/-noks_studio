"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "+42%",
    label: "NPS обучения",
    description: "Больше вовлеченности, меньше потерь (домашка, переносы занятий)",
  },
  {
    value: "+120%",
    label: "Продажи клубов",
    description: "Благодаря удобным групповым чатам",
  },
  {
    value: "-17%",
    label: "Отток учеников",
    description: "Геймификация и органайзер удерживают лучше",
  },
]

export function Results() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-wider mb-4 opacity-80">
            Результат
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto text-balance">
            Приложение легко встроилось в бизнес процессы школы
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto">
            Ученики и сотрудники быстро мигрировали из Telegram / WhatsApp в новый инструмент
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <p className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</p>
              <p className="text-xl font-semibold mb-2">{stat.label}</p>
              <p className="text-sm opacity-80">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
