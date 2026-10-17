import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio as p } from "@/content/portfolio";
import { Navigation, ThemeToggle, BackToTop } from "@/components/interactions";
import { ResumeButton } from "@/components/sections";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL(siteUrl()), title: p.seo.title, description: p.seo.description, icons: { icon: "/icon.svg" } };
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}`;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: p.profile.name, jobTitle: p.profile.title, description: p.seo.description, url: siteUrl(), email: p.contact.email, sameAs: p.contact.social.map(s => s.url), homeLocation: { "@type": "Place", name: p.profile.location } };
  return <html lang="en" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} /></head><body><a className="skip-link" href="#main-content">{p.ui.skip}</a><header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label={p.profile.name}><span className="brand-mark">{p.profile.initials}<span>.</span></span><span className="brand-name">{p.profile.name}</span></Link><Navigation items={p.navigation} menuLabel={p.ui.menu} resume={p.ui.resume} resumeUrl={p.profile.resumeUrl} /><div className="header-actions"><ThemeToggle label={p.ui.theme} /><div className="header-resume"><ResumeButton /></div></div></div></header><main id="main-content" tabIndex={-1}>{children}</main><footer className="site-footer"><div className="container"><div className="footer-main"><div><Link href="/" className="brand"><span className="brand-mark">{p.profile.initials}<span>.</span></span><span>{p.profile.name}</span></Link><p>{p.ui.footer}</p></div><div className="footer-links"><a href={`mailto:${p.contact.email}`}>{p.contact.email}<ArrowUpRight size={14} /></a>{p.contact.social.map(s => <a key={s.label} href={s.url} rel="noopener noreferrer" target="_blank">{s.label}<ArrowUpRight size={14} /></a>)}<a href={p.profile.resumeUrl} download>{p.ui.resume}<ArrowUpRight size={14} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {p.profile.name}. {p.ui.rights}</span><span>{p.ui.built}</span></div></div></footer><BackToTop label={p.ui.backTop} /></body></html>;
}
