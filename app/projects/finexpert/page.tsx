"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"

const tasks = [
  "Разработка современного адаптивного сайта",
  "Создание удобной структуры для презентации услуг",
  "Интеграция форм обратной связи",
  "Оптимизация скорости загрузки",
  "SEO-оптимизация для поисковых систем",
]

const features = [
  {
    title: "Полностью адаптивная верстка",
    description: "Безупречное отображение на всех устройствах от мобильных до десктопов"
  },
  {
    title: "Интерактивные элементы",
    description: "Плавные анимации и интерактивные компоненты для улучшения UX"
  },
  {
    title: "Оптимизация под SEO",
    description: "Семантическая верстка и мета-теги для поисковых систем"
  },
  {
    title: "Форма обратной связи",
    description: "Удобная форма записи на прием с валидацией"
  },
  {
    title: "Слайдер отзывов",
    description: "Карусель с отзывами довольных клиентов компании"
  },
  {
    title: "Быстрая загрузка",
    description: "Время загрузки страниц менее 2 секунд"
  },
]

const technologies = [
  { name: "React", label: "UI библиотека" },
  { name: "Next.js", label: "Фреймворк" },
  { name: "TypeScript", label: "Типизация" },
  { name: "Tailwind CSS", label: "Стилизация" },
]

const screenshots = [
  { src: "/images/projects/finexpert-hero.png", alt: "Услуги компании", label: "Услуги" },
  { src: "/images/projects/finexpert-about.png", alt: "О компании", label: "Миссия" },
  { src: "/images/projects/finexpert-mission.png", alt: "Принципы работы", label: "Принципы" },
  { src: "/images/projects/finexpert-reviews.png", alt: "Отзывы клиентов", label: "Отзывы" },
  { src: "/images/projects/finexpert-contact.png", alt: "Контакты", label: "Контакты" },
]

export default function FinExpertPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </Link>
          <a 
            href="https://fin-exp.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            Открыть сайт
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
              Лендинг / 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 max-w-4xl text-balance">
              ФинЭксперт
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Современный лендинг для финансовой консалтинговой компании с акцентом на профессионализм и доверие
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main screenshot */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video overflow-hidden border border-border"
          >
            <img 
              src="/images/projects/finexpert-about.png"
              alt="ФинЭксперт - главная страница"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About project */}
      <section className="px-6 md:px-12 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                  001 / О проекте
                </span>
                <h2 className="text-2xl md:text-3xl font-medium">О проекте</h2>
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6 text-muted-foreground"
              >
                <p>
                  ФинЭксперт — это современный корпоративный сайт для компании, предоставляющей широкий спектр 
                  финансовых и бухгалтерских услуг. Проект создан с использованием передовых технологий веб-разработки.
                </p>
                <p>
                  Основная задача — создать профессиональный имидж компании, подчеркнуть экспертность и вызвать 
                  доверие у потенциальных клиентов. Дизайн выполнен в сдержа��ных корпоративных тонах с акцентами 
                  зеленого цвета, символизирующего стабильность и рост.
                </p>
                <p>
                  Сайт успешно запущен и эффективно привлекает новых клиентов. Время загрузки страниц составляет 
                  менее 2 секунд, а конверсия формы обратной связи превышает средние показатели по отрасли.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tasks */}
      <section className="px-6 md:px-12 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                  002 / Задачи
                </span>
                <h2 className="text-2xl md:text-3xl font-medium">Задачи проекта</h2>
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="space-y-0">
                {tasks.map((task, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    className="flex items-start gap-6 py-4 border-b border-border"
                  >
                    <span className="text-xs text-muted-foreground font-mono w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-foreground">{task}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Visit site */}
      <section className="px-6 md:px-12 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a 
              href="https://fin-exp.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-accent transition-colors text-lg"
            >
              Смотреть сайт
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
              003 / Особенности
            </span>
            <h2 className="text-2xl md:text-3xl font-medium">Ключевые особенности</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 border border-border hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <h3 className="font-medium">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-8">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 md:px-12 py-20 border-t border-border bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[10px] uppercase tracking-widest text-background/50 mb-4 block">
              004 / Стек
            </span>
            <h2 className="text-2xl md:text-3xl font-medium">Технологии</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="text-center p-6 border border-background/20"
              >
                <div className="text-xl font-medium mb-2">{tech.name}</div>
                <div className="text-xs text-background/50">{tech.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots gallery */}
      <section className="px-6 md:px-12 py-20 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
              005 / Галерея
            </span>
            <h2 className="text-2xl md:text-3xl font-medium">Скриншоты проекта</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="aspect-video overflow-hidden border border-border bg-background mb-3">
                  <img 
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {screenshot.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              Хотите такой же проект?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Свяжитесь с нами, чтобы обсудить ваш проект и получить бесплатную консультацию
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Связаться с нами
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            НОКС
          </Link>
          <span className="text-xs text-muted-foreground">
            2025
          </span>
        </div>
      </footer>
    </main>
  )
}
