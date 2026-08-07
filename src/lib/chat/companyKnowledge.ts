import { site } from "@/lib/site";

export const companyKnowledge = {
  company: {
    name: site.name,
    type: "Собственное производство корпусной мебели для дома и офиса",
    focus: "Корпусная мебель на заказ для квартир и частных домов",
    region: "Ұлытау облысы",
    city: "Жезқазған",
  },

  workshop: {
    address: "Ломоносова 1",
    city: "Жезқазған",
    region: "Ұлытау облысы",
  },

  contacts: {
    phone: site.phoneDisplay,
    phoneHref: site.phoneHref,
    whatsapp: site.whatsapp,
    telegram: site.telegram,
    email: site.email,
    instagram: site.instagram,
  },

  delivery: {
    description: site.delivery,
    confirmedAreas: ["Жезқазған", "населённые пункты области Ұлытау"],
  },

  furniture: {
    categories: [
      "Кухни",
      "Шкафы и системы хранения",
      "Гардеробные",
      "Прихожие",
      "Детские комнаты",
      "ТВ-зоны и гостиные",
      "Мебель для спальни",
      "Мебель для домашнего кабинета",
    ],
  },

  customization: {
    individualSizes: true,
    roomSpecificDesign: true,
    configurationSelection: true,
    materialSelection: true,
    colorSelection: true,
    textureSelection: true,
    fillingSelection: true,
    hardwareSelection: true,
    ownWorkshop: true,
    individualDeliveryAndInstallation: true,
  },

  orderProcess: [
    "Клиент пишет в WhatsApp или звонит",
    "Обсуждаются помещение, размеры, пожелания и примерный бюджет",
    "Детали замера и проектирования согласовываются с клиентом",
    "Выбираются цвет, фактура, наполнение и фурнитура",
    "Мебель производится в цехе Jihaz-Line",
    "Условия доставки и установки согласовываются индивидуально",
  ],

  unknownOrUnconfirmed: {
    productionTime: null,
    warranty: null,
    deliveryPrice: null,
    measurementPrice: null,
    installment: null,
    credit: null,
    specificBrands: null,
    workingHours: null,
    yearsOnMarket: null,
    clientCount: null,
    completedProjectsCount: null,
    factorySize: null,
    employeeCount: null,
  },
} as const;

export type CompanyKnowledge = typeof companyKnowledge;
