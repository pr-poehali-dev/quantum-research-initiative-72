import { Brain, BotIcon as Robot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { RefObject } from "react"

interface AboutSectionProps {
  sectionRef: RefObject<HTMLElement>
  contentRef: RefObject<HTMLDivElement>
  isVisible: boolean
  scrollToContact: () => void
  openChatbot: () => void
}

export function AboutSection({
  sectionRef,
  contentRef,
  isVisible,
  scrollToContact,
  openChatbot,
}: AboutSectionProps) {
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div
          ref={contentRef}
          className={cn(
            "max-w-4xl mx-auto transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 flex-shrink-0 flex items-center justify-center bg-gray-900">
              <Brain className="w-24 h-24 text-white opacity-80" />
            </div>
            <div className="space-y-4 text-center md:text-left px-4 md:px-0">
              <h2 className="text-3xl font-bold font-heading">О нас</h2>
              <div className="space-y-4 max-w-2xl">
                <p className="text-gray-300">
                  siberian.pro — команда экспертов, которая внедряет AI-решения в реальные бизнес-процессы.
                  Без воды, без лишних слов — только конкретный результат.
                </p>
                <p className="text-gray-300">
                  Мы автоматизируем рутину, ускоряем принятие решений и помогаем компаниям
                  извлекать максимум из данных с помощью искусственного интеллекта.
                </p>
                <p className="text-gray-300">
                  От аудита процессов до полноценного внедрения — сопровождаем на каждом шаге.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center md:justify-start">
                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    size="sm"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors w-[140px] mx-auto sm:mx-0"
                  >
                    Обсудить проект
                  </Button>
                  <Button
                    onClick={openChatbot}
                    variant="outline"
                    size="sm"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors w-[140px] mx-auto sm:mx-0 flex items-center justify-center"
                  >
                    <Robot className="mr-1 h-4 w-4" />
                    AI-ассистент
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
