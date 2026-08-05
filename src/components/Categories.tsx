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

// Изображения — визуальные примеры. Заменить на фотографии работ Jihaz-Line.
const categories = [
  {
    title: "Кухни",
    image: kitchen,
    alt: "Кухня на заказ со светлыми и синими фасадами в квартире",
    text: "Рабочая зона, хранение и техника размещаются по вашему сценарию готовки.",
    wa: "Здравствуйте! Хочу заказать кухню. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    title: "Шкафы и системы хранения",
    image: wardrobe,
    alt: "Встроенный шкаф во всю стену со светлым древесным фасадом",
    text: "Используем всю высоту стены — вещи убираются, а комната остаётся свободной.",
    wa: "Здравствуйте! Хочу заказать шкаф или систему хранения. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    title: "Гардеробные",
    image: dressing,
    alt: "Гардеробная комната с открытыми полками, штангами и ящиками",
    text: "Открытое наполнение, штанги и ящики под конкретный гардероб семьи.",
    wa: "Здравствуйте! Хочу заказать гардеробную. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    title: "Прихожие",
    image: hallway,
    alt: "Прихожая со встроенной скамьёй, обувницей и шкафом для верхней одежды",
    text: "Обувь, верхняя одежда и мелочи находят место даже в узком коридоре.",
    wa: "Здравствуйте! Хочу заказать прихожую. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    title: "Детские комнаты",
    image: kids,
    alt: "Детская комната со встроенной кроватью, столом и шкафом",
    text: "Спальное место, стол и хранение объединяются в одном компактном решении.",
    wa: "Здравствуйте! Хочу заказать мебель в детскую комнату. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    title: "ТВ-зоны и гостиные",
    image: tv,
    alt: "Гостиная со встроенной ТВ-зоной, нишами и закрытым хранением",
    text: "Ниши, закрытые секции и аккуратная разводка проводов у телевизора.",
    wa: "Здравствуйте! Хочу заказать ТВ-зону или мебель в гостиную. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    title: "Мебель для спальни",
    image: bedroom,
    alt: "Спальня с изголовьем, тумбами и встроенным шкафом из дерева",
    text: "Изголовье, тумбы и шкаф собираются в одну спокойную композицию.",
    wa: "Здравствуйте! Хочу заказать мебель для спальни. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
  {
    title: "Мебель для домашнего кабинета",
    image: office,
    alt: "Домашний кабинет со встроенным столом и книжными полками",
    text: "Рабочий стол и полки по размеру ниши — даже если это угол комнаты.",
    wa: "Здравствуйте! Хочу заказать мебель для домашнего кабинета. Подскажите, пожалуйста, как получить предварительный расчёт?",
  },
];

export function Categories() {
  return (
    <section id="categories" className="border-t border-border bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold tracking-widest text-secondary uppercase">Виды мебели</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Мебель для каждой зоны дома
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal as="li" key={cat.title} delay={(i % 4) * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-background">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-0 left-0 bg-primary/90 px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                    Пример решения
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-primary">{cat.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cat.text}
                  </p>
                  <a
                    href={waLink(cat.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-sm border-2 border-primary px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:border-accent hover:bg-primary hover:text-primary-foreground"
                  >
                    Обсудить проект
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
