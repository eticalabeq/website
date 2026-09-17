module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the output folder.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Watch CSS/JS for changes during `npm run dev`.
  eleventyConfig.addWatchTarget("src/assets/");

  // --- Language / translation helpers -------------------------------------
  // Every content page declares `ref` (a page identity shared across
  // languages, e.g. "about") and `lang` (es/en/ca/fr). These filters let the
  // shared layout resolve a page's siblings in other languages so the nav and
  // the language toggle can be built once and work everywhere.

  // Find the built page for a given ref + language code.
  eleventyConfig.addFilter("findVersion", (all, ref, lang) => {
    if (!all) return null;
    return all.find((p) => p.data.ref === ref && p.data.lang === lang) || null;
  });

  // All language versions of a given ref.
  eleventyConfig.addFilter("langVersions", (all, ref) => {
    if (!all) return [];
    return all.filter((p) => p.data.ref === ref);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Nunjucks everywhere.
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "html", "md"],
  };
};
