"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const cases = [
  {
    id: "01",
    title: "ТД Медведь Нефтегаз",
    category: "Корпоративный сайт + CMS",
    year: "2025",
    href: "/projects/medved-neftegaz"
  },
  {
    id: "02",
    title: "ФинЭксперт",
    category: "Лендинг",
    year: "2025",
    href: "/projects/finexpert"
  },
  {
    id: "03",
    title: "CinemaVault",
    category: "Стриминговая платформа",
    year: "2024",
    href: "/projects/cinemavault"
  },
  {
    id: "04",
    title: "БилетБус",
    category: "Сервис бронирования",
    year: "2024",
    href: "/projects/biletbus"
  },
]

export function Cases() {
  return (
    <section id="cases" className="py-32 px-6 md:px-12 lg:px-20 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-[10px] uppercase tracking-widest text-background/50 mb-4 block">/ Кейсы</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Проекты</h2>
          </div>
          <span className="hidden md:block text-[10px] uppercase tracking-widest text-background/50">
            мы сделали много хороших проектов
          </span>
        </motion.div>

        {/* Cases list with arrows */}
        <div className="border-t border-background/20">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Link 
                href={caseItem.href}
                className="group flex items-center justify-between py-6 border-b border-background/20 hover:pl-4 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs text-background/40 font-mono">{caseItem.id}</span>
                  <h3 className="text-lg md:text-xl font-medium group-hover:text-accent transition-colors">{caseItem.title}</h3>
                  <span className="hidden md:block text-xs text-background/40 uppercase tracking-wider">{caseItem.category}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-background/40">{caseItem.year}</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See more link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors group"
          >
            <span>Смотреть все проекты</span>
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
