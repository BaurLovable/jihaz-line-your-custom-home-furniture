import { Reveal } from "./Reveal";
import workshop from "@/assets/workshop.jpg";
import { ShieldCheck, Coins, Scissors, Layers, Hammer, Settings2 } from "lucide-react";

const machines = [
  {
    icon: Scissors,
    stage: "Раскрой и резка плиты",
    machineName: "Форматно-раскроечный станок",
    description:
      "Обеспечивает идеально точный раскрой ЛДСП, МДФ и ХДФ плит строго по размерам чертежа. Никаких сколов на ламинате и отклонений по диагонали — детали стыкуются без зазоров.",
  },
  {
    icon: Layers,
    stage: "Кромкооблицовка (Клейка)",
    machineName: "Кромкооблицовочный станок",
    description:
      "Кромка ПВХ и АБС наносится под высокой температурой и давлением. Клеевой шов герметичен — это защищает мебель от проникновения влаги, разбухания и сколов на торцах.",
  },
  {
    icon: Settings2,
    stage: "Присадка (Сверление)",
    machineName: "Сверлильно-присадочный станок",
    description:
      "Выполняет высокоточное сверление глухих и сквозных отверстий под мебельную фурнитуру. Благодаря этому петли, направляющие и стяжки монтируются ровно, без перекосов.",
  },
  {
    icon: Hammer,
    stage: "Кастомизация и доводка",
    machineName: "Фрезерный и вспомогательный инструмент",
    description:
      "Профессиональные ручные фрезеры и шлифовальные машины для изготовления сложных радиусных элементов, нестандартных деталей и идеальной подгонки мебели при сборке.",
  },
];

export function About() {
  return (
    <section id="about" className="border-y border-border bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Верхняя часть: УТП и Производство */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <figure className="relative overflow-hidden rounded-sm border border-border">
              <img
                src={workshop}
                alt="Собственный мебельный цех Jihaz-Line в Жезказгане"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover aspect-[4/3]"
              />
              <figcaption className="absolute bottom-4 left-4 bg-primary/95 px-3 py-1.5 text-xs font-bold text-primary-foreground backdrop-blur-xs rounded-sm">
                Собственный цех Jihaz-Line
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="text-xs font-bold tracking-widest text-secondary uppercase">
                Производство полного цикла
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
                Мебель напрямую из цеха — без субподрядов и переплат
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Мы производим корпусную мебель в Жезказгане уже **более 15 лет**. Главный принцип
                нашей работы — полная независимость. Все технологические операции выполняются в
                нашем собственном цеху на профессиональном оборудовании.
              </p>

              {/* Маркетинговые преимущества */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <Coins className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm">Никаких субподрядов</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Мы не передаем распил или кромление сторонним организациям. Это исключает
                      посреднические наценки и гарантирует честную цену.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm">100% контроль качества</h3>
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

        {/* Нижняя часть: Парк оборудования */}
        <div className="mt-20 border-t border-border pt-16">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-bold tracking-widest text-secondary uppercase">
                Наше оборудование
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-primary sm:text-3xl">
                Выполняем все операции на профессиональных станках
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Современное техническое оснащение позволяет нам изготавливать мебель любой сложности
                с заводской точностью и высоким качеством стыков.
              </p>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {machines.map((machine, i) => (
              <Reveal
                as="li"
                key={machine.machineName}
                delay={i * 70}
                className="bg-background rounded-sm border border-border p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                    <machine.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="mt-4 block text-[10px] font-bold tracking-wider text-secondary uppercase">
                    {machine.stage}
                  </span>
                  <h4 className="mt-2 text-base font-extrabold text-primary leading-tight">
                    {machine.machineName}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {machine.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
