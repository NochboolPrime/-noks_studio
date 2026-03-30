// NOKS Web Studio - Main Page
// Force dynamic rendering to prevent stale cache
export const dynamic = 'force-dynamic'
export const revalidate = 0

import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about-section"
import { Services } from "@/components/sections/services"
import { Cases } from "@/components/sections/cases"
import { Marquee } from "@/components/sections/marquee"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-16">
        <Hero />
      </div>
      <AboutSection />
      <Services />
      <Cases />
      <Marquee />
      <ContactForm />
      <Footer />
    </main>
  )
}
