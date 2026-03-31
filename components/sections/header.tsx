"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
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
                src="/images/logo.jpg" 
                alt="НОКС"
                className="h-full w-auto"
              />
            </Link>

            {/* Desktop Nav */}
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

            {/* Desktop CTA */}
            <a 
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="hidden md:flex text-[11px] uppercase tracking-widest hover:text-accent transition-all duration-300 items-center gap-2 group"
            >
              <span>Обсудить проект</span>
              <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-background border-b border-border md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, '#services')}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Услуги
              </a>
              <a 
                href="#cases" 
                onClick={(e) => handleSmoothScroll(e, '#cases')}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Кейсы
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Контакты
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent"
              >
                Обсудить проект
                <span className="w-2 h-2 bg-accent rounded-full" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
