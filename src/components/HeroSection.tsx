import { StarField } from "@/components/StarField"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { RefObject, CSSProperties } from "react"

interface HeroSectionProps {
  heroStyle: CSSProperties
  warpSpeedStyle: CSSProperties
  blurAmount: number
  scrollToAbout: () => void
  scrollToContact: () => void
}

export function HeroSection({
  heroStyle,
  warpSpeedStyle,
  blurAmount,
  scrollToAbout,
  scrollToContact,
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-black" style={heroStyle}>
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
  )
}