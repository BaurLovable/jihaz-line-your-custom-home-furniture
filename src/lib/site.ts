// Контактные и справочные данные Jihaz-Line.
// Все значения перенесены из исходных данных компании без изменений.

export const site = {
  name: "Jihaz-Line",
  phoneDisplay: "+7 (776) 523-99-77",
  phoneHref: "tel:+77765239977",
  whatsappNumber: "77765239977",
  whatsapp: "https://wa.me/77765239977",
  telegramHandle: "@jihazline",
  telegram: "https://t.me/jihazline",
  email: "galym114@gmail.com",
  instagramHandle: "@mebel_na_zakaz_zhez",
  instagram: "https://instagram.com/mebel_na_zakaz_zhez",
  facebook: "https://www.facebook.com/jihazline",
  youtube: "https://www.youtube.com/@jihazline",
  tiktok: "https://www.tiktok.com/@jihazline",
  address: "Ұлытау облысы, Жезқазған қаласы",
  delivery:
    "Принимаем заказы и осуществляем доставку по городу Жезқазған и населённым пунктам области Ұлытау",
  catalog: "https://jihaz-line.netlify.app",
} as const;

/** Формирует ссылку WhatsApp с предзаполненным текстом сообщения. */
export function waLink(message: string): string {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { href: "#categories", label: "Виды мебели" },
  { href: "#process", label: "Как мы работаем" },
  { href: "#materials", label: "Материалы" },
  { href: "#about", label: "О производстве" },
  { href: "#contacts", label: "Контакты" },
] as const;
