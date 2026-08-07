import { Mail, MapPin, Phone, Send, Truck, Instagram, Facebook, Youtube } from "lucide-react";
import { Reveal } from "./Reveal";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.06-1.39-.74-.54-1.37-1.24-1.83-2.05-.09 1.95-.04 3.91-.05 5.86 0 1.33-.22 2.69-.76 3.91-.72 1.63-2.12 2.96-3.8 3.59-1.57.6-3.32.71-4.96.34-1.63-.35-3.14-1.28-4.17-2.61-1.22-1.54-1.78-3.56-1.56-5.5.17-1.58.82-3.13 1.95-4.27 1.25-1.27 2.99-2.03 4.79-2.17 1.2-.1 2.42.08 3.54.58V8.3c-1.12-.45-2.36-.5-3.51-.15-1.07.31-2.02 1.01-2.63 1.94-.7 1.05-.88 2.37-.53 3.59.3 1.03.99 1.95 1.91 2.5 1.01.62 2.24.79 3.39.49 1.15-.3 2.13-1.09 2.66-2.13.38-.72.54-1.54.52-2.36-.02-3.41 0-6.82-.01-10.23-.03-.09-.04-.18-.08-.27v-.03z" />
    </svg>
  );
}

export function Contacts() {
  return (
    <section id="contacts" className="border-t border-border bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            Обсудим вашу мебель
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              <li className="bg-card p-5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Телефон</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Прямой звонок для консультации
                  </p>
                </div>
                <a
                  href={site.phoneHref}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-secondary w-full"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Позвонить нам
                </a>
              </li>
              <li className="bg-card p-5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">WhatsApp</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Быстрое обсуждение деталей и расчет
                  </p>
                </div>
                <a
                  href={waLink("Здравствуйте! Хочу обсудить мебель на заказ.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] hover:bg-[#20ba59] px-4 py-3 text-sm font-bold text-white transition-colors w-full"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  Написать в WhatsApp
                </a>
              </li>
              <li className="bg-card p-5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Telegram</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Связь с менеджером в мессенджере
                  </p>
                </div>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-[#0088cc] hover:bg-[#0077b3] px-4 py-3 text-sm font-bold text-white transition-colors w-full"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Написать в Telegram
                </a>
              </li>
              <li className="bg-card p-5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Email</p>
                  <p className="mt-1 text-xs text-muted-foreground">Для коммерческих предложений</p>
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-neutral-700 hover:bg-neutral-800 px-4 py-3 text-sm font-bold text-white transition-colors w-full"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Отправить письмо
                </a>
              </li>
              <li className="bg-card p-5 sm:col-span-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase">
                  Социальные сети
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-background px-4 py-2.5 text-xs font-bold text-primary hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] border border-border transition-all group"
                  >
                    <Instagram className="h-4 w-4 shrink-0 text-[#E1306C] group-hover:text-white transition-colors" />
                    Instagram
                  </a>
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-background px-4 py-2.5 text-xs font-bold text-primary hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] border border-border transition-all group"
                  >
                    <Facebook className="h-4 w-4 shrink-0 text-[#1877F2] group-hover:text-white transition-colors" />
                    Facebook
                  </a>
                  <a
                    href={site.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-background px-4 py-2.5 text-xs font-bold text-primary hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] border border-border transition-all group"
                  >
                    <Youtube className="h-4 w-4 shrink-0 text-[#FF0000] group-hover:text-white transition-colors" />
                    YouTube
                  </a>
                  <a
                    href={site.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-background px-4 py-2.5 text-xs font-bold text-primary hover:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black border border-border transition-all group"
                  >
                    <TiktokIcon className="h-4 w-4 shrink-0 text-foreground dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
                    TikTok
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Регион обслуживания. Точка на карте не указывается: точный адрес цеха не подтверждён. */}
          <Reveal delay={100}>
            <div className="blueprint-grid relative h-full overflow-hidden rounded-sm border border-border bg-primary p-6 text-primary-foreground">
              <MapPin className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">Регион обслуживания</h3>
              <p className="mt-3 text-sm text-primary-foreground/80">{site.address}</p>
              <div className="mt-6 flex items-start gap-3 border-t border-accent/50 pt-5">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-primary-foreground/80">
                  {site.delivery}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
