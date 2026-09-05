# NAVLE Study Hub

A species-organized review hub for the North American Veterinary Licensing Examination,
built as a self-contained tool inside **desmoVet**.

Content is reorganized around how the ICVA actually weights the exam: species blocks
sized by their published percentage, cross-cutting reference sections, and the
look-alike differential clusters the exam tests against each other.

Clinical content is transcribed from the source study documents listed below —
signs, diagnostics, treatments, and pearls are not paraphrased or invented. The only
additions are a handful of standard taxonomic labels in the reportable-disease table
(e.g. FMDV = *Aphthovirus*) added for completeness.

The one deliberate exception is **Diagnostic Test Statistics**. None of the source
guides cover it, and it sits inside Data Gathering & Interpretation — the largest
competency block on the exam — so that chapter is built from standard diagnostic
epidemiology rather than transcribed. Every worked number in it is computed in the
text so it can be checked by hand, and its veterinary examples are drawn from tests
already described in this hub's own chapters.

## What's in it

| Area | Contents |
|---|---|
| **Start here** | ICVA blueprint (species + competency domain weights), commonly-missed areas, bread-and-butter conditions by species, diagnostic test statistics, breed predispositions, and the numbers to memorize cold |
| **Dogs & cats** | Hematology & hemostasis · Cardiology & critical care · Neurology & ophthalmology · GI, urinary, endocrine & oncology · Feline-specific medicine |
| **Large & exotic species** | Equine · Bovine · Swine · Sheep & goats · Camelids · Pet birds · Poultry · Fish · Reptiles & amphibians · Rabbits · Ferrets · Guinea pigs, chinchillas & rodents · Nonhuman primates |
| **Infectious disease** | Top 5 dog / top 5 cat, exotic companion top 3, and the vector-borne + systemic mycoses block, in signs → diagnosis → treatment → NAVLE-flags format |
| **Differential clusters** | PU/PD, hypercalcemia, anemia, pediatric diarrhea, icterus, tick-borne, FLUTD, equine neuro, equine diarrhea, downer cow, vesicular disease |
| **Cross-cutting** | Small animal and large animal toxicology, oncology pharmacology, small animal parasitology, fecal egg ID & dewormer selection, pharmacology/anesthesia/analgesia, toxicology & regulatory, reportable & zoonotic, therapeutics & species drug safety |
| **Practice** | 756 questions — 273 hand-written case vignettes, 329 generated from the chapter rapid-fire lists, 92 typed-answer values, and 62 calculation problems with an interactive 2 × 2 — filterable by source, scope and length |
| **Documents** | All ten source study guides, viewable and printable in-app |

### Home

The hub opens on a dashboard: bank size and content totals, a practice launcher, the
chapters you are weakest on this session, and every chapter as a tile carrying its
species colour, section count and question count. Session accuracy is held in memory
only — nothing is written to the browser, so it resets on reload.

### Reading a chapter

Chapters are set as a **numbered list on hairlines**, not a stack of identical cards.
Each collapsed section shows its number, title, a one-line preview and an item count,
so a 46-section chapter fits on one screen and you choose where to go.

**Callouts are the exception — they always render open, inline.** Board pearls,
discriminators and warnings are the highest-value lines on the page and putting them
behind a toggle wastes them, so they sit in the flow, colour-coded by type (pearls
amber, discriminators teal, warnings red).

A sticky **In this chapter** rail tracks scroll position and jumps to any section;
*Expand all* / *Collapse all* switch between index and reading mode. Open state is
remembered per chapter for the session, and everything expands when printing.

Chapters in **Start here** have no toggles at all — they render fully open, because
they are short and they are read rather than searched. Any group listed in
`ALWAYS_OPEN` in `index.html` behaves this way.

Each chapter carries a **species accent colour** — used on rules, numerals, dots and
tints only, never on body text — so the block you are in is legible at a glance.

### Practice

There is no flashcard mode. Four question sources, all auto-graded:

- **Case vignettes** (273) — a clinical stem with signalment, history and findings, a
  lead-in question, and three hand-picked distractors that are the genuine look-alikes
  rather than random other answers. This is the format the ICVA blueprint actually
  weights: ~70% of the exam is Data Gathering & Interpretation and Health Maintenance &
  Problem Management, i.e. case reasoning.
- **Rapid recall** (329) — multiple choice, generated at runtime from the chapter
  rapid-fire lists. The cue becomes the question and the distractors are drawn from
  *other answers in the same chapter*, so "hypercalcemia after a rodenticide" competes
  against bromethalin and ethylene glycol rather than against something from a different
  species. A chapter with fewer than four cues is skipped rather than padded with
  implausible options.
- **Type the answer** (92) — no options at all. A prompt with a blank, and you type the
  value: *"Transfusion dose: ___ mL/kg of packed RBCs raises the PCV by 1%."* This is
  recall rather than recognition, which is the point for numbers you need cold.
- **Calculate** (62) — two directions, both with an interactive 2 × 2 to work on.
  *Forward* (30): you are given the four counts and solve for sensitivity, specificity,
  PPV, NPV or prevalence. *Back-calculation* (32): you are given sensitivity,
  specificity, prevalence and a population size and solve for a cell count — how many
  false positives this test will produce, how many animals test positive in total. That
  is the direction exam items are usually written in. Every expected answer is computed
  from the scenario at runtime, so the arithmetic can never drift from what is on
  screen; forward answers grade within 0.6 of a percentage point (`90`, `90%` and `0.9`
  all pass) and back-calculated counts within 1 animal.

  **Accuracy is deliberately not drilled.** It is only a prevalence-weighted blend of
  the other two — `accuracy = p·Sn + (1−p)·Sp`, so `accuracy − specificity =
  p·(Sn − Sp)` — which means for any uncommon disease it converges on specificity and
  stops being a distinct quantity. The chapter explains it; the drills skip it.

  Because measures can converge like that, question generation enforces a **minimum
  separation**: a measure is only asked when its value is at least 3 percentage points
  from every other measure in that scenario. Two answers inside the grading tolerance
  would make an item unanswerable — a student who computed the *wrong* measure would
  also be marked right — so those combinations are dropped rather than shipped.

Choose source (mixed / vignettes / rapid / typed / calculate), scope (everything, one group, or one
chapter), and length (10 / 20 / 40 / all). Every answered question reveals the
explanation and links back to its chapter. Keys **A–D** or **1–4** answer multiple
choice, **Enter** checks and advances a typed answer.

#### Grading a typed answer

Matching is deliberately lenient: case, spacing, commas, dash style, `to` for a range
and a trailing unit are all ignored, and single numbers compare numerically — so
`22-24`, `22 to 24`, `22–24 mEq/L` and `22 - 24` all pass for a `22-24` answer. An
`accept` array on the item covers any remaining phrasings. Because no matcher catches
every wording, a wrong verdict offers an **I had it right** button that credits the
answer and unwinds the miss.

### Diagnostic test statistics

The 2 × 2 contingency table is drawn rather than tabulated, because reading it off a
grid *is* the skill: sensitivity and specificity down the disease columns, PPV and NPV
across the test-result rows.

The table reads **three ways**, switched by one toggle:

1. **TP · FP · FN · TN** — the abbreviations.
2. **A · B · C · D** — what exam items usually print, in the standard `a`=TP `b`=FP
   `c`=FN `d`=TN convention. The marginal formulas switch with it, so specificity reads
   `TN / (TN + FP)` in one mode and `D / (B + D)` in the other.
3. **Formula** — each cell shows how to build it straight from the givens, and the
   margins become the totals you derive on the way: `Diseased = N × prevalence`,
   `Healthy = N × (1 − prevalence)`.

All three label sets sit in the DOM and the toggle only flips a class, so nothing
re-renders and no state is tracked. The descriptive cell labels stay visible in every
mode, which makes the alternate modes a translation key rather than a memory test.

**The complement is the whole shortcut**, and formula mode is built to make it visible:

```
Diseased = N × prevalence          Healthy = N × (1 − prevalence)
TP = diseased × Sn                 TN = healthy × Sp
FN = diseased × (1 − Sn)           FP = healthy × (1 − Sp)
```

You never compute a cell and subtract to reach its neighbour. Sensitivity is the
fraction of the diseased column the test catches, so `1 − Sn` is the fraction it misses
— the false negatives, in one multiplication. Same on the other side: `1 − Sp` lands
directly on the false positives.

#### The two scaffolds

Forward calculation questions ship with an interactive 2 × 2. It shows the four counts,
optionally row and column totals, and lets you assign cells to a numerator and a
denominator; it then sums each slot and, on request, divides. **It never names or
computes the measures** — no "sensitivity" label appears anywhere on the pad, and no
cell is marked as belonging to one. Choosing the cells is the skill being tested, so
that part stays with the student; the pad only removes the arithmetic. Division is a
separate button rather than automatic, so the result never appears before you ask for
it. The pad carries the same TP/FP/FN/TN ↔ A/B/C/D toggle as the chapter.

Back-calculation questions get the opposite scaffold, staged in the order the work
actually happens — because you cannot get to a cell without the column totals first:

1. **The givens** — population, prevalence, sensitivity, specificity.
2. **A plain four-function calculator** — display, keypad, `+ − × ÷`, no percent key
   and no special semantics. It chains the way any calculator does, so
   `1000 × 5 ÷ 100 =` gives 50 and you carry straight on. Tappable chips enter every
   given and its complement, so you are not retyping numbers.
3. **Step 1 — split the population** into diseased and healthy.
4. **Step 2 — the empty 2 × 2**, with sensitivity acting on the diseased column and
   specificity on the healthy one. The **column totals populate from step 1** the moment
   it is filled, and turn green once the two cells above them add up — so the grid
   itself carries the reconciliation rather than a separate status line.

No cell value is revealed. The checks are consistency checks against *your own* numbers
— does your diseased + healthy match the stated population, does your TP + FN match the
diseased total you wrote. The only external anchor is the population size, so the sheet
can tell you a set is inconsistent without telling you which number is wrong.

Both pads share one 4 × 4 grid whose children are placed by `grid-area`, so hiding the
totals column on a phone cannot reflow the cells. Correct and error cells use the status tokens, not
categorical hues — and since that red/green pair sits at deutan ΔE 8.2, which is legal
only with secondary encoding, every cell is directly labelled and the two error cells
carry a diagonal texture. Colour is never the only signal.

The chapter covers the four measures, SnNout/SpPin, a worked 2 × 2, likelihood ratios,
the prevalence trap (one unchanged 95/95 test whose PPV falls from 68% to 1.9% as
prevalence drops from 10% to 0.1%), screening vs. confirmatory logic, parallel vs.
serial testing, and the cutoff/ROC trade-off.

### Coverage map

The coverage map plots each species block's exam weight against how much content the
hub holds. It is the roadmap: where a weight bar is long and a content bar is short,
that is where the next source document should go.

Because the ICVA weights *species*, not body systems, the several dog-and-cat chapters
merge into one row. A module joins a merged row by declaring `covKey`, with
`covTitle` and `covWeight` describing the block.

### Source documents

The ten original study guides ship in `docs/` and are readable inside the hub —
preview inline, open in a tab, print, or download. Each is linked to the chapter it
builds. Word-format sources were converted to PDF so every document behaves the same
way. `build.js` copies the folder next to the single-file build.

## Structure

```
navle/
├── index.html          # app shell — layout, renderer, search, study modes
├── data/               # content modules, loaded in order by index.html
│   ├── 01-orientation.js
│   ├── 02-clusters.js
│   ├── 03-infectious.js
│   ├── 04-equine.js
│   ├── 05-bovine.js
│   ├── 06-swine.js
│   ├── 07-avian.js
│   ├── 08-aquatic-herp.js
│   ├── 09-smallmammals.js
│   ├── 10-oncology.js
│   ├── 11-reference.js
│   ├── 12-questions.js      # hand-written case vignettes
│   ├── 13-parasitology.js
│   ├── 14-smallrum-camelid.js
│   ├── 15-latox.js
│   ├── 16-docs.js           # source document library
│   ├── 17-sa-tox.js         # ── dogs & cats ──
│   ├── 18-sa-heme.js
│   ├── 19-sa-cardioresp.js
│   ├── 20-sa-neuro.js
│   ├── 21-sa-medicine.js
│   ├── 22-sa-infectious.js
│   ├── 23-sa-parasites.js
│   ├── 24-sa-feline.js      # feline-specific + pharmacology
│   ├── 25-sa-boards.js      # breeds + the numbers to type from memory
│   └── 26-diagnostics.js    # sensitivity, specificity, PPV/NPV, the 2 × 2
├── docs/               # the source study guides as PDFs
├── build.js            # bundles everything into dist/navle-hub.html
└── dist/
    ├── navle-hub.html  # single-file build
    └── docs/           # PDFs, copied beside it
```

Every child of the 2 × 2 grid is placed by `grid-area` rather than auto-flow, so the
mobile template can restack the marginal boxes without reflowing the matrix.

No dependencies and no build step required to run — open `index.html` directly, or
serve the folder. `build.js` (Node, no packages) produces the single-file version:

```bash
node build.js
```

The PDFs stay external rather than base64-inlined, so `dist/navle-hub.html` needs its
`docs/` folder beside it for the document viewer to work. Keep the pair together.

## Adding content

Content is plain data. A module looks like this:

```js
(function (N) {
  N.push({
    id: 'equine',            // unique, used for nav + linking
    group: 'Species',        // Start here | Species | Infectious disease |
                             // Differential clusters | Cross-cutting
    title: 'Equine',
    tagline: 'One line under the page title.',
    weight: 14.7,            // ICVA exam % — drives nav order and the coverage map
    sections: [ /* … */ ]
  });
})(window.NAVLE_MODULES);
```

Use `weightNote` instead of `weight` for a chapter that has no standalone ICVA
percentage, and add `covKey` / `covTitle` / `covWeight` to fold several chapters into
one coverage-map row.

### Section types

| Type | Shape | Notes |
|---|---|---|
| `table` | `{type:'table', title, columns:[…], rows:[[…]]}` | Add `wide: true` for 4–5 column disease tables (enables horizontal scroll) |
| `callout` | `{type:'callout', variant, title, body}` or `{… list:[…]}` | Variants: `pearl`, `danger`, `warn`, `discrim` |
| `list` | `{type:'list', title, items:[…]}` | Simple bulleted reference list |
| `rapidfire` | `{type:'rapidfire', title, items:[[cue, answer], …]}` | **Also generates rapid-recall practice questions automatically** |
| `chart` | `{type:'chart', title, note, data:[[label, value], …], footnote}` | Single-series horizontal bars, percentages |
| `cloze` | `{type:'cloze', title, note, items:[{q, a, accept:[…], why}]}` | `q` must contain `___` where the value goes. **Also generates the typed-answer drill.** |
| `matrix2x2` | `{type:'matrix2x2', title, colTitle, cols, rowTitle, rows, cells, rowMargins, colMargins, note}` | A drawn contingency table with a TP/FP/FN/TN ↔ A/B/C/D toggle. `cells` is `[TP, FP, FN, TN]`, each `{key, label, ok, tip}`; margins are `{name, formula}` |
| `calcset` | `{type:'calcset', title, note, scenarios:[{id, tp, fp, fn, tn, stem, askPrev}]}` | Renders as a counts table in the chapter. **Generates forward calculation questions**, one per measure, subject to the minimum-separation rule. `askPrev` opts a scenario into a prevalence question |
| `backcalcset` | `{type:'backcalcset', title, note, scenarios:[{id, n, prev, sn, sp, label, askDiseased}]}` | Renders as a givens table. **Generates back-calculation questions** — solve for TP/FP/FN/TN or total positives. Scenarios must produce integer cell counts |

`callout` sections are never collapsed — they render inline and open in every chapter.
`rapidfire` sections double as the source for the rapid-recall practice questions, and
`cloze` sections double as the typed-answer drill: in the chapter they read as a fact
list with the answer set in place, and in Practice the answer becomes the blank.

```js
{ type: 'cloze', title: 'Numbers worth memorizing cold',
  items: [
    { q: 'Normal bicarbonate is ___ mEq/L.',
      a: '22-24',
      accept: ['22–24', '22 to 24'],   // optional extra spellings
      why: 'A negative base excess (base deficit) means metabolic acidosis.' }
  ]
}
```

Two conventions inside cell text:

- `⚑R` and `⚑Z` render as **R** (reportable) and **Z** (zoonotic) badges.
- A `\n` in the first cell of a table row renders everything after it as a smaller
  agent/subtitle line — used for `Disease name\nCausative agent`.

Tables also accept an optional `note` string, rendered as a legend above the header
row. Inline `<b>` and `<i>` pass through in cell and callout text; the collapsed
section preview strips them.

### Adding vignettes

`data/12-questions.js` holds the case bank. One entry per question:

```js
Q.push({
  m:     'bovine',              // module id — sets the source label and chapter link
  stem:  'A group of calves arrived at a feedlot 10 days ago after…',
  lead:  'What is the most likely primary bacterial agent?',
  a:     'Mannheimia haemolytica',
  wrong: ['Bovine respiratory syncytial virus', 'Mycoplasma bovis', 'Histophilus somni'],
  why:   'Cranioventral consolidation with fibrinous bronchopneumonia in a recently…'
});
```

Write `wrong` as the three genuine look-alikes for that presentation — practice is only
as good as its distractors. `why` should state the reasoning and name the nearest mimic
and how to exclude it. The practice bank, the scope filter and the per-chapter question
counts all pick up new entries with no wiring.

### Adding a new module

1. Create `data/26-yourtopic.js` following the shape above.
2. Add a `<script src="data/26-yourtopic.js"></script>` line in `index.html`,
   in the same block as the others.
3. If it is a new chapter of an existing block, give it an entry in the `ACCENT`
   map in `index.html` so it inherits the right species colour.
4. Run `node build.js` to refresh the single-file build.

Nav grouping, home tiles, search indexing, rapid-recall / typed-answer / calculation
question generation, the practice scope filter and the coverage map all pick it up with
no further wiring.

## Sources

Built from ten compiled study documents, all of which ship in `docs/`:

- NAVLE High-Yield & Commonly-Missed Topics (ICVA blueprint + high-yield lists)
- NAVLE High-Yield Infectious Diseases
- NAVLE Differential Clusters
- Dogs & Cats Study Guide
- Equine Study Guide
- Ruminant Study Guide — cattle, sheep, goats, camelids
- Swine Study Guide
- NAVLE Exotics & Avian Study Guide
- Veterinary Oncology Drugs — NAVLE Cheat Sheet
- Fecal Egg Identification → Antiparasiticide Selection (citing CAPC guidelines and
  Cornell CVM on emerging *Ancylostoma caninum* resistance)

## Disclaimer

Study aid only. Verify drug doses, protocols, and reporting requirements against a
current formulary and your state's regulations before clinical use. The NAVLE is a
secure, copyrighted exam; nothing here is or claims to be actual exam content.
