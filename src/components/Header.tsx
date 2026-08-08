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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between lg:py-4">
        {/* Logo */}
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Логотип Jihaz-Line"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
          />
          <span className="font-display truncate text-xl font-bold text-primary tracking-tight">
            Jihaz-Line
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-foreground transition-colors hover:text-primary group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3 justify-self-end">
          <a
            href={site.phoneHref}
            className="hidden text-sm font-bold text-primary xl:inline hover:text-secondary transition-colors"
          >
            {site.phoneDisplay}
          </a>

          {/* Gold CTA Button — Solar motif */}
          <a
            href={waLink(
              "Здравствуйте! Хочу рассчитать мебель на заказ. Подскажите, пожалуйста, как получить предварительный расчёт?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:bg-[#fdd355] hover:shadow-[3px_3px_0_rgba(0,104,119,0.25)]"
          >
            РАССЧИТАТЬ МЕБЕЛЬ
          </a>

          {/* Mobile phone icon */}
          <a
            href={site.phoneHref}
            aria-label={`Позвонить ${site.phoneDisplay}`}
            className="inline-flex h-10 w-10 items-center justify-center border border-[rgba(0,104,119,0.3)] bg-card text-primary lg:hidden hover:bg-primary hover:text-white transition-colors"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="inline-flex h-10 w-10 items-center justify-center border border-[rgba(0,104,119,0.3)] bg-card text-primary lg:hidden hover:bg-primary hover:text-white transition-colors"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Мобильная навигация"
          className="border-t border-[rgba(0,104,119,0.15)] bg-[#effcff]/95 backdrop-blur-md px-4 pb-4 lg:hidden"
        >
          <ul className="divide-y divide-[rgba(0,104,119,0.1)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-4 block text-base font-bold text-primary"
            onClick={() => setOpen(false)}
          >
            {site.phoneDisplay}
          </a>
          <a
            href={waLink(
              "Здравствуйте! Хочу рассчитать мебель на заказ.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-mono text-xs font-bold uppercase tracking-widest"
          >
            РАССЧИТАТЬ МЕБЕЛЬ
          </a>
        </nav>
      )}
    </header>
  );
}
