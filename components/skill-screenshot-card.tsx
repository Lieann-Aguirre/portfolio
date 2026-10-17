"use client";
import { useCallback, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ImageIcon, RotateCcw } from "lucide-react";
import type { WorkExample } from "@/content/portfolio";

/** The front alone determines card height. The back contains exactly one selected image. */
export function SkillScreenshotCard({ id, name, example, copy, viewerActive, renderFront, onOpen }: {
  id: string; name: string; example?: WorkExample; copy: Record<string, string>; viewerActive: boolean;
  renderFront: (active: boolean, previewChanged: (id: string, open: boolean) => void, open: (example: WorkExample) => void) => ReactNode;
  onOpen: (example: WorkExample) => void;
}) {
  const [hovered, setHovered] = useState(false), [pinned, setPinned] = useState(false);
  const [focusedBack, setFocusedBack] = useState(false), [suppressed, setSuppressed] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const toggle = useRef<HTMLButtonElement>(null);
  const previewChanged = useCallback((key: string, open: boolean) => setPreviews(previous => open ? previous.includes(key) ? previous : [...previous, key] : previous.includes(key) ? previous.filter(value => value !== key) : previous), []);
  function openFront(selected: WorkExample) { setSuppressed(true); setPinned(false); onOpen(selected); }
  const flipped = Boolean(example) && !suppressed && !previews.length && (hovered || pinned || focusedBack || viewerActive);
  function back() { setPinned(false); setHovered(false); setFocusedBack(false); setSuppressed(true); toggle.current?.focus(); }
  if (!example) return <article className="skill-card" id={id}>{renderFront(true, previewChanged, onOpen)}</article>;
  return <article id={id} className={`skill-card screenshot-card ${flipped ? "is-flipped" : ""}`} aria-label={name}
    onPointerEnter={event => {
      // Keep direct interactions with the original skill labels available on the front.
      if ((event.target as HTMLElement).closest(".tags, .skill-card-actions, .screenshot-toggle") || event.currentTarget.contains(document.activeElement)) return;
      if (event.pointerType !== "touch" && matchMedia("(hover: hover)").matches) setHovered(true);
    }}
    onPointerLeave={() => { setHovered(false); if (!viewerActive) setSuppressed(false); }}
    onFocusCapture={event => { if ((event.target as HTMLElement).closest(".screenshot-back")) setFocusedBack(true); }}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget) && !viewerActive) setFocusedBack(false); }}
    onKeyDown={event => { if (event.key === "Escape" && flipped && !viewerActive) { event.stopPropagation(); back(); } }}>
    <button ref={toggle} type="button" className="screenshot-toggle" aria-expanded={flipped} aria-controls={`screenshot-${id}`} aria-label={`${flipped ? copy.backToSkills : copy.viewScreenshot}: ${name}`} onClick={() => { if (flipped) back(); else { setSuppressed(false); setPinned(true); } }}>{flipped ? <RotateCcw size={15} aria-hidden="true" /> : <ImageIcon size={15} aria-hidden="true" />}</button>
    <div className="screenshot-rotor">
      <div className="screenshot-front" aria-hidden={flipped} inert={flipped}>{renderFront(!flipped, previewChanged, openFront)}</div>
      <div id={`screenshot-${id}`} className="screenshot-back" aria-hidden={!flipped} inert={!flipped}>
        <h2 className="sr-only">{name}</h2>
        <button className="screenshot-feature-image" type="button" aria-label={`${copy.openScreenshot}: ${example.title}`} onClick={event => { event.currentTarget.focus(); setPinned(true); onOpen(example); }}><Image src={example.image} alt={example.alt} fill sizes="(max-width: 640px) 90vw, 600px" /></button>
        <div className="screenshot-feature-caption"><span className="evidence-tool">{example.tool}</span><h3>{example.title}</h3></div>
      </div>
    </div>
  </article>;
}
