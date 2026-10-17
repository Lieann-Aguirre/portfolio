import { ClientFeedback } from "@/components/client-feedback";
import { portfolio as p, publishedWorkExamples, type SkillCategory, type SkillItem } from "@/content/portfolio";
import { PageHeading } from "@/components/sections";
import { SkillsExplorer } from "@/components/filters";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor("skills");
export default function SkillsPage() {
  const examples = publishedWorkExamples();
  const publishedIds = new Set(examples.map(example => example.id));
  const categories = p.skills.map((category: SkillCategory) => ({ ...category, featuredExampleId: category.featuredExampleId && publishedIds.has(category.featuredExampleId) ? category.featuredExampleId : undefined, skills: category.skills.map((skill: SkillItem) => ({
    ...skill, featuredExampleId: skill.featuredExampleId && publishedIds.has(skill.featuredExampleId) ? skill.featuredExampleId : undefined,
    exampleIds: (skill.exampleIds ?? []).filter(id => publishedIds.has(id)),
  })) }));
  return <><section className="container"><PageHeading page="skills" /></section><SkillsExplorer categories={categories} copy={p.ui} examples={examples} proofCopy={p.skillEvidence} overviewFeedback={<ClientFeedback />} /></>;
}
