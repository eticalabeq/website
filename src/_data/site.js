// Global site configuration shared by every page.
// Add a new language here (plus its nav labels + a src/<code>/ folder) and the
// language toggle and navigation pick it up automatically.

module.exports = {
  name: "Etica_Lab.Equilibrium",
  email: "eticalab.equilibrium@gmail.com",
  phone: "(+34) 634 543 077",
  region: "Catalunya Central",
  defaultLang: "es",

  // Order of languages in the top-bar toggle.
  languages: [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
    { code: "ca", name: "Català" },
    { code: "fr", name: "Français" },
  ],

  // Navigation order (by page `ref`).
  navOrder: ["home", "about", "retreats", "what-we-do", "value", "contact", "free-value", "mvv"],

  // Per-language nav labels, keyed by page ref.
  navLabels: {
    es: {
      home: "Inicio",
      about: "Sobre mí",
      retreats: "Retiros",
      "what-we-do": "Qué hacemos",
      value: "Valor",
      contact: "Contacto",
      "free-value": "Valor al alcance de todos",
      mvv: "MVV",
    },
    en: {
      home: "Home",
      about: "About Me",
      retreats: "Retreats",
      "what-we-do": "What We Do",
      value: "Value",
      contact: "Contact",
      "free-value": "Knowledge for All",
      mvv: "MVV",
    },
    ca: {
      home: "Inici",
      about: "Sobre mi",
      retreats: "Retirs",
      "what-we-do": "Què fem",
      value: "Valor",
      contact: "Contacte",
      "free-value": "Valor a l'abast de tothom",
      mvv: "MVV",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      retreats: "Retraites",
      "what-we-do": "Ce que nous faisons",
      value: "Valeur",
      contact: "Contact",
      "free-value": "La valeur à la portée de tous",
      mvv: "MVV",
    },
  },

  // Small UI strings that appear in the shared layout (footer etc.).
  ui: {
    es: { imagesBy: "Imágenes proporcionadas por", switchLang: "Idioma" },
    en: { imagesBy: "Images courtesy of", switchLang: "Language" },
    ca: { imagesBy: "Imatges proporcionades per", switchLang: "Idioma" },
    fr: { imagesBy: "Images fournies par", switchLang: "Langue" },
  },
};
