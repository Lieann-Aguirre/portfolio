import { ExperienceTimeline, PageHeading, ContactSection, ResumeButton } from "@/components/sections";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor("experience");
export default function ExperiencePage() { return <><section className="container"><PageHeading page="experience" /><div className="page-resume"><ResumeButton /></div><ExperienceTimeline standalone /></section><ContactSection /></>; }
