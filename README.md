# Julie Ann Aguirre | IT & Automation Portfolio

A fully static Next.js App Router portfolio for remote employment and freelance enquiries. TypeScript, Tailwind CSS, selected shadcn/ui primitives, and Lucide icons. No application server, database, API keys, analytics, or contact-form backend. Microsoft Bookings loads in an external iframe only on request.

## Local setup

Use Node.js **22** (see `.nvmrc`) and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Dark mode is the default. A saved light-mode preference persists locally in the browser.

```sh

npm run lint
npm run build
npm run verify:export
npm run preview
```

`build` exports HTML, assets, metadata, and social images into `out/`. `preview` serves that folder at http://localhost:3000 and returns the exported custom 404 page for unknown routes. Set `PORT` to change the preview port. There is intentionally no `npm start` command or application server.

The build validates `portfolio.seo.siteUrl`, currently `https://lieannaguirre.com`. An optional `SITE_URL` build environment variable overrides it. Keep this origin aligned with the chosen Cloudflare primary domain. Development falls back to localhost if no domain is configured. Production rejects missing, localhost, or example origins.

## Deploy to the existing Cloudflare Worker

The `portfolio` project shown in the Cloudflare dashboard is a Worker. `wrangler.json` explicitly uploads the static `out/` export to that Worker; no application server or full-stack adapter is needed. Unknown routes use the exported 404 page instead of a homepage fallback.

In **portfolio → Settings → Build**, configure:

- Root directory: repository root (leave empty or use `/`).
- Build command: `npm run build`.
- Deploy command: `npx wrangler deploy`.
- Production branch: `master`.
- Build environment variable: `NODE_VERSION=22`.
- Optional build environment variable: `SITE_URL=https://lieannaguirre.com` (the central content file already supplies this domain).

Commit and push the configuration, then retry the build. Wrangler's `name` must match the existing Worker name, `portfolio`. Keep the assets directory as `out`, not `.next` or `public`. Do not use an OpenNext build command for this static export. The Worker configuration also works with the dashboard's default `npx wrangler deploy` command.

If a build fails, open **Deployments → failed build → Build logs** and inspect the first error and its surrounding lines. A successful Git push only confirms the repository upload. The supplied failed deployment log reported `Running custom build npx opennextjs-cloudflare build failed` during the deploy command. This static site must use the commands above rather than that full-stack adapter. The explicit Wrangler configuration avoids framework auto-configuration; account permissions and dashboard build settings still need verification on Cloudflare.

See [Cloudflare's static site configuration](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/). To validate deployment packaging without publishing, run `npm run build` followed by `npx wrangler deploy --dry-run`.

## Alternative: deploy to Cloudflare Pages

1. Push this source to a GitHub repository. Do not commit `node_modules`, `.next`, `out`, or private environment files.
2. In Cloudflare, choose **Workers & Pages → Create → Pages → Connect to Git** and select the repository and production branch.
3. Set build command to **`npm run build`**, build output directory to **`out`**, and Node version to **22**. Set `NODE_VERSION=22` if the build UI requires an environment variable; `.nvmrc` also pins it.
4. Choose the **Next.js static HTML export** preset if available. Otherwise choose no preset and enter these settings. Do not choose the full-stack Next.js / Workers preset.
5. Deploy. Pages serves exported files without an application server. The root Wrangler configuration is for the alternative Workers deployment; do not use a Workers deploy command in Pages.
6. In the Pages project, open **Custom domains → Set up a custom domain**, enter `lieannaguirre.com`, and follow Cloudflare's DNS validation. Because the domain is already managed in Cloudflare, use its suggested DNS records. Choose the same primary domain used by `portfolio.seo.siteUrl`.
7. Confirm HTTPS, route refreshes, an unknown URL returning HTTP 404, canonical URLs, social images, and security headers on the live deployment.

Pushing to the connected production branch triggers an automatic rebuild and redeployment. Preview branches receive Cloudflare preview URLs; their canonical links intentionally point to the configured primary production domain. Configure indexing/access for preview deployments in Cloudflare if needed.

`public/_headers` supplies content-type protection, referrer restrictions, permissions restrictions, frame protection, and immutable caching for hashed assets. The CSP permits inline scripts/styles because static Next.js hydration, JSON-LD, and theme initialization use them; no request-time nonce service is available. It allows no third-party script or connection origins. Local preview does not emulate Cloudflare's `_headers`; verify enforcement after deployment. There is no SPA fallback or `_redirects` file. `trailingSlash: true` produces directory index pages and matching canonical URLs.

## Edit content

All personal information and public copy live in **`content/portfolio.ts`**. Components consume its typed data. Edit profile, biography, contact details, navigation, skills, experience, services, education, certifications, page copy, or SEO there. Do not infer personal skills from this application's implementation stack.

- Keep employment dates factual. Accenture is September 2020 to February 2023; the part-time Upwork support role is February 2023 to October 2026. Keller remains February 2024 to Present.
- Missing `[ADD ...]` values are private editing reminders and must not become public claims. Optional dates and incomplete project fields are suppressed.
- Certifications stay hidden until entries have `verified: true`.
- Keep the two homepage and contact paths equally prominent.

### Client feedback and platform animation

`reviews` contains the seven supplied Upwork contracts, their exact dates and ratings, optional verbatim quotes, excerpt flags, and endorsements. The shared Client Feedback section appears on About and the All Categories Skills overview. Selecting a skill category or opening a screenshot viewer hides Skills feedback. Three contracts have ratings only, and the longer system-admin review is explicitly an excerpt. Add a `sourceUrl` only when you have its real public Upwork link. Do not infer client identities or fill in missing feedback.

Coding education remains editable in `education` but is not rendered publicly. The former training panels and the Zuitt biography paragraph have been removed to emphasize current IT and automation strengths.

`platforms` contains names and local SVG icon paths for the homepage strip. The row moves continuously over 40 seconds, pauses on hover/focus, and has a Pause/Play control. Reduced-motion preferences switch it to a wrapping static list. Duplicate loop items are hidden from assistive technology. Icons are Lucide capability symbols rather than official brand logos; see `docs/assets/platform-icons.md` for provenance and licensing. No animation library or external image requests are used.

### Skills screenshot evidence

Each skill has a stable `id`, `name`, and optional `exampleIds`. The typed `workExamples` records contain the tool, headline, caption, alt text, category IDs, related skill IDs, image dimensions, path, and publication status. Keep both sides of each association consistent. Each category has one `featuredExampleId`; individual skills may have an optional override with the same field. A skill without an override uses its first approved referenced example. Only published examples with valid paths reach browser components. Other skills remain text labels.

The 42 supplied screenshots produce 41 unique records: 33 sanitized public images and eight private drafts. The duplicate ClickUp screenshot shares a single example and asset across CRM and Automation. Public copies live in `public/work-examples/<category>/` and are copied unchanged to `out/work-examples/` during export. Originals remain outside the repository. Category cards retain their compact six-skill fronts and original expand controls. In All Categories, hover flips each card to one selected screenshot; the image control supports keyboard and touch. Individual category tabs show a static skills card and a responsive collection of all approved associated screenshots, independent of skill search. Individual skill labels also show one selected example. A single-image viewer provides full-size zoom and close only, with no thumbnail navigation, Previous/Next controls, or carousels inside the viewer. All images are local static files, with no external image service or upload backend.

See `docs/skills-media-guide.md` for every source filename, identified platform, final headline, skill association, and publication decision. Review and permanently sanitize any new image before placing it in public assets. An empty image path plus draft status keeps unresolved evidence private. Rebuild and redeploy after content changes. Education and the five project drafts remain unpublished.

### Profile photo

The selected portrait (supplied as `3.png`) is stored at `public/images/julie-ann-aguirre.webp`. It is a 960-pixel WebP optimized from the supplied PNG, without retouching. The original files in Downloads are unchanged; the unused portrait is not copied into the repository.

`profile.photo` in `content/portfolio.ts` points to `/images/julie-ann-aguirre.webp`. Both the homepage About section and the full About page reuse this single local asset. Next.js copies `public/` files into the static export, so the deployed image is available at `https://lieannaguirre.com/images/julie-ann-aguirre.webp`. It is a public static file, not a database record, external image-host link, or embedded base64 string. There is no request-time image-processing service.

To replace it, put an optimized image in `public/images/`, update `profile.photo` and `profile.photoAlt`, then rebuild and redeploy. The image fills its responsive card with a CSS crop; the source file itself is not cropped. The hero's systems monogram remains a decorative technology graphic.

### Resume

The public resume at `public/julie-ann-aguirre-resume.pdf` is a copy of the supplied resume with its personal phone span permanently redacted. The original file is not copied into the repository. Website content follows the supplied brief where the resume contains additional details.

For replacements, first inspect every PDF page, text content, annotations, and metadata for personal phone numbers, home addresses, and sensitive information. Put only an approved public copy in `public/`, then update `profile.resumeUrl` if its name changes. Every file in `public/` is downloadable.

The supplied resume now uses the central contact email and separates Accenture from the part-time Upwork support role. The user's latest employer correction is Upwork. The original support duties remain with Upwork, now titled Microsoft 365 Service Engineer. Accenture is Microsoft 365 Technical Support in Taguig, Philippines, with separately confirmed troubleshooting duties and technology tags. Display order is Keller, Upwork, then Accenture. Stable experience IDs keep PDF role selection independent of display order. To reproduce this update from a separate copy of the original supplied layout, install PyMuPDF, set `PYTHON_EXECUTABLE` if Python is not on PATH, and run `npx tsx scripts/update-resume.ts <source.pdf>`. The wrapper passes approved contact and experience data from `content/portfolio.ts` into `scripts/prepare-resume.py`. It is a layout-specific preparation tool, not part of installation or the production build. Render and review the result after every change. Never use the output PDF itself as the source.

### JA brand assets

`brand` in the central content file defines the two theme logos, their accessible label, and browser-icon paths. Transparent PNGs are stored in `public/images/brand/`. CSS selects the correct variant before React hydrates, so the saved light theme does not briefly show a dark-theme logo. Header and footer marks are decorative beside the visible name; the hero mark has an accessible label. The generated sharing images use the dark variant. See `docs/assets/brand.md` for source files, cleanup prompts, and preparation details. Supplied originals remain unchanged.

### Publish a case study

Five narratives are stored as `status: "draft"` in the content file. They are not completed-work claims. Verify the role, problem, implementation, qualitative results, technology list, and any metrics; remove unsupported content and sanitize screenshots. Add only metrics with a verified source and `verified: true`. Then change `status` to `"published"`, build, and run `verify:export`.

`generateStaticParams` returns only published slugs and `dynamicParams` is false. Next.js 16 static export rejects an empty params array, so `scripts/prepare-routes.ts` materializes the route from `templates/case-study-page.tsx` only when at least one project is published. Do not edit the generated route; edit the template. No dummy route is generated for the empty collection. Drafts are filtered in build-time server components and are never passed into browser components. With no published projects, the homepage omits projects and the projects page shows an intentional empty state. Unpublished URLs return 404. New content requires rebuilding and redeploying.

### Links and contact

The live portfolio domain is `https://lieannaguirre.com`, with contact email `hello@lieannaguirre.com`. Canonicals, social metadata, structured data, and sitemap use the central site URL. Keep any Cloudflare `SITE_URL` override aligned with this domain.

Microsoft Bookings settings and visible scheduling copy live in `contact.booking`. Contact provides an on-demand calendar at `/contact/#schedule`; homepage and footer links lead there. No iframe is rendered or Microsoft calendar request made until the scheduling button is activated. A direct Microsoft Bookings link remains available before and after loading. The iframe uses Microsoft's public booking page; the portfolio does not store appointment data. `_headers` explicitly allows only `https://bookings.cloud.microsoft` as a frame source while retaining existing script, connection, and frame-ancestor restrictions. If Microsoft changes its embed origin or redirects to another origin, verify that destination before changing the policy; the direct link remains the fallback.

The public resume includes the clickable website address and current LinkedIn profile. Its preparation wrapper supplies the website, email, LinkedIn, and experience from central content. Rebuild after replacing the PDF so the exported download matches.

Microsoft Bookings currently requires an HTTPS parent page (`frame-ancestors https:`). The plain HTTP local preview cannot display the embedded calendar; use the direct link there. The actual public Microsoft calendar was successfully loaded and visually verified in an intercepted HTTPS preview context with the portfolio's CSP applied. No appointment was submitted. Confirm the same behavior on the live HTTPS domain after deployment.

Edit `contact.email`, `contact.social`, and `profile.resumeUrl`. Service enquiries use `mailto:` subjects; no form submission or personal data storage occurs. Email copying requires a secure browser context (HTTPS or localhost), and failures show an accessible message alongside the clickable email address.

## Architecture

`app/` contains static routes and metadata. `components/` contains shared presentation and small client interactions. `components/ui/` contains locally owned shadcn/ui-style Button and Input primitives. `scripts/` contains domain validation, static image generation, export verification, and a strict local static preview. All output is in `out/`.

See `docs/design-research.md` for the reference review and `docs/verification.md` for the final verification results and environment limits.
