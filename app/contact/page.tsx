import { PageHeading, ContactSection } from "@/components/sections";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor("contact");
export default function ContactPage() { return <><div className="container"><PageHeading page="contact" /></div><ContactSection standalone /></>; }
