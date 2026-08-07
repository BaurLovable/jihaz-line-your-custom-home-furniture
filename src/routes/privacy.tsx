import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

const title = "Политика конфиденциальности — Jihaz-Line";
const description =
  "Как Jihaz-Line обрабатывает контактные данные, которые вы отправляете при обращении за расчётом мебели.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <Link to="/" className="text-sm font-bold text-secondary hover:text-primary">
        ← На главную
      </Link>
      <h1 className="mt-6 text-3xl font-extrabold text-primary sm:text-4xl">
        Политика конфиденциальности
      </h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>Страница является заготовкой. Данные владельца сайта и реквизиты требуют заполнения.</p>

        <section>
          <h2 className="text-xl font-bold text-primary">Какие данные передаются</h2>
          <p className="mt-3">
            Форма на сайте не сохраняет данные и не отправляет их на сервер. Введённые вами имя,
            телефон, вид мебели, размеры, бюджет и комментарий подставляются в текст сообщения
            WhatsApp, которое вы отправляете самостоятельно.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary">Как используются данные</h2>
          <p className="mt-3">
            Полученные в переписке контакты используются только для ответа на обращение и обсуждения
            заказа мебели.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary">Сторонние сервисы</h2>
          <p className="mt-3">
            Переписка ведётся в WhatsApp и Telegram, поэтому к ней применяются условия этих
            сервисов.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary">Контакты</h2>
          <p className="mt-3">
            {site.name}, {site.address}. Телефон:{" "}
            <a href={site.phoneHref} className="font-semibold text-primary hover:text-secondary">
              {site.phoneDisplay}
            </a>
            , email:{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold break-all text-primary hover:text-secondary"
            >
              {site.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
