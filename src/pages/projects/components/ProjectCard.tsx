import type { MyProject } from "../../../utils/interfaces";
import pic from "../../../assets/images/test.png";

interface ProjectPanelProps {
  project: MyProject;
}

export function ProjectCard({ project }: ProjectPanelProps) {
  return (
    <div className="flex flex-col w-150 min-h-200 border border-gray-300 rounded-md shadow-md overflow-hidden">
      <div
        className="w-full h-100 bg-cover"
        style={{ backgroundImage: `url(${pic})` }}
      />
      <div className="flex flex-col w-full grow">
        <div className="p-2 font-semibold text-xl text-gray-700 border-b border-gray-300 bg-gray-50">
          {project.name}
        </div>
        <div className="p-2 grow">{project.description}</div>
        <div className="flex flex-wrap gap-2 p-2">
          {project.techUsed.map((tech) => (
            <div className="min-w-24 p-1 text-sm bg-gray-50 border border-gray-300 rounded-md text-gray-700 text-center">
              {tech}
            </div>
          ))}
        </div>
        <div className="p-2 border-t border-gray-300 bg-gray-50">
          Links here
        </div>
      </div>
    </div>
  );
}
