import { Reveal } from "./Reveal";
import workshop from "@/assets/workshop.jpg";
import { ShieldCheck, Coins, Scissors, Layers, Settings2, Hammer } from "lucide-react";

const machines = [
  {
    icon: Scissors,
    ref: "M-01",
    stage: "Раскрой и резка плиты",
    machineName: "Форматно-раскроечный станок",
    description:
      "Обеспечивает идеально точный раскрой ЛДСП, МДФ и ХДФ плит строго по размерам чертежа. Никаких сколов на ламинате и отклонений по диагонали — детали стыкуются без зазоров.",
  },
  {
    icon: Layers,
    ref: "M-02",
    stage: "Кромкооблицовка (Клейка)",
    machineName: "Кромкооблицовочный станок",
    description:
      "Кромка ПВХ и АБС наносится под высокой температурой и давлением. Клеевой шов герметичен — это защищает мебель от проникновения влаги, разбухания и сколов на торцах.",
  },
  {
    icon: Settings2,
    ref: "M-03",
    stage: "Присадка (Сверление)",
    machineName: "Сверлильно-присадочный станок",
    description:
      "Выполняет высокоточное сверление глухих и сквозных отверстий под мебельную фурнитуру. Благодаря этому петли, направляющие и стяжки монтируются ровно, без перекосов.",
  },
  {
    icon: Hammer,
    ref: "M-04",
    stage: "Кастомизация и доводка",
    machineName: "Фрезерный и вспомогательный инструмент",
    description:
      "Профессиональные ручные фрезеры и шлифовальные машины для изготовления сложных радиусных элементов, нестандартных деталей и идеальной подгонки мебели при сборке.",
  },
];

export function About() {
  return (
    <section id="about" className="border-y border-[rgba(0,104,119,0.12)] bg-[#f0fbfd] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ——— Верхняя часть: УТП и производство ——— */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <figure className="relative overflow-hidden border border-[rgba(0,104,119,0.18)] bg-card group">
              <img
                src={workshop}
                alt="Собственный мебельный цех Jihaz-Line в Жезказгане"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-102"
              />
              {/* REF метка */}
              <figcaption className="absolute bottom-0 left-0 bg-primary/95 px-3 py-1.5 font-mono text-[10px] font-bold text-white uppercase tracking-[0.1em]">
                REF: W-01 · Собственный цех Jihaz-Line
              </figcaption>
              {/* Угловые маркеры на hover */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 300"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <path d="M8 24 L8 8 L24 8" stroke="#F2C94C" strokeWidth="2" fill="none" />
                <path d="M376 8 L392 8 L392 24" stroke="#F2C94C" strokeWidth="2" fill="none" />
                <path d="M8 276 L8 292 L24 292" stroke="#F2C94C" strokeWidth="2" fill="none" />
                <path d="M376 292 L392 292 L392 276" stroke="#F2C94C" strokeWidth="2" fill="none" />
              </svg>
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <div>
              {/* Overline */}
              <p className="section-overline">Производство полного цикла</p>

              {/* H2 — Playfair Display */}
              <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl leading-tight">
                Мебель напрямую из цеха — без субподрядов и переплат
              </h2>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Мы производим корпусную мебель в Жезказгане уже <strong className="text-primary font-bold">более 15 лет</strong>. Главный принцип нашей работы — полная независимость. Все технологические операции выполняются в нашем собственном цеху на профессиональном оборудовании.
              </p>

              {/* Преимущества */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4 group">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-white transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                    <Coins className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-primary">Никаких субподрядов</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Мы не передаем распил или кромление сторонним организациям. Это исключает
                      посреднические наценки и гарантирует честную цену.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-white transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-primary">100% контроль качества</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Каждая деталь проходит строгий контроль на стадиях резки, клейки и присадки.
                      Мы лично отвечаем за долговечность вашей мебели.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ——— Нижняя часть: Парк оборудования ——— */}
        <div className="mt-20 border-t border-[rgba(0,104,119,0.12)] pt-16">
          <Reveal>
            <div className="gold-rule pt-6 max-w-3xl mx-auto text-center">
              <p className="section-overline">Наше оборудование</p>
              <h3 className="mt-4 font-display text-2xl font-bold text-primary sm:text-3xl">
                Выполняем все операции на профессиональных станках
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Современное техническое оснащение позволяет нам изготавливать мебель любой сложности
                с заводской точностью и высоким качеством стыков.
              </p>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {machines.map((machine, i) => (
              <Reveal
                as="li"
                key={machine.machineName}
                delay={i * 80}
                className="bg-white border border-[rgba(0,104,119,0.15)] p-6 flex flex-col justify-between group transition-all duration-200 hover:shadow-[4px_4px_0_#ddf4f7] hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <div>
                  {/* Icon — Primary fill */}
                  <div className="flex h-12 w-12 items-center justify-center bg-primary text-white group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200">
                    <machine.icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  {/* REF метка */}
                  <span className="mt-4 block font-mono text-[10px] font-bold tracking-[0.1em] text-primary/50 uppercase">
                    {machine.ref} — {machine.stage}
                  </span>

                  {/* Machine name */}
                  <h4 className="mt-2 font-display text-base font-bold text-primary leading-tight">
                    {machine.machineName}
                  </h4>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {machine.description}
                  </p>
                </div>

                {/* Bottom decorative rule */}
                <div className="mt-5 h-px w-8 bg-accent" />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
