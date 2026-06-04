import { StarField } from "@/components/StarField"
import { ChevronDown, Brain, Zap, BarChart3, Settings2, BotIcon as Robot } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { ChatbotModal } from "@/components/ChatbotModal"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Index() {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false)
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const [isServicesVisible, setIsServicesVisible] = useState(false)
  const [isServicesTitleVisible, setIsServicesTitleVisible] = useState(false)
  const [blurAmount, setBlurAmount] = useState(0)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [initialHeight, setInitialHeight] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const aboutSectionRef = useRef<HTMLElement>(null)
  const aboutContentRef = useRef<HTMLDivElement>(null)
  const servicesSectionRef = useRef<HTMLElement>(null)
  const servicesContentRef = useRef<HTMLDivElement>(null)
  const servicesTitleRef = useRef<HTMLHeadingElement>(null)
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
      // Store the current scroll position
      scrollRef.current = window.scrollY

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Calculate blur based on scroll position
          // Reduced max blur from 20px to 8px for a more subtle effect
          const maxBlur = 8
          // Increased trigger height to make the effect develop more slowly
          const triggerHeight = initialHeight * 1.2
          const newBlurAmount = Math.min(maxBlur, (scrollRef.current / triggerHeight) * maxBlur)

          setBlurAmount(newBlurAmount)

          // Update last scroll position for next comparison
          lastScrollRef.current = scrollRef.current
          ticking.current = false
        })

        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [initialHeight])

  // Intersection observer for visibility
  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingVisible(true)
          // Once visible, no need to observe anymore
          if (headingRef.current) {
            headingObserver.unobserve(headingRef.current)
          }
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (headingRef.current) {
      headingObserver.observe(headingRef.current)
    }

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true)
          // Once visible, no need to observe anymore
          if (aboutContentRef.current) {
            aboutObserver.unobserve(aboutContentRef.current)
          }
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (aboutContentRef.current) {
      aboutObserver.observe(aboutContentRef.current)
    }

    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true)
          // Once visible, no need to observe anymore
          if (servicesContentRef.current) {
            servicesObserver.unobserve(servicesContentRef.current)
          }
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (servicesContentRef.current) {
      servicesObserver.observe(servicesContentRef.current)
    }

    const servicesTitleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesTitleVisible(true)
          // Once visible, no need to observe anymore
          if (servicesTitleRef.current) {
            servicesTitleObserver.unobserve(servicesTitleRef.current)
          }
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (servicesTitleRef.current) {
      servicesTitleObserver.observe(servicesTitleRef.current)
    }

    return () => {
      if (headingRef.current) {
        headingObserver.unobserve(headingRef.current)
      }
      if (aboutContentRef.current) {
        aboutObserver.unobserve(aboutContentRef.current)
      }
      if (servicesContentRef.current) {
        servicesObserver.unobserve(servicesContentRef.current)
      }
      if (servicesTitleRef.current) {
        servicesTitleObserver.unobserve(servicesTitleRef.current)
      }
    }
  }, [])

  // Calculate scale factor based on blur amount
  // Maintain the same scaling effect even with reduced blur
  const scaleFactor = 1 + blurAmount / 16 // Adjusted to maintain similar scaling with reduced blur

  // Add a warp speed effect to stars based on blur amount
  const warpSpeedStyle = {
    transform: `scale(${scaleFactor})`,
    transition: "transform 0.2s ease-out", // Slightly longer transition for smoother effect
  }

  // Scroll to about section
  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Scroll to contact section
  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Open chatbot modal
  const openChatbot = () => {
    setIsChatbotOpen(true)
  }

  // Close chatbot modal
  const closeChatbot = () => {
    setIsChatbotOpen(false)
  }

  // Use fixed height for hero section based on initial viewport height
  const heroStyle = {
    height: initialHeight ? `${initialHeight}px` : "100vh",
  }

  return (
    <div className="min-h-screen">
      <section className="relative w-full overflow-hidden bg-black" style={heroStyle}>
        {/* Navigation links in top right corner */}
        <div className="absolute top-6 right-6 z-10 flex space-x-3">
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="sm"
            className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
          >
            Связаться
          </Button>
        </div>

        <div className="absolute inset-0" style={warpSpeedStyle}>
          <StarField blurAmount={blurAmount} />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center">
            <div
              className="backdrop-blur-sm px-6 py-4 rounded-lg inline-block relative"
              style={{
                background: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)",
              }}
            >
              <img
                src="https://siberian.pro/wp-content/uploads/2022/03/logo-2.svg"
                alt="siberian.pro"
                className="h-16 md:h-20 mx-auto mb-2 invert"
              />
              <p className="mt-4 text-lg text-gray-300 md:text-xl px-4 max-w-xs mx-auto md:max-w-none">
                AI-решения для вашего бизнеса
              </p>
              <Button
                onClick={scrollToAbout}
                variant="outline"
                size="sm"
                className="mt-6 bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div
            className="absolute bottom-20 animate-bounce cursor-pointer"
            onClick={scrollToAbout}
            role="button"
            aria-label="Перейти к разделу о нас"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                scrollToAbout()
              }
            }}
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>

      <section ref={aboutSectionRef} id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div
            ref={aboutContentRef}
            className={cn(
              "max-w-4xl mx-auto transition-all duration-1000 ease-out",
              isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
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

      <section ref={servicesSectionRef} id="services" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2
            ref={servicesTitleRef}
            className={cn(
              "mb-12 text-center text-3xl font-bold font-heading transition-all duration-1000 ease-out",
              isServicesTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            AI-решения
          </h2>
          <div
            ref={servicesContentRef}
            className={cn(
              "max-w-5xl mx-auto transition-all duration-1000 ease-out",
              isServicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
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

      <section id="cases" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold font-heading">Кейсы</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col gap-4 hover:border-gray-600 transition-colors">
              <div className="text-4xl font-bold text-white">−62%</div>
              <h3 className="text-lg font-semibold font-heading">Автоматизация обработки заявок</h3>
              <p className="text-gray-400 text-sm flex-1">Внедрили AI-классификатор входящих обращений для дистрибьюторской компании. Время обработки заявки сократилось с 8 минут до 3, нагрузка на менеджеров упала вдвое.</p>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Ритейл · 3 месяца</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col gap-4 hover:border-gray-600 transition-colors">
              <div className="text-4xl font-bold text-white">×3.4</div>
              <h3 className="text-lg font-semibold font-heading">Рост конверсии через AI-рекомендации</h3>
              <p className="text-gray-400 text-sm flex-1">Разработали персональную рекомендательную систему для e-commerce платформы. Средний чек вырос на 34%, конверсия в повторную покупку — в 3.4 раза.</p>
              <div className="text-xs text-gray-600 uppercase tracking-wide">E-commerce · 2 месяца</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col gap-4 hover:border-gray-600 transition-colors">
              <div className="text-4xl font-bold text-white">−80%</div>
              <h3 className="text-lg font-semibold font-heading">AI-аналитика для производства</h3>
              <p className="text-gray-400 text-sm flex-1">Построили систему прогнозирования брака на производственной линии. Количество дефектных изделий снизилось на 80%, экономия — 4.2 млн руб. в год.</p>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Производство · 4 месяца</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
              Сколько AI экономит вашему бизнесу?
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Компании, внедрившие AI-решения, сокращают операционные расходы в среднем на 30–60% уже в первый год
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/0ef603ce-ab0b-4fc2-a2bf-1d089eeb585a/files/a511f92c-f9bd-40ee-982e-66a0e0729157.jpg"
                  alt="AI технологии"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-xl">💰</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Снижение затрат на персонал</h3>
                    <p className="text-gray-400 text-sm">AI берёт на себя рутинные задачи — ваши сотрудники фокусируются на стратегии. Экономия ФОТ — от 500 000 руб./год.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-xl">⚡</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Скорость в 10 раз выше</h3>
                    <p className="text-gray-400 text-sm">Обработка данных, подготовка отчётов и коммуникация с клиентами — за минуты вместо часов.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-xl">📈</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Рост выручки без найма</h3>
                    <p className="text-gray-400 text-sm">AI-рекомендации и автоматизация продаж увеличивают конверсию на 20–40% без расширения штата.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:order-1 order-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-xl">🔒</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Нулевые ошибки в данных</h3>
                    <p className="text-gray-400 text-sm">Человеческий фактор исключён. AI обрабатывает тысячи записей без ошибок — штрафы и потери от неточностей уходят в ноль.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-xl">🕐</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Работа 24/7 без выходных</h3>
                    <p className="text-gray-400 text-sm">AI-системы не уходят в отпуск и не болеют. Бизнес работает круглосуточно — клиенты получают ответы мгновенно.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-xl">🎯</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">ROI от 300% за первый год</h3>
                    <p className="text-gray-400 text-sm">Средний возврат инвестиций клиентов siberian.pro — 3x в первые 12 месяцев. Внедрение окупается за 2–4 месяца.</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden md:order-2 order-1">
                <img
                  src="https://cdn.poehali.dev/projects/0ef603ce-ab0b-4fc2-a2bf-1d089eeb585a/files/22bcf3f5-695b-4a4f-b1a4-1b810cb9e79e.jpg"
                  alt="AI и бизнес"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Contact Form in hero style */}
      <section ref={contactSectionRef} id="contact" className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
        <StarField blurAmount={0} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2
              ref={headingRef}
              className={cn(
                "text-4xl md:text-5xl font-bold font-heading mb-6 transition-all duration-1000 ease-out",
                isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              Готовы внедрить AI?
            </h2>
            <p className="text-gray-300 text-lg">
              Оставьте заявку — разберём ваши задачи и предложим конкретное решение бесплатно
            </p>
          </div>
          <div
            className={cn(
              "max-w-lg mx-auto backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-1000 ease-out",
              "bg-gradient-to-b from-white/10 to-white/5",
              isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <ContactForm dark />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 text-center">
        <div className="container mx-auto px-4">
          <img
            src="https://siberian.pro/wp-content/uploads/2022/03/logo-2.svg"
            alt="siberian.pro"
            className="h-8 mx-auto mb-4 invert opacity-60"
          />
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} siberian.pro · AI-решения для бизнеса</p>
        </div>
      </footer>

      {/* Chatbot Modal */}
      <ChatbotModal isOpen={isChatbotOpen} onClose={closeChatbot} />
    </div>
  )
}