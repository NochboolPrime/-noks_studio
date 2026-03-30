"use client"

import { motion } from "framer-motion"
import { MessageCircle, Gamepad2, BookOpen, LayoutDashboard, FileText, Users } from "lucide-react"

const solutions = [
  {
    icon: MessageCircle,
    title: "Групповые чаты",
    description: "Разработали групповые чаты, в которых теперь удобно проводить разговорные клубы. Добавили несколько кастомных анимаций: запись голосового сообщения и отправка нескольких файлов.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Users,
    title: "Умная сортировка чатов",
    description: "Разработали сложный алгоритм ранжирования и приоритизации чатов, чтобы пользователь не запутался и не потерялся. За основу взяли решение, которое успешно применяет ТБанк.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: FileText,
    title: "Сторис и статьи",
    description: "Сделали функционал сторис и статей, чтобы владельцы школы имели больше рычагов для коммуникации с учениками.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Gamepad2,
    title: "Геймификация прогресса",
    description: "Прогресс ученика стилизовали под настольную игру, а также добавили раздел с достижениями. За счет геймификации заметно подняли retention в приложении.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: BookOpen,
    title: "Словарь с интервальным повторением",
    description: "В приложении также добавили словарь с функцией интервального повторения и возможность создавать собственные словари.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: LayoutDashboard,
    title: "Веб админка",
    description: "Разработали веб админку. Через нее можно гибко настраивать роли для сотрудников, их KPI, контролировать оплаты от учеников, отвечать на отзывы.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
]

export function Solutions() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Что сделали? Ключевые решения
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-3xl mx-auto text-balance">
            Мы подошли к задаче системно: разобрали бизнес-процессы школы и спроектировали продукт
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ниже — ключевые решения, благодаря которым приложение стало ядром экосистемы обучения
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${solution.color} flex items-center justify-center mb-4`}>
                <solution.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
