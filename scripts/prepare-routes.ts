// Next.js static export rejects empty generateStaticParams arrays.
// Materialize the real dynamic route only when an approved project exists.
import { mkdir, readFile, writeFile, rm, rmdir } from "node:fs/promises";
import { publishedProjects } from "../content/portfolio";
const directory = "app/projects/[slug]";
const filename = `${directory}/page.tsx`;
if (publishedProjects().length) {
  await mkdir(directory, { recursive: true });
  await writeFile(filename, await readFile("templates/case-study-page.tsx", "utf8"));
  console.log("Prepared published case-study routes.");
} else {
  await rm(filename, { force: true });
  await rmdir(directory).catch((error: NodeJS.ErrnoException) => { if (error.code !== "ENOENT" && error.code !== "ENOTEMPTY") throw error; });
  console.log("No approved projects: no case-study routes generated.");
}
