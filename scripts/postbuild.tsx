/* eslint-disable @next/next/no-img-element -- ImageResponse renders static HTML, not Next Image components. */
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";
import { portfolio as p } from "../content/portfolio";
await mkdir("out/og", { recursive: true });
const logo = `data:image/png;base64,${(await readFile(`public${p.brand.dark}`)).toString("base64")}`;
for (const [key, page] of Object.entries(p.pages)) {
  const response = new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#080d17", display: "flex", flexDirection: "column", padding: "75px 80px", color: "#edf3fb", fontFamily: "sans-serif", borderBottom: "8px solid #63dce9" }}><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 35 }}><div style={{ display: "flex", color: "#63dce9", fontSize: 19, letterSpacing: 3 }}>{page.eyebrow}</div><img src={logo} alt={p.brand.alt} width={144} height={90} /></div><div style={{ fontSize: 72, fontWeight: 700, display: "flex", letterSpacing: -3 }}>{p.profile.name}</div><div style={{ display: "flex", fontSize: 30, color: "#a0aec1", marginTop: 22, maxWidth: 900 }}>{key === "home" ? p.profile.title : page.title}</div><div style={{ display: "flex", marginTop: "auto", fontSize: 19, color: "#63dce9" }}>{(process.env.SITE_URL || p.seo.siteUrl).replace("https://", "")} • {p.profile.location}</div></div>, { width: 1200, height: 630 });
  await writeFile(`out/og/${key}.png`, Buffer.from(await response.arrayBuffer()));
}
console.log("Generated 8 static Open Graph images.");
