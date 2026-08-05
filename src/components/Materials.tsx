import { Reveal } from "./Reveal";
import { waLink } from "@/lib/site";

const swatches = [
  { name: "Светлый древесный", className: "bg-wood" },
  { name: "Молочно-серый", className: "bg-background" },
  { name: "Глубокий синий", className: "bg-primary" },
  { name: "Насыщенный синий", className: "bg-secondary" },
  { name: "Графитовый", className: "bg-foreground" },
  { name: "Золотая фурнитура", className: "bg-accent" },
];

export function Materials() {
  return (
    <section id="materials" className="bg-card py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-xs font-bold tracking-widest text-secondary uppercase">Материалы</p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
            Цвет, фактура и фурнитура — под ваш интерьер
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Помогаем подобрать практичные материалы, цвет и современную фурнитуру. Варианты
            отделки, наполнение и комплектующие обсуждаем на этапе проекта — под конкретное
            помещение и бюджет.
          </p>
          <a
            href={waLink(
              "Здравствуйте! Хочу обсудить материалы и фурнитуру для мебели на заказ.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-secondary"
          >
            Обсудить материалы
          </a>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            {swatches.map((s) => (
              <li key={s.name} className="bg-card p-4">
                <span
                  aria-hidden="true"
                  className={`block h-20 w-full rounded-sm border border-border ${s.className}`}
                />
                <span className="mt-3 block text-xs font-semibold text-muted-foreground">
                  {s.name}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Образцы приведены как ориентир по цвету. Точные варианты отделки показываем при
            обсуждении проекта.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
