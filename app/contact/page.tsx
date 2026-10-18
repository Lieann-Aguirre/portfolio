import { PageHeading, ContactSection } from "@/components/sections";
import { metadataFor } from "@/lib/seo";
import { BookingSection } from "@/components/booking-section";
import { portfolio as p } from "@/content/portfolio";
export const metadata = metadataFor("contact");
export default function ContactPage() { return <><div className="container"><PageHeading page="contact" /></div><ContactSection standalone /><BookingSection booking={p.contact.booking} /></>; }
