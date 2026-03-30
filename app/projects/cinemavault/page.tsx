"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function CinemaVaultCasePage() {
  const tasks = [
    "Создать полноценную стриминговую платформу",
    "Разработать систему авторизации и личного кабинета",
    "Реализовать каталог с фильтрацией по жанрам",
    "Создать админ-панель для управления контентом",
    "Внедрить систему списков просмотра для пользователей",
    "Настроить карусель и разделы на главной странице"
  ]

  const features = [
    {
      title: "Стриминг контента",
      description: "Просмотр фильмов и сериалов с удобным плеером, поддержка эпизодов и сезонов"
    },
    {
      title: "Личный кабинет",
      description: "Персональные списки просмотра: смотрю, просмотрено, отложено, брошено, запланировано"
    },
    {
      title: "Админ-панель",
      description: "Полное управление контентом: релизы, эпизоды, разделы, карусель, расписание"
    },
    {
      title: "Каталог с фильтрами",
      description: "Удобная навигация по жанрам, поиск и сортировка по всему каталогу"
    },
    {
      title: "Карусель и разделы",
      description: "Настраиваемые разделы на главной: триллеры, новинки, популярное"
    },
    {
      title: "Гибкое управление",
      description: "Добавление релизов с обложками, описанием, жанрами и возрастным рейтингом"
    }
  ]

  const technologies = [
    { name: "Next.js", description: "React-фреймворк" },
    { name: "TypeScript", description: "Типизация" },
    { name: "Tailwind CSS", description: "Стилизация" },
    { name: "PostgreSQL", description: "База данных" },
    { name: "Prisma", description: "ORM" },
    { name: "Auth.js", description: "Авторизация" }
  ]

  const screenshots = [
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cinemavault-hero-lDEF5EV5G8hIA76oPE5jQRggYPRRu6.png", 
      alt: "CinemaVault главная страница",
      label: "Главная страница"
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cinemavault-catalog-89snLx6CulAmzfbXQqkynCiiOQVaMe.png", 
      alt: "CinemaVault каталог",
      label: "Каталог фильмов"
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cinemavault-profile-fWIOSoamAzLErtmJBGZQOX5rlJEhWT.png", 
      alt: "CinemaVault профиль",
      label: "Личный кабинет"
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cinemavault-admin-giUoBEQMTsr6hj6zcFqpMrt4ZJmXUE.png", 
      alt: "CinemaVault админ-панель",
      label: "Админ-панель"
    },
    { 
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cinemavault-admin-form-0HRV5tBnj8hqndHDJhlMFvgRLGEVNi.png", 
      alt: "CinemaVault форма добавления",
      label: "Добавление релиза"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link 
            href="/#cases" 
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к проектам
          </Link>
          <a 
            href="https://cinemavaulttest.vercel.app/" 
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
              001 / Кейс
            </span>
            <span className="text-sm text-muted-foreground mb-4 block">
              Стриминговая платформа / 2024
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 max-w-4xl">
              CinemaVault
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              Полнофункциональная стриминговая платформа для просмотра фильмов и сериалов с админ-панелью и личным кабинетом
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main screenshot */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video overflow-hidden border border-border"
          >
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cinemavault-hero-lDEF5EV5G8hIA76oPE5jQRggYPRRu6.png"
              alt="CinemaVault главная страница"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About */}
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
                  О проекте
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
                className="space-y-6"
              >
                <p className="text-muted-foreground leading-relaxed">
                  CinemaVault — это полнофункциональная стриминговая платформа, созданная как демо-версия онлайн-кинотеатра. 
                  Проект демонстрирует все возможности современного веб-приложения для просмотра фильмов и сериалов.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Платформа включает систему авторизации, личный кабинет с персональными списками просмотра, 
                  каталог с фильтрацией по жанрам, а также полноценную админ-панель для управления контентом.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Уникальная особенность — возможность полностью протестировать все функции: зарегистрироваться, 
                  создать списки просмотра, а также войти в админ-панель и попробовать управление контентом.
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://cinemavaulttest.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-accent transition-colors text-lg"
            >
              Смотреть сайт
              <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://cinemavaulttest.vercel.app/admin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-foreground hover:bg-foreground hover:text-background transition-colors text-lg"
            >
              Админ-панель
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground mt-4"
          >
            Пароль для админ-панели: 2284856
          </motion.p>
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
              003 / Возможности
            </span>
            <h2 className="text-2xl md:text-3xl font-medium">Ключевые возможности</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-6 border border-border hover:border-foreground/30 transition-colors"
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
              004 / Стек
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
                <div className="text-xs text-background/50">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Panel Feature */}
      <section className="px-6 md:px-12 py-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                  005 / Уникальная разработка
                </span>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">
                  Админ-панель для управления контентом
                </h2>
                <p className="text-muted-foreground mb-6">
                  Мы созд��ли мощную админ-панель с 5 разделами для полного управления стриминговой платформой.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Управление релизами и эпизодами
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Настройка разделов на главной
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Управление каруселью
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Настройка расписания выхода
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Загрузка обложек и метаданных
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-video overflow-hidden border border-border"
              >
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cinemavault-admin-form-0HRV5tBnj8hqndHDJhlMFvgRLGEVNi.png"
                  alt="CinemaVault админ-панель"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* User Profile Feature */}
      <section className="px-6 md:px-12 py-20 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-video overflow-hidden border border-border"
              >
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cinemavault-profile-fWIOSoamAzLErtmJBGZQOX5rlJEhWT.png"
                  alt="CinemaVault личный кабинет"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
                  006 / Личный кабинет
                </span>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">
                  Персональные списки просмотра
                </h2>
                <p className="text-muted-foreground mb-6">
                  Каждый пользователь может создавать и управлять своими списками просмотра для организации контента.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Смотрю — текущие просмотры
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Просмотрено — завершённые
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Отложено — на потом
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Брошено — не досмотренные
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Запланировано — будущие
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots gallery */}
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
      <section className="px-6 md:px-12 py-20 border-t border-border bg-muted/30">
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
            2024
          </span>
        </div>
      </footer>
    </main>
  )
}
