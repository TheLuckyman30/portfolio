import { useRef } from "react";
import { Chip, findIcon } from "./common-ui";
import { useAnimation, type MyProject } from "@utils";

interface ProjectCardProps {
  project: MyProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useAnimation(ref, "animate-drop-in-delay");

  return (
    <div
      ref={ref}
      className="flex flex-col w-full sm:w-70 lg:w-100 h-full min-h-100 border border-gray-300 rounded-md shadow-md overflow-hidden hover:scale-103 duration-75 opacity-0"
    >
      <a
        className="flex flex-col h-full cursor-pointer"
        href={project.siteLink}
        target="_blank"
      >
        <div
          className="w-full h-40 bg-cover"
          style={{ backgroundImage: `url(${project.imagePath})` }}
        />
        <div className="p-2 text-xl text-gray-700">{project.name}</div>
        <div className="p-2 px-5 grow text-sm">{project.shortDesc}</div>
        <div className="flex flex-wrap gap-2 p-2">
          {project.techUsed.map((tech) => (
            <Chip key={tech}>
              <div className="flex items-center gap-2">
                {findIcon(tech, "sm")}
                {tech}
              </div>
            </Chip>
          ))}
        </div>
      </a>
      {project.githubLink !== "" && (
        <div className="flex items-center gap-5 p-2 border-t border-gray-300 bg-gray-50">
          {project.githubLink !== "" && (
            <a
              href={project.githubLink}
              target="_blank"
              className="hover:scale-105 duration-75"
            >
              {findIcon("github", "lg")}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
