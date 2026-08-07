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
      className="relative overflow-hidden border-y border-border bg-primary py-16 text-primary-foreground lg:py-24"
    >
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-widest text-accent uppercase">Порядок работы</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Как проходит заказ
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 70}>
              <div className="relative border-t border-accent/60 pt-5">
                {/* Отметка размерной линии */}
                <span aria-hidden="true" className="absolute -top-1.5 left-0 h-3 w-px bg-accent" />
                <span
                  aria-hidden="true"
                  className="absolute -top-1.5 right-0 h-3 w-px bg-accent/50"
                />
                <span className="font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
