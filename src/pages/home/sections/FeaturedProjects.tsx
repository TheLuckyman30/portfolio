import { Input, ProjectCard } from "../../../components";
import { useState } from "react";
import { filterProjects } from "../../../utils";
import projects from "../../../data/my-projects.json";

export function FeaturedProjects() {
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredProjects = filterProjects(projects, searchValue);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-fit">
        <Input
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-10 justify-items-center lg:justify-items-start ">
        {filteredProjects.map((project) => {
          if (!project.featured) return null;

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
