"use client";
import { useEffect, useRef, useState } from "react";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
type BookingCopy = { url: string; heading: string; description: string; action: string; externalAction: string; notice: string; iframeTitle: string };
export function BookingSection({ booking }: { booking: BookingCopy }) {
  const [loaded, setLoaded] = useState(false);
  const calendar = useRef<HTMLIFrameElement>(null);
  useEffect(() => { if (loaded) calendar.current?.focus({ preventScroll: true }); }, [loaded]);
  return <section id="schedule" className="container section booking-section" aria-labelledby="booking-title">
    <h2 id="booking-title">{booking.heading}</h2><p>{booking.description}</p>
    <p className="booking-notice">{booking.notice}</p>
    <div className="booking-actions">{!loaded && <Button type="button" aria-controls="booking-calendar" onClick={() => setLoaded(true)}><CalendarDays size={17} aria-hidden="true" />{booking.action}</Button>}
      <a className="text-action" href={booking.url} target="_blank" rel="noopener noreferrer">{booking.externalAction}<ArrowUpRight size={16} aria-hidden="true" /></a></div>
    <div id="booking-calendar">{loaded && <iframe ref={calendar} src={booking.url} title={booking.iframeTitle} className="booking-frame" referrerPolicy="strict-origin-when-cross-origin" />}</div>
  </section>;
}
