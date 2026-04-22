import { ProjectCard } from "../../projects/components";
import projects from "../../../data/my-projects.json";

export function FeaturedProjects() {
  return (
    <div className="flex flex-wrap justify-around gap-15">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
