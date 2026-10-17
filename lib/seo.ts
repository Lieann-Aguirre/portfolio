import type { Metadata } from "next";
import { portfolio as p } from "@/content/portfolio";
export function siteUrl() { return (process.env.SITE_URL || p.seo.siteUrl || "http://localhost:3000").replace(/\/$/, ""); }
export function metadataFor(page: keyof typeof p.pages): Metadata {
  const path = page === "home" ? "/" : `/${page}/`;
  const title = page === "home" ? p.seo.title : `${p.navigation.find(n => n.href === path)?.label ?? p.pages[page].title} | ${p.profile.name}`;
  const description = page === "home" ? p.seo.description : p.pages[page].description;
  const url = `${siteUrl()}${path}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "website", siteName: p.profile.name, locale: "en_US", images: [{ url: `${siteUrl()}/og/${page}.png`, width: 1200, height: 630, alt: title }] }, twitter: { card: "summary_large_image", title, description, images: [`${siteUrl()}/og/${page}.png`] } };
}
