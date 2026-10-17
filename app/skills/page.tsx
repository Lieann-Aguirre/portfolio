import { portfolio as p } from "@/content/portfolio";
import { PageHeading, Training } from "@/components/sections";
import { SkillsExplorer } from "@/components/filters";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor("skills");
export default function SkillsPage() { return <><section className="container"><PageHeading page="skills" /><SkillsExplorer categories={p.skills} copy={p.ui} /></section><Training /></>; }
