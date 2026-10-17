"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import type { Project, SkillCategory } from "@/content/portfolio";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type FilterCopy = Record<string, string>;
export function SkillsExplorer({ categories, copy }: { categories: SkillCategory[]; copy: FilterCopy }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState<string[]>([]);
  const matches = useMemo(() => categories.filter(c => category === "all" || c.id === category).map(c => ({ ...c, skills: c.skills.filter(skill => `${skill} ${c.name}`.toLowerCase().includes(query.trim().toLowerCase())) })).filter(c => c.skills.length), [categories, query, category]);
  const count = matches.reduce((total, c) => total + c.skills.length, 0);
  return <div className="explorer">
    <div className="filter-bar"><div className="search-field"><Search size={19} aria-hidden="true" /><label className="sr-only" htmlFor="skill-search">{copy.search}</label><Input id="skill-search" value={query} onChange={e => setQuery(e.target.value)} placeholder={copy.searchPlaceholder} /></div><div className="select-wrap"><SlidersHorizontal size={16} aria-hidden="true" /><label className="sr-only" htmlFor="skill-category">{copy.category}</label><select id="skill-category" value={category} onChange={e => setCategory(e.target.value)}><option value="all">{copy.all}</option>{categories.map(c => <option value={c.id} key={c.id}>{c.shortName}</option>)}</select></div></div>
    <div className="filter-chips" role="group" aria-label={copy.category}><button className={category === "all" ? "chip active" : "chip"} aria-pressed={category === "all"} onClick={() => setCategory("all")}>{copy.all}</button>{categories.map(c => <button key={c.id} className={category === c.id ? "chip active" : "chip"} aria-pressed={category === c.id} onClick={() => setCategory(c.id)}>{c.shortName}</button>)}</div>
    <p className="results-label" role="status">{count} {copy.result}</p>
    {matches.length ? <div className="skill-grid">{matches.map((c, index) => {
      const isOpen = Boolean(query.trim()) || expanded.includes(c.id); const visible = isOpen ? c.skills : c.skills.slice(0, 6);
      return <article className="skill-card" id={c.id} key={c.id}><div className="skill-card-heading"><span className="mono accent">{String(index + 1).padStart(2, "0")}</span><span className="mono muted">{c.skills.length}</span></div><h2>{c.name}</h2><p>{c.description}</p><ul className="tags" id={`skills-${c.id}`}>{visible.map(s => <li key={s}>{s}</li>)}</ul>{c.skills.length > 6 && !query.trim() && <button className="text-action expand-button" aria-expanded={isOpen} aria-controls={`skills-${c.id}`} onClick={() => setExpanded(previous => isOpen ? previous.filter(id => id !== c.id) : [...previous, c.id])}>{isOpen ? copy.collapse : `${copy.expand} (+${c.skills.length - 6})`}<ChevronDown size={15} className={isOpen ? "rotated" : ""} /></button>}</article>;
    })}</div> : <div className="empty-state"><Search size={32} /><h2>{copy.noResults}</h2><p>{copy.noResultsDetail}</p><Button variant="outline" onClick={() => { setQuery(""); setCategory("all"); }}>{copy.reset}</Button></div>}
  </div>;
}
export function ProjectExplorer({ projects, categories, copy }: { projects: Project[]; categories: string[]; copy: FilterCopy }) {
  const [category, setCategory] = useState("all"); const [technology, setTechnology] = useState("all");
  const technologies = [...new Set(projects.flatMap(p => p.technologies))].sort();
  const filtered = projects.filter(p => (category === "all" || p.categories.includes(category)) && (technology === "all" || p.technologies.includes(technology)));
  if (!projects.length) return null;
  return <><div className="filter-chips" role="group" aria-label={copy.projectFilter}><button className={category === "all" ? "chip active" : "chip"} aria-pressed={category === "all"} onClick={() => setCategory("all")}>{copy.allProjects}</button>{categories.map(c => <button key={c} className={category === c ? "chip active" : "chip"} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}</div><div className="project-technology"><label htmlFor="project-technology">{copy.technologyFilter}</label><select id="project-technology" value={technology} onChange={e => setTechnology(e.target.value)}><option value="all">{copy.allTechnologies}</option>{technologies.map(t => <option key={t}>{t}</option>)}</select></div><div aria-live="polite">{filtered.length ? <div className="skill-grid">{filtered.map(p => <article className="skill-card" key={p.slug}><span className="eyebrow">{p.categories.join(" / ")}</span><h2><Link href={`/projects/${p.slug}/`}>{p.title}</Link></h2><p>{p.summary}</p><ul className="tags">{p.technologies.map(t => <li key={t}>{t}</li>)}</ul><Link className="text-action" href={`/projects/${p.slug}/`}>{copy.readCase}<ArrowUpRight size={16} /></Link></article>)}</div> : <div className="empty-state"><p>{copy.projectNoResults}</p><Button variant="outline" onClick={() => { setCategory("all"); setTechnology("all"); }}>{copy.reset}</Button></div>}</div></>;
}
