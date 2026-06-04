import { useState, useEffect, useRef } from "react"
import { StarField } from "@/components/StarField"
import { ContactForm } from "@/components/ContactForm"
import { cn } from "@/lib/utils"
import type { RefObject } from "react"

interface ContactCTAProps {
  sectionRef?: RefObject<HTMLElement>
  title?: string
  subtitle?: string
}

export function ContactCTA({
  sectionRef,
  title = "Готовы внедрить AI?",
  subtitle = "Оставьте заявку — разберём ваши задачи и предложим конкретное решение бесплатно",
}: ContactCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (headingRef.current) observer.observe(headingRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden flex items-center"
    >
      <StarField blurAmount={0} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2
            ref={headingRef}
            className={cn(
              "text-4xl md:text-5xl font-bold font-heading mb-6 transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            {title}
          </h2>
          <p className="text-gray-300 text-lg">{subtitle}</p>
        </div>
        <div
          className={cn(
            "max-w-lg mx-auto backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ease-out",
            "bg-gradient-to-b from-white/10 to-white/5",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <ContactForm dark />
        </div>
      </div>
    </section>
  )
}
