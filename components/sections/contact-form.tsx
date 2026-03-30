"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-5"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-8 block">/ Контакты</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Обсудим ваш проект?
            </h2>
            <p className="text-sm text-muted-foreground mb-12 max-w-sm">
              Оставьте заявку и мы свяжемся с вами в течение 24 часов для обсуждения деталей.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Email</span>
                <a href="mailto:noxs.studio@yandex.ru" className="text-lg hover:text-accent transition-colors">
                  noxs.studio@yandex.ru
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Telegram</span>
                <a href="https://t.me/noks_studio" className="text-lg hover:text-accent transition-colors">
                  @noks_studio
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Телефон</span>
                <a href="tel:+79938986911" className="text-lg hover:text-accent transition-colors">
                  +7 993 898 6911
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-3">
                    Ваше имя *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-3">
                    Телефон *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-3">
                  Telegram (опционально)
                </label>
                <Input
                  type="text"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                  placeholder="@username"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-3">
                  Расскажите о проекте
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-foreground transition-colors min-h-[120px] resize-none"
                  placeholder="Опишите вашу идею или задачу..."
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <p className="text-[10px] text-muted-foreground max-w-xs">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
                <Button 
                  type="submit"
                  className="bg-foreground text-background hover:bg-accent px-8 py-6 rounded-none text-sm uppercase tracking-widest"
                >
                  Отправить
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
