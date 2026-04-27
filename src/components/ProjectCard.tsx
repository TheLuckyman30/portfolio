import { Chip, findIcon } from "./common-ui";
import type { MyProject } from "../utils";

interface ProjectCardProps {
  project: MyProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const showLinks = project.githubLink !== "" || project.siteLink !== "";

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
      {showLinks && (
        <div className="flex items-center gap-5 p-2 border-t border-gray-300 bg-gray-50">
          {project.githubLink !== "" && (
            <a href={project.githubLink} target="_blank">
              {findIcon("github", "lg")}
            </a>
          )}
          {project.siteLink !== "" && (
            <a
              href={project.siteLink}
              target="_blank"
              className="text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
