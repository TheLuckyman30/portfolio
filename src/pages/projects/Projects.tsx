import { useState } from "react";
import projects from "../../data/my-projects.json";
import { ProjectCard } from "./components";
import { Input } from "../../components";
import { filterProjects } from "../../utils";

export function Projects() {
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredProjects = filterProjects(projects, searchValue);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen pt-20 gap-10">
      <div className="flex w-fit">
        <Input
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-20">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}
