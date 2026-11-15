# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers and recruiters evaluating Kameshwaran Ravichandran for a role. They skim the experience, then read one or two writing pieces to judge depth of thinking.

Secondary audiences (fellow engineers, prospective clients) are not confirmed as targets.

## Product Purpose

The personal site of Kameshwaran Ravichandran, a frontend platform engineer in Chennai, India. It presents who he is, his experience, his writing and how to reach him.

Success has three parts, all confirmed:

1. Being contacted about roles (inbound email or LinkedIn).
2. Building a reputation through the writing: pieces that are read, shared and subscribed to.
3. Serving as a durable public record of his work history and thinking.

## Positioning

Ten years of frontend platform work (performance, accessibility, architecture) owned end to end: hosting, the BFF, the backend when needed, and the interface. Currently building agentic systems, with agentic coding. The proof is first-hand decision records from real projects, each stating the problem, the options, what was chosen and his own role.

## Operating Context

- A reader arrives from a résumé, LinkedIn, GitHub, a shared link or RSS.
- Home page holds the introduction, the writing index, experience and contact; each piece of writing has its own page at `/writing/<id>/`.
- An RSS feed is published at `/rss.xml`.
- Deployed to GitHub Pages at `https://kameshravi.github.io` via `.github/workflows/deploy.yml`. A custom domain is planned but not bought; `site` in `astro.config.mjs` and `public/CNAME` change when it is.

## Capabilities and Constraints

- Astro static site; writing is a Markdown content collection (`src/content/writing/`) with `title`, `summary`, `date`, `role`, `stack` and `draft` fields.
- Drafts are supported and labelled; unfinished gaps in a draft are marked in the source.
- Light and dark themes with a toggle that remembers the choice.
- **Commitment: static and dependency-light.** Static output on GitHub Pages, minimal dependencies, works without JavaScript.
- **Commitment: only real, verifiable claims.** No numbers, outcomes or employer details beyond what Kameshwaran has written or approved.
- Current facts, not confirmed as binding: the site has no tracking or analytics, and all writing so far follows the decision-record format.

## Brand Commitments

- Name: Kameshwaran Ravichandran. Title line: "Frontend platform engineer."
- Voice in the existing copy: first person, plain, specific, no superlatives.

## Evidence on Hand

- Four writing pieces in `src/content/writing/`: micro-frontends for cross-selling, GraphQL BFF data cache, Google categories onboarding, and Jira-to-PR agent (draft, with gaps still to fill).
- Experience and its figures as written in `src/pages/index.astro` (Clarity RCM, Oct 2026 to present; FULL Creative, Mar 2017 to Sep 2026; B.Tech, Sathyabama University, 2012 to 2016).
- Open-source package: `react-taggle-input` on GitHub.
- Contact: email, LinkedIn and GitHub links in `src/pages/index.astro`.
- Absent, and not to be fabricated: testimonials, employer logos, a portrait or other photography, project screenshots, metrics beyond those already written.

## Product Principles

1. The evaluator's time comes first: who he is, what he has done and how to reach him must be findable in a skim.
2. Depth is shown, not asserted: the writing carries the proof, and each piece states his actual role.
3. Nothing is claimed that is not true and approved.
4. The site is itself a work sample for a frontend platform engineer: fast, accessible, static, light.
5. It should stay cheap to keep current, so the record lasts.
