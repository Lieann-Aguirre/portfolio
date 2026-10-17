"use client";
import { createContext, useContext, useEffect, useId, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Expand, X, ZoomIn, ZoomOut } from "lucide-react";
import type { WorkExample } from "@/content/portfolio";
import { Button } from "@/components/ui/button";

type Copy = Record<string, string>;
const PreviewContext = createContext<{ activeId: string | null; activate: (id: string) => void } | null>(null);
export function SkillPreviewScope({ children }: { children: ReactNode }) {
  const [activeId, activate] = useState<string | null>(null);
  const value = useMemo(() => ({ activeId, activate }), [activeId]);
  return <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>;
}
/** Exactly one image; no collection navigation or thumbnail strip. */
export function ScreenshotViewer({ example, onClose, copy }: { example: WorkExample; onClose: () => void; copy: Copy }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    const node = dialog.current, previous = document.activeElement as HTMLElement | null;
    node?.showModal(); const overflow = document.body.style.overflow; document.body.style.overflow = "hidden";
    return () => { node?.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={dialog} className="screenshot-viewer single-screenshot-viewer" aria-labelledby="screenshot-title" aria-describedby="screenshot-caption"
    onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={event => {
      if (event.key !== "Tab") return;
      const controls = dialog.current?.querySelectorAll<HTMLElement>("button:not(:disabled), [tabindex='0']");
      if (!controls?.length) return;
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }}>
    <div className="viewer-shell"><header className="viewer-header"><span className="eyebrow">{copy.sourceNote}</span><Button variant="ghost" size="icon" aria-label={copy.closeScreenshot} onClick={onClose}><X size={22} aria-hidden="true" /></Button></header>
      <div className={`viewer-stage ${zoom ? "is-zoomed" : ""}`} tabIndex={zoom ? 0 : undefined}><Image src={example.image} alt={example.alt} width={example.width} height={example.height} sizes="95vw" priority /></div>
      <div className="viewer-example-heading"><span className="evidence-tool">{example.tool}</span><h2 id="screenshot-title">{example.title}</h2></div>
      <div className="viewer-toolbar"><p id="screenshot-caption" className="viewer-caption">{example.caption}</p><Button variant="ghost" size="icon" aria-label={zoom ? copy.zoomOut : copy.zoomIn} aria-pressed={zoom} onClick={() => setZoom(value => !value)}>{zoom ? <ZoomOut size={18} /> : <ZoomIn size={18} />}</Button></div>
    </div>
  </dialog>;
}
export function SkillPreview({ label, example, onOpen, copy, active = true, ownerId, onPreviewState }: {
  label: string; example: WorkExample; onOpen: () => void; copy: Copy; active?: boolean; ownerId?: string;
  onPreviewState?: (id: string, open: boolean) => void;
}) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const id = useId();
  const scope = useContext(PreviewContext);
  const host = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const preview = useRef<HTMLSpanElement>(null);
  const visible = active && show && !dismissed && (!scope || scope.activeId === id);
  useEffect(() => { if (!active) setShow(false); }, [active]);
  useEffect(() => { onPreviewState?.(id, visible); return () => onPreviewState?.(id, false); }, [id, visible, onPreviewState]);
  useLayoutEffect(() => {
    if (!visible) return;
    function place() {
      if (!host.current || !preview.current) return;
      const anchor = host.current.getBoundingClientRect(), node = preview.current;
      const width = node.offsetWidth, height = node.offsetHeight;
      const left = Math.max(16, Math.min(anchor.left, innerWidth - width - 16));
      const top = innerWidth <= 640 ? innerHeight - height - 20 : anchor.top - height - 10 >= 96 ? anchor.top - height - 10 : Math.min(anchor.bottom + 10, innerHeight - height - 16);
      node.style.left = `${left}px`; node.style.top = `${Math.max(16, top)}px`;
    }
    place(); window.addEventListener("resize", place); window.addEventListener("scroll", place, true);
    return () => { window.removeEventListener("resize", place); window.removeEventListener("scroll", place, true); };
  }, [visible]);
  const clear = () => { if (timer.current) clearTimeout(timer.current); };
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  function reveal() { if (active && !dismissed) { scope?.activate(id); setShow(true); } }
  function openPreview() { clear(); if (matchMedia("(hover: hover)").matches) reveal(); }
  function closePreview() { clear(); timer.current = setTimeout(() => { setShow(false); setDismissed(false); }, 180); }
  function openSelectedScreenshot() { host.current?.querySelector("button")?.focus(); setShow(false); onOpen(); }
  const first = example;
  return <span ref={host} className="skill-proof" onMouseEnter={openPreview} onMouseLeave={closePreview} onFocus={() => { clear(); reveal(); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget) && !preview.current?.contains(event.relatedTarget)) { setShow(false); setDismissed(false); } }} onKeyDown={event => { if (event.key === "Escape" && visible) { event.stopPropagation(); setShow(false); setDismissed(true); } }}>
    <button type="button" className="skill-evidence-button" aria-label={`${label}: ${copy.viewExamples}`} aria-haspopup="dialog" onClick={openSelectedScreenshot}>{label}<Expand size={11} aria-hidden="true" /></button>
    {visible && createPortal(<span ref={preview} className="skill-preview" data-preview-owner={ownerId} role="region" aria-label={copy.viewExamples} style={{ position: "fixed", bottom: "auto", left: 20, top: 20, transform: "none", zIndex: 70 }} onMouseEnter={clear} onMouseLeave={closePreview}>
      <Image src={first.image} alt={first.alt} width={first.width} height={first.height} sizes="280px" />
      <span className="evidence-tool">{first.tool}</span><span className="evidence-title">{first.title}</span>
      <button type="button" className="text-action" onClick={openSelectedScreenshot}>{copy.openScreenshot}<Expand size={13} aria-hidden="true" /></button>
    </span>, document.body)}
  </span>;
}

