"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Check, Users, Shield, FileText, Calendar, Car } from "lucide-react"

export default function BiletBusPage() {
  const tasks = [
    "Создать систему онлайн-бронирования билетов",
    "Реализовать ролевую модель (пассажир, водитель, админ)",
    "Разработать личный кабинет с историей поездок",
    "Создать админ-панель для управления рейсами",
    "Реализовать панель водителя со списками пассажиров",
    "Внедрить генерацию PDF-билетов",
  ]

  const features = [
    {
      icon: Users,
      title: "Личный кабинет",
      description: "Удобный личный кабинет пассажира с историей поездок и возможностью скачать билет в PDF"
    },
    {
      icon: Shield,
      title: "Админ-панель",
      description: "Полноценная панель управления для добавления рейсов, управления пользователями и назначения водителей"
    },
    {
      icon: Car,
      title: "Панель водителя",
      description: "Отдельный интерфейс для водителей с просмотром назначенных рейсов и списком пассажиров"
    },
    {
      icon: Shield,
      title: "Ролевая система",
      description: "Четкое распределение доступа: пассажир, водитель, администратор. Middleware-защита всех приватных роутов"
    },
    {
      icon: FileText,
      title: "Скачивание билетов",
      description: "Генерация PDF-билетов с QR-кодом для удобной посадки на рейс"
    },
    {
      icon: Calendar,
      title: "Расписание рейсов",
      description: "Интерактивный календарь с выбором даты и просмотром доступных рейсов"
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

  const screenshots = [
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biletbus-hero-3dERFAs6ojUewJOL1TLFdQd9JQirGg.png", alt: "Главная страница", label: "Главная страница" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biletbus-schedule-mBnCvWo0GRud9WDmTzAhSV8PQuFgQi.png", alt: "Расписание рейсов", label: "Расписание рейсов" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biletbus-profile-ZBsw9RH5bUeiGDMBQJegCKmLhuNzVZ.png", alt: "Личный кабинет", label: "Личный кабинет" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biletbus-driver-eCLhZK5b9OP41sc41ROBZEpNAY6uIm.png", alt: "Панель водителя", label: "Панель водителя" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biletbus-admin-trips-1DMViCsL5G1yBb458QucogcpHjQ8Ww.png", alt: "Админ - Рейсы", label: "Админ - Рейсы" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biletbus-admin-users-KBhPhRsQ4BVJTgcLVmBwSLKvhY8RmQ.png", alt: "Админ - Пользователи", label: "Админ - Пользователи" },
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
            href="https://bitelbustestnew.vercel.app/" 
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
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
              Сервис бронирования / 2024
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 max-w-4xl">
              БилетБус
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Платформа для онлайн-бронирования автобусных билетов по маршруту Чита — Газимурский Завод с ролевой системой доступа
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-12 mt-12 pt-12 border-t border-border"
          >
            <div>
              <span className="text-3xl md:text-4xl font-medium">3</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">роли пользователей</p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-medium">PDF</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">генерация билетов</p>
            </div>
            <div>
              <span className="text-3xl md:text-4xl font-medium">Middleware</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">защита роутов</p>
            </div>
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biletbus-hero-3dERFAs6ojUewJOL1TLFdQd9JQirGg.png"
              alt="БилетБус - Главная страница"
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
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 text-muted-foreground"
              >
                <p className="text-lg">
                  <strong className="text-foreground">Задача:</strong> Создать полноценную платформу для бронирования автобусных билетов по Забайкальскому краю с разделением функционала по ролям: пассажиры могут покупать билеты, водители видят свои рейсы, администраторы управляют всей системой.
                </p>
                <p className="text-lg">
                  <strong className="text-foreground">Решение:</strong> Разработана система с тремя уровнями доступа. Пассажиры получают удобный личный кабинет с возможностью скачать билет в PDF. Водители видят назначенные рейсы и списки пассажиров. Администраторы полностью контролируют рейсы, пользователей и назначение водителей.
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
              href="https://bitelbustestnew.vercel.app/" 
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
            className="mb-16"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 block">
              003 / Возможности
            </span>
            <h2 className="text-2xl md:text-3xl font-medium">Ключевые возможности</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 border border-border hover:border-foreground/30 transition-colors"
              >
                <feature.icon className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 md:px-12 py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
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
                className="text-center p-4 border border-background/20"
              >
                <span className="text-lg font-medium block">{tech.name}</span>
                <span className="text-xs text-background/50">{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role System */}
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
                <h2 className="text-2xl md:text-3xl font-medium mb-6">Ролевая система</h2>
                <p className="text-muted-foreground mb-6">
                  Мы реализовали трёхуровневую систему доступа с полным разграничением функционала для каждой роли.
                </p>
                <ul className="space-y-3">
                  {[
                    "Пассажир — бронирование и управление билетами",
                    "Водитель — просмотр рейсов и списков пассажиров",
                    "Администратор — полный контроль системы",
                    "Middleware-защита всех приватных роутов",
                    "Генерация PDF-билетов с QR-кодом",
                    "Интерактивный календарь расписания"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-video overflow-hidden border border-border"
              >
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biletbus-admin-trips-1DMViCsL5G1yBb458QucogcpHjQ8Ww.png"
                  alt="Админ-панель БилетБус"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Panel */}
      <section className="px-6 md:px-12 py-20 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-video overflow-hidden border border-border"
              >
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/biletbus-driver-eCLhZK5b9OP41sc41ROBZEpNAY6uIm.png"
                  alt="Панель водителя БилетБус"
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
                  006 / Для водителей
                </span>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">Панель водителя</h2>
                <p className="text-muted-foreground">
                  Отдельный интерфейс для водителей позволяет видеть назначенные рейсы на сегодня и предстоящие, 
                  а также полный список забронированных пассажиров с их контактными данными.
                </p>
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
          <Link href="/" className="text-sm hover:text-accent transition-colors">
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
