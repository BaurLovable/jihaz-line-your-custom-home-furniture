import heroImage from "@/assets/hero-interior.jpg";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

/** Архитектурные размерные линии поверх фотографии — чертёжный мотив */
function BlueprintOverlay() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Размерные линии — золотой цвет */}
      <g stroke="#F2C94C" strokeWidth="0.6" fill="none" opacity="0.8">
        <path d="M24 268 H376" />
        <path d="M24 262 V274" />
        <path d="M376 262 V274" />
        <path d="M372 32 V250" />
        <path d="M366 32 H378" />
        <path d="M366 250 H378" />
        <rect x="24" y="32" width="150" height="218" strokeDasharray="4 5" opacity="0.5" />
        {/* Дополнительные архитектурные линии */}
        <path d="M24 150 H174" strokeDasharray="2 6" opacity="0.4" />
        <path d="M190 32 V268" strokeDasharray="2 6" opacity="0.3" />
      </g>
      {/* Технические метки — JetBrains Mono */}
      <text x="185" y="282" fill="#F2C94C" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.9">
        220 × 165 мм
      </text>
      <text x="382" y="155" fill="#F2C94C" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.9" transform="rotate(90, 382, 155)">
        165 мм
      </text>
    </svg>
  );
}

/** Угловые декоративные уголки */
function CornerMarks() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* TL */}
      <path d="M4 20 L4 4 L20 4" stroke="#35B8CF" strokeWidth="1.5" fill="none" />
      {/* TR */}
      <path d="M380 4 L396 4 L396 20" stroke="#35B8CF" strokeWidth="1.5" fill="none" />
      {/* BL */}
      <path d="M4 280 L4 296 L20 296" stroke="#35B8CF" strokeWidth="1.5" fill="none" />
      {/* BR */}
      <path d="M380 296 L396 296 L396 280" stroke="#35B8CF" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-24 lg:pt-28">
      {/* Blueprint grid overlay */}
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />

      {/* Золотой декоративный акцент — вертикальная полоска */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-accent via-accent/30 to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-8 pb-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24">

        {/* LEFT — текстовый блок */}
        <div className="min-w-0">
          {/* Overline — mono-метка */}
          <p className="inline-flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-accent" />
            <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-primary uppercase">
              Корпусная мебель на заказ · Жезқазған
            </span>
          </p>

          {/* H1 — Playfair Display, editorial luxury */}
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-primary sm:text-5xl lg:text-[3.75rem]">
            Мебель, которая точно встаёт на своё место
          </h1>

          {/* Подзаголовок */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Проектируем и изготавливаем корпусную мебель для дома с учётом размеров помещения,
            привычек семьи и выбранного стиля.
          </p>

          {/* Кнопки */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Primary — WhatsApp Gold */}
            <a
              href={waLink(
                "Здравствуйте! Хочу получить предварительный расчёт корпусной мебели для дома.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-accent px-7 py-4 font-mono text-sm font-bold text-accent-foreground uppercase tracking-wider shadow-[3px_3px_0_rgba(0,104,119,0.2)] transition-all hover:shadow-[5px_5px_0_rgba(0,104,119,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>Получить расчёт в WhatsApp</span>
            </a>

            {/* Ghost — azure border */}
            <a
              href="#categories"
              className="inline-flex items-center justify-center border-2 border-primary px-7 py-4 font-mono text-sm font-bold text-primary uppercase tracking-wider transition-all hover:bg-primary hover:text-white"
            >
              Посмотреть виды мебели
            </a>
          </div>

          <p className="mt-6 font-mono text-[11px] font-medium text-muted-foreground tracking-wide">
            ↳ Жезқазған и населённые пункты области Ұлытау
          </p>
        </div>

        {/* RIGHT — фотография с чертёжными оверлеями */}
        <div className="relative min-w-0">
          <figure className="relative overflow-hidden border border-[rgba(0,104,119,0.2)] bg-card">
            <img
              src={heroImage}
              alt="Современная гостиная со встроенной корпусной мебелью: шкафы и открытые полки во всю стену"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <BlueprintOverlay />
            <CornerMarks />
            {/* Угловой лейбл — mono-метка */}
            <figcaption className="absolute bottom-0 left-0 bg-primary/95 px-3 py-1.5 font-mono text-[10px] font-bold text-primary-foreground uppercase tracking-[0.1em]">
              REF: H-01 · Визуальный пример
            </figcaption>
          </figure>

          {/* Декоративный hard-shadow элемент */}
          <div
            aria-hidden="true"
            className="absolute -bottom-2 -right-2 h-full w-full border border-accent/40 -z-10"
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}
