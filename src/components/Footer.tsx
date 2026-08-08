import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { navItems, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[rgba(0,104,119,0.2)] pb-24 lg:pb-0"
      style={{ backgroundColor: "#17343a", color: "#d7f6fe" }}
    >
      {/* Золотая линия сверху */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F2C94C] to-transparent opacity-40" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Логотип Jihaz-Line"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10"
            />
            <span className="font-display text-xl font-bold text-white">Jihaz-Line</span>
          </div>
          <p className="mt-4 text-sm text-[#d7f6fe]/65 leading-relaxed">
            Собственное производство корпусной мебели для дома и офиса.
          </p>
          {/* Mono tagline */}
          <p className="mt-3 font-mono text-[10px] text-[#F2C94C]/60 uppercase tracking-widest">
            Жезқазған · Ұлытау
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Навигация в подвале">
          <h2 className="font-mono text-[11px] font-bold text-[#F2C94C] uppercase tracking-[0.12em]">
            Разделы
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[#d7f6fe]/70 hover:text-[#F2C94C] transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacts */}
        <div>
          <h2 className="font-mono text-[11px] font-bold text-[#F2C94C] uppercase tracking-[0.12em]">
            Контакты
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm text-[#d7f6fe]/70">
            <li>
              <a href={site.phoneHref} className="hover:text-[#F2C94C] transition-colors">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2C94C] transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2C94C] transition-colors"
              >
                Telegram {site.telegramHandle}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all hover:text-[#F2C94C] transition-colors"
              >
                {site.email}
              </a>
            </li>
            <li className="text-[#d7f6fe]/50">{site.address}</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="font-mono text-[11px] font-bold text-[#F2C94C] uppercase tracking-[0.12em]">
            Ещё
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm text-[#d7f6fe]/70">
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2C94C] transition-colors"
              >
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2C94C] transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2C94C] transition-colors"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2C94C] transition-colors"
              >
                TikTok
              </a>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-[#F2C94C] transition-colors">
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
          <p className="font-mono text-xs text-[#d7f6fe]/35">
            © {year} Jihaz-Line · Custom Furniture Production · Zhezkazgan
          </p>
          {/* Декоративный gold accent */}
          <div className="h-px w-16 bg-gradient-to-r from-[#F2C94C]/40 to-transparent" />
        </div>
      </div>
    </footer>
  );
}
