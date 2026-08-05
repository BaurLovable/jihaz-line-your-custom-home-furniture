import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { navItems, site, waLink } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-background/95 border-b border-border backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Логотип Jihaz-Line"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-sm"
          />
          <span className="font-display truncate text-lg font-extrabold text-primary">
            Jihaz-Line
          </span>
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-secondary border-b-2 border-transparent pb-1 text-sm font-semibold text-foreground transition-colors hover:border-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href={site.phoneHref}
            className="hover:text-secondary hidden text-sm font-bold text-primary xl:inline"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={waLink(
              "Здравствуйте! Хочу рассчитать мебель на заказ. Подскажите, пожалуйста, как получить предварительный расчёт?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-secondary sm:inline-flex"
          >
            Рассчитать мебель
          </a>
          <a
            href={site.phoneHref}
            aria-label={`Позвонить ${site.phoneDisplay}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card text-primary lg:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-card text-primary lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Мобильная навигация"
          className="border-t border-border bg-card px-4 pb-4 lg:hidden"
        >
          <ul className="divide-y divide-border">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-3 block text-base font-bold text-primary"
            onClick={() => setOpen(false)}
          >
            {site.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
