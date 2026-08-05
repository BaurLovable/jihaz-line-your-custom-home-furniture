import { Factory, Ruler, Layers, Truck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Factory,
    title: "Собственное производство",
    text: "Изготавливаем корпусную мебель в собственном цехе.",
  },
  {
    icon: Ruler,
    title: "Под размеры помещения",
    text: "Продумываем конфигурацию мебели с учётом особенностей пространства.",
  },
  {
    icon: Layers,
    title: "Материалы и фурнитура",
    text: "Помогаем подобрать практичные материалы, цвет и современную фурнитуру.",
  },
  {
    icon: Truck,
    title: "Доставка по региону",
    text: "Принимаем заказы и осуществляем доставку по Жезқазғану и населённым пунктам области Ұлытау.",
  },
];

export function Advantages() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            От идеи до мебели в вашем доме
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70} className="bg-card">
              <div className="rule-line h-full p-6">
                <item.icon className="h-7 w-7 text-secondary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
