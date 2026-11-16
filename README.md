# kameshravi.github.io

The personal site of Kameshwaran Ravichandran, a frontend platform engineer in Chennai. It is live at https://kameshravi.github.io/.

It is a static [Astro](https://astro.build) site: one home page (introduction, experience, education, writing, contact), one page per piece of writing, a 404 page and an RSS feed at `/rss.xml`. It has light and dark themes and works without JavaScript.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321, drafts included
npm run build     # static output in dist/, drafts left out
npm run preview   # serve dist/
```

## Layout

- `src/pages/index.astro`: the home page.
- `src/pages/writing/[id].astro`: the article page.
- `src/pages/404.astro`, `src/pages/rss.xml.js`: the 404 page and the feed.
- `src/layouts/Base.astro`: head, header, footer, theme toggle and phone menu.
- `src/styles/global.css`: every style and colour token.
- `src/content/writing/`: the writing, one Markdown file each.
- `src/posts.ts`, `src/content.config.ts`: how the writing is loaded, ordered and validated.

## Add a piece of writing

Create `src/content/writing/<id>.md`. The file name becomes the URL.

```yaml
---
title: Cache the data, not the page
summary: One or two sentences shown in the list and under the title.
date: 2026-11-15
role: What your part was.
order: 6            # highest shows first; take the next number up to land on top
stack: [Next.js, GraphQL]
personal: true      # optional: marks a personal project
draft: true         # optional: shown in dev only
---
```

The pieces follow a decision-record shape: Context, Options considered, Decision, Outcome.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. When a custom domain is bought, change `site` in `astro.config.mjs` and add `public/CNAME`.

## Design and product records

- `PRODUCT.md`: who the site is for, what it must do, and its commitments (static and dependency-light; only real, verifiable claims).
- `DESIGN.md` and `.impeccable/design.json`: the visual system, "The Drawing Sheet".
