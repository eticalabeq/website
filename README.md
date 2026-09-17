# Etica_Lab.Equilibrium — website

Multilingual static site for **Etica_Lab.Equilibrium**, migrated from Webnode.
Built with [Eleventy](https://www.11ty.dev/) and deployed on Netlify.

Languages: Spanish (`es`, default), English (`en`), Catalan (`ca`), French (`fr`),
each under its own URL prefix (`/es/`, `/en/`, …) with a language toggle in the
top toolbar. The bare domain root redirects to `/es/`.

## Local development

```bash
npm install      # once
npm run dev      # serves at http://localhost:8080 with live reload
npm run build    # writes the static site to _site/
```

## How it is structured

```
src/
  _data/site.js      Global config: languages, nav order + labels, UI strings.
  _includes/base.njk Shared page shell: <head>, header, nav, language toggle, footer.
  assets/            css/ (styles.css), fonts/ (Metropolis), img/, js/ (sticky nav).
  es/ en/ ca/ fr/    One folder per language; each page is a small content template.
```

Every page declares two things in its front matter:

- `ref` — a shared identity across languages (e.g. `about`). Pages with the same
  `ref` are treated as translations of each other.
- `lang` — the language code (`es` / `en` / `ca` / `fr`).

The navigation and the language toggle are built automatically from these: the
toggle links each language to the matching page, and nav links resolve to the
current language's pages. A language with no page yet for a given `ref` is simply
skipped, so partial translations never produce dead links.

### Adding a page

Create the same file in each language folder, e.g. `src/es/contacto.njk` and
`src/en/contact.njk`, sharing a `ref` (`contact`) with `layout: base.njk`,
`lang`, `permalink`, `title`, and `description`. Add the `ref` to `navOrder` and
its labels to `navLabels` in `src/_data/site.js`.

### Adding a language

Add it to `languages` and fill in `navLabels` / `ui` in `src/_data/site.js`,
then create a `src/<code>/` folder of pages. The toggle picks it up.

## Deployment

Netlify builds on every push to `main`:

- **Build command:** `npm run build`
- **Publish directory:** `_site`

Both are declared in `netlify.toml`, so importing the repo into Netlify needs no
manual settings.
