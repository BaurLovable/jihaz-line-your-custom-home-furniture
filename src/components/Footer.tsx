import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { navItems, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary pb-24 text-primary-foreground lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Логотип Jihaz-Line"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 rounded-sm"
            />
            <span className="font-display text-lg font-extrabold">Jihaz-Line</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Собственное производство корпусной мебели для дома и офиса.
          </p>
        </div>

        <nav aria-label="Навигация в подвале">
          <h2 className="text-sm font-bold text-accent">Разделы</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-primary-foreground/80 hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-accent">Контакты</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Telegram {site.telegramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-accent">Ещё</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                YouTube
              </a>
            </li>
            <li>
              <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                TikTok
              </a>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-accent">
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-primary-foreground/60 sm:px-6">
          © {year} Jihaz-Line
        </p>
      </div>
    </footer>
  );
}
