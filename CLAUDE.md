# Etica_Lab.Equilibrium Website

This is a multilingual static website for Etica_Lab.Equilibrium, a catering and wellness business.

## Tech stack
- Built with Eleventy (static site generator)
- Hosted on Netlify (auto-deploys when changes are pushed to GitHub)
- Languages: Spanish (es, default), English (en), Catalan (ca), French (fr)

## Project structure
- `src/es/`, `src/en/`, `src/ca/`, `src/fr/` — page content for each language
- `src/_data/site.js` — navigation labels, UI strings, global config
- `src/_includes/base.njk` — shared page template (header, nav, footer)
- `src/assets/css/styles.css` — all styling
- `src/assets/img/` — images

## Workflow
1. **At the start of every session, run `git pull` first**, before making any changes. This repo is edited from more than one computer (Elisenda's laptop and the site owner's Mac), so another edit may have happened since you last opened this project.
2. Make changes to files in `src/`
3. Test locally with `npm run dev` (serves at http://localhost:8080)
4. When happy, commit and push to GitHub:
   ```
   git add -A
   git commit -m "description of change"
   git push
   ```
5. Netlify automatically builds and publishes within ~1 minute.
6. **Don't leave a session with uncommitted or unpushed changes.** Finish each request by committing and pushing, so the next session (on either computer) starts from a clean, up-to-date state.

## If `git pull` or `git push` reports a conflict
This means both computers edited the same file before syncing. Do not force-push or discard either side's changes. Instead:
1. Stop and show the user exactly what conflicts and what each side changed.
2. Ask how to resolve it (keep one version, merge both, or ask the site owner's collaborator to resolve it directly).
3. Only commit and push once the conflict is resolved.

## Important notes
- The owner (Elisenda) is not technical. She describes changes in plain language. You (Claude) make the edits, test them, commit, and push.
- The site owner's collaborator (Ben) also edits this repo directly from his own computer sometimes. Treat any changes you didn't make yourself as legitimate — pull them in, don't overwrite them.
- Always preview changes locally with `npm run dev` before pushing.
- When Elisenda asks for a change, make it in ALL relevant languages unless she specifies otherwise.
- The live site is at: https://eticalab.netlify.app
- The root `/` redirects to `/es/` (Spanish is the default language).
