import type { MetadataRoute } from "next";
import { portfolio as p, publishedProjects } from "@/content/portfolio";
import { siteUrl } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [...p.navigation.map(n => ({ url: `${siteUrl()}${n.href}` })), ...publishedProjects().map(p => ({ url: `${siteUrl()}/projects/${p.slug}/` }))]; }
