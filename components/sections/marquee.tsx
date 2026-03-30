"use client"

import { motion } from "framer-motion"

const words = [
  "ЛЕНДИНГИ", "КОРПОРАТИВНЫЕ САЙТЫ", "АВТОМАТИЗАЦИЯ", "CRM", "ЧАТБОТЫ",
  "ИНТЕРНЕТ-МАГАЗИНЫ", "SEO", "ИНТЕГРАЦИИ", "API", "TELEGRAM БОТЫ",
  "ДИЗАЙН", "РАЗРАБОТКА", "ПОДДЕРЖКА", "АНАЛИТИКА", "МАРКЕТИНГ"
]

export function Marquee() {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30, 
          ease: "linear" 
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...words, ...words, ...words].map((word, index) => (
          <span 
            key={index} 
            className="text-sm md:text-base font-medium text-muted-foreground/50 hover:text-foreground transition-colors cursor-default"
          >
            {word}
            <span className="mx-8 text-accent">*</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
