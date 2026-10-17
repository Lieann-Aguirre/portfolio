import { portfolio } from "../content/portfolio";
const value = process.env.SITE_URL || portfolio.seo.siteUrl;
try {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.hostname === "localhost" || url.hostname.endsWith(".example") || url.pathname !== "/" || url.search || url.hash) throw new Error();
  console.log(`Production canonical origin: ${url.origin}`);
} catch { throw new Error("Set portfolio.seo.siteUrl or SITE_URL to your production https://custom-domain or https://project.pages.dev origin before building."); }
