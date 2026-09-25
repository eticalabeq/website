// Structure of the design prototype (served under /prototype/).
// Page text lives in the sibling es.js / en.js / ca.js / fr.js files.

module.exports = {
  languages: [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
    { code: "ca", name: "Català" },
    { code: "fr", name: "Français" },
  ],

  // Pages shown as links in the nav (contact is rendered as the CTA button).
  nav: ["about", "services", "retreats", "values"],

  // URL slug of every page, per language ("" = the language's homepage).
  slugs: {
    es: { home: "", about: "sobre-mi", services: "que-hacemos", retreats: "retiros", values: "valores", contact: "contacto" },
    en: { home: "", about: "about", services: "what-we-do", retreats: "retreats", values: "values", contact: "contact" },
    ca: { home: "", about: "sobre-mi", services: "que-fem", retreats: "retirs", values: "valors", contact: "contacte" },
    fr: { home: "", about: "a-propos", services: "ce-que-nous-faisons", retreats: "retraites", values: "valeurs", contact: "contact" },
  },

  // Matching page of the classic site (by its `ref`), for the "view current site" badge.
  classicRef: { home: "home", about: "about", services: "what-we-do", retreats: "retreats", values: "mvv", contact: "contact" },

  email: "eticalab.equilibrium@gmail.com",
  phone: "(+34) 634 543 077",
  phoneHref: "tel:+34634543077",
};
