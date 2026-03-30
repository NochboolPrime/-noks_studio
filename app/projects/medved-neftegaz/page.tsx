"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

const tasks = [
  "Создать представительский сайт уровня Enterprise",
  "Разработать строгий корпоративный дизайн",
  "Реализовать каталог продукции с фильтрацией",
  "Создать админ-панель для управления контентом",
  "Внедрить систему аналитики и статистики",
  "Обеспечить высокую производительность и SEO",
]

const features = [
  {
    title: "Динамический контент",
    description: "Весь контент сайта управляется через админ-панель: товары, сертификаты, новости, баннеры"
  },
  {
    title: "Корпоративный стиль",
    description: "Строгий темный дизайн с золотыми акцентами, соответствующий статусу многомиллиардной компании"
  },
  {
    title: "Полная CMS",
    description: "Админ-панель с 12+ разделами: товары, каталог PDF, сертификаты, производство, аналитика"
  },
  {
    title: "Аналитика и статистика",
    description: "Встроенная система отслеживания просмотров, кликов и популярности товаров"
  },
  {
    title: "Middleware защита",
    description: "Защита админ-панели через Next.js Middleware — доступ только для авторизованных пользователей"
  },
  {
    title: "Мультиязычность",
    description: "Поддержка переключения языков и локализации контента"
  },
]

const technologies = [
  { name: "Next.js", label: "React-фреймворк" },
  { name: "TypeScript", label: "Типизация" },
  { name: "Tailwind CSS", label: "Стилизация" },
  { name: "PostgreSQL", label: "База данных" },
  { name: "Prisma", label: "ORM" },
  { name: "Middleware", label: "Защита роутов" },
]

const adminFeatures = [
  "Управление товарами и каталогом",
  "Загрузка PDF-каталогов",
  "Редактирование сертификатов",
  "Настройка главного баннера",
  "Управление новостями и анонсами",
  "Встроенная аналитика с графиками",
]

const screenshots = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medved-hero-YUKEkEWZhD4OZEzlmfhMD74LNnz22S.png",
    alt: "Главная страница",
    label: "Hero"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medved-catalog-2h2jbqT40wEIT3GCIcTLAFjQzoRSwB.png",
    alt: "Каталог продукции",
    label: "Каталог"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medved-about-58uy7neiNtqytNUVqZ4g5bZulPJV4f.png",
    alt: "О компании",
    label: "О компании"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medved-certificates-0whXwdJy1k7zo0DI9gP8xcdLCGi6E4.png",
    alt: "Сертификаты",
    label: "Сертификаты"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medved-admin-gvpj6HHrkPRrm5Kco7sdPkwvOC7F7W.png",
    alt: "Админ-панель",
    label: "Админ-панель"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medved-analytics-XeHP0laKftfgy8fYt6iTEWLKDzgYbY.png",
    alt: "Аналитика",
    label: "Аналитика"
  },
]

export default function MedvedNeftegazPage() {
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
            href="https://medved-neftegaz.ru/" 
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
              Корпоративный сайт / 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 max-w-4xl text-balance">
              ТД Медведь Нефтегаз
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Корпоративный сайт для многомиллиардной компании в нефтегазовой отрасли с полнофункциональной системой управления контентом
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medved-hero-YUKEkEWZhD4OZEzlmfhMD74LNnz22S.png"
              alt="ТД Медведь Нефтегаз - главная страница"
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
                  ТД Медведь — крупнейший производитель нефтегазового оборудования в России. 
                  Компания с многомиллиардным оборотом нуждалась в сайте, который отражает её статус и масштаб деятельности.
                </p>
                <p>
                  Мы разработали корпоративный сайт в строгом темном стиле с золотыми акцентами, 
                  который передает надежность и премиальность бренда. Особый акцент был сделан на каталоге продукции и системе управления контентом.
                </p>
                <p>
                  Уникальная особенность проекта — полноценная админ-панель, позволяющая управлять всем контентом сайта 
                  без привлечения разработчиков: товарами, сертификатами, новостями, баннерами и даже аналитикой.
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
                <h2 className="text-2xl md:text-3xl font-medium">Задачи</h2>
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
              href="https://medved-neftegaz.ru/" 
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
              004 / Особенности
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
                <h3 className="font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
              005 / Стек
            </span>
            <h2 className="text-2xl md:text-3xl font-medium">Технологии</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="text-center"
              >
                <div className="text-lg font-medium mb-1">{tech.name}</div>
                <div className="text-xs text-background/50">{tech.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin panel section */}
      <section className="px-6 md:px-12 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                  006 / Уникальная разработка
                </span>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">
                  Админ-панель полного цикла
                </h2>
                <p className="text-muted-foreground mb-8">
                  Мы создали мощную систему управления контентом с 12+ разделами, 
                  которая позволяет заказчику полностью контролировать сайт.
                </p>
                <ul className="space-y-3">
                  {adminFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * index }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-video overflow-hidden border border-border"
              >
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medved-admin-gvpj6HHrkPRrm5Kco7sdPkwvOC7F7W.png"
                  alt="Админ-панель ТД Медведь"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
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
              007 / Галерея
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
