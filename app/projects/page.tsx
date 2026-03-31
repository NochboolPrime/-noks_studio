"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "ТД Медведь Нефтегаз",
    category: "Корпоративный сайт + CMS",
    year: "2025",
    href: "/projects/medved-neftegaz",
    externalUrl: "https://medved-neftegaz.ru/",
    description: "Корпоративный сайт для многомиллиардной компании в нефтегазовой отрасли с полнофункциональной системой управления контентом и 12+ разделами админ-панели.",
    image: "/images/projects/medved-hero.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "CMS"]
  },
  {
    id: "02",
    title: "ФинЭксперт",
    category: "Лендинг",
    year: "2025",
    href: "/projects/finexpert",
    externalUrl: "https://fin-exp.vercel.app/",
    description: "Современный лендинг для финансовой консалтинговой компании с адаптивным дизайном, слайдером отзывов и формой обратной связи.",
    image: "/images/projects/finexpert-hero.png",
    tags: ["React", "Next.js", "Tailwind CSS", "SEO"]
  },
  {
    id: "03",
    title: "CinemaVault",
    category: "Стриминговая платформа",
    year: "2024",
    href: "/projects/cinemavault",
    externalUrl: "https://cinemavaulttest.vercel.app/",
    description: "Стриминговая платформа с каталогом фильмов, личными списками пользователей, системой авторизации и полноценной админ-панелью для управления контентом.",
    image: "/images/projects/cinemavault-hero.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Auth.js", "Prisma"]
  },
  {
    id: "04",
    title: "БилетБус",
    category: "Сервис бронирования",
    year: "2024",
    href: "/projects/biletbus",
    externalUrl: "https://bitelbustestnew.vercel.app/",
    description: "Сервис онлайн-бронирования автобусных билетов с тремя ролями пользователей, PDF-билетами, панелью водителя и полноценной админ-панелью.",
    image: "/images/projects/biletbus-hero.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Middleware", "PDF"]
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
          <Link 
            href="/#contact" 
            className="text-sm hover:text-accent transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
              / Портфолио
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              Наши проекты
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Реализованные проекты для бизнеса разных масштабов — от простых лендингов до сложных платформ с полноценными системами управления контентом.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="p-6 border border-border">
              <span className="text-3xl md:text-4xl font-medium">{projects.length}</span>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Проектов</p>
            </div>
            <div className="p-6 border border-border">
              <span className="text-3xl md:text-4xl font-medium">2</span>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Года работы</p>
            </div>
            <div className="p-6 border border-border">
              <span className="text-3xl md:text-4xl font-medium">100%</span>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Довольных клиентов</p>
            </div>
            <div className="p-6 border border-border">
              <span className="text-3xl md:text-4xl font-medium">12+</span>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Технологий</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 lg:px-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
                  {/* Image */}
                  <div className={`col-span-12 lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Link href={project.href} className="block">
                      <div className="aspect-video overflow-hidden border border-border bg-muted">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Content */}
                  <div className={`col-span-12 lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs text-muted-foreground font-mono">{project.id}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{project.year}</span>
                    </div>
                    
                    <Link href={project.href}>
                      <h2 className="text-2xl md:text-3xl font-medium mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>
                    </Link>
                    
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                      {project.category}
                    </p>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs border border-border hover:bg-foreground hover:text-background transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <Link 
                        href={project.href}
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                      >
                        Подробнее
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <a 
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Открыть сайт
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-foreground text-background">
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
            <p className="text-background/70 mb-8 max-w-xl mx-auto">
              Свяжитесь с нами, чтобы обсудить ваш проект и получить бесплатную консультацию
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground hover:bg-accent hover:text-background transition-colors"
            >
              Обсудить проект
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm font-medium">
            НОКС
          </Link>
          <span className="text-xs text-muted-foreground">
            2024 — 2025
          </span>
        </div>
      </footer>
    </main>
  )
}
