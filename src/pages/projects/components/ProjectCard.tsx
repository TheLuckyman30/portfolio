import type { MyProject } from "../../../utils/interfaces";
import pic from "../../../assets/images/test.png";

interface ProjectPanelProps {
  project: MyProject;
}

export function ProjectCard({ project }: ProjectPanelProps) {
  return (
    <div className="flex flex-col w-100 min-h-100 border border-gray-300 rounded-md shadow-md overflow-hidden">
      <div className="w-full h-40" style={{ backgroundImage: `url(${pic})` }} />
      <div className="p-2 text-xl text-gray-700">{project.name}</div>
      <div className="p-2 px-5 grow text-sm">{project.description}</div>
      <div className="flex flex-wrap gap-2 p-2">
        {project.techUsed.map((tech) => (
          <div className="p-1 text-xs bg-gray-50 border border-gray-300 rounded-md text-gray-700 text-center">
            {tech}
          </div>
        ))}
      </div>
      <div className="p-2 border-t border-gray-300 bg-gray-50">Links here</div>
    </div>
  );
}
