"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section 
      id="noks-hero" 
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-8"
          >
            <span className="text-8xl md:text-9xl font-serif text-foreground/10">(</span>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Студия</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">веб-разработки</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">и автоматизации</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-4"
          >
            <div className="w-16 h-16 bg-foreground rounded-full" />
            <div className="w-8 h-16 bg-foreground rounded-r-full" />
            <div className="w-16 h-8 border-2 border-foreground rounded-full" />
          </motion.div>
          
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-8xl md:text-9xl font-serif text-foreground/10"
          >
            )
          </motion.span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight mb-16 text-balance"
        >
          нокс.studio
        </motion.h1>

        <div className="grid grid-cols-12 gap-4 md:gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-12 md:col-span-5 relative"
          >
            <span className="absolute -top-6 left-0 text-[10px] uppercase tracking-widest text-muted-foreground">001 / Веб-разработка</span>
            <div className="aspect-[4/3] bg-foreground/5 overflow-hidden">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5%20%2851%29-hlbaslBRK7FnEI4ji5JOLQG3R0mLdm.jpg" 
                alt="Vintage data center"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="col-span-12 md:col-span-4 relative"
          >
            <div className="aspect-[4/3] bg-foreground/5 overflow-hidden">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5%20%2850%29-tWsKJsVAvocb55yIbmU7nJzwrR23iU.jpg" 
                alt="Computer controlled display"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="col-span-12 md:col-span-3 flex flex-col justify-end"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-foreground/5 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5%20%2848%29-3v9hexSAPg2Fr0uKnDxuh2LMxyNYhN.jpg" 
                  alt="Apple Computer 1"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="aspect-square bg-foreground/5 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escape%20the%20system-HSOHM7tj7XRBHAskHnj0TDxF7TuVCR.jpg" 
                  alt="Escape key"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <a 
            href="#cases" 
            className="group flex items-center gap-3 text-sm uppercase tracking-widest text-foreground hover:text-accent transition-colors"
          >
            <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform" />
            Смотреть кейсы
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
