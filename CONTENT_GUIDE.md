# Content guide

The site uses Astro content collections. Each article, project, or tool is one Markdown/MDX file with validated frontmatter. A bad or missing field fails `npm run build` instead of silently producing a broken page.

## Add an article

Create `src/content/articles/en/my-article.md` or `src/content/articles/ar/my-article.md`:

```md
---
title: A precise title
description: One sentence used in lists, feeds, and search metadata.
publishedAt: 2026-10-09
updatedAt: 2026-10-10 # optional
locale: en # en or ar
tags: [linux, cpp]
draft: false
featured: false
---

Start writing here.
```

The filename becomes the URL slug. The examples above produce `/blog/en/my-article/` and `/blog/ar/my-article/`. Arabic pages automatically receive `lang="ar"` and `dir="rtl"`; code blocks remain left-to-right.

Use `draft: true` to keep an unfinished article out of pages and the RSS feed. Put static images in `public/images/` and reference them as `/images/filename.webp`.

## Add a project

Create `src/content/projects/my-project.md`:

```md
---
title: My Project
description: What problem it solves, in one useful sentence.
order: 10
featured: true
status: active # active | maintained | archived | experimental
stack: [C++, CMake, Linux]
repository: https://github.com/AbdeltwabMF/my-project # optional
homepage: https://example.com # optional
license: GPL-3.0 # optional
highlights:
  - A concrete capability or constraint.
  - Another fact worth scanning.
---

Longer context belongs here: why it exists, notable design decisions, trade-offs, and what you learned.
```

The filename becomes `/projects/my-project/`. Lower `order` values appear first. `featured: true` makes the project eligible for the home-page preview.

## Add a tool

Create `src/content/tools/tool-name.md`:

```md
---
name: Tool name
category: workflow # languages | systems | workflow | writing
description: Why it earns a place in the workflow.
order: 30
url: https://example.com # optional
---
```

The `/uses/` page groups entries automatically. The Markdown body is currently optional and not rendered.

## Update personal pages

Long-lived personal writing lives directly in:

- `src/pages/about/index.astro`
- `src/pages/now/index.astro`
- `src/pages/philosophy/index.astro`

Keep each section inside `<section id="..." class="man-section">` and add the matching item to that page's `links` array so the sticky section navigation remains accurate.

Global identity and contact links are in `src/data/site.ts`. Navigation is in `src/layouts/BaseLayout.astro`.

## Change the visual system

All shared design tokens and responsive rules live in `src/styles/global.css`. Prefer the existing custom properties and logical properties (`margin-inline`, `padding-block`, etc.) so Arabic and English do not drift into separate designs.

## Before publishing

```bash
npm run check
npm run build
```

Then review:

- the new page at narrow and wide widths;
- keyboard focus and disclosure behavior;
- light and dark themes;
- Arabic directionality if the content is Arabic;
- the generated link in `dist/`.
