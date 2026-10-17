import { portfolio as p, publishedProjects } from "@/content/portfolio";
import { PageHeading, ProjectsEmpty } from "@/components/sections";
import { ProjectExplorer } from "@/components/filters";
import { metadataFor } from "@/lib/seo";
export const metadata = metadataFor("projects");
export default function ProjectsPage() { const projects = publishedProjects(); return <section className="container projects-page"><PageHeading page="projects" />{projects.length ? <ProjectExplorer projects={projects} categories={p.projectCategories} copy={p.ui} /> : <ProjectsEmpty />}</section>; }
