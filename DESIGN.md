---
name: Kameshwaran Ravichandran
description: The personal site of a frontend platform engineer, drawn as an engineering drawing sheet.
colors:
  sheet: "#fafaf7"
  ink: "#0b0b0b"
  mid: "#55554f"
  line: "#1456d9"
  tint: "#eeefe9"
  cta: "#1456d9"
  cta-hover: "#0f47b8"
  cta-active: "#0b3a99"
  on-cta: "#ffffff"
  sheet-dark: "#0b0b0b"
  ink-dark: "#f2f2ee"
  mid-dark: "#a6a69f"
  line-dark: "#8fb0ff"
  tint-dark: "#181818"
typography:
  display:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 10.4vw, 9.375rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 3vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  page-title:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 4vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1rem + 0.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  prose:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  value:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.25
  label:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0em"
  code:
    fontFamily: "ui-monospace, SF Mono, Cascadia Code, Menlo, Consolas, monospace"
    fontSize: "0.9em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.25rem, 5.5vw, 5rem)"
  section: "clamp(4rem, 9vw, 7rem)"
  cell: "0.9rem 1.1rem 1rem"
  row: "1.75rem"
  measure: "40rem"
  sheet-width: "80rem"
components:
  button-primary:
    backgroundColor: "{colors.cta}"
    textColor: "{colors.on-cta}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.1rem"
    height: "5.75rem"
  button-primary-hover:
    backgroundColor: "{colors.cta-hover}"
    textColor: "{colors.on-cta}"
  button-primary-active:
    backgroundColor: "{colors.cta-active}"
    textColor: "{colors.on-cta}"
  title-block-cell:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.value}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  record-row:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.6rem 1.5rem"
  record-row-hover:
    backgroundColor: "{colors.tint}"
  nav-link:
    textColor: "{colors.ink}"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.line}"
---

# Design System: Kameshwaran Ravichandran

## Overview

**Creative North Star: "The Drawing Sheet"**

The site is an engineering drawing sheet. The claim is lettered large in the field, the facts sit in a title block on the bottom edge, and everything else is line work: ruled blocks, a register of records, a dimension line with end ticks. It is drafting-white paper, black ink and one dimension blue. Nothing is decorated; the structure is the look.

Density is that of a drawing, not a magazine: a wide sheet (80rem plus gutters), generous section gaps, and facts packed into ruled cells where a reader can find them in a skim. Every surface is flat. Corners are square. The dark theme is the same sheet inverted, not a second design.

This world replaced a cream, serif, rust-accented editorial page and it also refuses the dark neon developer portfolio. Both rejections are confirmed.

**Key Characteristics:**
- One grotesk (Archivo) for all lettering, field labels included; mono for code only.
- Black line work in two weights: 2px for sheet edges and block outlines, 1px for divisions inside a block.
- One blue, used for dimension lines, link underlines, markers, focus, and a single solid action cell.
- Facts in ruled cells with a small field label over a heavier value.
- Square corners, no shadows, no gradients, no imagery.
- Light and dark themes from the same tokens through `light-dark()`.

## Colors

Paper, ink and one blue. The neutrals lean a hair warm so the sheet reads as paper, not as a screen white.

### Primary
- **Dimension Blue** (`line`, `cta`): the only hue. As `line` it draws the career dimension line and its ticks, link underlines, link hover text, list markers and the focus ring; in the dark theme it lightens (`line-dark`) to stay legible on black. As `cta` it is the solid fill of the one primary action cell and the text selection, with white text, and it does not change between themes.
- **Dimension Blue, pressed** (`cta-hover`, `cta-active`): the action cell darkens one step on hover and one more on press.

### Neutral
- **Drafting White** (`sheet`): the page ground and every cell ground.
- **Line Ink** (`ink`): all text, all rules, the ground that shows through 1px cell gaps.
- **Pencil Grey** (`mid`): field labels, organisation names, stack lists, footer. Secondary text only, never a rule.
- **Erased Tint** (`tint`): the hover fill of a register row and the ground of a highlighted passage in prose.
- **Inverted set** (`sheet-dark`, `ink-dark`, `mid-dark`, `tint-dark`): the dark theme's values for the same four roles.

### Named Rules
**The One Blue Rule.** Dimension blue is the only hue on the sheet. It appears as thin line work and link colour everywhere, and as a solid fill on exactly one action per view. A second accent or a second filled blue block is a different drawing.

**The Inverted Sheet Rule.** The dark theme swaps sheet and ink and lightens the line blue; nothing else changes. No dark-only surfaces, glows or borders.

## Typography

**Display Font:** Archivo Variable (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo Variable (same stack)
**Label/Mono Font:** labels are Archivo; a system monospace stack is used for inline code only

**Character:** One tight, heavy grotesk does every job, the way one hand letters a whole drawing. Headings are bold and tracked in; body is regular at a comfortable size; numerals are tabular throughout.

### Hierarchy
- **Display** (700, clamp(3.25rem, 10.4vw, 9.375rem), line-height 0.9, tracking -0.04em): the home hero statement only.
- **Page title** (700, clamp(2.25rem, 1.4rem + 4vw, 4.25rem), 1.05, -0.035em): the h1 of an article and of the not-found page, capped at 60rem wide.
- **Headline** (700, clamp(2rem, 1.3rem + 3vw, 3.5rem), 1.05, -0.03em): section headings.
- **Title** (700, 1.5rem, 1.15, -0.02em): role titles in the experience list; record titles in the register run a little larger (up to 1.875rem); headings inside prose sit at 1.75rem.
- **Lead** (400, clamp(1.15rem, 1rem + 0.6vw, 1.375rem), 1.45): the hero introduction and an article's summary.
- **Body** (400, 1.0625rem, 1.6): everything else; measure capped at 40rem. Article prose steps up to 1.125rem / 1.65 at a 42rem measure.
- **Value** (600, 1.0625rem to 1.1875rem, 1.25 to 1.35): the content of a ruled cell.
- **Label** (500, 0.8125rem, no tracking, sentence case, Pencil Grey): the field name over a cell value.

### Named Rules
**The One Hand Rule.** All lettering is Archivo. Hierarchy comes from size and from three weights (500, 600, 700 over a 400 body), never from a second family, uppercase or added tracking. Mono is for code; mono on labels would be costume.

**The Field Label Rule.** The small grey label names a data cell: a title-block field, a record-head field, a contact channel. It never sits above a heading or a section as a kicker.

**The Lettering Exception Rule.** The home hero statement runs to 9.375rem, above the usual 6rem display ceiling, because the approved first viewport sets it there. It is the only text on the site allowed past 4.25rem.

## Layout

The page is one sheet: content is capped at 80rem and centred, with a fluid gutter (clamp(1.25rem, 5.5vw, 5rem)) on each side. A 2px ink rule under the header and another over the footer are the sheet's top and bottom edges. Sections are separated by space alone (clamp(4rem, 9vw, 7rem) above each), not by rules or background bands.

The home hero fills the first viewport (capped at 54rem tall) as three rows: the statement, a middle row with the introduction left and the career dimension line right, and the title block on the bottom edge. Nothing of the next section shows.

Blocks are grids with explicit, unequal column ratios that follow their content (the title block is 1.5 / 1.5 / 1 / 1 / 1.2; the experience list is a 14rem date column and a text column; register rows are text plus a 15rem stack column). Running text is held to a 40rem to 42rem measure even inside wider blocks.

Two breakpoints. Below 64rem the title block folds to two columns with the action cell full width, and the hero middle, contact block and record head go to one column. Below 44rem everything is one column, the action cell moves to the top of the title block, and the career dimension line turns vertical with its ticks on the left. Every link and control keeps a 44px minimum target.

## Elevation & Depth

Flat. There are no shadows, no blur and no overlapping layers anywhere in the build. Structure is carried by ruled lines; state is carried by a tint fill or a colour change.

### Named Rules
**The Flat Sheet Rule.** A drawing has no depth. If something needs to stand out, give it a rule, a heavier weight or the blue, never a shadow.

## Shapes

Every corner is square (0 radius). Form comes from line work:

- **Block outline:** 2px ink around a title block, a register, a contact block.
- **Cell division:** 1px ink. In cell grids it is drawn as a 1px gap over an ink ground, so lines never double; in lists it is a 1px bottom rule per row.
- **Dimension line:** a 2px blue line with 18px ticks that straddle it at each station and close its far end.
- **Markers:** square list bullets in blue.

### Named Rules
**The Two Weights Rule.** 2px ink for sheet edges and block outlines, 1px ink for divisions inside a block. Blue lines are 2px. No hairlines in grey, no dashed or doubled borders as decoration.

## Components

### Buttons
One filled action per view, built as a cell of the title block rather than a free-standing pill.
- **Shape:** square, at least 5.75rem tall (4rem on narrow screens), label left and a 28px arrow right.
- **Primary:** Dimension Blue fill, white 600-weight label at 1.3125rem, padding 0.9rem 1.1rem.
- **Hover / Focus:** the fill darkens one step and the arrow steps 5px right; on press it darkens again and the cell drops 2px. The focus ring on this cell is ink, since blue on blue would vanish.
- **Secondary:** there is no secondary button. Other actions are text links.

### Links
Ink text with a thin blue underline (0.08em, offset 0.18em); the text turns blue on hover. Focus is a 2px blue outline offset 3px, on every focusable element.

### Chips
- **Draft marker:** a small outlined, square label (0.8125rem, 600) in the current text colour beside a record title. Outline only, never filled.

### Cards / Containers
There are no cards. The container is the ruled block.
- **Title block / record head / contact block:** a grid of sheet-coloured cells divided by 1px ink lines inside a 2px ink outline. Each cell holds a field label over a value; padding 0.9rem 1.1rem 1rem.
- **Register (writing index):** a 2px outlined list; each row is a title and summary beside a grey stack list, divided by 1px rules, padding 1.6rem 1.5rem. The whole row is the link and fills with the tint on hover. Rows are unnumbered.
- **Experience list:** a 2px top rule, then rows of a 600-weight date column and a text column, each closed by a 1px rule.

### Navigation
A single header row, 4.5rem tall, closed by the 2px sheet edge. The name sits left at 600; three text links and the theme toggle sit right at 500, 1rem, no underline, turning blue on hover. The toggle is a 22px stroked icon showing the theme it switches to. On narrow screens the row wraps; there is no menu button. The footer mirrors it: a 2px top rule and one grey line of text.

### Dimension Line (signature)
A career or sequence drawn as one blue line with a tick and a bold year at each station, and the name and role beneath. Columns are proportioned to the spans they represent. It turns vertical on narrow screens.

### Motion
One authored moment, once, on load: the hero statement settles (0.8s) and the dimension line draws left to right (1.1s after a 0.25s delay), both on cubic-bezier(0.16, 1, 0.3, 1). State changes are 0.15s colour or fill transitions. With reduced motion everything is shown at rest.

## Do's and Don'ts

### Do:
- **Do** put facts in ruled cells: a field label (0.8125rem, 500, grey) over a value (600), inside a 2px outline with 1px divisions.
- **Do** keep every corner square and every surface flat.
- **Do** use the blue for line work and links freely, and as a solid fill for one action per view.
- **Do** set all text in Archivo and build hierarchy from size and the 500 / 600 / 700 weights.
- **Do** hold running text to a 40rem to 42rem measure, even inside a full-width block.
- **Do** build both themes from the same tokens; check the line blue and grey text on both grounds.
- **Do** keep targets at 44px or more and the 2px focus outline visible on everything focusable.

### Don't:
- **Don't** bring back the cream ground, serif display type or rust accent this world replaced.
- **Don't** drift toward the dark neon developer portfolio: no glows, gradients, terminal styling or mono body text.
- **Don't** add a second accent colour or a second filled blue block on the same view.
- **Don't** use mono, uppercase or wide tracking for labels.
- **Don't** put a small label above a heading as a kicker; labels name data cells only.
- **Don't** add shadows, rounded corners, cards or background bands to separate content.
- **Don't** set any text above 4.25rem other than the home hero statement.
- **Don't** number the records; they share a date and a derived number would shift.
- **Don't** add motion beyond the single load moment and short state transitions.
