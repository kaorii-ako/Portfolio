# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone evaluating Tawin "Kao" Tangsukson from the outside: university admissions and scholarship reviewers assessing him as a CS applicant, internship/collaboration contacts (companies, mentors) scouting for talent, other developers who might use, star, or contribute to his open-source projects (Shiori, Axon OS, Chronicly, Mondo, OpenNexus), and general visitors doing a credibility check after finding him online (e.g. via GitHub, a shared link, or a competition). No single audience is prioritized over the others — the site is a broad calling card that has to hold up under all four readings at once.

## Product Purpose

A single-page personal portfolio that proves Tawin is a real systems builder, not a student with a project list. Success is a visitor leaving convinced his work is functional and shipped, not academic exercises — leading to an admissions read, an internship conversation, a GitHub star/contribution, or just being taken seriously.

## Positioning

He ships real, working systems — not toy projects. Axon OS boots on real hardware with a 7-agent AI mesh running as systemd services; Shiori has an MCP server and real Google Classroom sync; nine projects shipped, open-source, functional. A neighboring student portfolio can list projects; it can't truthfully claim things actually run in production/on hardware. "These aren't side projects. They're the main thing."

## Operating Context

Content lives in `src/data/site.ts` (identity, tagline, roles, socials, stats) and `src/data/projects.ts` (9 projects with title, tagline, description, stack, GitHub/live links, category, featured flag). Site sections: Hero, About (bio + journey timeline + focus/interests/availability), Projects, Skills, Education, Contact, Footer. Built with Next.js 14 App Router, TypeScript, Tailwind, Framer Motion, React Three Fiber for particle/cursor effects. Deployed at kaorii-ako.vercel.app.

## Capabilities and Constraints

Static content site — no backend, no auth, no dynamic data fetching on this surface itself (linked projects like Shiori are separate live apps). Current data in `site.ts` and `projects.ts` is accurate and is the source of truth for stats, links, and project descriptions; do not invent testimonials, star counts, user numbers, or claims beyond what's already recorded there. Age/grade context (Year 10, Bangkok, started coding at 12) is factual and intentional — it's part of the "how is this real" hook, not something to soften or hide.

## Brand Commitments

Name: Tawin Tangsukson, goes by "Kao" / "Tawin". Personal name/initials, not a company or product brand. No existing logo system. Voice already established in copy: direct, confident, low-hedge, technically specific ("Not a reskin — Axon OS has a 7-agent AI mesh," "Wabi-sabi simplicity").

## Evidence on Hand

Real project links, GitHub repos, and (where applicable) live URLs are already recorded per-project in `src/data/projects.ts`. Stats block in `site.ts` (9 shipped projects, 1 Linux distro, 28 GitHub stars) is real and should be kept in sync with actual counts, not restated as a fixed number in future copy. No testimonials, press, or case studies exist — do not fabricate any.

## Product Principles

- Prove, don't just claim: every section should point at something verifiable (a repo, a live link, a specific technical detail) rather than generic self-description.
- Specificity is the credibility mechanism: technical particulars (systemd services, CFD in ANSYS Fluent, MCP server) do more work than adjectives like "passionate" or "innovative."
- One surface, four audiences: copy and structure must read honestly to admissions, recruiters, developers, and casual visitors simultaneously — no audience-specific forking on a single-page site.
- Age is a fact, not a caveat: Year 10 / Bangkok context strengthens the "already shipping real systems" story and should stay visible, not be minimized.
- Content changes (new projects, updated stats) happen in `src/data/*`; visual/design decisions are separate from product truth.

## Accessibility & Inclusion

No product-specific accessibility requirement established beyond standard web accessibility practice.
