import type { MyProject } from "../../../utils/interfaces";
import { ProjectCard } from "./ProjectCard";

interface ListViewProps {
  myProjects: MyProject[];
  setSelectedProject: (newProj: MyProject) => void;
}

export function ListView({ myProjects, setSelectedProject }: ListViewProps) {
  return (
    <>
      <section className="p-2 flex gap-5 flex-wrap h-full">
        {myProjects.map((proj) => (
          <ProjectCard project={proj} setSelectedProject={setSelectedProject} />
        ))}
      </section>
    </>
  );
}
