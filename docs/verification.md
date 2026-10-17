# Verification record

Verified locally on 17 and 18 October 2026 with Node.js 22.23.3. Production origin: `https://lieannaguirre.com`.

## Current experience and single-screenshot cards, 18 October 2026

- Experience order is Keller, Upwork, then Accenture. Upwork is Microsoft 365 Service Engineer, Part-time, February 2023 to October 2026. Accenture is Microsoft 365 Technical Support, September 2020 to February 2023, Taguig, Philippines. The confirmed Accenture troubleshooting areas and separate role descriptions are centralized alongside nine technology tags per support role. Keller content is preserved.
- Stable experience IDs drive PDF role lookup independently of array order. The one-page resume matches the role order, new title, Accenture location, and current email; unrelated content remains. The final page was rendered and inspected, extracted text/order checked, and metadata remains cleared.
- Original compact Skills fronts, six-item previews, expand controls, search, category filters, and links are restored. The full-tools flip redesign is removed. Each category back contains one approved selected screenshot plus its tool badge and title. The All Categories filter button itself has no flip behavior.
- Single-image selection is central: one category `featuredExampleId`, optional individual-skill overrides, otherwise the first approved referenced example. All 12 category choices belong to the correct source category and exclude private drafts. The media guide records the choices.
- Individual labels show one selected screenshot; a shared preview scope permits only one visible preview at a time. A single-image dialog supports full-size zoom, Close/Escape, focus containment and opener restoration. Multi-image grids, thumbnail strips, counters and Previous/Next controls are absent.
- Browser checks pass for all 12 card backs, exactly one image per back, unchanged hover height, original card expansion, preview hoverability, keyboard opening, modal return focus, touch toggling and single-skill taps. Both overview and individual category views use the screenshot flip.
- Reviews remain on the overview while cards flip, hide for individual categories and open screenshots, and restore appropriately. Search, empty results, reset and category hashes pass. A focused final regression confirms search and category changes reset pinned backs to the front.
- Desktop/mobile screenshots were inspected in both themes. Layouts fit at 320, 390, 768 and 1440 pixels. Reduced motion switches faces instantly. Inactive faces are inert and hidden from assistive technology; active category headings remain accessible.
- Final lint, TypeScript, production build and export checks pass. The 142-file export retains sanitized media, current branding/contact data, resume and metadata assets, and excludes private case studies. No browser JavaScript or hydration errors were observed. No hosting publication was performed.

The sections below record earlier verification milestones; the current single-image behavior and role order above supersede their former gallery and ordering descriptions.

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

The website uses the supplied employment dates, confirmed skills, and factual service descriptions. Personal data and visible copy are centralized in `content/portfolio.ts`. No invented testimonials, new employers, certifications, or numerical project achievements were added. Seven supplied Upwork reviews now replace the training panels on About and Skills. Education remains in the source content for editing, but coding training and the Zuitt biography paragraph are absent from the rendered site and exported text payloads.

The original resume remains outside the repository. The public copy has its phone text permanently redacted, phone links removed, and document metadata cleared. Text extraction and a rendered page inspection verified the result. The supplied resume contains additional history and claims; those were not promoted into website copy.

## Client feedback and moving platforms update

- About and Skills each display the seven supplied Upwork contracts. Each shows its exact supplied date range and an accessible 5.0 out of 5 rating.
- Three complete short quotes are verbatim. The longer system-admin quote preserves the supplied truncation and is marked as an excerpt. The other three entries contain ratings and contract details only.
- Supplied endorsements are preserved. Client names, payment figures, hours, in-progress counts, and unsupported source links are not added.
- Education remains in the central source file for editing, but its former panels and biography paragraph are removed. Export verification also rejects Zuitt and former training headings in HTML, JavaScript, and RSC/text output.
- Seven local Lucide SVGs illustrate platform capabilities; names remain visible, and license notices accompany the deployed assets. These are not official product logos.
- Browser checks confirmed all seven review entries, quotes, dates, accessible ratings, rating-only cards, and the excerpt label on both pages.
- Platform motion was checked for its 40-second duration, equal loop-group widths, continuity at the loop boundary, eager icon loading, hidden duplicate list items, hover/focus pause, and keyboard Pause/Play operation.
- Homepage, About, and Skills have no horizontal overflow at 320, 390, 768, and 1440 pixels in either theme. Desktop/mobile review and platform screenshots were inspected.
- Reduced motion disables the animation, wraps the seven platforms into a static list, and hides duplicate items and the unnecessary playback control.
- Portrait loading and the private case-study 404 still pass. No browser JavaScript errors or external asset requests were observed.

## Screenshot-based Skills update

- Inspected all 42 screenshots in the 12 supplied folders; the ZIP also contains 42 screenshots. Original SHA-256 hashes remain unchanged.
- The exact duplicate ClickUp image shares one record and asset between CRM and Automation. There are 41 unique records, 33 sanitized public images (about 1.5 MB total), and eight private drafts. Source filenames, tools, headlines, related skills, and publication decisions are recorded in `docs/skills-media-guide.md`.
- Public copies use permanent opaque pixel redactions and flattened WebP encoding. The saved contact sheets were visually reviewed again after redaction corrections. No original screenshots or unresolved draft images are in public assets.
- All Categories displays the seven reviews. Each of the 12 individual category filters hides them. Opening a skill gallery from the overview hides them, closing restores them, and closing within a category leaves them hidden. Search, no results, reset, and category hash links pass.
- Skills with published evidence have hover/focus previews and gallery buttons; unsupported skills remain labels. Desktop previews stay within the viewport and remain hoverable. Escape dismissal, Enter/Space opening, Previous/Next buttons, arrow keys, thumbnail selection, full-size zoom, focus containment, and opener focus restoration pass.
- Touch opening, next-image navigation, and close controls pass. The native dialog provides background inertness. Tool badges and descriptive headlines appear beneath screenshots in cards, previews, and the main viewer.
- Overview and gallery fit at 320, 390, 768, and 1440 pixels in both themes. Desktop/mobile screenshots were inspected. Reduced motion disables smooth scrolling. No browser JavaScript errors or external asset requests were observed.
- Public content uses DNS and Security and contains no networking expertise, VPN Administration, VPN Management, NordVPN, or VPN experience wording. Decorative diagrams describe systems or workflows.
- Final Node.js 22 production build, TypeScript, and ESLint pass. Export verification scans 136 files, checks internal links and evidence assets, and rejects private draft IDs/titles, existing project drafts, incomplete placeholders, and unexpected source archives/media.
- The portrait, resume link, static metadata files, unknown-route 404, and unpublished-project 404 remain functional. This update preserves the static Cloudflare Pages export and does not publish the site to an account.

## JA branding, contact, and support-role correction

- The confirmed timeline order is Keller Executive Search, Accenture, then Upwork. The user's final implementation request changed the part-time role's company from Microsoft to Upwork. Accenture is September 2020 to February 2023; part-time Upwork support is February 2023 to October 2026. Homepage and Experience page agree. Accenture has no invented duties, location, or employment type.
- Contact links, service email subjects, footer, clipboard output, and Person structured data use `hello@lieannaguirre.com`. Export checks reject the superseded address and support date range.
- The supplied `3.png` and `2.png` were cleaned with the built-in image tool into transparent dark/light logo variants. Header, footer, hero, browser icons, and all eight sharing images use the supplied branding. Source artwork and preparation prompts are documented in `docs/assets/brand.md`.
- Headless Chrome verified both theme variants at 320, 390, 768, and 1440 pixels, theme persistence after reload, no horizontal overflow, image decoding, all seven routes, clipboard contents, timeline order, icons, resume download, skill gallery operation, and private-project 404 behavior. No browser JavaScript errors were observed. Desktop/mobile branding and a generated sharing image were visually inspected.
- The one-page PDF was updated from a separate local input copy. It includes the new contact email, Accenture entry, and part-time Upwork support entry while preserving Keller and unrelated resume content. Source support duties remain with Upwork. The original PDF's subset font lacked a newly needed glyph, so edited text uses complete standard PDF fonts; text extraction now includes the full employer name without missing characters.
- The final PDF page was rendered and visually inspected. Extracted text and links confirm the new email, exact role dates, no old email/date text, and preserved phone removal. Both document-info and XMP metadata are cleared. Public and exported PDF bytes match.
- Final ESLint, TypeScript, production build, and export checks pass. Export verification scans 142 files. Screenshot assets and private case-study exclusions are unchanged. Hosting publication was not performed.

## Deployment limits

Cloudflare Pages publication, domain/DNS ownership, HTTPS, edge security-header enforcement, and live redirect behavior require the Cloudflare account and were not tested locally. The local preview serves strict static routes and 404 responses but does not emulate Cloudflare `_headers`.

`npm audit --omit=dev` reports **zero production vulnerabilities**. The full audit reports five high-severity entries in the development-only ESLint fast-glob/micromatch/braces dependency chain. The registry's latest braces release is still 3.0.3 and the advisory has no compatible patched dependency available. These lint tools are not shipped in the static export. Do not use an automatic force downgrade of the Next.js lint configuration.

Next.js 16 rejects an empty `generateStaticParams` collection during static export. The documented route-preparation step omits the dynamic route entirely until a project is published, rather than exporting a dummy route. Webpack is selected explicitly because the local Windows runtime's Turbopack CSS subprocess failed; this does not add any runtime server requirement.
