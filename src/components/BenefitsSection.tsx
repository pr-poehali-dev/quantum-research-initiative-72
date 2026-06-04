export function BenefitsSection() {
  return (
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
  )
}
