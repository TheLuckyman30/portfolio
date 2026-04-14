import projects from "../../data/my-projects.json";
import { ProjectCard } from "./components";

export function Projects() {
  return (
    <>
      <div className="flex justify-center h-full w-full overflow-y-auto">
        <div className="flex flex-wrap gap-20 w-[80%] justify-center">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
