import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";
import workshop from "@/assets/workshop.jpg";

export function About() {
  return (
    <section id="about" className="border-y border-border bg-card py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <figure className="overflow-hidden rounded-sm border border-border">
            {/* Визуальный пример производства. Заменить на фото цеха Jihaz-Line. */}
            <img
              src={workshop}
              alt="Мебельный цех: раскроечный станок и подготовленные плиты"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Jihaz-Line — мебельное производство в Жезқазғане
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Изготавливаем корпусную мебель для дома и офиса. Помогаем подобрать конфигурацию,
            материалы и наполнение под конкретное помещение. Работаем с заказами по Жезқазғану и
            области Ұлытау.
          </p>
          <a
            href={site.catalog}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-base font-bold text-primary transition-colors hover:text-secondary"
          >
            Посмотреть действующий каталог
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
