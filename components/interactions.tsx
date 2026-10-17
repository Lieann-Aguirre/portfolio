"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUp, Check, Copy, Download, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ label }: { label: string }) {
  const [light, setLight] = useState(false);
  useEffect(() => { setLight(document.documentElement.dataset.theme === "light"); }, []);
  function toggle() { const next = !light; setLight(next); document.documentElement.dataset.theme = next ? "light" : "dark"; try { localStorage.setItem("portfolio-theme", next ? "light" : "dark"); } catch {} }
  return <Button variant="ghost" size="icon" onClick={toggle} aria-label={label} aria-pressed={light}>{light ? <Moon size={18} /> : <Sun size={18} />}</Button>;
}
export function Navigation({ items, menuLabel, resume, resumeUrl }: { items: { label: string; href: string }[]; menuLabel: string; resume: string; resumeUrl: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
      if (event.key === "Tab") {
        const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links?.length) return;
        const first = links[0]; const last = links[links.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); trigger.current?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); trigger.current?.focus(); }
        else if (document.activeElement === trigger.current) { event.preventDefault(); (event.shiftKey ? last : first).focus(); }
      }
    }
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, [open]);
  return <>
    <nav className="desktop-nav" aria-label="Main">{items.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href || pathname + "/" === item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
    <button ref={trigger} className="mobile-toggle button button-ghost button-icon" aria-label={menuLabel} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    {open && <div className="mobile-panel" id="mobile-navigation" ref={panel}><nav aria-label="Mobile">{items.map(item => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} aria-current={pathname === item.href || pathname + "/" === item.href ? "page" : undefined}>{item.label}</Link>)}<a href={resumeUrl} download><Download size={16} />{resume}</a></nav></div>}
  </>;
}
export function CopyEmail({ email, label, success, failure }: { email: string; label: string; success: string; failure: string }) {
  const [status, setStatus] = useState("");
  useEffect(() => { if (!status) return; const id = setTimeout(() => setStatus(""), 3500); return () => clearTimeout(id); }, [status]);
  async function copy() { try { await navigator.clipboard.writeText(email); setStatus(success); } catch { setStatus(failure); } }
  return <div className="copy-wrap"><Button variant="outline" size="icon" aria-label={label} onClick={copy}>{status === success ? <Check size={17} /> : <Copy size={17} />}</Button><span className="copy-status" role="status">{status}</span></div>;
}
export function BackToTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const update = () => setVisible(window.scrollY > 650); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return visible ? <Button className="back-top" variant="outline" size="icon" aria-label={label} onClick={() => window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}><ArrowUp size={18} /></Button> : null;
}
