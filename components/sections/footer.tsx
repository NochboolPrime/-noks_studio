"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-16">
          {/* Logo & tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-4"
          >
            <Link href="/" className="font-serif text-3xl tracking-tight block mb-4">
              НОКС
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Веб-студия разработки и автоматизации бизнес-процессов
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-6 md:col-span-2"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-4">Навигация</span>
            <nav className="space-y-3">
              <Link href="#services" className="block text-sm hover:text-accent transition-colors">Услуги</Link>
              <Link href="#cases" className="block text-sm hover:text-accent transition-colors">Кейсы</Link>
              <Link href="#" className="block text-sm hover:text-accent transition-colors">О нас</Link>
              <Link href="#contact" className="block text-sm hover:text-accent transition-colors">Контакты</Link>
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-6 md:col-span-3"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-4">Услуги</span>
            <nav className="space-y-3">
              <Link href="#services" className="block text-sm hover:text-accent transition-colors">Лендинги</Link>
              <Link href="#services" className="block text-sm hover:text-accent transition-colors">Корпоративные сайты</Link>
              <Link href="#services" className="block text-sm hover:text-accent transition-colors">Автоматизация</Link>
              <Link href="#services" className="block text-sm hover:text-accent transition-colors">Интернет-магазины</Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 md:col-span-3"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-4">Контакты</span>
            <div className="space-y-3">
              <a href="mailto:noxs.studio@yandex.ru" className="block text-sm hover:text-accent transition-colors">
                noxs.studio@yandex.ru
              </a>
              <a href="https://t.me/noks_studio" className="block text-sm hover:text-accent transition-colors">
                Telegram
              </a>
              <a href="tel:+79938986911" className="block text-sm hover:text-accent transition-colors">
                +7 993 898 6911
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2026 НОКС. Все права защищены
          </span>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
