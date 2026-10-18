/** Update the supplied PDF using approved central contact and experience data. */
import { mkdir, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { portfolio as p } from "../content/portfolio";
const source = process.argv[2];
if (!source) throw new Error("Usage: npx tsx scripts/update-resume.ts <source.pdf>");
await mkdir("tmp/resume-update", { recursive: true });
const content = "tmp/resume-update/content.json";
await writeFile(content, JSON.stringify({ email: p.contact.email, website: p.seo.siteUrl, linkedIn: p.contact.social.find(link => link.label === "LinkedIn")?.url, experience: p.experience }));
const result = spawnSync(process.env.PYTHON_EXECUTABLE || "python", ["scripts/prepare-resume.py", source, "--content", content, "--output", `public${p.profile.resumeUrl}`], { stdio: "inherit", windowsHide: true });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
