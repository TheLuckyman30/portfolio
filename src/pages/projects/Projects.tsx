import projects from "../../data/my-projects.json";
import { ProjectCard } from "./components";

export function Projects() {
  return (
    <section className="flex justify-center items-center min-h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-20">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}
