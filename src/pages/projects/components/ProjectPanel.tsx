import type { MyProject } from "../../../utils/interfaces";

interface ProjectPanelProps {
  project: MyProject;
}

export function ProjectPanel({ project }: ProjectPanelProps) {
  return (
    <div className="flex gap-5">
      <div className="w-150 h-100 bg-gray-300 p-2 rounded-md shadow-md">
        <div className="w-full text-2xl font-semibold">{project.name}</div>
        <div>{project.description}</div>
      </div>
    </div>
  );
}
