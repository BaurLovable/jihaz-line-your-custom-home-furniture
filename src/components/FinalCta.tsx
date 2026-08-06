import { Reveal } from "./Reveal";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

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
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#20ba59]"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>Написать в WhatsApp</span>
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
