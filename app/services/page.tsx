import { PageHeading, Services, ContactSection } from "@/components/sections";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor("services");
export default function ServicesPage() { return <><section className="container"><PageHeading page="services" /><Services /></section><ContactSection /></>; }
