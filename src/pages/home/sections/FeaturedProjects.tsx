import { ProjectCard } from "../../projects/components";
import { Input } from "../../../components";
import { useEffect, useState } from "react";
import projects from "../../../data/my-projects.json";
import { type MyProject } from "../../../utils/interfaces";

export function FeaturedProjects() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredProjects, setFilteredProjects] =
    useState<MyProject[]>(projects);

  useEffect(() => {
    const newProjects = projects.filter((project) => {
      if (!searchValue) {
        return project;
      }

      /// const description = project.description.toLowerCase(); Might still check description
      const techUsed = project.techUsed.join(",").toLowerCase();
      const title = project.name.toLowerCase();

      if (title.includes(searchValue) || techUsed.includes(searchValue)) {
        return project;
      }
    });

    setFilteredProjects(newProjects);
  }, [searchValue]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-fit">
        <Input
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value.toLowerCase().trim())}
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
