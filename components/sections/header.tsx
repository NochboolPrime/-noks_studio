"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Header() {
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
            <Link 
              href="#services" 
              className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Услуги
            </Link>
            <Link 
              href="#cases" 
              className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Кейсы
            </Link>
            <Link 
              href="#contact" 
              className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* CTA */}
          <Link 
            href="#contact"
            className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-2"
          >
            <span className="hidden sm:inline">Обсудить проект</span>
            <span className="w-2 h-2 bg-accent rounded-full" />
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
