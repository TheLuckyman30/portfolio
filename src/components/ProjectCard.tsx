import { Chip, findIcon } from "./common-ui";
import type { MyProject } from "../utils";

interface ProjectCardProps {
  project: MyProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-full sm:w-70 lg:w-100 h-full min-h-100 border border-gray-300 rounded-md shadow-md overflow-hidden">
      <div
        className="w-full h-40 bg-cover"
        style={{ backgroundImage: `url(${project.imagePath})` }}
      />
      <div className="p-2 text-xl text-gray-700">{project.name}</div>
      <div className="p-2 px-5 grow text-sm">{project.shortDesc}</div>
      <div className="flex flex-wrap gap-2 p-2">
        {project.techUsed.map((tech) => (
          <Chip>
            <div className="flex items-center gap-2">
              {findIcon(tech, "sm")}
              {tech}
            </div>
          </Chip>
        ))}
      </div>
      <div className="p-2 border-t border-gray-300 bg-gray-50">Links here</div>
    </div>
  );
}
