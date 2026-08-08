import { Reveal } from "./Reveal";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#effcff] py-16 lg:py-24">
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-50"
      />

      {/* Золотой декоративный блок — архитектурный уголок */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            {/* Overline */}
            <p className="section-overline">Начнём сотрудничество</p>

            {/* H2 Playfair */}
            <h2 className="mt-5 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Начнём с вашей идеи
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Пришлите размеры, фотографию помещения или пример понравившейся мебели — обсудим задачу
              и подготовим предварительный расчёт.
            </p>

            {/* CTA кнопки */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              {/* Primary Gold */}
              <a
                href={waLink(
                  "Здравствуйте! Хочу обсудить мебель на заказ и получить предварительный расчёт.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-accent px-8 py-4 font-mono text-sm font-bold text-accent-foreground uppercase tracking-wider shadow-[4px_4px_0_rgba(0,104,119,0.2)] transition-all hover:shadow-[6px_6px_0_rgba(0,104,119,0.3)] hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>Написать в WhatsApp</span>
              </a>

              {/* Ghost azure */}
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center border-2 border-primary px-8 py-4 font-mono text-sm font-bold text-primary uppercase tracking-wider transition-all hover:bg-primary hover:text-white hover:shadow-[4px_4px_0_rgba(242,201,76,0.4)]"
              >
                Позвонить
              </a>
            </div>

            {/* Decorative mono note */}
            <p className="mt-8 font-mono text-[11px] text-muted-foreground tracking-wide">
              ⟵ Жезқазған · Область Ұлытау · Производство полного цикла ⟶
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
