import { useState } from "react";
import projects from "../../data/my-projects.json";
import { ProjectCard } from "./components";
import { Input } from "../../components";
import { filterProjects } from "../../utils";

export function Projects() {
  const [searchValue, setSearchValue] = useState<string>("");
  const filteredProjects = filterProjects(projects, searchValue);

  return (
    <section className="min-h-screen pt-20 p-5">
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        <h1 className="text-blue-500 font-bold text-4xl">All Projects</h1>
        <div className="flex w-fit mb-5">
          <Input
            placeholder="Search"
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <section className="flex w-full justify-center items-center">
        {filteredProjects.length !== 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-20">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} />
            ))}
          </div>
        )}
        {filteredProjects.length === 0 && (
          <span className=" text-gray-500">No Projects Found!</span>
        )}
      </section>
    </section>
  );
}
