---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/writing/[id].astro","src/pages/404.astro"]
---

# Home page (and the article and 404 pages that inherit it)

Scope: `src/pages/index.astro`, with `src/pages/writing/[id].astro` and `src/pages/404.astro` in the same world. Mode: Persuade on home; article pages are Read.

Audience and job: a hiring manager skims who he is, what he has done and how to reach him, then reads one or two records. Action: email him. Proof: experience, three published decision records, the figures already written. Constraints: static, works without JavaScript, no new dependency beyond one font, no invented claims, light and dark themes.

## Direction contract

THESIS: The site is an engineering drawing sheet: the claim lettered large in the field, the facts in a title block. It refuses both the cream editorial serif page it replaces and the dark neon developer portfolio.

OWN-WORLD: Drafting-white sheet (#FAFAF7), black line work (#0B0B0B), one dimension blue (#1456D9). 2px ink rules for sheet edges and blocks, 1px for cell divisions, square corners, no shadows. A tight heavy grotesk for all lettering, field labels included; mono is kept for code only, because mono on labels would be costume. Title-block cells, a register table, dimension lines with end ticks. Dark theme is the same sheet inverted.

STORY: He is a frontend platform engineer with ten years of work, in Chennai, at Clarity RCM; the career fits on one dimension line; the records are a register of sheets, unnumbered because all share one date and a derived number would shift; emailing him is one click.

FIRST VIEWPORT: Header rule at top. "Frontend platform engineer." at about 150px across the full width on two lines. Below left, the intro paragraph; below right, a blue dimension line with ticks at 2012, 2017 and 2026 and the role at each. A full-width title block on the bottom edge: name, role, location, records published, and a solid blue "Email Kameshwaran" cell as the primary action. Nothing of the next section shows.

FORM: Drawing Sheet, composition B (Statement with title block), the user's choice from three variants; position 1 on the ordered list, taken as the pick. seed:df487e003a439919. Signature interaction: on load the dimension line draws from left to right and the headline settles once; the Email cell's arrow steps on hover and the cell presses on click. Reduced motion shows everything at rest.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
