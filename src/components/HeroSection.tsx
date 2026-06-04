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
            className="backdrop-blur-sm px-8 py-10 rounded-2xl relative flex flex-col items-center"
            style={{
              background: "radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2) 100%)",
            }}
          >
            <img
              src="https://siberian.pro/wp-content/uploads/2022/03/logo-2.svg"
              alt="siberian.pro"
              className="h-24 md:h-36 mb-6 invert block"
            />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl text-center px-2">
              SIBERIAN.PRO —{" "}
              <span className="block mt-1">
                Заставим искусственный интеллект повысить рентабельность вашего бизнеса!
              </span>
            </h1>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="sm"
              className="mt-8 bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors px-8 py-2 text-base"
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