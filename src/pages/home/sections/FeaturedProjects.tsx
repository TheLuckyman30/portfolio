import { ProjectCard } from "../../projects/components";
import { Input } from "../../../components";
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
      <div className="flex flex-wrap justify-between gap-15">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} />
        ))}
        {!filteredProjects.length && (
          <p className="w-full text-gray-700">No Projects Found!</p>
        )}
      </div>
    </div>
  );
}
