import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const stats = [
  { value: "10+", label: "лет на рынке", sub: "с 2015 года" },
  { value: "220+", label: "цифровых продуктов", sub: "сдано клиентам" },
  { value: "50+", label: "AI-проектов", sub: "внедрено в бизнес" },
  { value: "98%", label: "клиентов", sub: "возвращаются снова" },
]

const clients = ["Сбер", "Газпром", "РЖД", "Ростелеком", "X5 Group", "Магнит", "ВТБ", "Лукойл"]

export function TrustSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-gray-950 text-white">
      <div ref={sectionRef} className="container mx-auto px-4">

        <div className={cn(
          "max-w-5xl mx-auto mb-16 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
            Почему нам доверяют бизнес
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            siberian.pro — одна из ведущих компаний России по разработке цифровых продуктов и внедрению AI с 2015 года
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-4xl md:text-5xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-200">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-1000 ease-out delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Среди наших клиентов</p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {clients.map((client) => (
              <div key={client} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-200">
                {client}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-2xl mb-3">🏆</div>
              <h4 className="font-bold text-white mb-2">Топ-10 разработчиков России</h4>
              <p className="text-gray-400 text-sm">По версии Ruward и Рейтинга Рунета — ежегодно входим в число лучших IT-компаний страны</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-2xl mb-3">🤝</div>
              <h4 className="font-bold text-white mb-2">Официальный партнёр</h4>
              <p className="text-gray-400 text-sm">Партнёр Сбера, ВТБ и крупнейших технологических платформ России по внедрению AI-решений</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-2xl mb-3">📋</div>
              <h4 className="font-bold text-white mb-2">Полный цикл</h4>
              <p className="text-gray-400 text-sm">От анализа бизнеса и выбора стека до запуска, поддержки и масштабирования — всё под ключ</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
