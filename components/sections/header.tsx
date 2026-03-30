"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Header() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20 border-b border-border">
          {/* Logo */}
          <Link href="/" className="block h-12">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20553-gR4dtECJW8gi7AvZ8BcaHslHBHvnDK.jpg" 
              alt="НОКС"
              className="h-full w-auto"
            />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-12">
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 hover:tracking-[0.2em]"
            >
              Услуги
            </a>
            <a 
              href="#cases" 
              onClick={(e) => handleSmoothScroll(e, '#cases')}
              className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 hover:tracking-[0.2em]"
            >
              Кейсы
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 hover:tracking-[0.2em]"
            >
              Контакты
            </a>
          </nav>

          {/* CTA */}
          <a 
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="text-[11px] uppercase tracking-widest hover:text-accent transition-all duration-300 flex items-center gap-2 group"
          >
            <span className="hidden sm:inline">Обсудить проект</span>
            <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.header>
  )
}
