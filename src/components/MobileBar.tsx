import { Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

/** Нижняя мобильная панель: «Позвонить» и «WhatsApp». */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-card lg:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-primary"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Позвонить
      </a>
      <a
        href={waLink(
          "Здравствуйте! Хочу заказать корпусную мебель. Подскажите, пожалуйста, как получить предварительный расчёт?",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] py-3.5 text-sm font-bold text-white transition-colors"
      >
        <WhatsAppIcon className="h-4 w-4 shrink-0" />
        WhatsApp
      </a>
    </div>
  );
}
