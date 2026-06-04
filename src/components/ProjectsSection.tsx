import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "Мобильная экосистема для ритейла",
    category: "Retail / E-commerce",
    description: "Разработали мобильное приложение с AI-рекомендациями товаров, программой лояльности и аналитикой поведения покупателей. Конверсия в покупку выросла на 34%.",
    result: "+34% конверсия",
  },
  {
    name: "AI-автоматизация HR-процессов",
    category: "HR Tech",
    description: "Создали систему автоматического скрининга резюме и ранжирования кандидатов на базе LLM. Время найма сократилось с 3 недель до 4 дней.",
    result: "В 5× быстрее найм",
  },
  {
    name: "Цифровая экосистема для логистики",
    category: "Логистика",
    description: "Разработали платформу управления грузоперевозками с AI-оптимизацией маршрутов и предсказанием задержек. Экономия на логистике — 22% в год.",
    result: "−22% затраты",
  },
  {
    name: "AI-чатбот для банковского сектора",
    category: "Fintech",
    description: "Внедрили интеллектуального ассистента, обрабатывающего 80% обращений клиентов без участия оператора. NPS вырос на 18 пунктов.",
    result: "80% без оператора",
  },
  {
    name: "Платформа аналитики для производства",
    category: "Производство",
    description: "Построили систему предиктивного обслуживания оборудования на основе IoT-данных и ML. Внеплановые простои снизились на 67%.",
    result: "−67% простои",
  },
  {
    name: "Маркетплейс с AI-поиском",
    category: "E-commerce",
    description: "Реализовали семантический поиск и персонализированную выдачу товаров. Средний чек вырос на 41%, отказы от поиска снизились втрое.",
    result: "+41% средний чек",
  },
]

export function ProjectsSection() {
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
          "max-w-6xl mx-auto transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
            Наши проекты
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Реальные результаты для реальных компаний
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 hover:border-white/25 transition-all duration-300">
                <div className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</div>
                <h3 className="text-lg font-bold font-heading text-white">{project.name}</h3>
                <p className="text-gray-400 text-sm flex-1 leading-relaxed">{project.description}</p>
                <div className="mt-2 inline-flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1 w-fit">
                  <span className="text-xs font-bold text-white">{project.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
