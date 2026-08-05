import heroImage from "@/assets/hero-interior.jpg";
import { site, waLink } from "@/lib/site";

/** Тонкие размерные линии мебельного чертежа поверх фотографии. */
function BlueprintOverlay() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 300"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full text-accent/70"
    >
      <g stroke="currentColor" strokeWidth="0.6" fill="none">
        <path d="M24 268 H376" />
        <path d="M24 262 V274" />
        <path d="M376 262 V274" />
        <path d="M372 32 V250" />
        <path d="M366 32 H378" />
        <path d="M366 250 H378" />
        <rect x="24" y="32" width="150" height="218" strokeDasharray="4 5" />
      </g>
      <text x="185" y="264" fill="currentColor" fontSize="9" fontFamily="monospace">
        мм
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-24 lg:pt-28">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-8 pb-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 border-l-2 border-accent pl-3 text-xs font-bold tracking-wide text-secondary uppercase sm:text-sm">
            Корпусная мебель на заказ · Жезқазған
          </p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold text-primary sm:text-5xl lg:text-6xl">
            Мебель, которая точно встаёт на своё место
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Проектируем и изготавливаем корпусную мебель для дома с учётом размеров помещения,
            привычек семьи и выбранного стиля.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Здравствуйте! Хочу получить предварительный расчёт корпусной мебели для дома.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-secondary"
            >
              Получить расчёт в WhatsApp
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-sm border-2 border-primary px-7 py-4 text-base font-bold text-primary transition-colors hover:border-accent hover:text-secondary"
            >
              Посмотреть виды мебели
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Работаем в Жезқазғане и населённых пунктах области Ұлытау.
          </p>
        </div>

        <div className="relative min-w-0">
          <figure className="relative overflow-hidden rounded-sm border border-border bg-card">
            {/* Визуальный пример. Заменить на фотографию реального проекта Jihaz-Line. */}
            <img
              src={heroImage}
              alt="Современная гостиная со встроенной корпусной мебелью: шкафы и открытые полки во всю стену"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <BlueprintOverlay />
            <figcaption className="absolute bottom-0 left-0 bg-primary/90 px-3 py-1.5 text-xs font-semibold text-primary-foreground">
              Визуальный пример
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
