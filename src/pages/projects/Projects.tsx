import projects from "../../data/my-projects.json";
import { ProjectPanel } from "./components";

export function Projects() {
  return (
    <>
      <div className="flex flex-wrap gap-20 h-full overflow-y-auto">
        {projects.map((project) => (
          <ProjectPanel project={project} />
        ))}
      </div>
    </>
  );
}
