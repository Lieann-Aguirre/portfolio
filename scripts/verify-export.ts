import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { portfolio as p, publishedWorkExamples } from "../content/portfolio";
async function walk(dir: string): Promise<string[]> { const files = await readdir(dir, { withFileTypes: true }); return (await Promise.all(files.map(f => f.isDirectory() ? walk(path.join(dir, f.name)) : [path.join(dir, f.name)]))).flat(); }
const files = await walk("out");
const origin = (process.env.SITE_URL || p.seo.siteUrl).replace(/\/$/, "");
const drafts = p.projects.filter(project => project.status === "draft");
const forbidden = [...drafts.flatMap(project => [project.slug, project.title, project.summary, project.problem ?? "", ...(project.implementation ?? []), ...(project.results ?? [])]), "Zuitt", "WEB DEVELOPMENT TRAINING", "A foundation in how the web works.", "qa-fixture", "QA Fixture", "Temporary filter verification", "[ADD", "[X%]", "[X+]", "20%–40%", "5%–15%", "90%+", "below 2%"] .filter(Boolean);
forbidden.push("Networking, DNS", "VPN Administration", "VPN Management", "NordVPN", "VPNs");
forbidden.push("lieannaguirre@gmail.com", "September 2021 to May 2025", "Sep 2021");
forbidden.push(...p.workExamples.filter(example => example.status === "draft").flatMap(example => [example.id, example.title]));
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
for (const platform of p.platforms) await stat(path.join("out", platform.icon));
for (const asset of [p.brand.dark, p.brand.light, p.brand.favicon, p.brand.appleIcon, "/favicon.ico"]) await stat(path.join("out", asset));
for (const route of ["", "experience"]) {
  const html = await readFile(path.join("out", route, "index.html"), "utf8");
  for (const role of p.experience) assert(html.includes(role.company) && html.includes(role.dates), `Missing experience entry on ${route || "home"}: ${role.company}`);
  assert(html.includes(p.contact.email), `Missing current contact email on ${route || "home"}`);
}
const evidence = publishedWorkExamples();
for (const category of p.skills) {
  const selected = evidence.find(example => example.id === category.featuredExampleId);
  assert(selected?.categories.includes(category.id), `Invalid representative category screenshot: ${category.id}`);
}
assert.equal(new Set(p.experience.map(role => role.id)).size, p.experience.length, "Experience IDs must be unique");
const evidenceFiles = files.filter(file => file.replaceAll("\\", "/").startsWith("out/work-examples/"));
assert.equal(evidenceFiles.length, new Set(evidence.map(example => example.image)).size, "Unexpected work-example asset exported");
const skillIds = new Set(p.skills.flatMap(category => category.skills.map(skill => skill.id)));
assert.equal(skillIds.size, p.skills.flatMap(category => category.skills).length, "Skill IDs must be unique");
for (const example of evidence) {
  assert(example.tool && example.title && example.alt && example.caption, `Missing evidence labels: ${example.id}`);
  assert(example.width > 0 && example.height > 0, `Missing image dimensions: ${example.id}`);
  assert(example.skillIds.every(id => skillIds.has(id)), `Invalid skill reference: ${example.id}`);
  await stat(path.join("out", example.image));
}
assert(!files.some(file => /\.(mp4|mov|webm|zip)$/i.test(file)), "Unexpected source archive or media exported");
for (const route of ["about", "skills"]) {
  const html = await readFile(path.join("out", route, "index.html"), "utf8");
  assert.equal((html.match(/class="review-card /g) ?? []).length, p.reviews.length, `Missing review cards on ${route}`);
  for (const rating of new Set(p.reviews.map(review => review.rating))) {
    const label = `aria-label="${rating.toFixed(1)} ${p.feedback.ratingScale}"`;
    assert.equal(html.split(label).length - 1, p.reviews.filter(review => review.rating === rating).length, `Missing accessible ratings on ${route}`);
  }
}
console.log(`PASS: ${files.length} exported files scanned; all navigation links, metadata assets, resume, and draft exclusions verified.`);
