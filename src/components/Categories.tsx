import { Reveal } from "./Reveal";
import { waLink } from "@/lib/site";
import kitchen from "@/assets/cat-kitchen.jpg";
import wardrobe from "@/assets/cat-wardrobe.jpg";
import dressing from "@/assets/cat-dressing.jpg";
import hallway from "@/assets/cat-hallway.jpg";
import kids from "@/assets/cat-kids.jpg";
import tv from "@/assets/cat-tv.jpg";
import bedroom from "@/assets/cat-bedroom.jpg";
import office from "@/assets/cat-office.jpg";

const categories = [
  {
    ref: "K-01",
    title: "Кухни",
    image: kitchen,
    alt: "Кухня на заказ со светлыми и синими фасадами в квартире",
    text: "Рабочая зона, хранение и техника размещаются по вашему сценарию готовки.",
    wa: "Здравствуйте! Хочу заказать кухню. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    ref: "S-04",
    title: "Шкафы и системы хранения",
    image: wardrobe,
    alt: "Встроенный шкаф во всю стену со светлым древесным фасадом",
    text: "Используем всю высоту стены — вещи убираются, а комната остаётся свободной.",
    wa: "Здравствуйте! Хочу заказать шкаф или систему хранения. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    ref: "G-02",
    title: "Гардеробные",
    image: dressing,
    alt: "Гардеробная комната с открытыми полками, штангами и ящиками",
    text: "Открытое наполнение, штанги и ящики под конкретный гардероб семьи.",
    wa: "Здравствуйте! Хочу заказать гардеробную. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    ref: "P-08",
    title: "Прихожие",
    image: hallway,
    alt: "Прихожая со встроенной скамьёй, обувницей и шкафом для верхней одежды",
    text: "Обувь, верхняя одежда и мелочи находят место даже в узком коридоре.",
    wa: "Здравствуйте! Хочу заказать прихожую. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    ref: "D-03",
    title: "Детские комнаты",
    image: kids,
    alt: "Детская комната со встроенной кроватью, столом и шкафом",
    text: "Спальное место, стол и хранение объединяются в одном компактном решении.",
    wa: "Здравствуйте! Хочу заказать мебель в детскую комнату. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    ref: "L-05",
    title: "ТВ-зоны и гостиные",
    image: tv,
    alt: "Гостиная со встроенной ТВ-зоной, нишами и закрытым хранением",
    text: "Ниши, закрытые секции и аккуратная разводка проводов у телевизора.",
    wa: "Здравствуйте! Хочу заказать ТВ-зону или мебель в гостиную. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    ref: "B-07",
    title: "Мебель для спальни",
    image: bedroom,
    alt: "Спальня с изголовьем, тумбами и встроенным шкафом из дерева",
    text: "Изголовье, тумбы и шкаф собираются в одну спокойную композицию.",
    wa: "Здравствуйте! Хочу заказать мебель для спальни. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    ref: "O-09",
    title: "Мебель для домашнего кабинета",
    image: office,
    alt: "Домашний кабинет со встроенным столом и книжными полками",
    text: "Рабочий стол и полки по размеру ниши — даже если это угол комнаты.",
    wa: "Здравствуйте! Хочу заказать мебель для домашнего кабинета. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
];

export function Categories() {
  return (
    <section id="categories" className="border-t border-[rgba(0,104,119,0.12)] bg-[#f7fdff] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          {/* Section header с mono overline */}
          <div className="gold-rule pt-6">
            <p className="section-overline">Каталог решений</p>
            <h2 className="mt-4 font-display max-w-2xl text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Мебель для каждой зоны дома
            </h2>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal as="li" key={cat.title} delay={(i % 4) * 80}>
              <article className="group flex h-full flex-col overflow-hidden border border-[rgba(0,104,119,0.15)] bg-white transition-all duration-200 hover:shadow-[4px_4px_0_#ddf4f7] hover:-translate-x-0.5 hover:-translate-y-0.5">
                {/* Изображение */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                  {/* REF лейбл — JetBrains Mono, угловой тег */}
                  <span className="absolute top-0 left-0 bg-primary/90 px-2.5 py-1 font-mono text-[10px] font-bold text-white uppercase tracking-[0.08em]">
                    REF: {cat.ref}
                  </span>
                  {/* Угловые маркеры */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 100 75"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <path d="M3 12 L3 3 L12 3" stroke="#F2C94C" strokeWidth="1.5" fill="none" />
                    <path d="M88 3 L97 3 L97 12" stroke="#F2C94C" strokeWidth="1.5" fill="none" />
                    <path d="M3 63 L3 72 L12 72" stroke="#F2C94C" strokeWidth="1.5" fill="none" />
                    <path d="M88 72 L97 72 L97 63" stroke="#F2C94C" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>

                {/* Контент карточки */}
                <div className="flex flex-1 flex-col p-5 border-t border-[rgba(0,104,119,0.1)]">
                  <h3 className="font-display text-lg font-bold text-primary leading-tight">
                    {cat.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cat.text}
                  </p>
                  <a
                    href={waLink(cat.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center border border-primary px-4 py-2.5 font-mono text-xs font-bold text-primary uppercase tracking-wider transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-[2px_2px_0_rgba(242,201,76,0.5)]"
                  >
                    Обсудить проект ↗
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
