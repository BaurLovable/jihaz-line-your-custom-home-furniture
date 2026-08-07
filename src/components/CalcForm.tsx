import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type Fields = {
  name: string;
  phone: string;
  type: string;
  size: string;
  comment: string;
  budget: string;
};

const emptyFields: Fields = { name: "", phone: "", type: "", size: "", comment: "", budget: "" };

const furnitureTypes = [
  "Кухня",
  "Шкаф или система хранения",
  "Гардеробная",
  "Прихожая",
  "Детская комната",
  "ТВ-зона или гостиная",
  "Спальня",
  "Домашний кабинет",
  "Другое",
];

const inputClass =
  "mt-1.5 w-full rounded-sm border border-input bg-card px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70";

export function CalcForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [pending, setPending] = useState(false);

  const set = (key: keyof Fields) => (value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {};
    const name = fields.name.trim();
    const phone = fields.phone.trim();
    if (name.length < 2) next.name = "Укажите, пожалуйста, ваше имя";
    else if (name.length > 60) next.name = "Слишком длинное имя";
    if (!/^[+()\d\s-]{7,20}$/.test(phone)) next.phone = "Укажите номер телефона для связи";
    if (!fields.type) next.type = "Выберите вид мебели";
    if (fields.comment.length > 800) next.comment = "Комментарий слишком длинный";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setPending(true);

    const lines = [
      "Здравствуйте! Запрос на предварительный расчёт мебели.",
      `Имя: ${fields.name.trim()}`,
      `Телефон: ${fields.phone.trim()}`,
      `Вид мебели: ${fields.type}`,
      fields.size.trim() ? `Примерные размеры: ${fields.size.trim()}` : "",
      fields.budget.trim() ? `Желаемый бюджет: ${fields.budget.trim()} ₸` : "",
      fields.comment.trim() ? `Комментарий: ${fields.comment.trim()}` : "",
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setPending(false);
  }

  return (
    <section id="calc" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
            Расскажите, какая мебель вам нужна
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Заполните поля — данные подставятся в сообщение WhatsApp, и вы отправите его сами.
            Фотографию помещения или пример понравившейся мебели можно прикрепить прямо в чате.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 grid gap-5 rounded-sm border border-border bg-card p-5 sm:grid-cols-2 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-primary">
                Имя <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                required
                maxLength={60}
                value={fields.name}
                onChange={(e) => set("name")(e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputClass}
                placeholder="Как к вам обращаться"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-primary">
                Телефон <span aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
                value={fields.phone}
                onChange={(e) => set("phone")(e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={inputClass}
                placeholder="+7 (___) ___-__-__"
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-sm text-destructive">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="type" className="text-sm font-semibold text-primary">
                Вид мебели <span aria-hidden="true">*</span>
              </label>
              <select
                id="type"
                name="type"
                required
                value={fields.type}
                onChange={(e) => set("type")(e.target.value)}
                aria-invalid={Boolean(errors.type)}
                aria-describedby={errors.type ? "type-error" : undefined}
                className={inputClass}
              >
                <option value="">Выберите вариант</option>
                {furnitureTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.type && (
                <p id="type-error" className="mt-1.5 text-sm text-destructive">
                  {errors.type}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="size" className="text-sm font-semibold text-primary">
                Примерные размеры
              </label>
              <input
                id="size"
                name="size"
                maxLength={120}
                value={fields.size}
                onChange={(e) => set("size")(e.target.value)}
                className={inputClass}
                placeholder="Например: 3200 × 2700 мм"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="budget" className="text-sm font-semibold text-primary">
                Желаемый бюджет, ₸{" "}
                <span className="font-normal text-muted-foreground">— необязательно</span>
              </label>
              <input
                id="budget"
                name="budget"
                inputMode="numeric"
                maxLength={20}
                value={fields.budget}
                onChange={(e) => set("budget")(e.target.value)}
                className={inputClass}
                placeholder="Ориентир в тенге"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="comment" className="text-sm font-semibold text-primary">
                Комментарий
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                maxLength={800}
                value={fields.comment}
                onChange={(e) => set("comment")(e.target.value)}
                aria-invalid={Boolean(errors.comment)}
                className={`${inputClass} resize-y`}
                placeholder="Помещение, пожелания, что важно учесть"
              />
              {errors.comment && (
                <p className="mt-1.5 text-sm text-destructive">{errors.comment}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center justify-center gap-2.5 w-full rounded-sm bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#20ba59] active:bg-[#1da850] disabled:opacity-70"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>{pending ? "Открываем WhatsApp…" : "Отправить запрос в WhatsApp"}</span>
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Нажимая кнопку, вы откроете чат WhatsApp с номером {site.phoneDisplay} и готовым
                текстом сообщения.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
