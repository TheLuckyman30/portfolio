import type { MyProject } from "../../../utils/interfaces";

interface ProjectCardProps {
  project: MyProject;
  setSelectedProject: (newProj: MyProject) => void;
}

export function ProjectCard({ project, setSelectedProject }: ProjectCardProps) {
  return (
    <div
      onClick={() => setSelectedProject(project)}
      className="bg-black/10 w-65 h-65 p-2 rounded-md hover:scale-105 duration-75 cursor-pointer"
    >
      <div className="font-semibold">{project.name}</div>
    </div>
  );
}
