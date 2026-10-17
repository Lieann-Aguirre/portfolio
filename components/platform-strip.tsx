"use client";
import { useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import type { Platform } from "@/content/portfolio";
import { Button } from "@/components/ui/button";

export function PlatformStrip({ platforms, label, copy }: {
  platforms: Platform[]; label: string;
  copy: { pause: string; play: string; paused: string; playing: string };
}) {
  const [paused, setPaused] = useState(false);
  return (
    <section className="platform-showcase container" aria-label={label}>
      <div className="platform-strip-heading"><span className="mono">{label}</span><Button variant="ghost" size="icon" className="platform-motion-control" aria-controls="platform-track" aria-label={paused ? copy.play : copy.pause} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}</Button><span className="sr-only" role="status">{paused ? copy.paused : copy.playing}</span></div>
      <div className="platform-window">
        <div id="platform-track" className="platform-track" data-paused={paused}>
          {[false, true].map(duplicate => <ul className="platform-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>{platforms.map(platform => <li className="platform-item" key={platform.name}><span className="platform-icon"><Image src={platform.icon} alt="" width={25} height={25} loading="eager" /></span><span>{platform.name}</span></li>)}</ul>)}
        </div>
      </div>
    </section>
  );
}
