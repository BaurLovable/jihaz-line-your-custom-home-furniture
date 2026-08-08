import { Reveal } from "./Reveal";

const steps = [
  { title: "Заявка", text: "Клиент пишет в WhatsApp или звонит." },
  { title: "Обсуждение", text: "Уточняются помещение, размеры, пожелания и примерный бюджет." },
  { title: "Замер и проект", text: "Детали замера и проектирования согласовываются с клиентом." },
  { title: "Подбор материалов", text: "Выбираются цвет, фактура, наполнение и фурнитура." },
  { title: "Изготовление", text: "Мебель производится в цехе Jihaz-Line." },
  {
    title: "Доставка и установка",
    text: "Условия доставки и монтажа согласовываются индивидуально.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-primary py-16 text-primary-foreground lg:py-24"
    >
      {/* Blueprint grid — голубые линии на тёмном фоне */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Золотой вертикальный акцент слева */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-accent/80 via-accent/30 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          {/* Overline */}
          <p className="font-mono text-[11px] font-bold tracking-[0.14em] text-accent uppercase">
            — Порядок работы
          </p>
          <h2 className="mt-4 font-display max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Как проходит заказ
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 80}>
              <div className="relative group">
                {/* Золотая горизонтальная линия сверху */}
                <div className="h-px w-full bg-gradient-to-r from-accent via-accent/40 to-transparent" />

                {/* Маркеры размерной линии — золотые */}
                <span aria-hidden="true" className="absolute -top-1.5 left-0 h-3 w-px bg-accent" />
                <span aria-hidden="true" className="absolute -top-1.5 right-0 h-2 w-px bg-accent/40" />

                <div className="pt-5">
                  {/* Номер шага — JetBrains Mono */}
                  <span className="font-mono text-2xl font-bold text-accent/80 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 font-display text-xl font-bold text-white group-hover:text-accent transition-colors duration-200">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {step.text}
                  </p>
                </div>

                {/* Bottom gold accent dot */}
                <div className="mt-6 h-1 w-1 bg-accent/50" />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Bottom decorative stripe */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
    </section>
  );
}
