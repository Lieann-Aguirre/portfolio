import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { portfolio as p, publishedProjects, isComplete } from "@/content/portfolio";
import { siteUrl } from "@/lib/seo";
export const dynamicParams = false;
export const dynamic = "force-static";
export function generateStaticParams() { return publishedProjects().map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = publishedProjects().find(project => project.slug === slug); if (!project) return {};
  const title = `${project.title} | ${p.profile.name}`; const url = `${siteUrl()}/projects/${slug}/`;
  return { title, description: project.summary, alternates: { canonical: url }, openGraph: { title, description: project.summary, url, images: [`${siteUrl()}/og/projects.png`] } };
}
export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = publishedProjects().find(project => project.slug === slug); if (!project) notFound();
  return <article className="container case-study"><Link className="text-action" href="/projects/"><ArrowLeft size={16} />{p.ui.projectsBack}</Link><div className="page-heading"><p className="eyebrow">{project.categories.join(" / ")}</p><h1>{project.title}</h1><p>{project.summary}</p></div><ul className="tags">{project.technologies.map(t => <li key={t}>{t}</li>)}</ul>{isComplete(project.role) && <section><h2>{p.ui.roleLabel}</h2><p>{project.role}</p></section>}{isComplete(project.problem) && <section><h2>{p.ui.problemLabel}</h2><p>{project.problem}</p></section>}{project.implementation?.length && <section><h2>{p.ui.implementationLabel}</h2><ul className="responsibilities">{project.implementation.filter(isComplete).map(s => <li key={s}>{s}</li>)}</ul></section>}{project.results?.length && <section><h2>{p.ui.resultsLabel}</h2><ul className="responsibilities">{project.results.filter(isComplete).map(s => <li key={s}>{s}</li>)}</ul></section>}{project.metrics?.filter(m => m.verified && isComplete(m.value)).map(m => <p key={m.label}><strong>{m.value}</strong> {m.label}</p>)}{project.screenshots?.filter(s => isComplete(s.src)).map(s => <Image key={s.src} src={s.src} alt={s.alt} width={1200} height={750} className="case-image" />)}<div className="hero-actions">{isComplete(project.githubUrl) && <a className="text-action" href={project.githubUrl}>{p.contact.social[1].label}<ArrowUpRight size={16} /></a>}{isComplete(project.demoUrl) && <a className="text-action" href={project.demoUrl}>{p.ui.readCase}<ArrowUpRight size={16} /></a>}</div></article>;
}
