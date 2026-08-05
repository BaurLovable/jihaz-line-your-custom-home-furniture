import { Mail, MapPin, MessageCircle, Phone, Send, Truck } from "lucide-react";
import { Reveal } from "./Reveal";
import { site, waLink } from "@/lib/site";

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
              <li className="bg-card p-5">
                <Phone className="h-5 w-5 text-secondary" aria-hidden="true" />
                <p className="mt-3 text-xs font-semibold text-muted-foreground uppercase">Телефон</p>
                <a href={site.phoneHref} className="text-lg font-bold text-primary hover:text-secondary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="bg-card p-5">
                <MessageCircle className="h-5 w-5 text-secondary" aria-hidden="true" />
                <p className="mt-3 text-xs font-semibold text-muted-foreground uppercase">WhatsApp</p>
                <a
                  href={waLink("Здравствуйте! Хочу обсудить мебель на заказ.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-primary hover:text-secondary"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="bg-card p-5">
                <Send className="h-5 w-5 text-secondary" aria-hidden="true" />
                <p className="mt-3 text-xs font-semibold text-muted-foreground uppercase">Telegram</p>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-primary hover:text-secondary"
                >
                  {site.telegramHandle}
                </a>
              </li>
              <li className="bg-card p-5">
                <Mail className="h-5 w-5 text-secondary" aria-hidden="true" />
                <p className="mt-3 text-xs font-semibold text-muted-foreground uppercase">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-base font-bold break-all text-primary hover:text-secondary"
                >
                  {site.email}
                </a>
              </li>
              <li className="bg-card p-5 sm:col-span-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase">
                  Социальные сети
                </p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-primary">
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                    Instagram {site.instagramHandle}
                  </a>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                    Facebook
                  </a>
                  <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                    YouTube
                  </a>
                  <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
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
