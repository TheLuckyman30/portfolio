import { useRef, useState } from "react";
import { Input, ProjectCard } from "../components";
import { filterProjects, useAnimation } from "@utils";
import projects from "../data/my-projects.json";

export function Projects() {
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredProjects = filterProjects(projects, searchValue);
  const ref = useRef<HTMLDivElement | null>(null);
  useAnimation(ref, "animate-slide-in-left");

  return (
    <div className="flex flex-col gap-5">
      <div ref={ref} className="flex w-fit opacity-0">
        <Input
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-10 justify-items-center lg:justify-items-start ">
        {filteredProjects.map((project) => {
          return (
            <div key={project.name} className="even:justify-self-end">
              <ProjectCard project={project} />
            </div>
          );
        })}
        {!filteredProjects.length && (
          <p className="w-full text-gray-700">No Projects Found!</p>
        )}
      </div>
    </div>
  );
}
