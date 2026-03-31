"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Лендинги",
    description: "Продающие одностраничные сайты с высокой конверсией. Идеально для запуска нового продукта или услуги.",
    details: ["Адаптивный дизайн", "SEO-оптимизация", "Интеграция с CRM", "A/B тестирование"]
  },
  {
    id: "02",
    title: "Корпоративные сайты",
    description: "Многостраничные сайты для компаний с каталогами, блогами и личными кабинетами.",
    details: ["Уникальный дизайн", "Система управления контентом", "Личный кабинет", "Интеграции"]
  },
  {
    id: "03",
    title: "Автоматизация",
    description: "Интеграция CRM, чат-ботов, автоматических рассылок и систем учёта.",
    details: ["Telegram/WhatsApp боты", "CRM интеграция", "Автоматические отчёты", "API разработка"]
  },
  {
    id: "04",
    title: "Интернет-магазины",
    description: "Полноценные e-commerce решения с корзиной, оплатой и системой доставки.",
    details: ["Каталог товаров", "Онлайн-оплата", "Складской учёт", "Маркетплейсы"]
  },
]

export function Services() {
  const [openId, setOpenId] = useState<string | null>("01")

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-5"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-8 block">/ Услуги</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Наши услуги
            </h2>
            
            {/* Feature image */}
            <div className="hidden lg:block mt-12">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">003 / Процесс</span>
              <div className="aspect-[4/5] bg-foreground/5 overflow-hidden">
                <img 
                  src="/images/robot.jpg" 
                  alt="Surrealist robot"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Accordion */}
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-0">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setOpenId(openId === service.id ? null : service.id)}
                    className="w-full py-8 flex items-start justify-between text-left group"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="text-xs text-muted-foreground">{service.id}</span>
                      <span className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">
                        {service.title}
                      </span>
                    </div>
                    <div className="mt-2">
                      {openId === service.id ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openId === service.id ? "auto" : 0,
                      opacity: openId === service.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-12">
                      <p className="text-sm text-muted-foreground mb-6 max-w-md">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {service.details.map((detail, i) => (
                          <span 
                            key={i}
                            className="text-[10px] uppercase tracking-widest px-3 py-1.5 border border-border"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-8"
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors group"
              >
                <span>Обсудить проект</span>
                <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                  &rarr;
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
