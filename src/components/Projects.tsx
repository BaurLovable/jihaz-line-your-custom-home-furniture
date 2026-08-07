import { Reveal } from "./Reveal";
import hero from "@/assets/hero-interior.jpg";
import facade from "@/assets/proj-facade.jpg";
import inside from "@/assets/proj-inside.jpg";
import wardrobe from "@/assets/cat-wardrobe.jpg";

/*
 * TODO: заменить изображения ниже на фотографии выполненных работ Jihaz-Line.
 * Сейчас это нейтральные визуальные примеры, помеченные как «Пример решения».
 */
const shots = [
  { src: hero, alt: "Общий вид гостиной со встроенной мебелью", caption: "Общий вид" },
  { src: facade, alt: "Деталь фасада шкафа с ручкой-профилем", caption: "Деталь фасада" },
  {
    src: inside,
    alt: "Внутреннее наполнение выдвижного ящика с разделителями",
    caption: "Внутреннее наполнение",
  },
  { src: wardrobe, alt: "Встроенный шкаф в интерьере комнаты", caption: "Мебель в интерьере" },
];

export function Projects() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Мебель для реальных пространств
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Раздел подготовлен для фотографий выполненных работ. Сейчас показаны визуальные примеры
            решений.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal as="li" key={shot.caption} delay={(i % 4) * 70}>
              <figure className="overflow-hidden rounded-sm border border-border bg-card">
                <div className="relative aspect-4/3">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-0 left-0 bg-primary/90 px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                    Пример решения
                  </span>
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-primary">
                  {shot.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
