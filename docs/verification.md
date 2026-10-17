# Verification record

Verified locally on 17 October 2026 with Node.js 22.23.3. Production origin: `https://lieannaguirre.com`.

## Application and export

- TypeScript and ESLint checks pass.
- Both `npm run dev` and `npm run preview` were started with Node.js 22 and returned HTTP 200 for the homepage. Static navigation payloads also return HTTP 200.
- Production static export passes. `out/` contains all seven public pages, a custom `404.html`, sitemap, robots file, resume, security-header configuration, and eight generated Open Graph images.
- Internal navigation and asset links are checked by `npm run verify:export`.
- Every exported HTML, JavaScript, JSON, text/RSC, XML, and source-map file is scanned for draft-specific titles, slugs, descriptions, implementation text, results, incomplete placeholders, example metrics, and temporary QA fixture identifiers.
- All five real case studies remain drafts. No draft detail pages are exported. The homepage projects section is hidden, and `/projects/` displays the intentional empty state.
- Two temporary published fixtures verified project category filters, technology filters, combined no-results behavior, reset, generated detail pages, canonical metadata, direct refresh, and draft 404 behavior. Fixtures were removed before the final build.

## Browser checks

Headless Chrome against the actual exported folder through the static preview server:

- All seven pages return HTTP 200, have a single h1, and contain the correct production canonical URL.
- Unknown and unpublished project URLs return HTTP 404.
- Theme switching works and survives reloads.
- Skill search, combined category/search filtering, empty states, resetting, and category expansion work.
- Email copying writes the approved email to the clipboard and reports success accessibly.
- The mobile menu moves focus to its first link, closes on Escape, restores focus to its trigger, and closes after navigation.
- All routes have no horizontal overflow at 320, 390, 768, and 1440 pixels.
- Desktop and mobile screenshots in both themes were inspected. The layout retains equally prominent employment and client paths.
- Reduced-motion mode disables smooth scrolling. Keyboard controls, focus styling, semantic headings, image alternatives, and skip navigation were checked.
- No browser JavaScript errors were observed.
- Base text and accent contrast pairs pass WCAG AA: dark muted text 8.11:1, dark accents 11.27:1, light muted text 6.30:1, and light accents / primary buttons 5.42:1.

## Content and resume

The website uses the supplied employment dates, confirmed skills, and factual service descriptions. Personal data and visible copy are centralized in `content/portfolio.ts`. No testimonials, new employers, certifications, or numerical project achievements were added. Web development is presented as training.

The original resume remains outside the repository. The public copy has its phone text permanently redacted, phone links removed, and document metadata cleared. Text extraction and a rendered page inspection verified the result. The supplied resume contains additional history and claims; those were not promoted into website copy.

## Deployment limits

Cloudflare Pages publication, domain/DNS ownership, HTTPS, edge security-header enforcement, and live redirect behavior require the Cloudflare account and were not tested locally. The local preview serves strict static routes and 404 responses but does not emulate Cloudflare `_headers`.

`npm audit --omit=dev` reports **zero production vulnerabilities**. The full audit reports five high-severity entries in the development-only ESLint fast-glob/micromatch/braces dependency chain. The registry's latest braces release is still 3.0.3 and the advisory has no compatible patched dependency available. These lint tools are not shipped in the static export. Do not use an automatic force downgrade of the Next.js lint configuration.

Next.js 16 rejects an empty `generateStaticParams` collection during static export. The documented route-preparation step omits the dynamic route entirely until a project is published, rather than exporting a dummy route. Webpack is selected explicitly because the local Windows runtime's Turbopack CSS subprocess failed; this does not add any runtime server requirement.
