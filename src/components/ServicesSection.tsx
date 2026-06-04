import { Brain, Zap, BarChart3, Settings2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { RefObject } from "react"

interface ServicesSectionProps {
  sectionRef: RefObject<HTMLElement>
  contentRef: RefObject<HTMLDivElement>
  titleRef: RefObject<HTMLHeadingElement>
  isContentVisible: boolean
  isTitleVisible: boolean
}

export function ServicesSection({
  sectionRef,
  contentRef,
  titleRef,
  isContentVisible,
  isTitleVisible,
}: ServicesSectionProps) {
  return (
    <>
      <section ref={sectionRef} id="services" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2
            ref={titleRef}
            className={cn(
              "mb-12 text-center text-3xl font-bold font-heading transition-all duration-1000 ease-out",
              isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            AI-решения
          </h2>
          <div
            ref={contentRef}
            className={cn(
              "max-w-5xl mx-auto transition-all duration-1000 ease-out",
              isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700">
                <div className="flex items-center mb-4">
                  <Brain className="h-7 w-7 text-white mr-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold font-heading">AI-консалтинг</h3>
                </div>
                <p className="text-gray-300">
                  Анализируем ваши процессы и определяем, где AI даст наибольший эффект. Стратегия внедрения под ваш бизнес.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700">
                <div className="flex items-center mb-4">
                  <Zap className="h-7 w-7 text-white mr-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold font-heading">Автоматизация процессов</h3>
                </div>
                <p className="text-gray-300">
                  Заменяем ручной труд интеллектуальными алгоритмами. Сокращаем время на рутину и снижаем издержки.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-7 w-7 text-white mr-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold font-heading">AI-аналитика данных</h3>
                </div>
                <p className="text-gray-300">
                  Превращаем данные в инсайты. Прогнозирование спроса, сегментация клиентов, умные дашборды.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700">
                <div className="flex items-center mb-4">
                  <Settings2 className="h-7 w-7 text-white mr-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold font-heading">Разработка AI-продуктов</h3>
                </div>
                <p className="text-gray-300">
                  Создаём чат-боты, рекомендательные системы и кастомные AI-инструменты под задачи вашей компании.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 text-white" style={{ backgroundColor: "#060d1f" }}>
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold font-heading">Кейсы</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 rounded-lg p-6 flex flex-col gap-4 hover:border-white/30 transition-colors" style={{ backgroundColor: "#0d1a3a" }}>
              <div className="text-4xl font-bold text-white">−62%</div>
              <h3 className="text-lg font-semibold font-heading">Автоматизация обработки заявок</h3>
              <p className="text-gray-400 text-sm flex-1">Внедрили AI-классификатор входящих обращений для дистрибьюторской компании. Время обработки заявки сократилось с 8 минут до 3, нагрузка на менеджеров упала вдвое.</p>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Ритейл · 3 месяца</div>
            </div>
            <div className="border border-white/10 rounded-lg p-6 flex flex-col gap-4 hover:border-white/30 transition-colors" style={{ backgroundColor: "#0d1a3a" }}>
              <div className="text-4xl font-bold text-white">×3.4</div>
              <h3 className="text-lg font-semibold font-heading">Рост конверсии через AI-рекомендации</h3>
              <p className="text-gray-400 text-sm flex-1">Разработали персональную рекомендательную систему для e-commerce платформы. Средний чек вырос на 34%, конверсия в повторную покупку — в 3.4 раза.</p>
              <div className="text-xs text-gray-600 uppercase tracking-wide">E-commerce · 2 месяца</div>
            </div>
            <div className="border border-white/10 rounded-lg p-6 flex flex-col gap-4 hover:border-white/30 transition-colors" style={{ backgroundColor: "#0d1a3a" }}>
              <div className="text-4xl font-bold text-white">−80%</div>
              <h3 className="text-lg font-semibold font-heading">AI-аналитика для производства</h3>
              <p className="text-gray-400 text-sm flex-1">Построили систему прогнозирования брака на производственной линии. Количество дефектных изделий снизилось на 80%, экономия — 4.2 млн руб. в год.</p>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Производство · 4 месяца</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}