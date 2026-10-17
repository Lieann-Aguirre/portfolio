import { About, ContactSection, PageHeading, Training } from "@/components/sections";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor("about");
export default function AboutPage() { return <><div className="container"><PageHeading page="about" /></div><About full /><Training /><ContactSection /></>; }
