"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left side - Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-5"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-8 block">/ О нас</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
              Мы — это креативность, внимательность, прогрессивные и смелые решения
            </h2>
          </motion.div>

          {/* Right side - Description */}
          <div className="col-span-12 lg:col-span-7">
            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                НОКС — студия веб-разработки и автоматизации бизнес-процессов. Мы проектируем и создаём цифровые продукты для малого и среднего бизнеса.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                У нас нет готовых решений, каждый проект — уникальный. Мы всегда находим нестандартные подходы, творчески подходим к каждой задаче. Доверьтесь нашему опыту.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Images row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-12 gap-4 items-end"
        >
          {/* Circular image */}
          <div className="col-span-6 md:col-span-4 lg:col-span-3">
            <div className="aspect-square rounded-full overflow-hidden bg-foreground/5">
              <img 
                src="/images/about-1.jpg" 
                alt="Floppy disk"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Rectangular images */}
          <div className="col-span-6 md:col-span-4 lg:col-span-5">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">002 / Наша команда</span>
            <div className="aspect-[16/10] bg-foreground/5 overflow-hidden">
              <img 
                src="/images/about-2.jpg" 
                alt="IBM 3270 PC"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 lg:col-span-4">
            <div className="aspect-[4/3] bg-foreground/5 overflow-hidden">
              <img 
                src="/images/about-3.jpg" 
                alt="Military data center"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
