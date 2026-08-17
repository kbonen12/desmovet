---
title: "How these articles work"
description: "A working template — copy this file, change the front matter, write below the dashes."
author: "Kyle B."
tags: [meta]
---

This post exists so there's a working example to copy. Duplicate the file, rename it,
change the lines at the top, and write.

## Adding a new article

Create a file in the `_posts` folder named `YYYY-MM-DD-short-title.md`. The date in the
filename sets the publication date and the ordering, so it matters:

```
_posts/2026-09-02-neonatal-sepsis-scoring.md
```

Then commit and push. GitHub builds and publishes it — usually within a minute or two.
It appears on the Articles page automatically; there's no list to update by hand.

## The bit at the top

Everything between the two `---` lines is settings, not content:

```
---
title: "Neonatal sepsis scoring, in practice"
description: "One sentence for the article list and link previews."
author: "Kyle B."
tags: [equine, neonatology]
---
```

Only `title` really matters. `description` is what shows on the Articles page and when
someone shares the link — worth writing. `tags` render as pills. Leave any of them out
and the page still builds.

## Writing

Plain Markdown below the dashes.

**Bold** and *italic*. Links look like [this](https://desmovet.com). Lists:

- one thing
- another thing

Numbered lists, blockquotes, and tables all work:

> Foal reference intervals change rapidly over the first weeks of life and differ
> substantially from adult equine ranges.

| Analyte | 1 day | Adult |
|---|---|---|
| Glucose (mg/dL) | 121–233 | 57–96 |
| GGT (U/L) | 18–43 | 6–28 |

`Inline code` for anything typed literally, and fenced blocks for longer snippets.

### Images

Put the file somewhere sensible in the repo and link to it with a path from the site
root:

```
![Pressure-volume loop](/images/pv-loop.png)
```

## Two things to know

**The date can't be in the future.** A post dated after today won't appear — Jekyll
treats it as unpublished. If an article doesn't show up, check the filename date first.

**A broken `_config.yml` stops the whole site from updating.** GitHub serves the last
good build, so the site stays up, but nothing new publishes until the error is fixed.
GitHub emails you when a build fails. Nothing in a post file can cause this; it's only
a risk if `_config.yml` is edited.

---

Delete this file whenever you like — the Articles page handles being empty.
