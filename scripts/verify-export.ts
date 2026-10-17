import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { portfolio as p } from "../content/portfolio";
async function walk(dir: string): Promise<string[]> { const files = await readdir(dir, { withFileTypes: true }); return (await Promise.all(files.map(f => f.isDirectory() ? walk(path.join(dir, f.name)) : [path.join(dir, f.name)]))).flat(); }
const files = await walk("out");
const origin = (process.env.SITE_URL || p.seo.siteUrl).replace(/\/$/, "");
const drafts = p.projects.filter(project => project.status === "draft");
const forbidden = [...drafts.flatMap(project => [project.slug, project.title, project.summary, project.problem ?? "", ...(project.implementation ?? []), ...(project.results ?? [])]), "qa-fixture", "QA Fixture", "Temporary filter verification", "[ADD", "[X%]", "[X+]", "20%–40%", "5%–15%", "90%+", "below 2%"] .filter(Boolean);
for (const file of files) {
  if (/\.(html|js|txt|json|xml|map)$/.test(file)) {
    const text = await readFile(file, "utf8");
    for (const term of forbidden) assert(!text.includes(term), `Private or placeholder text leaked to ${file}: ${term}`);
  }
}
for (const nav of p.navigation) {
  const filename = path.join("out", nav.href, "index.html");
  const html = await readFile(filename, "utf8");
  assert(html.includes('rel="canonical"'), `Missing canonical: ${nav.href}`);
  assert(html.includes(`${origin}${nav.href}`), `Incorrect canonical: ${nav.href}`);
  const links = [...html.matchAll(/href="([^"#?]+)(?:[?#][^"]*)?"/g)].map(m => m[1]);
  for (const link of links.filter(l => l.startsWith("/") && !l.startsWith("//"))) {
    const target = path.join("out", decodeURIComponent(link), link.endsWith("/") ? "index.html" : "");
    await stat(target).catch(() => { throw new Error(`Broken internal link ${link} on ${nav.href}`); });
  }
}
for (const required of ["404.html", "sitemap.xml", "robots.txt", "_headers", p.profile.resumeUrl.slice(1), ...Object.keys(p.pages).map(key => `og/${key}.png`)]) await stat(path.join("out", required));
for (const draft of drafts) assert(!files.some(f => f.includes(draft.slug)), `Draft route exported: ${draft.slug}`);
console.log(`PASS: ${files.length} exported files scanned; all navigation links, metadata assets, resume, and draft exclusions verified.`);
