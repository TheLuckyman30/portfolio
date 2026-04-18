import projects from "../../data/my-projects.json";
import { ProjectCard } from "./components";

export function Projects() {
  return (
    <>
      <div className="flex justify-center h-full w-full overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
