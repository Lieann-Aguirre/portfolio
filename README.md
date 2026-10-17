# Julie Ann Aguirre | IT & Automation Portfolio

A fully static Next.js App Router portfolio for remote employment and freelance enquiries. TypeScript, Tailwind CSS, selected shadcn/ui primitives, and Lucide icons. No server, database, API keys, analytics, contact-form backend, or runtime integrations.

## Local setup

Use Node.js **22** (see `.nvmrc`) and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Dark mode is the default. A saved light-mode preference persists locally in the browser.

```sh
npm run typecheck
npm run lint
npm run build
npm run verify:export
npm run preview
```

`build` exports HTML, assets, metadata, and social images into `out/`. `preview` serves that folder at http://localhost:3000 and returns the exported custom 404 page for unknown routes. Set `PORT` to change the preview port. There is intentionally no `npm start` command or application server.

The build validates `portfolio.seo.siteUrl`, currently `https://lieannaguirre.com`. An optional `SITE_URL` build environment variable overrides it. Keep this origin aligned with the chosen Cloudflare primary domain. Development falls back to localhost if no domain is configured. Production rejects missing, localhost, or example origins.

## Deploy to Cloudflare Pages

1. Push this source to a GitHub repository. Do not commit `node_modules`, `.next`, `out`, or private environment files.
2. In Cloudflare, choose **Workers & Pages → Create → Pages → Connect to Git** and select the repository and production branch.
3. Set build command to **`npm run build`**, build output directory to **`out`**, and Node version to **22**. Set `NODE_VERSION=22` if the build UI requires an environment variable; `.nvmrc` also pins it.
4. Choose the **Next.js static HTML export** preset if available. Otherwise choose no preset and enter these settings. Do not choose the full-stack Next.js / Workers preset.
5. Deploy. Cloudflare serves exported files without a Worker. This project needs no Wrangler, OpenNext, Docker, or Hostinger setup.
6. In the Pages project, open **Custom domains → Set up a custom domain**, enter `lieannaguirre.com`, and follow Cloudflare's DNS validation. Because the domain is already managed in Cloudflare, use its suggested DNS records. Choose the same primary domain used by `portfolio.seo.siteUrl`.
7. Confirm HTTPS, route refreshes, an unknown URL returning HTTP 404, canonical URLs, social images, and security headers on the live deployment.

Pushing to the connected production branch triggers an automatic rebuild and redeployment. Preview branches receive Cloudflare preview URLs; their canonical links intentionally point to the configured primary production domain. Configure indexing/access for preview deployments in Cloudflare if needed.

`public/_headers` supplies content-type protection, referrer restrictions, permissions restrictions, frame protection, and immutable caching for hashed assets. The CSP permits inline scripts/styles because static Next.js hydration, JSON-LD, and theme initialization use them; no request-time nonce service is available. It allows no third-party script or connection origins. Local preview does not emulate Cloudflare's `_headers`; verify enforcement after deployment. There is no SPA fallback or `_redirects` file. `trailingSlash: true` produces directory index pages and matching canonical URLs.

## Edit content

All personal information and public copy live in **`content/portfolio.ts`**. Components consume its typed data. Edit profile, biography, contact details, navigation, skills, experience, services, education, certifications, page copy, or SEO there. Do not infer personal skills from this application's implementation stack.

- Keep employment dates factual. Microsoft is September 2021 to May 2025.
- Missing `[ADD ...]` values are private editing reminders and must not become public claims. Optional dates and incomplete project fields are suppressed.
- Certifications stay hidden until entries have `verified: true`.
- Keep the two homepage and contact paths equally prominent.

### Profile photo

Place an approved photo in `public/images/profile.jpg`. Set `profile.photo` to `/images/profile.jpg` and update `profile.photoAlt`. Static exports use unoptimized images, so compress and resize the source before committing it. The current monogram illustration is a clearly labeled placeholder.

### Resume

The public resume at `public/julie-ann-aguirre-resume.pdf` is a copy of the supplied resume with its personal phone span permanently redacted. The original file is not copied into the repository. Website content follows the supplied brief where the resume contains additional details.

For replacements, first inspect every PDF page, text content, annotations, and metadata for personal phone numbers, home addresses, and sensitive information. Put only an approved public copy in `public/`, then update `profile.resumeUrl` if its name changes. Every file in `public/` is downloadable. `scripts/prepare-resume.py` documents the one-time redaction of the original supplied file and requires PyMuPDF; it is not part of website installation or build.

### Publish a case study

Five narratives are stored as `status: "draft"` in the content file. They are not completed-work claims. Verify the role, problem, implementation, qualitative results, technology list, and any metrics; remove unsupported content and sanitize screenshots. Add only metrics with a verified source and `verified: true`. Then change `status` to `"published"`, build, and run `verify:export`.

`generateStaticParams` returns only published slugs and `dynamicParams` is false. Next.js 16 static export rejects an empty params array, so `scripts/prepare-routes.ts` materializes the route from `templates/case-study-page.tsx` only when at least one project is published. Do not edit the generated route; edit the template. No dummy route is generated for the empty collection. Drafts are filtered in build-time server components and are never passed into browser components. With no published projects, the homepage omits projects and the projects page shows an intentional empty state. Unpublished URLs return 404. New content requires rebuilding and redeploying.

### Links and contact

Edit `contact.email`, `contact.social`, and `profile.resumeUrl`. Service enquiries use `mailto:` subjects; no form submission or personal data storage occurs. Email copying requires a secure browser context (HTTPS or localhost), and failures show an accessible message alongside the clickable email address.

## Architecture

`app/` contains static routes and metadata. `components/` contains shared presentation and small client interactions. `components/ui/` contains locally owned shadcn/ui-style Button and Input primitives. `scripts/` contains domain validation, static image generation, export verification, and a strict local static preview. All output is in `out/`.

See `docs/design-research.md` for the reference review and `docs/verification.md` for the final verification results and environment limits.
