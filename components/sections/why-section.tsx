"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const reasons = [
  "Структурировать опыт ученика: чтобы ничего не терялось и не забывалось",
  "Оцифровать все инструменты обучения и добавить их в приложение",
  "Превратить app в удобный органайзер: ученику не нужно ничего кроме него для занятий",
  "Создать функционал для групповых уроков и языковых клубов",
]

export function WhySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Почему взяли этот проект в работу?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Мы увидели потенциал: превратить хаос в систему, которая вырастит бизнес
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Школа английского языка — это не рискованный стартап, а проверенный бизнес с реальным спросом. 
              Мы знали, что со 100% вероятностью добьемся результата.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-card rounded-xl border border-border/50"
                >
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
