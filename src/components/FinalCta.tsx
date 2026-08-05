import { Reveal } from "./Reveal";
import { site, waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Начнём с вашей идеи
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Пришлите размеры, фотографию помещения или пример понравившейся мебели — обсудим задачу
            и подготовим предварительный расчёт.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={waLink(
                "Здравствуйте! Хочу обсудить мебель на заказ и получить предварительный расчёт.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-secondary"
            >
              Написать в WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-sm border-2 border-primary px-7 py-4 text-base font-bold text-primary transition-colors hover:border-accent hover:text-secondary"
            >
              Позвонить
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
