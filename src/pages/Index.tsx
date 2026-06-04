import { useState, useEffect, useRef } from "react"
import { ChatbotModal } from "@/components/ChatbotModal"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { BenefitsAndContactSection } from "@/components/BenefitsAndContactSection"

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

  // Store initial height on first render
  useEffect(() => {
    if (initialHeight === 0) {
      setInitialHeight(window.innerHeight)
    }
  }, [initialHeight])

  // Handle scroll events to calculate blur amount
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

  // Calculate scale factor based on blur amount
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
      <HeroSection
        heroStyle={heroStyle}
        warpSpeedStyle={warpSpeedStyle}
        blurAmount={blurAmount}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
      />

      <AboutSection
        sectionRef={aboutSectionRef}
        scrollToContact={scrollToContact}
        openChatbot={() => setIsChatbotOpen(true)}
      />

      <ServicesSection sectionRef={servicesSectionRef} />

      <BenefitsAndContactSection contactSectionRef={contactSectionRef} />

      <ChatbotModal isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  )
}
