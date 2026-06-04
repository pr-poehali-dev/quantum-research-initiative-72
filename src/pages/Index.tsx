import { useState, useEffect, useRef } from "react"
import { ChatbotModal } from "@/components/ChatbotModal"
import { HeroSection } from "@/components/HeroSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { ContactCTA } from "@/components/ContactCTA"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { TrustSection } from "@/components/TrustSection"
import { FooterSection } from "@/components/FooterSection"

export default function Index() {
  const [blurAmount, setBlurAmount] = useState(0)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [initialHeight, setInitialHeight] = useState(0)
  const aboutSectionRef = useRef<HTMLElement>(null)
  const servicesSectionRef = useRef<HTMLElement>(null)
  const contactSectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef(0)
  const lastScrollRef = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    if (initialHeight === 0) {
      setInitialHeight(window.innerHeight)
    }
  }, [initialHeight])

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const maxBlur = 8
          const triggerHeight = initialHeight * 1.2
          const newBlurAmount = Math.min(maxBlur, (scrollRef.current / triggerHeight) * maxBlur)
          setBlurAmount(newBlurAmount)
          lastScrollRef.current = scrollRef.current
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [initialHeight])

  const scaleFactor = 1 + blurAmount / 16
  const warpSpeedStyle = {
    transform: `scale(${scaleFactor})`,
    transition: "transform 0.2s ease-out",
  }

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const heroStyle = {
    height: initialHeight ? `${initialHeight}px` : "100vh",
  }

  return (
    <div className="min-h-screen">
      {/* 1. Первый экран */}
      <HeroSection
        heroStyle={heroStyle}
        warpSpeedStyle={warpSpeedStyle}
        blurAmount={blurAmount}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
      />

      {/* 2. Сколько AI экономит */}
      <BenefitsSection />

      {/* 3. Форма заявки */}
      <ContactCTA
        sectionRef={contactSectionRef}
        title="Хотите узнать, сколько сэкономит AI именно вашему бизнесу?"
        subtitle="Оставьте заявку — проведём бесплатный аудит и покажем потенциал экономии"
      />

      {/* 4. О нас */}
      <AboutSection
        sectionRef={aboutSectionRef}
        scrollToContact={scrollToContact}
        openChatbot={() => setIsChatbotOpen(true)}
      />

      {/* 5. AI-решения + 6. Кейсы */}
      <ServicesSection sectionRef={servicesSectionRef} />

      {/* 7. Наши проекты */}
      <ProjectsSection />

      {/* 8. Форма заявки */}
      <ContactCTA
        title="Обсудим ваш проект?"
        subtitle="Расскажите о задаче — предложим решение и рассчитаем стоимость бесплатно"
      />

      {/* 9. Почему нам доверяют */}
      <TrustSection />

      {/* 10. Форма заявки */}
      <ContactCTA
        title="Готовы начать?"
        subtitle="Оставьте заявку — свяжемся в течение часа и ответим на все вопросы"
      />

      <FooterSection />

      <ChatbotModal isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  )
}
